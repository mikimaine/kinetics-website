import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

const FRAMEWORKS = ["SOC 2-aligned", "HIPAA-ready", "GDPR"];

const PILLARS = [
  { title: "Data residency & sovereignty", body: "Your data stays in the region and tenancy you require." },
  { title: "End-to-end audit trails", body: "Every access and change logged, traceable, and exportable." },
  { title: "Least-privilege access", body: "Role-based access, scoped credentials, no standing admin." },
  { title: "Encryption everywhere", body: "At rest and in transit, with managed keys." },
  { title: "Data lineage & provenance", body: "Know where every number came from, column by column." },
  { title: "Monitoring & alerting", body: "Anomalies and unusual access flagged in real time." },
];

function Shield() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 2.5 L19 5.2 V11 C19 15.6 15.9 18.9 12 21 C8.1 18.9 5 15.6 5 11 V5.2 Z"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.3"
        fill="rgba(255,255,255,0.04)"
      />
      <path
        d="M9 12 l2 2 l4 -4.5"
        stroke="#ff7a7d"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Enterprise governance & compliance section. */
export default function GovernanceBand() {
  return (
    <section id="governance" className="relative z-10 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow">Governance &amp; compliance</div>
            </Reveal>
            <Reveal delay={0.08} blur>
              <h2 className="display mt-5 text-[clamp(34px,4.4vw,60px)]">
                The audit is the easy part.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.65] text-white/60">
                Every platform we ship assumes someone will inspect it: a regulator, a security
                review, a board. We design the controls, access rules, and audit trails in from the
                start, so you can show your work when someone asks.
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {FRAMEWORKS.map((f) => (
                  <span key={f} className="chip">
                    {f}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <GlassCard className="h-full p-6">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0">
                      <Shield />
                    </span>
                    <div>
                      <h3 className="text-[15px] font-black tracking-[-0.01em] text-white">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-[13.5px] leading-[1.55] text-white/55">{p.body}</p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
