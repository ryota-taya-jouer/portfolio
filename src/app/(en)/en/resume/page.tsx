import type { Metadata } from "next";
import { ResumePage } from "@/components/resume-page";

export const metadata: Metadata = {
  title: "Resume | Ryota Taya",
  description: "Resume of Ryota Taya",
  // 経歴書は portfolio 本体より詳細なため検索エンジンには載せない
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export default function EnResumePage() {
  return <ResumePage locale="en" />;
}
