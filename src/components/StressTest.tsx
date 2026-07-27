import GlassCard from "./GlassCard";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

function Stat({ to, suffix = "", label }: { to: number; suffix?: string; label: string }) {
  return (
    <div>
      <div className="text-[40px] font-black leading-none tracking-[-0.03em] text-white md:text-[52px]">
        <CountUp to={to} duration={2} />
        {suffix && <span className="text-glow-red">{suffix}</span>}
      </div>
      <div className="eyebrow mt-2 !text-[9.5px]">{label}</div>
    </div>
  );
}

/* Faint continental-network backdrop. */
function NetworkBg() {
  const nodes = [
    [40, 40], [120, 90], [90, 170], [200, 60], [250, 140], [180, 200],
    [320, 100], [370, 180], [300, 40], [420, 70],
  ] as const;
  return (
    <svg
      viewBox="0 0 460 240"
      className="pointer-events-none absolute right-0 top-1/2 hidden h-[320px] -translate-y-1/2 opacity-[0.5] md:block"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="st-fade" cx="70%" cy="50%" r="60%">
          <stop offset="0" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="st-mask">
          <rect width="460" height="240" fill="url(#st-fade)" />
        </mask>
      </defs>
      <g mask="url(#st-mask)">
        <path d="M40,40 L120,90 L90,170 L180,200 L250,140 L200,60 Z" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
        <path d="M200,60 L320,100 L370,180" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
        <path d="M320,100 L300,40 L420,70" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
        <path d="M40,40 L120,90 L200,60 L320,100 L420,70" stroke="rgba(255,122,125,0.7)" strokeWidth="1.4" className="flowline" />
        <path d="M90,170 L180,200 L250,140 L370,180" stroke="rgba(110,156,222,0.7)" strokeWidth="1.2" className="flowline-slow" />
        {nodes.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#0b1322" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        ))}
      </g>
    </svg>
  );
}

/** Load-bearing credibility band: the Africa CDC stress test, stated outright. */
export default function StressTest() {
  return (
    <section className="relative z-10 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <Reveal blur>
          <GlassCard interactive={false} className="relative overflow-hidden p-8 md:p-14">
            <NetworkBg />
            <div className="relative max-w-[72%] md:max-w-none">
              <div className="eyebrow">Why teams trust us</div>
              <h2 className="display mt-5 max-w-[24ch] text-[clamp(28px,4vw,58px)]">
                Built for continental complexity. Ready for{" "}
                <span className="text-glow-red">enterprise scale</span>.
              </h2>
            </div>
            <div className="relative mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <div className="eyebrow !text-[10px]">UNHCR &amp; ARRA</div>
                <p className="mt-3 text-[15.5px] leading-[1.7] text-white/65 md:text-[16.5px]">
                  For UNHCR&apos;s One Stop Shop refugee program, we built the registration and
                  case management system that ARRA and UNHCR run their services on. It has carried
                  more than 2 million refugees from paper files to verified digital records, in
                  field conditions where connectivity comes and goes.
                </p>
              </div>
              <div>
                <div className="eyebrow !text-[10px]">Africa CDC</div>
                <p className="mt-3 text-[15.5px] leading-[1.7] text-white/65 md:text-[16.5px]">
                  The Continental Public Health Data Intelligence Platform we engineered for Africa
                  CDC securely unifies surveillance data across 55 African Union Member States
                  through a standardized, federated, and governed architecture.
                </p>
              </div>
            </div>
            <p className="relative mt-8 max-w-[64ch] text-[16px] leading-[1.7] text-white/65 md:text-[18px]">
              When you&apos;ve solved complexity at this scale, enterprise transformation becomes a
              natural extension.
            </p>
            <div className="relative mt-10 grid max-w-[620px] grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <Stat to={2} suffix="M+" label="Refugees served" />
              <Stat to={55} label="Member states unified" />
              <Stat to={0} label="Rip-and-replace" />
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
