import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Cta from "@/components/Cta";

const DESC =
  "Book a 30-minute technical call with a senior engineer at Kinetic. We build Data & AI platforms for healthcare, global health, and enterprise. Email info@kineticsbi.com or use the form.";

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
      <div className="pt-[70px] md:pt-[90px]" />
      <Cta />
    </SiteShell>
  );
}
