// scripts/og-image.html をヘッドレス Chrome で撮影し、SNS 共有用の OGP 画像を public/ に出力する。
// 使い方: npm run og
// 画像の文言やデザインを変えたら再実行して public/og.png・public/og-en.png をコミットし直すこと。
// Chrome の場所が異なる場合は CHROME_PATH で指定する（例: CHROME_PATH=/path/to/chrome npm run og）。
import { existsSync } from "node:fs";
import { spawn } from "node:child_process";
import path from "node:path";
import { pathToFileURL } from "node:url";

const CHROME =
  process.env.CHROME_PATH ??
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const template = path.join(process.cwd(), "scripts", "og-image.html");

// lang: テンプレートの文言、png: public/ に出力するファイル名
const TARGETS = [
  { lang: "ja", png: "og.png" },
  { lang: "en", png: "og-en.png" },
];

if (!existsSync(CHROME)) {
  console.error(`Google Chrome が見つかりません: ${CHROME}`);
  process.exit(1);
}

function run(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(CHROME, args, { stdio: ["ignore", "ignore", "pipe"] });
    let stderr = "";
    child.stderr.on("data", (chunk) => (stderr += chunk));
    child.on("error", reject);
    child.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(`Chrome exited with ${code}\n${stderr}`)),
    );
  });
}

for (const { lang, png } of TARGETS) {
  const url = `${pathToFileURL(template).href}?lang=${lang}`;
  const output = path.join(process.cwd(), "public", png);
  await run([
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--window-size=1200,630",
    `--screenshot=${output}`,
    url,
  ]);
  console.log(`public/${png} を出力しました`);
}
