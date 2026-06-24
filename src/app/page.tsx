import "./v2/v2.css";

import Aurora from "@/components/v2/Aurora";
import GlassNav from "@/components/v2/GlassNav";
import HeroV2 from "@/components/v2/HeroV2";
import ClientMarquee from "@/components/v2/ClientMarquee";
import StressTest from "@/components/v2/StressTest";
import BentoCapabilities from "@/components/v2/BentoCapabilities";
import CasesV2 from "@/components/v2/CasesV2";
import ProcessScrub from "@/components/v2/ProcessScrub";
import GovernanceBand from "@/components/v2/GovernanceBand";
import PointOfViewV2 from "@/components/v2/PointOfViewV2";
import QuoteV2 from "@/components/v2/QuoteV2";
import FounderBand from "@/components/v2/FounderBand";
import CtaV2 from "@/components/v2/CtaV2";

export default function Home() {
  return (
    <main className="v2page">
      <Aurora />
      <GlassNav />
      <HeroV2 />
      <div className="mt-24 md:mt-32">
        <ClientMarquee />
      </div>
      <StressTest />
      <BentoCapabilities />
      <CasesV2 />
      <ProcessScrub />
      <GovernanceBand />
      <PointOfViewV2 />
      <QuoteV2 />
      <FounderBand />
      <CtaV2 />
    </main>
  );
}
