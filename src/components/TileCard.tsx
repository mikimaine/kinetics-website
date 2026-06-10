import type { Feature } from "@/lib/content/features";

type Props = {
  feature: Feature;
  index: number;
};

export default function TileCard({ feature, index }: Props) {
  const isNavy = feature.color === "navy";
  const isRed = feature.color === "red";
  const isSea = feature.color === "sea";
  const isBig = index === 0;
  const baseBg = isNavy
    ? "bg-navy text-white"
    : isRed
      ? "bg-[rgba(223,33,39,0.08)]"
      : isSea
        ? "bg-[rgba(35,96,173,0.08)]"
        : "bg-bone";
  const mutedText = isNavy ? "text-white/60" : "text-navy/60";
  const span = isBig ? "md:col-span-2" : "";
  const colorCls = feature.color;
  const shortcutBg = isNavy
    ? "bg-white text-navy"
    : isRed
      ? "bg-red text-white"
      : isSea
        ? "bg-sea text-white"
        : "bg-navy text-white";

  return (
    <a
      href="#"
      className={`tile group relative overflow-hidden rounded-sm border ${
        isNavy ? "hairline-ink" : "hairline"
      } ${baseBg} ${span} aspect-[5/4] md:aspect-auto md:min-h-[280px] flex flex-col justify-between p-6`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`w-8 h-8 ${shortcutBg} grid place-items-center font-black text-[13px] rounded-sm`}
          >
            {feature.shortcut}
          </span>
          <span
            className={`font-mono text-[11px] ${mutedText} uppercase tracking-widest`}
          >
            {feature.kind}
          </span>
        </div>
        <span className={`font-mono text-[11px] ${mutedText}`}>
          {`0${index + 1}`}
        </span>
      </div>
      <div className="relative">
        <div
          className={`hover-img absolute -inset-6 -z-0 placeholder ${colorCls} rounded-sm hover-layer`}
        >
          <div className="placeholder-label">
            <span>{`${feature.name.toLowerCase()}_preview`}</span>
            <span>hover</span>
          </div>
        </div>
        <div className="relative z-10">
          <div
            className={`${isNavy ? "text-white" : "text-navy"} text-[28px] md:text-[38px] font-black tracking-tightest leading-[0.98]`}
          >
            {feature.name}
          </div>
          <div className={`mt-2 ${mutedText} text-[14px]`}>{feature.tag}</div>
          <div
            className={`mt-6 flex items-center gap-2 text-[13px] font-semibold ${
              isNavy ? "text-white" : "text-navy"
            }`}
          >
            <span>Learn more</span>
            <span className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
