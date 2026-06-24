"use client";

import { motion } from "framer-motion";
import LiveConsole from "./LiveConsole";
import CountUp from "./CountUp";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Masked line reveal for the headline. */
function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={{ y: "112%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const STATS = [
  { to: 200, suffix: "+", label: "Projects shipped since 2016" },
  { to: 5, suffix: "×", label: "Output on AI platforms" },
  { to: 40, suffix: "%", label: "Lower support cost" },
  { to: 0, suffix: "", label: "Rip-and-replace projects" },
];

export default function HeroV2() {
  return (
    <section id="top" className="relative z-10 pt-[148px] md:pt-[170px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-y-16 lg:grid-cols-12 lg:gap-x-10">
          {/* left: message */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
              className="chip mb-8 !h-8"
            >
              <span className="pulse-dot !h-[6px] !w-[6px]" />
              Founder-led Data &amp; AI studio
            </motion.div>

            <h1 className="display text-[clamp(38px,6.2vw,100px)]">
              <Line delay={0.35}>AI and data systems</Line>
              <Line delay={0.48}>
                for work that <span className="word-capsule">can&apos;t fail</span>
              </Line>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
              className="mt-8 max-w-[54ch] text-[17px] leading-[1.6] text-white/65 md:text-[19px]"
            >
              Kinetic builds applied-AI platforms and the data engineering underneath them. We work
              in healthcare, global health, and enterprise, where the data is messy and the stakes
              are real. Ten years of it, across four continents. Now we&apos;re building in the US.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="cap cap-red">
                Book a consult
              </a>
              <a href="#work" className="cap cap-glass">
                See the work <span aria-hidden>→</span>
              </a>
              <span className="eyebrow !text-[10px]">SOC 2 · HIPAA-ready · GDPR</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-14 grid grid-cols-2 gap-7 border-t border-white/10 pt-8 md:grid-cols-4"
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-[36px] font-black tracking-[-0.03em] text-white">
                    <CountUp to={s.to} duration={2.2} />
                    {s.suffix && <span className="text-glow-red">{s.suffix}</span>}
                  </div>
                  <div className="eyebrow mt-1 !text-[9.5px]">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* right: live proof */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.7, ease: EASE }}
          >
            <LiveConsole />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
