import { Helmet } from "react-helmet";
import LandingHero from "@/components/LandingHero";
import JourneySection from "@/components/JourneySection";
import GrantsSection from "@/components/GrantsSection";
import ResultsSection from "@/components/ResultsSection";
import OpIntelCTA from "@/components/OpIntelCTA";
import OpIntelBookingForm from "@/components/OpIntelBookingForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  const scrollToBookingForm = () => {
    const element = document.querySelector('#booking-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>KPI Digital | Operational Intelligence & Energy Savings for Tasmanian Businesses</title>
        <meta
          name="description"
          content="Independent energy audits, net zero roadmaps, and AI automation to slash power bills for Tasmanian SMBs. Start with a grant-funded audit."
        />
      </Helmet>

      <div className="min-h-screen bg-background font-sans">
        <Navigation onCTAClick={scrollToBookingForm} />

        <main className="space-y-0 pb-0">
          <LandingHero onCTAClick={scrollToBookingForm} />
          <JourneySection />
          <GrantsSection onCTAClick={scrollToBookingForm} />
          <ResultsSection onCTAClick={scrollToBookingForm} />
          <OpIntelCTA onCTAClick={scrollToBookingForm} />
          <OpIntelBookingForm />
        </main>

        <Footer onCTAClick={scrollToBookingForm} />
        <ScrollIndicator />
        <ChatWidget />
      </div>
    </>
  );
}