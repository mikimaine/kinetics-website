import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

export default function Quote() {
  return (
    <section id="voices" className="relative z-10 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <Reveal blur>
          <GlassCard className="p-8 md:p-14">
            <div className="eyebrow !text-red/90">On the Africa CDC Central Data Repository engagement</div>
            <blockquote className="mt-8 max-w-[26ch] text-[clamp(26px,3.4vw,44px)] font-black leading-[1.06] tracking-[-0.03em] text-white">
              “Kinetic is a{" "}
              <span className="text-glow-red">top-tier development partner</span>. They acted as
              genuine strategic partners, proposing improvements that were instrumental in delivering
              the project on time and within budget.”
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[14px] font-black text-white"
                style={{ background: "linear-gradient(160deg, rgba(35,96,173,0.5), rgba(35,96,173,0.15))" }}
              >
                GJ
              </div>
              <div>
                <div className="text-[15px] font-bold text-white">Greco Johnson, MPH</div>
                <div className="eyebrow mt-0.5 !text-[9.5px]">
                  Informatics Project Team Lead · PHII · Task Force for Global Health
                </div>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
