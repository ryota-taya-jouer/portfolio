import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { ja: "/", en: "/en", "x-default": "/" },
  },
};

export default function Home() {
  return <HomePage locale="ja" />;
}
