import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import StressTest from "@/components/StressTest";
import FounderBand from "@/components/FounderBand";
import PointOfView from "@/components/PointOfView";
import Quote from "@/components/Quote";
import Cta from "@/components/Cta";

const DESC =
  "Kinetic is a Data & AI engineering firm for high-stakes operations. A team of more than 40, founded in 2016, with 200+ projects across continental health systems, UN agencies, and regulated enterprise.";

export const metadata: Metadata = {
  title: "About Kinetic — Founder-led Data & AI Engineering Firm",
  description: DESC,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "https://www.kineticsbi.com/about",
    siteName: "Kinetic BI",
    title: "About Kinetic — Founder-led Data & AI Engineering Firm",
    description: "A Data & AI engineering firm for high-stakes operations. 40+ specialists, 200+ projects since 2016.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Kinetic — Founder-led Data & AI Engineering Firm",
    description: "A Data & AI engineering firm for high-stakes operations. 40+ specialists, 200+ projects since 2016.",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kineticsbi.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.kineticsbi.com/about" },
  ],
};

export default function AboutPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <section className="relative z-10 pt-[150px] md:pt-[184px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="eyebrow">About Kinetic</div>
          <h1 className="display mt-5 text-[clamp(40px,6.4vw,92px)]">
            Built for data that <span className="text-glow-red">can&apos;t fail</span>.
          </h1>
          <p className="mt-7 max-w-[64ch] text-[18px] leading-[1.6] text-white/65 md:text-[20px]">
            Kinetic is a Data &amp; AI engineering firm for high-stakes operations. We build the
            applied-AI platforms and the data engineering underneath them, for healthcare, global
            health, and enterprise. A team of more than 40, founded in 2016, with 200-plus projects
            behind us.
          </p>
        </div>
      </section>
      <StressTest />
      <FounderBand />
      <PointOfView />
      <Quote />
      <Cta />
    </SiteShell>
  );
}
