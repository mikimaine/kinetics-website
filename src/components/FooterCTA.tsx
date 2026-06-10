export default function FooterCTA() {
  return (
    <section id="contact" className="bg-navy text-white">
      <div className="max-w-shell mx-auto px-8 py-28">
        <div className="font-mono text-[11px] uppercase tracking-widest text-white/50">
          Next step
        </div>
        <h2 className="mt-6 text-[clamp(56px,10vw,160px)] font-black tracking-tightest leading-[0.86]">
          Let&apos;s scope
          <br />
          your <span className="text-red">hardest</span> data
          <br />
          problem.
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="px-6 h-12 bg-red text-white font-semibold text-[14px] rounded-sm hover:bg-white hover:text-navy transition-colors"
          >
            Start a conversation
          </button>
          <a
            href="mailto:info@kineticsbi.com"
            className="px-6 h-12 border hairline-ink font-semibold text-[14px] rounded-sm hover:bg-white/10 inline-flex items-center"
          >
            info@kineticsbi.com
          </a>
        </div>
      </div>
      <div className="border-t hairline-ink">
        <div className="max-w-shell mx-auto px-8 py-12 grid grid-cols-2 md:grid-cols-5 gap-6 text-[13px] text-white/75">
          <div className="col-span-2 md:col-span-1">
            <img
              src="/kbi-logo.png"
              alt="Kinetic BI"
              className="h-5 w-auto mb-4"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-white/60 leading-relaxed">
              Transforming <strong className="text-white">data</strong> into actionable insights for
              your success.
            </p>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-3">
              Capabilities
            </div>
            <ul className="space-y-1.5">
              <li>Data Platforms</li>
              <li>ETL / ELT Pipelines</li>
              <li>BI &amp; Visualization</li>
              <li>AI / ML &amp; LLMs</li>
              <li>Custom Software</li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-3">
              Engagements
            </div>
            <ul className="space-y-1.5">
              <li>Africa CDC</li>
              <li>Task Force for Global Health</li>
              <li>UNHCR</li>
              <li>Lab651 / VITAL WorkLife</li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-3">
              Company
            </div>
            <ul className="space-y-1.5">
              <li>About Us</li>
              <li>Careers</li>
              <li>Research</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-white/40 mb-3">
              Contact
            </div>
            <ul className="space-y-1.5">
              <li>
                108 W. 13th St · Suite 100
                <br />
                Wilmington, DE 19801
              </li>
              <li>+1 945 246 6827</li>
              <li>info@kineticsbi.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-shell mx-auto px-8 py-6 flex items-center justify-between font-mono text-[11px] text-white/40">
          <span>© 2026 Kinetic BI · All rights reserved.</span>
          <span>SOC 2 · GDPR · HIPAA‑ready</span>
        </div>
      </div>
    </section>
  );
}
