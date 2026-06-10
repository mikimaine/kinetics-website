"use client";

import { useEffect, useRef, useState } from "react";
import type { MegaKey } from "@/lib/content/mega";
import MegaPanel from "./MegaPanel";

const NAV_ITEMS: Array<{ key?: MegaKey; label: string; href?: string }> = [
  { key: "capabilities", label: "Capabilities" },
  { key: "engagements", label: "Engagements" },
  { key: "pov", label: "Point of View" },
  { label: "How we work", href: "#how" },
  { label: "Contact", href: "#contact" },
];

export default function NavShell() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<MegaKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!activeMega) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMega(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [activeMega]);

  const show = (key: MegaKey) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setActiveMega(key);
  };
  const scheduleHide = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setActiveMega(null), 120);
  };
  const keepOpen = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
  };

  return (
    <div id="nav-shell" className={scrolled ? "scrolled" : undefined}>
      <header
        id="nav"
        ref={headerRef}
        className="border-b hairline"
        onMouseLeave={scheduleHide}
      >
        <div className="max-w-shell mx-auto px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/kbi-logo.png" alt="Kinetic BI" className="h-5 md:h-6 w-auto" />
          </a>
          <nav
            className="hidden md:flex items-center gap-1 text-[14px] font-medium whitespace-nowrap"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) =>
              item.key ? (
                <button
                  key={item.label}
                  type="button"
                  className="nav-btn px-4 h-16 hover:text-navy text-navy/70 whitespace-nowrap"
                  onMouseEnter={() => show(item.key!)}
                  onFocus={() => show(item.key!)}
                  onMouseLeave={scheduleHide}
                  aria-expanded={activeMega === item.key}
                  aria-haspopup="true"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 h-16 leading-[4rem] hover:text-navy text-navy/70 whitespace-nowrap"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-sm border hairline"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="block w-5 h-px bg-navy relative before:absolute before:content-[''] before:w-5 before:h-px before:bg-navy before:-top-1.5 after:absolute after:content-[''] after:w-5 after:h-px after:bg-navy after:top-1.5" />
            </button>
            <button
              type="button"
              className="text-[14px] font-semibold px-4 py-2 rounded-sm bg-red text-white hover:bg-navy transition-colors hidden sm:inline-flex"
            >
              Start a conversation
            </button>
          </div>
        </div>

        {activeMega && (
          <MegaPanel
            activeKey={activeMega}
            onClose={scheduleHide}
            onKeepOpen={keepOpen}
          />
        )}

        {mobileOpen && (
          <div className="md:hidden border-t hairline bg-white">
            <nav className="max-w-shell mx-auto px-8 py-4 flex flex-col gap-1 text-[15px]">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href ?? `#${item.key}`}
                  className="py-2 text-navy/80 hover:text-navy"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                className="mt-2 text-[14px] font-semibold px-4 py-2 rounded-sm bg-red text-white hover:bg-navy transition-colors self-start"
              >
                Start a conversation
              </button>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
