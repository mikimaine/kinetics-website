"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PHASES } from "@/lib/content/pov";

export default function Spotlight() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(scrollYProgress, (t) => `${Math.round(t * 100)}%`);
  const phaseLabel = useTransform(scrollYProgress, (t) => {
    const p = Math.min(3, Math.floor(t * 4));
    return `0${p + 1} / 04`;
  });

  return (
    <section id="how" className="bg-navy text-white relative">
      <div ref={wrapRef} className="relative" style={{ height: "300vh" }}>
        <div className="sticky top-0 h-screen flex items-center">
          <div className="max-w-shell w-full mx-auto px-8 grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-5">
              <div className="font-mono text-[11px] uppercase tracking-widest text-white/50">
                How we work
              </div>
              <h3 className="mt-6 text-[56px] md:text-[84px] font-black tracking-tightest leading-[0.9]">
                Four phases.
                <br />
                Predictable delivery.
              </h3>
              <div className="mt-10 space-y-5">
                {PHASES.map((p, i) => (
                  <PhaseStep
                    key={p.number}
                    scrollYProgress={scrollYProgress}
                    index={i}
                    phase={p}
                  />
                ))}
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="font-mono text-[11px] text-white/50">SCROLL</div>
                <div className="w-40 h-[2px] bg-white/20 relative">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-red"
                    style={{ width: progressWidth }}
                  />
                </div>
                <motion.div className="font-mono text-[11px] text-white/50 ticker-num">
                  {phaseLabel}
                </motion.div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 relative">
              <div className="aspect-[4/3] relative">
                {PHASES.map((p, i) => (
                  <PhaseImage
                    key={p.number}
                    scrollYProgress={scrollYProgress}
                    index={i}
                    src={p.img}
                    alt={`${p.title} illustration`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ScrollMV = ReturnType<typeof useScroll>["scrollYProgress"];

function PhaseStep({
  scrollYProgress,
  index,
  phase,
}: {
  scrollYProgress: ScrollMV;
  index: number;
  phase: (typeof PHASES)[number];
}) {
  const opacity = useTransform(scrollYProgress, (t) => {
    const p = Math.min(3, Math.floor(t * 4));
    return p === index ? 1 : 0.28;
  });
  const y = useTransform(scrollYProgress, (t) => {
    const p = Math.min(3, Math.floor(t * 4));
    return p === index ? 0 : 4;
  });

  return (
    <motion.div
      style={{ opacity, y }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="flex items-start gap-4">
        <span className="font-mono text-[11px] text-red w-10 pt-1">{phase.number}</span>
        <div>
          <div className="text-[22px] font-bold">{phase.title}</div>
          <p className="mt-1 text-[16px] leading-snug text-white/75 max-w-[44ch]">
            {phase.body}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function PhaseImage({
  scrollYProgress,
  index,
  src,
  alt,
}: {
  scrollYProgress: ScrollMV;
  index: number;
  src: string;
  alt: string;
}) {
  const opacity = useTransform(scrollYProgress, (t) => {
    const p = Math.min(3, Math.floor(t * 4));
    return p === index ? 1 : 0;
  });

  return (
    <motion.div
      className="absolute inset-0 transition-opacity"
      style={{ opacity }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </motion.div>
  );
}
