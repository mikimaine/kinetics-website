"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { CASES } from "@/lib/content/cases";
import CaseCard from "./CaseCard";

export default function EngagementsRail() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const wrapHeight = useMotionValue<number | string>("100vh");

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, (t) => (isDesktop ? -t * maxX : 0));

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      if (!isDesktop) {
        setMaxX(0);
        wrapHeight.set("auto");
        return;
      }
      const next = Math.max(0, track.scrollWidth - window.innerWidth + 64);
      setMaxX(next);
      wrapHeight.set(next === 0 ? window.innerHeight : window.innerHeight + next);
    };

    measure();
    requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(measure);
    }
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
    };
  }, [isDesktop, wrapHeight]);

  return (
    <section id="engagements" className="border-b hairline bg-white">
      <motion.div
        ref={wrapRef}
        className="relative"
        style={{ height: wrapHeight }}
      >
        <div
          className={`${
            isDesktop ? "sticky top-0 h-screen" : ""
          } flex flex-col`}
        >
          <div className="max-w-shell mx-auto px-8 pt-16 pb-6 flex items-end justify-between w-full shrink-0">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-navy/50">
                Selected engagements
              </div>
              <h2 className="mt-3 text-[44px] md:text-[64px] font-black tracking-tightest leading-[0.9] text-navy">
                Shipped.
                <br />
                Across sectors.
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-3 font-mono text-[11px] text-navy/50">
              <span>Scroll to scrub</span>
              <span>→</span>
            </div>
          </div>
          <div className="flex-1 flex items-center overflow-hidden">
            <motion.div
              ref={trackRef}
              className="rail-track flex gap-6 pl-8"
              style={isDesktop ? { x } : undefined}
            >
              {CASES.map((c) => (
                <CaseCard key={c.studio} item={c} />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
