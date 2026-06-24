import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

const FOUNDERS = [
  {
    initials: "MA",
    name: "Mikiyas Amdu",
    role: "Co-founder & CEO",
    where: "Dallas, TX",
    tint: "linear-gradient(160deg, rgba(223,33,39,0.5), rgba(223,33,39,0.12))",
    bio: "Mikiyas leads Kinetic and its engineering. For a decade he's taken data and AI platforms from first commit to production for governments, multilaterals, and large enterprises across four continents. He sets the architecture and the standards the team builds to, and he's as comfortable in the boardroom as in the codebase.",
  },
  {
    initials: "ST",
    name: "Sosena Terefe",
    role: "Co-founder & COO",
    where: "Dallas, TX",
    tint: "linear-gradient(160deg, rgba(35,96,173,0.55), rgba(35,96,173,0.15))",
    bio: "Sosena runs delivery and operations from Dallas. She came up as an engineer, so the bar she holds teams to is a technical one, and she's built the governance and process that let Kinetic deliver for regulated, audit-heavy organizations.",
  },
];

export default function FounderBand() {
  return (
    <section id="about" className="relative z-10 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="max-w-[680px]">
          <Reveal>
            <div className="eyebrow">Who you work with</div>
          </Reveal>
          <Reveal delay={0.08} blur>
            <h2 className="display mt-5 text-[clamp(36px,4.6vw,64px)]">
              Senior team. <span className="text-white/45">Enterprise scale.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-[17px] leading-[1.6] text-white/60">
              Kinetic is a team of more than 40 engineers, analysts, and delivery leads, partnered
              with ETM Software. We&apos;ve shipped 200-plus projects since 2016 and run enterprise
              programs end to end: data platforms, applied AI, and the governance and security that
              regulated organizations require. Senior people lead the work and stay on it.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <GlassCard className="h-full p-7 md:p-9">
                <div className="flex items-center gap-4">
                  {/* swap for a headshot when available */}
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 text-[16px] font-black text-white"
                    style={{ background: f.tint }}
                  >
                    {f.initials}
                  </div>
                  <div>
                    <div className="text-[18px] font-black tracking-[-0.01em] text-white">
                      {f.name}
                    </div>
                    <div className="eyebrow mt-1 !text-[9.5px]">
                      {f.role} · {f.where}
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-[15px] leading-[1.65] text-white/60">{f.bio}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
