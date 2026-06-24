import Reveal from "./Reveal";
import GlassCard from "./GlassCard";
import ContactForm from "./ContactForm";

export default function CtaV2() {
  return (
    <section id="contact" className="relative z-10 overflow-hidden pb-14 pt-24 md:pt-32">
      {/* focused glow behind the CTA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(223,33,39,0.16), transparent 60%)" }}
      />
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <div className="eyebrow">Next step</div>
            </Reveal>
            <Reveal delay={0.08} blur>
              <h2 className="display mt-6 text-[clamp(40px,6vw,92px)]">
                Let&apos;s scope your <span className="text-glow-red">hardest</span> data problem.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[46ch] text-[17px] leading-[1.6] text-white/60">
                Book a 30-minute technical call. You&apos;ll talk to a senior engineer who can scope
                the work, not a salesperson.
              </p>
              <div className="eyebrow mt-6 !text-[10px]">
                Replies within one business day · SOC 2 · HIPAA-ready · GDPR
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <GlassCard interactive={false} className="p-6 md:p-8">
              <ContactForm />
            </GlassCard>
          </Reveal>
        </div>

        <footer className="mt-28 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="flex items-center gap-3">
              <img
                src="/kbi-logo.png"
                alt="Kinetic"
                className="h-4 w-auto opacity-70"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <span className="eyebrow !text-[9.5px] !text-white/40">Data &amp; AI</span>
            </div>
            <div className="eyebrow !text-[9.5px]">
              © 2026 Kinetic · Wilmington, DE · Dallas, TX · info@kineticsbi.com
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
