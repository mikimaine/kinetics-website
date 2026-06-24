const CLIENTS = [
  "Africa CDC",
  "UNHCR",
  "International Labour Organization",
  "Task Force for Global Health",
  "Mastercard Foundation",
  "VITAL WorkLife",
  "Gebeya",
  "BuuPass",
  "Gullit",
  "Canvaza",
];

/** Glass trust strip — real client names instead of abstract verbs. */
export default function ClientMarquee() {
  const row = (
    <div className="flex shrink-0 items-center">
      {CLIENTS.map((c) => (
        <span key={c} className="flex items-center">
          <span className="px-8 text-[15px] font-semibold tracking-[-0.01em] text-white/55 md:text-[17px]">
            {c}
          </span>
          <span className="text-[9px] text-red/80">◆</span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="relative z-10 border-y hairline-glass border-x-0 bg-white/[0.025] py-7 backdrop-blur-sm">
      <div className="eyebrow mb-5 text-center !text-[10px]">Trusted where the data matters most</div>
      <div className="marquee2">
        <div className="marquee2-track">
          {row}
          {row}
        </div>
      </div>
    </section>
  );
}
