export default function AnnouncementStrip() {
  return (
    <div className="bg-navy text-white text-[12px] font-mono tracking-wider">
      <div className="max-w-shell mx-auto px-8 h-9 flex items-center justify-between">
        <span className="opacity-80">
          KBI · Business Intelligence · Data Engineering · Custom Software
        </span>
        <span className="hidden md:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red live-dot" aria-hidden="true" />
          <span>Now engineering · 6 active engagements across 3 continents</span>
        </span>
      </div>
    </div>
  );
}
