import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

const MORE = ["Cloud Architecture", "Custom Software", "Governance & Security", "Managed Operations"];

/* mini lineage diagram for the data platforms tile */
function Lineage() {
  return (
    <svg viewBox="0 0 520 120" className="mt-8 w-full" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="bc-flow" x1="0" y1="0" x2="520" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2360AD" />
          <stop offset="1" stopColor="#df2127" />
        </linearGradient>
      </defs>
      <path d="M70,30 C160,30 160,60 250,60" stroke="rgba(255,255,255,0.14)" strokeWidth="1.2" />
      <path d="M70,90 C160,90 160,60 250,60" stroke="rgba(255,255,255,0.14)" strokeWidth="1.2" />
      <path d="M250,60 C340,60 340,40 450,40" stroke="rgba(255,255,255,0.14)" strokeWidth="1.2" />
      <path d="M250,60 C340,60 340,80 450,80" stroke="rgba(255,255,255,0.14)" strokeWidth="1.2" />
      <path d="M70,30 C160,30 160,60 250,60 C340,60 340,40 450,40" stroke="url(#bc-flow)" strokeWidth="1.6" className="flowline" />
      <path d="M70,90 C160,90 160,60 250,60 C340,60 340,80 450,80" stroke="url(#bc-flow)" strokeWidth="1.6" className="flowline-slow" />
      {[
        [40, 30, "s3 · parquet"],
        [40, 90, "kafka · stream"],
        [250, 60, "warehouse"],
        [480, 40, "mart · bi"],
        [480, 80, "ml · api"],
      ].map(([x, y, label]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x as number} cy={y as number} r="4" fill="#0b1322" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
          <text
            x={x as number}
            y={(y as number) + 20}
            textAnchor="middle"
            fill="rgba(242,245,250,0.45)"
            fontSize="9"
            fontFamily="var(--font-mono)"
            letterSpacing="0.08em"
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function PipelineFlow() {
  return (
    <svg viewBox="0 0 400 40" className="mt-8 w-full" fill="none" aria-hidden="true">
      <path d="M10,16 H390" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <path d="M10,16 H390" stroke="rgba(255,122,125,0.9)" strokeWidth="1.6" className="flowline" />
      <path d="M10,28 H390" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <path d="M10,28 H390" stroke="rgba(110,156,222,0.8)" strokeWidth="1.3" className="flowline-slow" />
      <circle cx="10" cy="16" r="3.5" fill="#0b1322" stroke="rgba(255,255,255,0.5)" />
      <circle cx="390" cy="16" r="3.5" fill="#0b1322" stroke="rgba(255,255,255,0.5)" />
    </svg>
  );
}

export default function BentoCapabilities() {
  return (
    <section id="capabilities" className="relative z-10 py-28 md:py-36">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <Reveal>
          <div className="eyebrow">What we do</div>
        </Reveal>
        <Reveal delay={0.08} blur>
          <h2 className="display mt-5 max-w-[16ch] text-[clamp(36px,5vw,72px)]">
            Applied AI, <span className="text-white/45">on a foundation that holds.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-6 max-w-[58ch] text-[17px] leading-[1.6] text-white/55">
            Most teams can demo AI. Getting it to run, and keep running, is the hard part.
            That&apos;s the part we do.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-12 gap-4">
          {/* 01 — Applied & Agentic AI (big) */}
          <Reveal className="col-span-12 lg:col-span-7" delay={0.05}>
            <GlassCard className="flex h-full flex-col justify-between p-7 md:p-9">
              <div className="flex items-start justify-between">
                <span className="chip">01 · Intelligence</span>
                <span className="eyebrow !text-white/30">in production, not slideware</span>
              </div>
              <div className="mt-10">
                <h3 className="text-[30px] font-black tracking-[-0.03em] text-white md:text-[38px]">
                  Applied &amp; Agentic AI
                </h3>
                <p className="mt-3 max-w-[48ch] text-[15px] leading-[1.6] text-white/55">
                  We put agents, RAG, and evals into production, not slide decks. The
                  medication-therapy advisors and retrieval systems we&apos;ve shipped get used
                  every day.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-5">
                <div className="node-ring shrink-0">
                  <span className="text-[12px] font-black text-white/85">AI</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["agents", "rag", "ontologies", "evals", "guardrails"].map((t) => (
                    <span key={t} className="chip !h-7">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>

          {/* 02 — AI Platforms */}
          <Reveal className="col-span-12 lg:col-span-5" delay={0.12}>
            <GlassCard className="flex h-full flex-col justify-between p-7 md:p-9">
              <span className="chip">02 · Platform</span>
              <div className="mt-10">
                <h3 className="text-[26px] font-black tracking-[-0.03em] text-white md:text-[30px]">
                  AI Platforms
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-white/55">
                  A platform is more than a model. It&apos;s the data feeding it, the retrieval, the
                  guardrails, the screen your team works in. We build the whole thing.
                </p>
              </div>
              <div className="mt-8 flex items-baseline gap-3">
                <span className="text-[48px] font-black leading-none tracking-[-0.04em] text-glow-red">
                  5×
                </span>
                <span className="text-[13px] leading-[1.35] text-white/55">
                  the output from the same team
                  <br />
                  at the Task Force for Global Health
                </span>
              </div>
            </GlassCard>
          </Reveal>

          {/* 03 — Data Platforms */}
          <Reveal className="col-span-12 lg:col-span-7" delay={0.05}>
            <GlassCard className="flex h-full flex-col justify-between p-7 md:p-9">
              <div className="flex items-start justify-between">
                <span className="chip">03 · Data</span>
                <span className="eyebrow !text-white/30">source to dashboard</span>
              </div>
              <div className="mt-10">
                <h3 className="text-[26px] font-black tracking-[-0.03em] text-white md:text-[32px]">
                  Data Platforms
                </h3>
                <p className="mt-3 max-w-[46ch] text-[15px] leading-[1.6] text-white/55">
                  Warehouses and repositories your analysts actually trust, with lineage tracked
                  end to end. We&apos;ve built them for one team and for a whole continent.
                </p>
              </div>
              <Lineage />
            </GlassCard>
          </Reveal>

          {/* 04 — ETL/ELT */}
          <Reveal className="col-span-12 lg:col-span-5" delay={0.12}>
            <GlassCard className="flex h-full flex-col justify-between p-7 md:p-9">
              <span className="chip">04 · Ingest</span>
              <div className="mt-10">
                <h3 className="text-[24px] font-black tracking-[-0.03em] text-white md:text-[28px]">
                  ETL / ELT Pipelines
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-white/55">
                  Pipelines that don&apos;t page you at 2am. They take schema drift and flaky sources
                  in stride.
                </p>
              </div>
              <PipelineFlow />
            </GlassCard>
          </Reveal>

          {/* 05 — BI */}
          <Reveal className="col-span-12 lg:col-span-5" delay={0.05}>
            <GlassCard className="flex h-full flex-col justify-between p-7">
              <span className="chip">05 · Visualize</span>
              <div className="mt-10">
                <h3 className="text-[24px] font-black tracking-[-0.03em] text-white">
                  BI &amp; Visualization
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-white/55">
                  Dashboards your stakeholders open. Then keep open.
                </p>
              </div>
              <div className="eq mt-8" aria-hidden="true">
                <span /><span /><span /><span /><span /><span /><span />
              </div>
            </GlassCard>
          </Reveal>

          {/* 06 — Systems Integration */}
          <Reveal className="col-span-12 lg:col-span-7" delay={0.12}>
            <GlassCard className="flex h-full flex-col justify-between p-7 md:p-9">
              <span className="chip">06 · Interop</span>
              <div className="mt-10">
                <h3 className="text-[24px] font-black tracking-[-0.03em] text-white md:text-[28px]">
                  Systems Integration
                </h3>
                <p className="mt-3 max-w-[52ch] text-[15px] leading-[1.6] text-white/55">
                  Your sector already runs on something: DHIS2, FHIR, HL7, some legacy API nobody
                  documented. We connect to it.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {["DHIS2", "FHIR", "HL7", "REST", "legacy APIs"].map((t) => (
                  <span key={t} className="chip !h-7">
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="eyebrow mr-2 !text-[10px]">Also in the stack</span>
            {MORE.map((m) => (
              <span key={m} className="chip">
                {m}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
