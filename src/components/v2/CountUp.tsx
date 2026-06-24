"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  to: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

/** Number that counts up when scrolled into view. */
export default function CountUp({ to, decimals = 0, duration = 1.8, prefix = "", suffix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  // Start at the real value so SSR, no-JS, and crawlers/AI see the true number;
  // the count-up animation is a client-side enhancement applied after hydration.
  const [val, setVal] = useState(to);
  const animated = useRef(false);

  useEffect(() => {
    if (!inView || animated.current) return;
    // Respect reduced-motion: keep the final value, skip the count.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    animated.current = true;

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}
