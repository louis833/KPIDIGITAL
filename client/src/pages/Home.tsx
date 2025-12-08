import { Helmet } from "react-helmet";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import SolutionSection from "@/components/SolutionSection";
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
import ControlSection from "@/components/ControlSection";
import PricingSection from "@/components/PricingSection";

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
        <title>AI Executive Assistant for Electricians | Stop Missing Jobs | KPI Digital</title>
        <meta
          name="description"
          content="Your AI Executive Assistant answers every call, qualifies leads, and books jobs while you're on the tools. Just $50/day."
        />
      </Helmet>

      <div className="min-h-screen bg-background font-sans">
        <Navigation onCTAClick={scrollToBookingForm} />

        <main className="space-y-0 pb-0">
          <HeroSection onCTAClick={scrollToBookingForm} />
          <PainPointsSection />
          <SolutionSection />
          <ControlSection />
          <OfferStackSection />
          <PricingSection onCTAClick={scrollToBookingForm} />
          <ProcessSection onCTAClick={scrollToBookingForm} />
          <FounderStorySection />
          <FAQSection />
          <FinalCTASection onCTAClick={scrollToBookingForm} />
          <BookingForm />
        </main>

        <Footer onCTAClick={scrollToBookingForm} />
        <ScrollIndicator />
        <ChatWidget />
      </div>
    </>
  );
}