import type { MetadataRoute } from "next";

// output: "export" ではビルド時に静的ファイルとして書き出す指定が必要
export const dynamic = "force-static";

/** 全ページのクロールを許可する（職務経歴書はページ側の noindex で検索結果から除外） */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://portfolio.jouerworld.com/sitemap.xml",
  };
}
