"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  { target: "hero", label: "Start" },
  { target: "capabilities", label: "Capabilities" },
  { target: "how", label: "Process" },
  { target: "engagements", label: "Work" },
  { target: "pov", label: "POV" },
  { target: "testimonial", label: "Voices" },
];

export default function SideNav() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let idx = 0;
      ITEMS.forEach((it, i) => {
        const el = document.getElementById(it.target);
        if (el && el.offsetTop <= y) idx = i;
      });
      setActiveIdx(idx);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <aside
      id="sidenav"
      className="fixed left-6 top-1/2 -translate-y-1/2 z-30 hidden md:block"
      aria-label="Section navigation"
    >
      <ul className="space-y-5">
        {ITEMS.map((it, i) => (
          <li key={it.target}>
            <button
              type="button"
              className={`sidenav-item flex items-center gap-3 ${
                i === activeIdx ? "active" : ""
              }`}
              onClick={() => {
                const el = document.getElementById(it.target);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <span className="sidenav-dot w-1.5 h-1.5 rounded-full bg-navy/30 block" />
              <span className="sidenav-label font-mono text-[11px] uppercase tracking-widest text-navy/70">
                {it.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
