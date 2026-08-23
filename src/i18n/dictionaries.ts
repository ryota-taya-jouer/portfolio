export type Locale = "ja" | "en";

export const locales: Locale[] = ["ja", "en"];

export const otherLocale = (locale: Locale): Locale =>
  locale === "ja" ? "en" : "ja";

/** 各ロケールの表示名（言語スイッチャーのリンクラベルに使う） */
export const localeNames: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
};

/** ロケールごとのルーティング。日本語は既存 URL を維持し、英語は /en 配下 */
export const paths: Record<
  Locale,
  { home: string; resume: string; resumePdf: string }
> = {
  ja: { home: "/", resume: "/resume", resumePdf: "/resume.pdf" },
  en: { home: "/en", resume: "/en/resume", resumePdf: "/resume-en.pdf" },
};

export type WorkEntry = {
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

export type HomeDictionary = {
  nav: { skills: string; works: string; contact: string };
  hero: {
    role: string;
    name: string;
    nameSub: string;
    intro: string;
    resumeCta: string;
  };
  skills: {
    sub: string;
    title: string;
    items: string[];
    note: { before: string; link: string; after: string };
  };
  works: {
    sub: string;
    title: string;
    entries: WorkEntry[];
    demoLabel: string;
    demoSeparator: string;
    videoFallback: string;
    note: { before: string; link: string; after: string };
  };
  contact: {
    sub: string;
    title: string;
    emailLabel: string;
    githubLabel: string;
    resumeLabel: string;
    resumeLinkText: string;
  };
};

export type ResumeDictionary = {
  pdfLink: string;
  pdfDownloadName: string;
  backLink: string;
  /** レンダリングする Markdown ファイル（src/content/ 配下） */
  sourceFile: string;
};

export const homeDictionaries: Record<Locale, HomeDictionary> = {
  ja: {
    nav: { skills: "Skills", works: "Works", contact: "Contact" },
    hero: {
      role: "Web Engineer — Backend / Infrastructure",
      name: "田矢 凌太",
      nameSub: "Ryota Taya",
      intro:
        "Python／Django を中心とした Web バックエンド開発、AWS を利用したインフラ構築・運用、Stripe を利用した決済機能の開発を得意とするエンジニアです。現在は Next.js や SwiftUI、AI コーディングエージェントも活用し、Web サービスと iOS アプリの個人開発にも取り組んでいます。",
      resumeCta: "職務経歴書を見る",
    },
    skills: {
      sub: "Skills",
      title: "テクニカルスキル",
      items: [
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
      ],
      note: {
        before: "スキルの一覧と詳細な経験区分は",
        link: "職務経歴書",
        after: "を参照してください。",
      },
    },
    works: {
      sub: "Works",
      title: "個人開発",
      demoLabel: "デモアカウント：",
      demoSeparator: "／",
      videoFallback: "お使いのブラウザは動画再生に対応していません。",
      note: {
        before: "各作品の担当工程・実装内容の詳細は",
        link: "職務経歴書",
        after: "を参照してください。",
      },
      entries: [
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
      ],
    },
    contact: {
      sub: "Contact",
      title: "連絡先・リンク",
      emailLabel: "Email",
      githubLabel: "GitHub",
      resumeLabel: "職務経歴書",
      resumeLinkText: "職務経歴書を見る",
    },
  },
  en: {
    nav: { skills: "Skills", works: "Works", contact: "Contact" },
    hero: {
      role: "Web Engineer — Backend / Infrastructure",
      name: "Ryota Taya",
      nameSub: "田矢 凌太",
      intro:
        "I am a web engineer specializing in backend development with Python and Django, building and operating infrastructure on AWS, and implementing payment features with Stripe. I also build web services and iOS apps on my own, working with Next.js, SwiftUI, and AI coding agents.",
      resumeCta: "View resume",
    },
    skills: {
      sub: "Skills",
      title: "Technical Skills",
      items: [
        "Python",
        "Django / Django REST Framework",
        "AWS",
        "Stripe",
        "Docker",
        "GitHub Actions (CI/CD)",
        "Next.js / TypeScript",
        "Swift / SwiftUI",
        "pytest / Playwright",
        "AI coding agents",
      ],
      note: {
        before: "See the",
        link: "resume",
        after: "for the full list of skills and experience levels.",
      },
    },
    works: {
      sub: "Works",
      title: "Personal Projects",
      demoLabel: "Demo account:",
      demoSeparator: "/",
      videoFallback: "Your browser does not support video playback.",
      note: {
        before: "See the",
        link: "resume",
        after: "for details on my role and implementation work in each project.",
      },
      entries: [
        {
          title: "SoloOps",
          subtitle:
            "Project & invoicing management web service for solo businesses (public demo)",
          url: "https://solops.jouerworld.com/",
          description:
            "A web service that centralizes clients, projects, tracked hours, invoices, and payments for freelancers and side businesses. I handle every stage on my own, from requirements definition through implementation to building and operating the AWS serverless infrastructure.",
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
            note: "A demo account preloaded with sample data. The server is stopped automatically to optimize costs, so the first access takes about 15 seconds.",
          },
          videoSrc: "/videos/soloops-demo.mp4",
        },
        {
          title: "Oshibell",
          subtitle: "Countdown iOS app (in development)",
          url: "https://oshibell.jouerworld.com/",
          description:
            "A countdown iOS app for fans of VTubers, cover singers, and streamers. Built as a backend-less MVP; I design and implement everything on my own, from the UI and data management to local notifications, widgets, and social-share image generation.",
          tags: [
            "Swift",
            "SwiftUI",
            "SwiftData",
            "WidgetKit",
            "Firebase Analytics / Crashlytics",
          ],
        },
      ],
    },
    contact: {
      sub: "Contact",
      title: "Contact & Links",
      emailLabel: "Email",
      githubLabel: "GitHub",
      resumeLabel: "Resume",
      resumeLinkText: "View resume",
    },
  },
};

export const resumeDictionaries: Record<Locale, ResumeDictionary> = {
  ja: {
    pdfLink: "PDF をダウンロード",
    pdfDownloadName: "職務経歴書_田矢凌太.pdf",
    backLink: "← ポートフォリオへ戻る",
    sourceFile: "resume.md",
  },
  en: {
    pdfLink: "Download PDF",
    pdfDownloadName: "Resume_Ryota_Taya.pdf",
    backLink: "← Back to portfolio",
    sourceFile: "resume.en.md",
  },
};
