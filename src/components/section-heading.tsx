export function SectionHeading({ id, title, sub }: { id: string; title: string; sub: string }) {
  return (
    <div id={id} className="scroll-mt-24">
      <p className="font-mono text-sm tracking-widest text-accent uppercase">
        <span className="mr-2.5 inline-block h-2.5 w-2.5 bg-mint" aria-hidden="true" />
        {sub}
      </p>
      <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-heading">{title}</h2>
    </div>
  );
}
