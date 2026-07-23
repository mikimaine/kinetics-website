import GlassCard from "./GlassCard";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

type Featured = {
  client: string;
  stat: { to: number; suffix: string } | null;
  statBig?: string;
  statLabel: string;
  desc: string;
  tags: string[];
};

const FEATURED: Featured[] = [
  {
    client: "Africa CDC",
    stat: { to: 55, suffix: "" },
    statLabel: "member states unified",
    desc: "One repository for a continent's health data. It brings disease surveillance from 55 member states into a single governed source, built on DHIS2 and ELT.",
    tags: ["Public health", "Interop"],
  },
  {
    client: "VITAL WorkLife",
    stat: { to: 40, suffix: "%" },
    statLabel: "lower support cost",
    desc: "Case management built to HIPAA from the first commit. PHI stays locked down by default, and the support load dropped.",
    tags: ["Healthcare", "HIPAA", "US"],
  },
  {
    client: "UNHCR · ARRA",
    stat: { to: 2, suffix: "M+" },
    statLabel: "refugees registered and served",
    desc: "The registration and case management system behind Ethiopia's One Stop Shop refugee program. ARRA runs registration and vital services on it, UNHCR runs its own services, and it holds up where connectivity drops.",
    tags: ["Humanitarian", "Gov & UN", "Field ops"],
  },
];

const COMPACT = [
  { client: "Task Force for Global Health", desc: "5× analyst output on a shared AI platform.", tag: "US" },
  { client: "UNHCR · Statistical tools", desc: "Warehouse, ELT, and BI behind partner and statistical reporting across 84 country operations.", tag: "BI" },
  { client: "Confidential · Media", desc: "Music and video streaming: catalog, delivery, analytics.", tag: "2026" },
  { client: "Confidential · HealthTech", desc: "Agentic AI advisors for medication-therapy management.", tag: "2026" },
];

export default function Cases() {
  return (
    <section id="work" className="relative z-10 py-28 md:py-36">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <Reveal>
          <div className="eyebrow">Selected work</div>
        </Reveal>
        <Reveal delay={0.08} blur>
          <h2 className="display mt-5 text-[clamp(40px,5.4vw,76px)]">
            Shipped. <span className="text-white/45">Where it counts.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.6] text-white/55">
            These programs run at national and multinational scale, for continental health agencies,
            UN bodies, and regulated US healthcare.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-12 gap-4">
          {FEATURED.map((c, i) => (
            <Reveal key={c.client} className="col-span-12 md:col-span-4" delay={i * 0.08}>
              <GlassCard className="flex h-full flex-col p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="eyebrow !text-white/60">{c.client}</span>
                  <span className="text-[10px] text-red/90">◆</span>
                </div>
                <div className="mt-12 md:mt-16">
                  {c.stat ? (
                    <div className="text-[60px] font-black leading-none tracking-[-0.04em] text-white md:text-[72px]">
                      <CountUp to={c.stat.to} duration={2} />
                      {c.stat.suffix && <span className="text-glow-red">{c.stat.suffix}</span>}
                    </div>
                  ) : (
                    <div className="text-[30px] font-black leading-[1.04] tracking-[-0.03em] text-white md:text-[34px]">
                      {c.statBig}
                    </div>
                  )}
                  <div className="eyebrow mt-2 !text-[10px] !text-white/45">{c.statLabel}</div>
                </div>
                <p className="mt-6 text-[14.5px] leading-[1.6] text-white/55">{c.desc}</p>
                <div className="mt-auto flex items-center justify-between pt-8">
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="chip !h-6 !px-2.5 !text-[9px]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="whitespace-nowrap text-[12.5px] font-semibold text-white/55 transition-colors hover:text-white"
                  >
                    Details on request →
                  </a>
                </div>
              </GlassCard>
            </Reveal>
          ))}

          {COMPACT.map((c, i) => (
            <Reveal key={c.client} className="col-span-12 md:col-span-6 lg:col-span-3" delay={0.1 + i * 0.06}>
              <GlassCard className="flex h-full items-start justify-between gap-4 p-6">
                <div>
                  <div className="text-[16px] font-black tracking-[-0.01em] text-white">{c.client}</div>
                  <p className="mt-2 text-[13.5px] leading-[1.55] text-white/50">{c.desc}</p>
                </div>
                <span className="chip !h-6 !px-2.5 !text-[9px]">{c.tag}</span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
