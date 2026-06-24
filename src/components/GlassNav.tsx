"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const LINKS = [
  { label: "Capabilities", href: "/products" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
];

/** Floating liquid-glass nav pill. */
export default function GlassNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6"
    >
      <nav
        className={`sitenav glass mx-auto flex h-[60px] max-w-[1080px] items-center justify-between !rounded-full pl-6 pr-2 ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/kbi-logo.png"
            alt="Kinetic Business Intelligence"
            className="h-5 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>
        <div className="hidden items-center gap-8 text-[14px] font-medium md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="sitenav-link">
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="cap cap-red !h-10 !px-4 !text-[13px] md:!h-11 md:!px-6 md:!text-[14px]"
        >
          Book a consult
        </Link>
      </nav>
    </motion.header>
  );
}
