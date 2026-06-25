import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Cta from "@/components/Cta";

const DESC =
  "Book a 30-minute technical call with a senior engineer. Kinetic builds Data & AI platforms for healthcare, global health, and enterprise.";

export const metadata: Metadata = {
  title: "Contact Kinetic — Book a Data & AI Consult",
  description: DESC,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "https://www.kineticsbi.com/contact",
    siteName: "Kinetic BI",
    title: "Contact Kinetic — Book a Data & AI Consult",
    description: "Book a 30-minute technical call with a senior engineer. info@kineticsbi.com.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kinetic — Book a Data & AI Consult",
    description: "Book a 30-minute technical call with a senior engineer. info@kineticsbi.com.",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kineticsbi.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.kineticsbi.com/contact" },
  ],
};

export default function ContactPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <section className="relative z-10 pt-[150px] md:pt-[184px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-8">
          <div className="eyebrow">Contact</div>
          <h1 className="display mt-5 text-[clamp(40px,6.4vw,92px)]">
            Let&apos;s <span className="text-glow-red">talk</span>.
          </h1>
          <p className="mt-7 max-w-[60ch] text-[18px] leading-[1.6] text-white/65 md:text-[20px]">
            Book a 30-minute technical call with a senior engineer who can scope the work. We build
            Data &amp; AI platforms for healthcare, global health, and enterprise.
          </p>
        </div>
      </section>
      <Cta />
    </SiteShell>
  );
}
