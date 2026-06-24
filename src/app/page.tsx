import "./site.css";

import Aurora from "@/components/Aurora";
import GlassNav from "@/components/GlassNav";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import StressTest from "@/components/StressTest";
import BentoCapabilities from "@/components/BentoCapabilities";
import Cases from "@/components/Cases";
import ProcessScrub from "@/components/ProcessScrub";
import GovernanceBand from "@/components/GovernanceBand";
import PointOfView from "@/components/PointOfView";
import Quote from "@/components/Quote";
import FounderBand from "@/components/FounderBand";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main className="site">
      <Aurora />
      <GlassNav />
      <Hero />
      <div className="mt-24 md:mt-32">
        <ClientMarquee />
      </div>
      <StressTest />
      <BentoCapabilities />
      <Cases />
      <ProcessScrub />
      <GovernanceBand />
      <PointOfView />
      <Quote />
      <FounderBand />
      <Cta />
    </main>
  );
}
