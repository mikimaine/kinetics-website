"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import GlassCard from "./GlassCard";
import CountUp from "./CountUp";

/* Chart geometry: a believable "rows per minute" series */
const PTS = [
  [0, 86], [24, 78], [48, 82], [72, 70], [96, 74], [120, 62], [144, 66], [168, 52],
  [192, 58], [216, 44], [240, 50], [264, 36], [288, 40], [312, 26], [336, 30], [360, 18],
] as const;
const LINE = PTS.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
const AREA = `${LINE} L360,110 L0,110 Z`;
const END = PTS[PTS.length - 1];

const NODES = ["RAW", "STG", "MART", "BI"];

/**
 * The hero's proof object: a live-feeling ops console.
 * Charts draw themselves, numbers count, pipeline pulses travel.
 */
export default function LiveConsole() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  // pointer tilt
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rX = useSpring(useTransform(my, [0, 1], [4.5, -4.5]), { stiffness: 120, damping: 18 });
  const rY = useSpring(useTransform(mx, [0, 1], [-5.5, 5.5]), { stiffness: 120, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div ref={ref} style={{ perspective: 1300 }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div
        style={{ rotateX: rX, rotateY: rY, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <GlassCard interactive={false} className="p-6 md:p-7">
          {/* title bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="pulse-dot" />
              <span className="eyebrow !text-white/70">kbi · ops console</span>
            </div>
            <span className="chip !h-7">streaming · last 24h</span>
          </div>

          {/* metrics */}
          <div className="mt-7 grid grid-cols-3 gap-4">
            <div>
              <div className="text-[30px] font-black tracking-[-0.03em] text-white md:text-[34px]">
                <CountUp to={2.4} decimals={1} suffix="M" />
              </div>
              <div className="eyebrow mt-1 !text-[9.5px]">rows / hour</div>
            </div>
            <div>
              <div className="text-[30px] font-black tracking-[-0.03em] md:text-[34px]">
                <CountUp to={99.4} decimals={1} suffix="%" className="text-glow-red" />
              </div>
              <div className="eyebrow mt-1 !text-[9.5px]">contract coverage</div>
            </div>
            <div>
              <div className="text-[30px] font-black tracking-[-0.03em] text-white md:text-[34px]">
                <CountUp to={90} prefix="<" suffix="s" duration={1.4} />
              </div>
              <div className="eyebrow mt-1 !text-[9.5px]">end-to-end lag</div>
            </div>
          </div>

          {/* chart */}
          <div className="mt-6 rounded-2xl border border-white/[0.08] bg-black/20 p-4">
            <svg viewBox="0 0 360 112" className="h-auto w-full" fill="none">
              <defs>
                <linearGradient id="lc-line" x1="0" y1="0" x2="360" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#ff7a7d" />
                  <stop offset="1" stopColor="#df2127" />
                </linearGradient>
                <linearGradient id="lc-area" x1="0" y1="0" x2="0" y2="112" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#df2127" stopOpacity="0.28" />
                  <stop offset="1" stopColor="#df2127" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* grid */}
              {[28, 56, 84].map((y) => (
                <line key={y} x1="0" x2="360" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              ))}
              {/* baseline series (sea, dotted) */}
              <motion.path
                d="M0,92 L48,88 L96,84 L144,78 L192,74 L240,66 L288,60 L336,56 L360,52"
                stroke="rgba(35,96,173,0.85)"
                strokeWidth="1.5"
                strokeDasharray="3 5"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 0.8 } : {}}
                transition={{ duration: 1.2, delay: 1.4 }}
              />
              {/* area fill */}
              <motion.path
                d={AREA}
                fill="url(#lc-area)"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1.4, delay: 1.1 }}
              />
              {/* main line draws itself */}
              <motion.path
                d={LINE}
                stroke="url(#lc-line)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.8, delay: 0.5, ease: [0.65, 0, 0.35, 1] }}
              />
              {/* live endpoint */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 2.2 }}
              >
                <circle cx={END[0]} cy={END[1]} r="4" fill="#ff5d62" />
                <circle cx={END[0]} cy={END[1]} r="4" fill="none" stroke="rgba(255,93,98,0.7)">
                  <animate attributeName="r" values="4;12" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0" dur="1.8s" repeatCount="indefinite" />
                </circle>
              </motion.g>
            </svg>
            <div className="mt-2 flex items-center justify-between">
              <span className="eyebrow !text-[9px]">rows per minute</span>
              <span className="eyebrow !text-[9px] !text-white/35">freshness sla · met</span>
            </div>
          </div>

          {/* pipeline */}
          <div className="mt-5">
            <svg viewBox="0 0 360 14" className="w-full" fill="none" aria-hidden="true">
              <path d="M8,7 H352" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
              <path d="M8,7 H352" stroke="rgba(255,122,125,0.85)" strokeWidth="1.6" className="flowline" />
              {[8, 122, 237, 352].map((x) => (
                <circle key={x} cx={x} cy="7" r="3.5" fill="#0b1322" stroke="rgba(255,255,255,0.5)" />
              ))}
            </svg>
            <div className="mt-1.5 flex justify-between">
              {NODES.map((n) => (
                <span key={n} className="eyebrow !text-[9px] !tracking-[0.14em]">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
