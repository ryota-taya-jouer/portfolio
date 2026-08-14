/** JOUER ロゴ（ブロックの J）。ネイビー部分はダークでは背景に沈むため明色に切り替える */
export function BlockLogo({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="160 120 192 272"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="256" y="120" width="96" height="96" className="fill-mint" />
      <rect
        x="256"
        y="216"
        width="96"
        height="176"
        className="fill-navy dark:fill-[#2e6db4]"
      />
      <rect x="160" y="296" width="96" height="96" className="fill-cyan" />
    </svg>
  );
}
