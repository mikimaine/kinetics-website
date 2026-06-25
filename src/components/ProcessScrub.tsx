"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import GlassCard from "./GlassCard";

const PHASES = [
  {
    n: "01",
    title: "Discovery",
    body: "Stakeholder interviews, a data-estate audit, and a written scope. Success metrics and risks get named before a single line of code.",
    chips: ["Stakeholder map", "Success metrics", "Risk register"],
    week: "WK 0–2",
  },
  {
    n: "02",
    title: "Architecture",
    body: "A target architecture that fits your stack, cloud or hybrid or edge, with the data contracts and governance chosen for the long haul, not the demo.",
    chips: ["Data contracts", "Target stack", "Governance plan"],
    week: "WK 2–4",
  },
  {
    n: "03",
    title: "Build & integrate",
    body: "A dedicated squad shipping in two-week iterations. Pipelines, products, and dashboards, all tested against your real data.",
    chips: ["2-week sprints", "Real-data tests", "CI/CD from day one"],
    week: "WK 4–10",
  },
  {
    n: "04",
    title: "Operate & transfer",
    body: "Runbooks, training, and SLA-backed support. When your team is ready, the system is theirs to run, or we stay on as a managed partner.",
    chips: ["Runbooks", "SLA support", "Team training"],
    week: "WK 10+",
  },
];

/** Scroll-pinned four-phase scrubber, glass edition. */
export default function ProcessScrub() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setPhase(Math.max(0, Math.min(3, Math.floor(v * 4))));
  });

  const active = PHASES[phase];

  return (
    <section id="process" ref={wrapRef} className="relative z-10 h-[340vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
          <div className="eyebrow">How we work</div>
          <h2 className="display mt-4 text-[clamp(36px,4.6vw,64px)]">
            Four phases. <span className="text-white/45">Predictable delivery.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10">
            {/* phase list */}
            <div className="md:col-span-5">
              <ol className="space-y-7">
                {PHASES.map((p, i) => (
                  <li
                    key={p.n}
                    className="transition-all duration-500"
                    style={{ opacity: i === phase ? 1 : 0.3, transform: `translateX(${i === phase ? 8 : 0}px)` }}
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`font-mono text-[11px] ${i === phase ? "text-glow-red" : "text-white/40"}`}
                      >
                        {p.n}
                      </span>
                      <div>
                        <div className="text-[22px] font-black tracking-[-0.02em] text-white md:text-[26px]">
                          {p.title}
                        </div>
                        {i === phase && (
                          <motion.p
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mt-2 max-w-[46ch] text-[14px] leading-[1.6] text-white/55 md:hidden"
                          >
                            {p.body}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              {/* progress */}
              <div className="mt-10 flex items-center gap-4">
                <span className="eyebrow !text-[9.5px]">scroll</span>
                <div className="h-[3px] w-44 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full origin-left rounded-full"
                    style={{
                      scaleX: scrollYProgress,
                      background: "linear-gradient(90deg, #df2127, #ff7a7d)",
                    }}
                  />
                </div>
                <span className="font-mono text-[11px] text-white/55">{active.n} / 04</span>
              </div>
            </div>

            {/* phase panel */}
            <div className="hidden md:col-span-7 md:block">
              <GlassCard interactive={false} className="relative min-h-[380px] overflow-hidden p-8 md:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.n}
                    initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-4 -top-10 select-none text-[210px] font-black leading-none tracking-[-0.06em] text-white/[0.05]"
                    >
                      {active.n}
                    </div>
                    <span className="chip">{active.week}</span>
                    <h3 className="mt-8 text-[34px] font-black tracking-[-0.03em] text-white md:text-[44px]">
                      {active.title}
                    </h3>
                    <p className="mt-4 max-w-[50ch] text-[15.5px] leading-[1.65] text-white/60">
                      {active.body}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2.5">
                      {active.chips.map((c) => (
                        <span key={c} className="chip">
                          ◆ <span className="!normal-case">{c}</span>
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
