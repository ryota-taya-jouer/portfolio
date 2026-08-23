import type { Metadata } from "next";
import { ResumePage } from "@/components/resume-page";

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

export default function JaResumePage() {
  return <ResumePage locale="ja" />;
}
