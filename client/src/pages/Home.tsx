import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import SolutionSection from "@/components/SolutionSection";
import ValueCardsSection from "@/components/ValueCardsSection";
import ProcessSection from "@/components/ProcessSection";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollIndicator from "@/components/ScrollIndicator";
import { updateSEO } from "@/utils/seo";

export default function Home() {
  useEffect(() => {
    updateSEO({
      title: "KPI Digital - Digital Transformation for Trades Businesses | Clarity. Systems. Growth.",
      description: "Helping Australian trades businesses move from reactive chaos to predictable, profitable growth. Get the clarity, systems, and growth strategy you need to scale your business.",
      ogTitle: "KPI Digital - Transform Your Trades Business",
      ogDescription: "From reactive chaos to predictable growth. Get clarity on your numbers, systems that scale, and a growth strategy that works for your trades business.",
    });
  }, []);
  const scrollToQuoteForm = () => {
    const element = document.querySelector('#quote-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={scrollToQuoteForm} />
      
      <main>
        <HeroSection onCTAClick={scrollToQuoteForm} />
        <PainPointsSection />
        <SolutionSection />
        <ValueCardsSection />
        <ProcessSection />
        <div id="quote-form">
          <QuoteForm />
        </div>
      </main>
      
      <Footer onCTAClick={scrollToQuoteForm} />
      <ScrollIndicator />
    </div>
  );
}