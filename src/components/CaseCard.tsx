import type { CaseCase } from "@/lib/content/cases";

export default function CaseCard({ item }: { item: CaseCase }) {
  return (
    <a
      href="#"
      className="group block shrink-0 w-[68vw] md:w-[40vw] lg:w-[32vw]"
    >
      <div className="aspect-[4/5] overflow-hidden rounded-sm relative bg-bone">
        <img
          src={item.img}
          alt={item.studio}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <div>
          <div className="text-[20px] font-black tracking-tight text-navy">{item.studio}</div>
          <div className="font-mono text-[11px] text-navy/55 uppercase tracking-widest">
            {item.discipline}
          </div>
        </div>
        <div className="text-[12px] font-semibold underline underline-offset-4 decoration-navy/40 group-hover:decoration-navy">
          Read case →
        </div>
      </div>
    </a>
  );
}
