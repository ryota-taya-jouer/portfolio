import { sendGAEvent } from "@next/third-parties/google";
import type { Locale } from "@/i18n/dictionaries";

/** 問い合わせ導線のクリック（GA4 イベント contact_click のパラメータ） */
export type ContactClickParams = {
  /** mail: メールを開く／copy: アドレスをコピー */
  method: "mail" | "copy";
  /** service_menu: 各メニューの「相談する」／services_cta: 依頼欄下部／contact: 連絡先欄 */
  placement: "service_menu" | "services_cta" | "contact";
  /** メニューの id（全体の問い合わせは "general"） */
  service: string;
  locale: Locale;
};

/** 問い合わせ導線のクリックを GA4 に送る。GA を設定していない環境では何もしない */
export function trackContactClick(params: ContactClickParams) {
  if (!process.env.NEXT_PUBLIC_GA_ID) return;
  sendGAEvent("event", "contact_click", params);
}
