import RevealOnScroll from "./RevealOnScroll";

export default function Testimonial() {
  return (
    <section id="testimonial" className="border-b hairline bg-bone">
      <div className="max-w-shell mx-auto px-8 py-24 grid grid-cols-12 gap-8 items-start">
        <RevealOnScroll className="col-span-12 md:col-span-3">
          <div className="aspect-square placeholder sea">
            <div className="placeholder-label">
              <span>greco johnson · phii</span>
              <span>400×400</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="font-black text-navy text-[16px] leading-tight">
              Greco Johnson, MPH
            </div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-navy/55 mt-1">
              Informatics Project Team Lead
            </div>
            <div className="font-mono text-[11px] text-navy/55">
              Public Health Informatics Institute · Task Force for Global Health
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll as="div" className="col-span-12 md:col-span-9">
          <blockquote>
            <div className="font-mono text-[11px] uppercase tracking-widest text-red mb-4">
              On the Africa CDC Central Data Repository engagement
            </div>
            <p className="text-[28px] md:text-[40px] font-black tracking-tightest leading-[1.05] text-navy max-w-[36ch]">
              &ldquo;Kinetics Business Intelligence is a{" "}
              <span className="text-red">top‑tier development partner</span>. They acted as genuine
              strategic partners, frequently proposing architectural and functional improvements
              that were instrumental in helping us deliver the project on time and within
              budget.&rdquo;
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-navy/75 max-w-[62ch]">
              &ldquo;Their ability to translate complex technical concepts into clear, actionable
              business insights for our diverse stakeholders was a significant asset. The resulting
              product has demonstrably enhanced Africa CDC&apos;s user engagement and internal
              operational efficiency.&rdquo;
            </p>
          </blockquote>
        </RevealOnScroll>
      </div>
    </section>
  );
}
