import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kineticsbi.com"),
  title: "Kinetic BI \u2014 Data & AI for work that can't fail",
  description:
    "Kinetic builds applied-AI platforms and the data engineering underneath them, for healthcare, global health, and enterprise. 200+ projects since 2016, now building in the US.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.kineticsbi.com",
    siteName: "Kinetic",
    title: "Kinetic BI \u2014 Data & AI for work that can't fail",
    description:
      "Applied-AI platforms and the data engineering underneath them, for healthcare, global health, and enterprise.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinetic BI \u2014 Data & AI for work that can't fail",
    description:
      "Applied-AI platforms and the data engineering underneath them.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kinetic Business Intelligence",
  alternateName: ["Kinetic BI", "Kinetic"],
  url: "https://www.kineticsbi.com",
  logo: "https://www.kineticsbi.com/kbi-logo.png",
  email: "info@kineticsbi.com",
  foundingDate: "2016",
  sameAs: [
    "https://www.linkedin.com/company/kinetic-bi/",
    "https://x.com/kineticsbi",
  ],
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Wilmington",
      addressRegion: "DE",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Dallas",
      addressRegion: "TX",
      addressCountry: "US",
    },
  ],
  founder: [
    { "@type": "Person", name: "Mikiyas Amdu", jobTitle: "Co-founder & CEO" },
    { "@type": "Person", name: "Sosena Terefe", jobTitle: "Co-founder & COO" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
