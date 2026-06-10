const WORDS = ["Ingest", "Integrate", "Model", "Build", "Ship", "Govern", "Operate"];

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 gap-10 pr-10" aria-hidden={ariaHidden || undefined}>
      {WORDS.map((w) => (
        <span key={w} className="contents">
          <span>{w}</span>
          <span className="text-red">◆</span>
        </span>
      ))}
    </div>
  );
}

export default function TrustTicker() {
  return (
    <section className="bg-navy text-white border-y border-navy overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap py-5 text-[36px] md:text-[56px] font-black tracking-tightest">
        <Row />
        <Row ariaHidden />
      </div>
    </section>
  );
}
