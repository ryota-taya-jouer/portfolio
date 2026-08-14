// out/ の /resume ページをヘッドレス Chrome で PDF 化して public/resume.pdf に出力する。
// 使い方: npm run pdf（next build → PDF 生成の順に実行される）
// resume.md を更新したら再実行して public/resume.pdf をコミットし直すこと。
import { createServer } from "node:http";
import { copyFile, mkdtemp, readFile, rm, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { spawn } from "node:child_process";
import { tmpdir } from "node:os";
import path from "node:path";

const CHROME =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const root = path.join(process.cwd(), "out");
const pdfPath = path.join(process.cwd(), "public", "resume.pdf");

if (!existsSync(path.join(root, "resume.html"))) {
  console.error("out/resume.html がありません。先に next build を実行してください。");
  process.exit(1);
}
if (!existsSync(CHROME)) {
  console.error(`Google Chrome が見つかりません: ${CHROME}`);
  process.exit(1);
}

const MIME = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".woff2": "font/woff2",
  ".json": "application/json",
};

// out/ を配信する最小限のサーバー（/resume → resume.html の解決のみ対応）
const server = createServer(async (req, res) => {
  const pathname = decodeURIComponent(
    new URL(req.url, "http://localhost").pathname,
  );
  let file = path.join(root, pathname);
  if (pathname.endsWith("/")) file = path.join(file, "index.html");
  else if (!path.extname(file) && existsSync(`${file}.html`))
    file = `${file}.html`;
  try {
    const body = await readFile(file);
    res.setHeader(
      "content-type",
      MIME[path.extname(file)] ?? "application/octet-stream",
    );
    res.end(body);
  } catch {
    res.statusCode = 404;
    res.end("not found");
  }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const url = `http://127.0.0.1:${server.address().port}/resume`;

// 旧 PDF が残っていると下の「サイズ安定 = 完了」判定が誤爆するため必ず消してから生成する
await rm(pdfPath, { force: true });

// 起動中の Chrome とプロファイルが衝突しないよう使い捨ての user-data-dir を使う
const profile = await mkdtemp(path.join(tmpdir(), "resume-pdf-"));
const args = [
  "--headless",
  "--disable-gpu",
  "--no-first-run",
  // GoogleUpdater などの子プロセスが起動して待ち続けるのを防ぐ
  "--disable-component-update",
  "--disable-background-networking",
  `--user-data-dir=${profile}`,
  "--no-pdf-header-footer",
  `--print-to-pdf=${pdfPath}`,
  "--virtual-time-budget=10000",
  url,
];

// Chrome (macOS) は --print-to-pdf 完了後もプロセスが残り続けることがあるため、
// 終了は待たず、PDF ファイルのサイズが安定したことをもって完了とみなして kill する
const ok = await new Promise((resolve) => {
  const chrome = spawn(CHROME, args, { stdio: "ignore" });
  let lastSize = -1;
  const startedAt = Date.now();
  const timer = setInterval(async () => {
    const size = await stat(pdfPath).then((s) => s.size).catch(() => -1);
    if (size > 0 && size === lastSize) {
      clearInterval(timer);
      chrome.kill();
      resolve(true);
    } else if (Date.now() - startedAt > 60_000) {
      clearInterval(timer);
      chrome.kill();
      resolve(false);
    }
    lastSize = size;
  }, 1000);
  chrome.on("exit", () => {
    clearInterval(timer);
    resolve(existsSync(pdfPath));
  });
  chrome.on("error", () => {
    clearInterval(timer);
    resolve(false);
  });
});
server.closeAllConnections?.();
server.close();
// kill 直後は Chrome がまだプロファイルへ書き込み中のことがあるため削除はベストエフォート
await rm(profile, { recursive: true, force: true }).catch(() => {});

if (!ok) {
  console.error("PDF 生成に失敗しました（60 秒以内に出力が完了しませんでした）");
  process.exit(1);
}

// ローカルの out/ からも配信できるようコピーしておく（Vercel では public/ 経由で配信される）
await copyFile(pdfPath, path.join(root, "resume.pdf"));
const { size } = await stat(pdfPath);
console.log(`生成完了: public/resume.pdf (${(size / 1024).toFixed(0)} KB)`);
process.exit(0);
