import { CoverSection } from "./components/scroll/CoverSection";
import { ExecutiveSummarySection } from "./components/scroll/ExecutiveSummarySection";
import { CategorySection } from "./components/scroll/CategorySection";
import { NextStepsSection } from "./components/scroll/NextStepsSection";
import { WorkWithUsSection } from "./components/scroll/WorkWithUsSection";
import { ScrollProgress } from "./components/scroll/ScrollProgress";
import { StickyHeader } from "./components/scroll/StickyHeader";
import {
  leadGenerationQuestions,
  leadEngagementQuestions,
  salesConversionQuestions,
  offerValueQuestions,
  cashCollectedQuestions,
  bottleneckQuestions,
} from "./data/reportData";

export default function App() {
  return (
    <div className="bg-white">
      <ScrollProgress />
      <StickyHeader />
      
      <main className="scroll-smooth">
        <CoverSection />
        
        <ExecutiveSummarySection />
        
        <CategorySection
          id="lead-generation"
          title="Lead Generation"
          score="1/6 (17%)"
          questions={leadGenerationQuestions}
          isEven={false}
        />
        
        <CategorySection
          id="lead-engagement"
          title="Lead Engagement"
          score="1/6 (17%)"
          questions={leadEngagementQuestions}
          isEven={true}
        />
        
        <CategorySection
          id="sales-conversion"
          title="Sales Conversion"
          score="1/6 (17%)"
          questions={salesConversionQuestions}
          isEven={false}
        />
        
        <CategorySection
          id="offer-value"
          title="Offer Value & Deal Size"
          score="1/6 (17%)"
          questions={offerValueQuestions}
          isEven={true}
        />
        
        <CategorySection
          id="cash-collected"
          title="Cash Collected"
          score="1/6 (17%)"
          questions={cashCollectedQuestions}
          isEven={false}
        />
        
        <CategorySection
          id="bottleneck-diagnosis"
          title="Bottleneck Diagnosis"
          score="1/6 (17%)"
          questions={bottleneckQuestions}
          isEven={true}
        />
        
        <NextStepsSection />
        
        <WorkWithUsSection />
      </main>
    </div>
  );
}