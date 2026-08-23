import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlockLogo } from "./block-logo";
import { LocaleSwitch } from "./locale-switch";
import { paths, resumeDictionaries, type Locale } from "@/i18n/dictionaries";

export async function ResumePage({ locale }: { locale: Locale }) {
  const dict = resumeDictionaries[locale];
  const source = await fs.readFile(
    path.join(process.cwd(), "src/content", dict.sourceFile),
    "utf8",
  );

  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      <header className="sticky top-0 z-10 -mx-6 border-b border-line bg-[var(--background)]/85 px-6 py-4 backdrop-blur print:hidden">
        <nav className="flex items-center justify-between">
          <Link
            href={paths[locale].home}
            className="flex items-center gap-2 font-bold tracking-wide text-heading"
          >
            <BlockLogo size={18} />
            Ryota Taya
          </Link>
          <div className="flex items-center gap-5 text-sm text-muted">
            <a
              href={paths[locale].resumePdf}
              download={dict.pdfDownloadName}
              className="hover:text-accent"
            >
              {dict.pdfLink}
            </a>
            <Link href={paths[locale].home} className="hover:text-accent">
              {dict.backLink}
            </Link>
            <LocaleSwitch locale={locale} page="resume" />
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
