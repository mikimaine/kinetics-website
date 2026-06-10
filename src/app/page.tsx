import AnnouncementStrip from "@/components/AnnouncementStrip";
import NavShell from "@/components/NavShell";
import Hero from "@/components/Hero";
import TrustTicker from "@/components/TrustTicker";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import Spotlight from "@/components/Spotlight";
import EngagementsRail from "@/components/EngagementsRail";
import PointOfView from "@/components/PointOfView";
import Industries from "@/components/Industries";
import Testimonial from "@/components/Testimonial";
import FooterCTA from "@/components/FooterCTA";
import SideNav from "@/components/SideNav";

export default function Home() {
  return (
    <>
      <AnnouncementStrip />
      <NavShell />
      <Hero />
      <TrustTicker />
      <CapabilitiesGrid />
      <Spotlight />
      <EngagementsRail />
      <PointOfView />
      <Industries />
      <Testimonial />
      <FooterCTA />
      <SideNav />
    </>
  );
}
