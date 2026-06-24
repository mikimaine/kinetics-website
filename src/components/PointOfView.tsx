import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    n: "01",
    title: "Quality is enforced at ingestion.",
    body: "Validation, normalization, and anomaly checks belong at the edge, not buried in a dashboard formula three layers downstream.",
  },
  {
    n: "02",
    title: "Data stays with its owner.",
    body: "Federation beats centralization when trust is on the line. Sharing should be intentional and permissioned, not a side effect of where you stored something.",
  },
  {
    n: "03",
    title: "Schemas evolve, pipelines shouldn't break.",
    body: "Real data models change every quarter. The systems we ship expect it, with version-controlled schemas and backward-compatible contracts.",
  },
  {
    n: "04",
    title: "Own the stack end to end.",
    body: "From intake to interface, one team. No handoffs, no finger-pointing, no one to blame but us.",
  },
];

export default function PointOfView() {
  return (
    <section className="relative z-10 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="eyebrow">Point of view</div>
            </Reveal>
            <Reveal delay={0.08} blur>
              <h2 className="display mt-5 text-[clamp(34px,4.4vw,60px)]">
                Opinions we&apos;re willing to defend.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[40ch] text-[16px] leading-[1.6] text-white/55">
                Ten years of building data systems teaches you what the decks leave out. These are
                the ones we bring to every project, unless you talk us out of them.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.07}>
                <GlassCard className="h-full p-7">
                  <span className="font-mono text-[12px] text-glow-red">{p.n}</span>
                  <h3 className="mt-4 text-[20px] font-black leading-[1.15] tracking-[-0.02em] text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-white/55">{p.body}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
