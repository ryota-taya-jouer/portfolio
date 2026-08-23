import type { Metadata } from "next";
import { RootDocument } from "../root-document";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.jouerworld.com"),
  title: "Ryota Taya | Portfolio",
  description:
    "田矢 凌太（Ryota Taya）のポートフォリオ。Python／Django を中心とした Web バックエンド開発、AWS、Stripe 決済、Next.js／React、iOS アプリの個人開発。",
};

export default function JaRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument lang="ja">{children}</RootDocument>;
}
