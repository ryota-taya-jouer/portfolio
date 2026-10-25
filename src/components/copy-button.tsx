"use client";

import { useState } from "react";
import { trackContactClick, type ContactClickParams } from "@/lib/analytics";

/** テキストをクリップボードにコピーするボタン（mailto が使えない閲覧環境向け） */
export function CopyButton({
  text,
  label,
  copiedLabel,
  className,
  track,
}: {
  text: string;
  label: string;
  copiedLabel: string;
  className?: string;
  /** 指定するとコピー成功時に GA4 へ記録する */
  track?: ContactClickParams;
}) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (track) trackContactClick(track);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // クリップボード API が使えない環境ではアドレスが画面に表示されているので何もしない
    }
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
