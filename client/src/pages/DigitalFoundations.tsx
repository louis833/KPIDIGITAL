import { Helmet } from "react-helmet";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import SolutionSection from "@/components/SolutionSection";
import AutomationExamplesSection from "@/components/AutomationExamplesSection";
import ProcessSection from "@/components/ProcessSection";
import OfferStackSection from "@/components/OfferStackSection";
import FounderStorySection from "@/components/FounderStorySection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import BookingForm from "@/components/BookingForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import ChatWidget from "@/components/ChatWidget";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function DigitalFoundations() {
  const scrollToBookingForm = () => {
    const element = document.querySelector('#booking-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Operational Intelligence for Tasmanian Businesses | KPI Digital</title>
        <meta
          name="description"
          content="Transform your business with operational intelligence. Automate workflows, integrate data, and make smarter decisions with KPI Digital."
        />
      </Helmet>

      <div className="min-h-screen bg-background font-sans">
        <Navigation onCTAClick={scrollToBookingForm} />

        <main className="space-y-0 pb-0">
          <HeroSection onCTAClick={scrollToBookingForm} />
          <PainPointsSection />
          <SolutionSection />
          <AutomationExamplesSection />
          <ProcessSection onCTAClick={scrollToBookingForm} />
          <OfferStackSection />
          <FounderStorySection />
          <FAQSection />
          <FinalCTASection onCTAClick={scrollToBookingForm} />
          <BookingForm />
        </main>

        <Footer onCTAClick={scrollToBookingForm} />
        <ScrollIndicator />
        <ChatWidget />
        <MobileStickyCTA onCTAClick={scrollToBookingForm} />
      </div>
    </>
  );
}
