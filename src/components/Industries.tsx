import { INDUSTRIES } from "@/lib/content/pov";
import RevealOnScroll from "./RevealOnScroll";

export default function Industries() {
  return (
    <section id="industries" className="border-b hairline bg-bone">
      <div className="max-w-shell mx-auto px-8 py-20">
        <RevealOnScroll
          as="div"
          className="font-mono text-[11px] uppercase tracking-widest text-navy/50"
        >
          Industries we&apos;ve delivered in
        </RevealOnScroll>
        <RevealOnScroll as="div" delay={0.05}>
          <h3 className="mt-3 text-[40px] md:text-[60px] font-black tracking-tightest leading-[0.95] text-navy max-w-[24ch]">
            Same engineering rigor. Very different data.
          </h3>
        </RevealOnScroll>
        <div
          className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-px"
          style={{ backgroundColor: "rgba(12,26,43,0.12)" }}
        >
          {INDUSTRIES.map((ind) => (
            <div key={ind.number} className="bg-bone p-6">
              <div className="font-mono text-[11px] uppercase tracking-widest text-red">
                {ind.number}
              </div>
              <div className="mt-2 text-[22px] font-black text-navy">{ind.name}</div>
              <p className="mt-2 text-[13px] text-navy/65">{ind.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
