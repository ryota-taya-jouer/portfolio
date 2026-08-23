import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  alternates: {
    canonical: "/en",
    languages: { ja: "/", en: "/en", "x-default": "/" },
  },
};

export default function EnHome() {
  return <HomePage locale="en" />;
}
