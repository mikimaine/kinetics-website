import { POV_PRINCIPLES } from "@/lib/content/pov";
import RevealOnScroll from "./RevealOnScroll";

const VARIANT_CLASSES: Record<"white" | "bone" | "navy", string> = {
  white: "bg-white hairline text-navy",
  bone: "bg-bone hairline text-navy",
  navy: "bg-navy text-white hairline-ink",
};

export default function PointOfView() {
  return (
    <section id="pov" className="border-b hairline">
      <div className="max-w-shell mx-auto px-8 py-24 grid grid-cols-12 gap-8">
        <RevealOnScroll className="col-span-12 md:col-span-5">
          <div className="font-mono text-[11px] uppercase tracking-widest text-navy/50">
            Point of view
          </div>
          <h3 className="mt-4 text-[44px] md:text-[64px] font-black tracking-tightest leading-[0.92] text-navy">
            Opinions we&apos;re willing to defend.
          </h3>
          <p className="mt-6 text-navy/70 text-[16px] leading-relaxed max-w-[50ch]">
            A decade of building data platforms teaches you what the decks won&apos;t. These are
            the principles we bring into every engagement — unless you convince us otherwise.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-block text-[14px] font-semibold px-4 py-2 rounded-sm bg-navy text-white hover:bg-red transition-colors"
            >
              Start a conversation
            </a>
            <a
              href="#engagements"
              className="inline-block text-[14px] font-semibold underline underline-offset-4 decoration-navy/40 hover:decoration-navy py-2"
            >
              See it in practice →
            </a>
          </div>
        </RevealOnScroll>
        <div className="col-span-12 md:col-span-7 space-y-3">
          {POV_PRINCIPLES.map((p) => {
            const isNavy = p.variant === "navy";
            return (
              <RevealOnScroll
                key={p.number}
                className={`p-8 border rounded-sm ${VARIANT_CLASSES[p.variant]}`}
              >
                <div className="flex items-start gap-5">
                  <span className="font-mono text-[11px] text-red pt-1">{p.number}</span>
                  <div>
                    <div
                      className={`text-[28px] font-black tracking-tightest leading-[1.05] ${
                        isNavy ? "" : "text-navy"
                      }`}
                    >
                      {p.title}
                    </div>
                    <p
                      className={`mt-2 text-[15px] leading-relaxed max-w-[58ch] ${
                        isNavy ? "text-white/70" : "text-navy/70"
                      }`}
                    >
                      {p.body}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
