import fs from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { BlockLogo } from "../block-logo";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const metadata: Metadata = {
  title: "職務経歴書 | Ryota Taya",
  description: "田矢 凌太（Ryota Taya）の職務経歴書",
  // 経歴書は portfolio 本体より詳細なため検索エンジンには載せない
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default async function ResumePage() {
  const source = await fs.readFile(
    path.join(process.cwd(), "src/content/resume.md"),
    "utf8",
  );

  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      <header className="sticky top-0 z-10 -mx-6 border-b border-line bg-[var(--background)]/85 px-6 py-4 backdrop-blur print:hidden">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold tracking-wide text-heading"
          >
            <BlockLogo size={18} />
            Ryota Taya
          </Link>
          <div className="flex items-center gap-5 text-sm text-muted">
            <a
              href="/resume.pdf"
              download="職務経歴書_田矢凌太.pdf"
              className="hover:text-accent"
            >
              PDF をダウンロード
            </a>
            <Link href="/" className="hover:text-accent">
              ← ポートフォリオへ戻る
            </Link>
          </div>
        </nav>
      </header>

      <main
        className="prose max-w-none py-12 print:py-0
          prose-headings:font-bold prose-headings:text-heading
          prose-p:text-foreground prose-li:text-foreground
          prose-strong:text-heading prose-code:text-foreground
          prose-th:text-heading prose-td:text-foreground
          prose-h1:text-3xl sm:prose-h1:text-4xl
          prose-h2:mt-14 prose-h2:border-b prose-h2:border-line prose-h2:pb-2
          prose-h4:text-accent
          prose-a:text-accent
          prose-table:text-sm
          prose-th:whitespace-nowrap
          prose-hr:border-line"
      >
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            // 横に長いスキル表がモバイルでページごと溢れないようにする
            table: ({ children }) => (
              <div className="overflow-x-auto">
                <table>{children}</table>
              </div>
            ),
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
          }}
        >
          {source}
        </Markdown>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-muted print:hidden">
        © 2026 Ryota Taya
      </footer>
    </div>
  );
}
