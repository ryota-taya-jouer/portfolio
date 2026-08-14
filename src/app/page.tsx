import { BlockLogo } from "./block-logo";

const RESUME_URL = "/resume";
const GITHUB_URL = "https://github.com/ryota-taya-jouer";
const EMAIL = "ryota.taya@jouerworld.com";

const coreSkills = [
  "Python",
  "Django / Django REST Framework",
  "AWS",
  "Stripe",
  "Docker",
  "GitHub Actions (CI/CD)",
  "Next.js / TypeScript",
  "Swift / SwiftUI",
  "pytest / Playwright",
  "AI コーディングエージェント",
];

type Work = {
  title: string;
  subtitle: string;
  url?: string;
  description: string;
  tags: string[];
  /** 公開デモの案内（アカウントと注意書き） */
  demo?: { email: string; password: string; note: string };
  /** デモ動画（public/ 配下のパス） */
  videoSrc?: string;
};

const works: Work[] = [
  {
    title: "SoloOps",
    subtitle: "個人事業者向け 案件・請求管理 Web サービス（公開デモ）",
    url: "https://solops.jouerworld.com/",
    description:
      "副業・フリーランスのクライアント、案件、稼働時間、請求書、入金を一元管理する Web サービス。要件定義から実装、AWS サーバーレス構成の構築・運用まで、全工程を個人で担当しています。",
    tags: [
      "Django REST Framework",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "AWS Lambda",
      "Aurora Serverless v2",
      "CloudFront",
      "Terraform",
      "Playwright",
    ],
    demo: {
      email: "demo@soloops.example.com",
      password: "DemoPassw0rd!",
      note: "サンプルデータ入りのデモアカウントです。コスト最適化のためサーバーを自動停止しており、初回アクセスには 15 秒ほどかかります。",
    },
    videoSrc: "/videos/soloops-demo.mp4",
  },
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
      <p className="font-mono text-sm tracking-widest text-accent uppercase">
        <span className="mr-2.5 inline-block h-2.5 w-2.5 bg-mint" aria-hidden="true" />
        {sub}
      </p>
      <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-heading">{title}</h2>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-line bg-surface px-3 py-1 text-xs text-foreground">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      {/* Header */}
      <header className="sticky top-0 z-10 -mx-6 mb-4 border-b border-line bg-[var(--background)]/85 px-6 py-4 backdrop-blur">
        <nav className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-bold tracking-wide text-heading">
            <BlockLogo size={18} />
            Ryota Taya
          </a>
          <div className="flex items-center gap-5 text-sm text-muted">
            <a href="#skills" className="hover:text-accent">
              Skills
            </a>
            <a href="#works" className="hover:text-accent">
              Works
            </a>
            <a href="#contact" className="hover:text-accent">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="flex flex-col gap-24 pb-24">
        {/* Hero */}
        <section className="flex items-start justify-between gap-8 pt-16 sm:pt-24">
          <div>
            <p className="font-mono text-accent">
              Web Engineer — Backend / Infrastructure
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight text-heading">
              田矢 凌太
              <span className="ml-3 text-xl sm:text-2xl font-medium text-muted">
                Ryota Taya
              </span>
            </h1>
            <p className="mt-6 max-w-2xl leading-relaxed">
              Python／Django を中心とした Web バックエンド開発、AWS
              を利用したインフラ構築・運用、Stripe
              を利用した決済機能の開発を得意とするエンジニアです。現在は Next.js
              や SwiftUI、AI コーディングエージェントも活用し、Web サービスと iOS
              アプリの個人開発にも取り組んでいます。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={RESUME_URL}
                className="bg-navy px-5 py-2.5 text-sm font-medium text-white hover:bg-[#0d4a8c] dark:bg-mint dark:text-navy dark:hover:bg-[#54eebc]"
              >
                職務経歴書を見る
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-navy px-5 py-2.5 text-sm font-medium text-navy hover:border-accent hover:text-accent dark:border-line dark:text-foreground dark:hover:border-accent dark:hover:text-accent"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="hidden pt-6 sm:block">
            <BlockLogo size={132} />
          </div>
        </section>

        {/* Skills */}
        <section>
          <SectionHeading id="skills" sub="Skills" title="テクニカルスキル" />
          <div className="mt-6 flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            スキルの一覧と詳細な経験区分は
            <a href={RESUME_URL} className="mx-1 text-accent hover:underline">
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
                className="border border-line border-l-4 border-l-cyan bg-surface p-6"
              >
                <h3 className="text-xl font-bold text-heading">
                  {work.title}
                  <span className="ml-3 text-sm font-medium text-muted">
                    {work.subtitle}
                  </span>
                </h3>
                <p className="mt-3 leading-relaxed">{work.description}</p>
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
                    className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
                  >
                    {work.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                  </a>
                )}
                {work.demo && (
                  <div className="mt-4 bg-inset px-4 py-3 text-sm text-muted">
                    <p>
                      デモアカウント：
                      <code className="font-mono text-foreground">
                        {work.demo.email}
                      </code>
                      <span className="mx-1">／</span>
                      <code className="font-mono text-foreground">
                        {work.demo.password}
                      </code>
                    </p>
                    <p className="mt-1">{work.demo.note}</p>
                  </div>
                )}
                {work.videoSrc && (
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="mt-4 w-full border border-line"
                    src={work.videoSrc}
                  >
                    お使いのブラウザは動画再生に対応していません。
                  </video>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            各作品の担当工程・実装内容の詳細は
            <a href={RESUME_URL} className="mx-1 text-accent hover:underline">
              職務経歴書
            </a>
            を参照してください。
          </p>
        </section>

        {/* Contact */}
        <section>
          <SectionHeading id="contact" sub="Contact" title="連絡先・リンク" />
          <ul className="mt-6 flex flex-col gap-3">
            <li>
              <span className="mr-3 inline-block w-28 text-sm text-muted">
                Email
              </span>
              <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">
                {EMAIL}
              </a>
            </li>
            <li>
              <span className="mr-3 inline-block w-28 text-sm text-muted">
                GitHub
              </span>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                github.com/ryota-taya-jouer
              </a>
            </li>
            <li>
              <span className="mr-3 inline-block w-28 text-sm text-muted">
                職務経歴書
              </span>
              <a href={RESUME_URL} className="text-accent hover:underline">
                職務経歴書を見る
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © 2026 Ryota Taya
      </footer>
    </div>
  );
}
