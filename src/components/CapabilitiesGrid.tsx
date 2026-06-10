import { FEATURES } from "@/lib/content/features";
import RevealOnScroll from "./RevealOnScroll";
import TileCard from "./TileCard";

export default function CapabilitiesGrid() {
  return (
    <section id="capabilities" className="border-b hairline">
      <div className="max-w-shell mx-auto px-8 py-20">
        <RevealOnScroll className="flex items-end justify-between mb-10">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-navy/50">
              What we do · Capabilities
            </div>
            <h2 className="mt-3 text-[56px] md:text-[80px] font-black tracking-tightest leading-[0.9] text-navy">
              Full‑stack.
              <br />
              Data to product.
            </h2>
          </div>
          <a
            href="#engagements"
            className="hidden md:block text-[13px] font-semibold underline underline-offset-4 decoration-navy/40 hover:decoration-navy"
          >
            See how it&apos;s applied →
          </a>
        </RevealOnScroll>
        <div className="tile-grid grid grid-cols-2 md:grid-cols-3 gap-3">
          {FEATURES.map((f, i) => (
            <TileCard key={f.name} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
