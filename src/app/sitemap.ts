import type { MetadataRoute } from "next";
import { locales, paths } from "@/i18n/dictionaries";

// output: "export" ではビルド時に静的ファイルとして書き出す指定が必要
export const dynamic = "force-static";

const SITE_URL = "https://portfolio.jouerworld.com";

/** 検索エンジン向けのサイトマップ。職務経歴書は noindex のため載せない */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${SITE_URL}${paths[locale].home}`]),
  );
  return locales.map((locale) => ({
    url: `${SITE_URL}${paths[locale].home}`,
    lastModified: new Date(),
    alternates: { languages },
  }));
}
