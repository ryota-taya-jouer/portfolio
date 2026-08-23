import type { Metadata } from "next";
import { RootDocument } from "../root-document";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.jouerworld.com"),
  title: "Ryota Taya | Portfolio",
  description:
    "Portfolio of Ryota Taya. Web backend development with Python/Django, AWS infrastructure, Stripe payments, Next.js/React, and personal iOS app development.",
};

export default function EnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
