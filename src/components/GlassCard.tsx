"use client";

import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  style?: CSSProperties;
};

/** Liquid-glass panel with pointer-tracked specular highlight. */
export default function GlassCard({ children, className = "", interactive = true, style }: Props) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div onMouseMove={onMove} style={style} className={`glass ${interactive ? "glass-i" : ""} ${className}`}>
      {children}
    </div>
  );
}
