import type { Metadata } from "next";
import { RootDocument } from "../root-document";

const title = "Ryota Taya | Portfolio";
const description =
  "田矢 凌太（Ryota Taya）のポートフォリオ。Python／Django を中心とした Web バックエンド開発、AWS、Stripe 決済を得意とするエンジニアです。Stripe 決済の導入・不具合調査や Django／AWS の保守などのご依頼を、副業として受け付けています。";
// SNS 共有用の画像（npm run og で public/ に生成）
const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "田矢 凌太（Ryota Taya）— お仕事のご依頼を受け付けています",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.jouerworld.com"),
  title,
  description,
  openGraph: {
    type: "website",
    siteName: title,
    locale: "ja_JP",
    title,
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function JaRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument lang="ja">{children}</RootDocument>;
}
