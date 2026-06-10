"use client";

import { useMemo, useState } from "react";
import type { MegaItem, MegaKey } from "@/lib/content/mega";
import { MEGA } from "@/lib/content/mega";

type Props = {
  activeKey: MegaKey;
  onClose: () => void;
  onKeepOpen: () => void;
};

export default function MegaPanel({ activeKey, onClose, onKeepOpen }: Props) {
  const section = MEGA[activeKey];
  const [activeIndex, setActiveIndex] = useState(0);
  const active: MegaItem = useMemo(
    () => section.items[activeIndex] ?? section.items[0],
    [section, activeIndex]
  );

  const bgClass =
    active.color === "red"
      ? "red"
      : active.color === "sea"
        ? "sea"
        : "navy chart";

  return (
    <div
      className="mega-panel border-t hairline bg-white"
      onMouseEnter={onKeepOpen}
      onMouseLeave={onClose}
      role="region"
      aria-label={`${activeKey} preview`}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
    >
      <div className="max-w-shell mx-auto px-8 py-10 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5">
          <div className="font-mono text-[11px] uppercase tracking-widest text-navy/50">
            {section.eyebrow}
          </div>
          <ul className="mt-6 space-y-1 text-[40px] font-black tracking-tightest leading-[1.02]">
            {section.items.map((it, i) => (
              <li key={it.name}>
                <a
                  href="#"
                  className={`mega-link block py-1 ${i === activeIndex ? "active" : ""}`}
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                >
                  {it.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className={`aspect-[16/10] placeholder ${bgClass}`}>
            <div className="placeholder-label">
              <span>{`${active.name.toLowerCase()} · preview`}</span>
              <span>1600×1000</span>
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <div className="font-mono text-[12px] text-navy/60">
              {`${active.name} — ${active.blurb}`}
            </div>
            <a
              href="#"
              className="text-[13px] font-semibold underline underline-offset-4 decoration-navy/40 hover:decoration-navy"
            >
              See all →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
