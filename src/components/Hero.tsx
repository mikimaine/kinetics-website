import RevealOnScroll from "./RevealOnScroll";

export default function Hero() {
  return (
    <section id="hero" className="border-b hairline relative">
      <div className="max-w-shell mx-auto px-8 grid grid-cols-12 gap-8 py-14">
        <div className="col-span-12 md:col-span-7">
          <div className="md:sticky md:top-24">
            <div className="font-mono text-[11px] uppercase tracking-widest text-navy/50">
              Business Intelligence · Data Engineering · Custom Software
            </div>
            <h1 className="hero-headline mt-6 text-[clamp(56px,9.2vw,150px)] font-black text-navy">
              Turn raw data into{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white px-3">decisions</span>
                <span aria-hidden="true" className="absolute inset-0 -z-0 bg-red rounded-sm" />
              </span>
              <br />
              that matter.
            </h1>
            <p className="mt-8 max-w-[54ch] text-[18px] leading-[1.55] text-navy/75">
              We design the pipelines, platforms, AI/ML and products that turn scattered data into systems you can
              trust.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="px-5 h-11 bg-red text-white font-semibold text-[14px] rounded-sm hover:bg-navy transition-colors"
              >
                Start a conversation
              </button>
              <a
                href="#engagements"
                className="px-5 h-11 border hairline font-semibold text-[14px] rounded-sm hover:bg-navy/5 inline-flex items-center"
              >
                See our work →
              </a>
              <div className="font-mono text-[11px] text-navy/55 ml-1">
                SOC 2 · GDPR · HIPAA‑ready delivery
              </div>
            </div>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-t hairline pt-8">
              <div>
                <div className="text-[44px] font-black tracking-tightest text-navy ticker-num">55</div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-navy/55">
                  AU member states reached
                </div>
              </div>
              <div>
                <div className="text-[44px] font-black tracking-tightest text-navy ticker-num">
                  4<span className="text-red">+</span>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-navy/55">
                  Continents delivered on
                </div>
              </div>
              <div>
                <div className="text-[44px] font-black tracking-tightest text-navy ticker-num">
                  10<span className="text-red">+</span>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-navy/55">
                  Years engineering data
                </div>
              </div>
              <div>
                <div className="text-[44px] font-black tracking-tightest text-navy ticker-num">0</div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-navy/55">
                  Rip‑and‑replace projects
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 space-y-4">
          <RevealOnScroll className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="/gen/data-platform.svg"
              alt="Data platform lineage graph"
              className="w-full h-full object-cover"
            />
          </RevealOnScroll>
          <RevealOnScroll className="aspect-square overflow-hidden rounded-sm">
            <img
              src="/gen/agentic-ai.svg"
              alt="Agentic AI advisor UI"
              className="w-full h-full object-cover"
            />
          </RevealOnScroll>
          <RevealOnScroll className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="/gen/streaming.svg"
              alt="Streaming platform catalog"
              className="w-full h-full object-cover"
            />
          </RevealOnScroll>
          <RevealOnScroll className="aspect-square overflow-hidden rounded-sm">
            <img
              src="/gen/interop.svg"
              alt="Interop DHIS2 bridge"
              className="w-full h-full object-cover"
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
