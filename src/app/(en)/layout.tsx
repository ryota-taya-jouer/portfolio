import type { Metadata } from "next";
import { RootDocument } from "../root-document";

const title = "Ryota Taya | Portfolio";
const description =
  "Portfolio of Ryota Taya, a web engineer specializing in Python/Django backends, AWS infrastructure, and Stripe payments. Available for freelance work, including Stripe integration and troubleshooting and Django/AWS maintenance.";
// Share image for social media (generated into public/ by npm run og)
const ogImage = {
  url: "/og-en.png",
  width: 1200,
  height: 630,
  alt: "Ryota Taya — Available for freelance work",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.jouerworld.com"),
  title,
  description,
  openGraph: {
    type: "website",
    siteName: title,
    locale: "en_US",
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

export default function EnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
