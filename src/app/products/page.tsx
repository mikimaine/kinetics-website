import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import BentoCapabilities from "@/components/BentoCapabilities";
import ProcessScrub from "@/components/ProcessScrub";
import GovernanceBand from "@/components/GovernanceBand";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Capabilities — Applied AI, Data Platforms & BI | Kinetic",
  description:
    "Applied and agentic AI, AI platforms, data platforms, ETL/ELT pipelines, BI and visualization, and systems integration. The Data & AI capabilities Kinetic designs, builds, and runs in production.",
  alternates: { canonical: "/products" },
  openGraph: {
    type: "website",
    url: "https://www.kineticsbi.com/products",
    siteName: "Kinetic BI",
    title: "Capabilities — Applied AI, Data Platforms & BI | Kinetic",
    description:
      "Applied AI, AI platforms, data platforms, pipelines, BI, and systems integration, built and run in production.",
  },
};

export default function ProductsPage() {
  return (
    <SiteShell>
      <section className="relative z-10 pt-[150px] md:pt-[184px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="eyebrow">Capabilities</div>
          <h1 className="display mt-5 text-[clamp(40px,6.4vw,92px)]">
            Data and AI, <span className="text-glow-red">end to end</span>.
          </h1>
          <p className="mt-7 max-w-[64ch] text-[18px] leading-[1.6] text-white/65 md:text-[20px]">
            From applied AI to the data engineering underneath it. We design, build, and run the
            platforms that move your data from scattered to decisive, then keep them running under
            real load.
          </p>
        </div>
      </section>
      <BentoCapabilities />
      <ProcessScrub />
      <GovernanceBand />
      <Cta />
    </SiteShell>
  );
}
