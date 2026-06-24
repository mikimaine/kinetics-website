import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

const FOUNDERS = [
  {
    initials: "MA",
    name: "Mikiyas Amdu Midru",
    role: "Co-founder & CEO",
    where: "Addis Ababa",
    tint: "linear-gradient(160deg, rgba(223,33,39,0.5), rgba(223,33,39,0.12))",
    bio: "He started ETM in 2016 with no investors and strong opinions about how software should be built. Ten years on, those opinions ship on four continents. Mikiyas is a CEO who never left the codebase: when the problem is genuinely hard, he's the one in the architecture, and he can still explain it to your board in plain words.",
  },
  {
    initials: "ST",
    name: "Sosena Terefe",
    role: "Co-founder & COO",
    where: "Dallas, TX",
    tint: "linear-gradient(160deg, rgba(35,96,173,0.55), rgba(35,96,173,0.15))",
    bio: "Sosena wrote the software before she ran the company, so nothing technical slips past her. She runs Kinetic's US side from Dallas, and she started it on a bet: the engineering coming out of Africa holds up anywhere, as long as someone bridges the standards. She's that someone. She's usually also the first person you'll talk to.",
  },
];

export default function FounderBand() {
  return (
    <section id="about" className="relative z-10 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="max-w-[640px]">
          <Reveal>
            <div className="eyebrow">Who you work with</div>
          </Reveal>
          <Reveal delay={0.08} blur>
            <h2 className="display mt-5 text-[clamp(36px,4.6vw,64px)]">A boutique, on purpose.</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-[17px] leading-[1.6] text-white/60">
              Kinetic is the Data &amp; AI studio from the founders of ETM Software, 200+ projects
              since 2016. We&apos;re small by choice. The people who scope your project are the ones
              who build it, and one of them sits in Dallas.
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
