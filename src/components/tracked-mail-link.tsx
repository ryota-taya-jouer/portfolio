"use client";

import { trackContactClick, type ContactClickParams } from "@/lib/analytics";

/** クリックを GA4 に記録する mailto リンク */
export function TrackedMailLink({
  href,
  track,
  className,
  children,
}: {
  href: string;
  track: ContactClickParams;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={className} onClick={() => trackContactClick(track)}>
      {children}
    </a>
  );
}
