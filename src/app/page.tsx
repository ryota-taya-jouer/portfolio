const RESUME_URL = "https://ryota-taya-jouer.github.io/ryota-taya/";
const GITHUB_URL = "https://github.com/ryota-taya-jouer";
const EMAIL = "ryota.taya@jouerworld.com";

const skillGroups = [
  {
    title: "バックエンド",
    note: "実務",
    skills: [
      "Python",
      "Django / Django REST Framework",
      "REST API 設計・開発",
      "JWT / HMAC 認証",
      "バッチ処理・非同期処理",
      "FastAPI",
    ],
  },
  {
    title: "フロントエンド",
    note: "実務",
    skills: ["Next.js", "React", "TypeScript / JavaScript", "HTML / CSS"],
  },
  {
    title: "インフラ・クラウド",
    note: "実務",
    skills: [
      "AWS (EC2, Aurora, Lambda, EventBridge, CloudWatch, SAM)",
      "Docker / Docker Compose",
      "GitHub Actions (CI/CD)",
      "Nginx / uWSGI / Linux",
    ],
  },
  {
    title: "決済",
    note: "実務",
    skills: [
      "Stripe (PaymentIntent, Invoice, Subscription, Webhook)",
      "継続課金・請求書発行",
      "決済失敗リトライ・二重決済対策",
    ],
  },
  {
    title: "テスト・品質管理",
    note: "実務",
    skills: [
      "pytest",
      "Playwright / Selenium (E2E)",
      "ruff / pre-commit",
      "CloudWatch Logs Insights (障害調査)",
    ],
  },
  {
    title: "モバイル・AI",
    note: "個人開発",
    skills: [
      "Swift / SwiftUI / SwiftData",
      "WidgetKit・ローカル通知",
      "Claude Code / OpenAI API",
      "RAG・ベクトル検索 (pgvector)",
    ],
  },
];

const works = [
  {
    title: "推しベル",
    subtitle: "カウントダウン iOS アプリ（開発中）",
    url: "https://oshibell.jouerworld.com/",
    description:
      "VTuber・歌い手・配信者ファン向けのカウントダウン iOS アプリ。バックエンドを持たない MVP として、UI 実装からデータ管理、ローカル通知、ウィジェット、SNS 共有画像生成までを個人で設計・実装しています。",
    tags: [
      "Swift",
      "SwiftUI",
      "SwiftData",
      "WidgetKit",
      "Firebase Analytics / Crashlytics",
    ],
  },
];

function SectionHeading({ id, title, sub }: { id: string; title: string; sub: string }) {
  return (
    <div id={id} className="scroll-mt-24">
      <p className="font-mono text-sm tracking-widest text-teal-600 dark:text-teal-400 uppercase">
        {sub}
      </p>
      <h2 className="mt-1 text-2xl sm:text-3xl font-bold">{title}</h2>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      {/* Header */}
      <header className="sticky top-0 z-10 -mx-6 mb-4 border-b border-zinc-200/70 dark:border-zinc-800/70 bg-[var(--background)]/85 px-6 py-4 backdrop-blur">
        <nav className="flex items-center justify-between">
          <a href="#top" className="font-bold tracking-wide">
            Ryota Taya
          </a>
          <div className="flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-teal-600 dark:hover:text-teal-400">
              About
            </a>
            <a href="#skills" className="hover:text-teal-600 dark:hover:text-teal-400">
              Skills
            </a>
            <a href="#works" className="hover:text-teal-600 dark:hover:text-teal-400">
              Works
            </a>
            <a href="#contact" className="hover:text-teal-600 dark:hover:text-teal-400">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="flex flex-col gap-24 pb-24">
        {/* Hero */}
        <section className="pt-16 sm:pt-24">
          <p className="font-mono text-teal-600 dark:text-teal-400">
            Web Engineer — Backend / Infrastructure
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">
            田矢 凌太
            <span className="ml-3 text-xl sm:text-2xl font-medium text-zinc-500 dark:text-zinc-400">
              Ryota Taya
            </span>
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-300">
            Python／Django を中心とした Web バックエンド開発、AWS
            を利用したインフラ構築・運用、Stripe
            を利用した決済機能の開発を得意とするエンジニアです。現在は Next.js
            や SwiftUI、AI コーディングエージェントも活用し、Web サービスと iOS
            アプリの個人開発にも取り組んでいます。
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-500"
            >
              職務経歴書を見る
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 text-sm font-medium hover:border-teal-600 hover:text-teal-600 dark:hover:border-teal-400 dark:hover:text-teal-400"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* About */}
        <section>
          <SectionHeading id="about" sub="About" title="自己紹介" />
          <div className="mt-6 flex flex-col gap-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              EC サイト・Web
              サービスの開発において、要件整理、設計、実装、テスト、デプロイ、監視・障害調査まで幅広い工程に対応してきました。特に、Django
              を用いた API・業務ロジックの実装、Stripe 決済、AWS Lambda
              による定期バッチ、CloudWatch を用いたログ調査、GitHub Actions
              による CI/CD 整備を得意としています。
            </p>
            <p>
              AI が生成したコードをそのまま採用するのではなく、仕様との整合性、保守性、セキュリティ、テスト結果を確認しながら開発を進めるスタイルで、Claude
              Code などの AI 開発支援ツールを活用した開発プロセスの効率化にも取り組んでいます。
            </p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <SectionHeading id="skills" sub="Skills" title="テクニカルスキル" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-bold">{group.title}</h3>
                  <span className="text-xs text-teal-600 dark:text-teal-400">
                    {group.note}
                  </span>
                </div>
                <ul className="mt-3 flex flex-col gap-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
            スキルの詳細な経験区分は
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 text-teal-600 dark:text-teal-400 hover:underline"
            >
              職務経歴書
            </a>
            を参照してください。
          </p>
        </section>

        {/* Works */}
        <section>
          <SectionHeading id="works" sub="Works" title="個人開発" />
          <div className="mt-8 flex flex-col gap-5">
            {works.map((work) => (
              <div
                key={work.title}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6"
              >
                <h3 className="text-xl font-bold">
                  {work.title}
                  <span className="ml-3 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {work.subtitle}
                  </span>
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {work.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                {work.url && (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    {work.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <SectionHeading id="contact" sub="Contact" title="連絡先・リンク" />
          <ul className="mt-6 flex flex-col gap-3 text-zinc-700 dark:text-zinc-300">
            <li>
              <span className="mr-3 inline-block w-28 text-sm text-zinc-500 dark:text-zinc-400">
                Email
              </span>
              <a
                href={`mailto:${EMAIL}`}
                className="text-teal-600 dark:text-teal-400 hover:underline"
              >
                {EMAIL}
              </a>
            </li>
            <li>
              <span className="mr-3 inline-block w-28 text-sm text-zinc-500 dark:text-zinc-400">
                GitHub
              </span>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 dark:text-teal-400 hover:underline"
              >
                github.com/ryota-taya-jouer
              </a>
            </li>
            <li>
              <span className="mr-3 inline-block w-28 text-sm text-zinc-500 dark:text-zinc-400">
                職務経歴書
              </span>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 dark:text-teal-400 hover:underline"
              >
                ryota-taya-jouer.github.io/ryota-taya
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        © 2026 Ryota Taya
      </footer>
    </div>
  );
}
