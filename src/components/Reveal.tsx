"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
};

/** Scroll reveal: rise + (optionally) blur-to-sharp — data "condensing into clarity". */
export default function Reveal({ children, className, delay = 0, y = 30, blur = false }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, ...(blur ? { filter: "blur(12px)" } : {}) }}
      whileInView={{ opacity: 1, y: 0, ...(blur ? { filter: "blur(0px)" } : {}) }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
