export interface ValueProp {
  id: string;
  slug: string;
  icon: any; // Lucide icon component
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  // Extended content for education pages
  detailedDescription: string;
  whoItsFor: string[];
  outcomes: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

import { Phone, Filter, ShieldCheck, Brain, BadgeDollarSign } from "lucide-react";

export const valuePropsData: ValueProp[] = [
  {
    id: "never-miss-a-call",
    slug: "never-miss-a-call",
    icon: Phone,
    title: "Never Miss a Call",
    shortDesc: "Your AI receptionist answers every call, 24/7/365. No more lost leads while you're on the tools.",
    fullDesc: "Stop letting calls go to voicemail while you're working. Our AI receptionist answers instantly, day or night, ensuring you capture every opportunity.",
    benefits: ["24/7 Coverage", "Instant Response", "Capture Every Lead"],
    detailedDescription: "Every missed call is a missed opportunity. Our AI receptionist ensures that your business is always open, even when you're on a job site, sleeping, or spending time with family.",
    whoItsFor: ["Electricians who work on the tools", "Sole traders", "Growing electrical businesses"],
    outcomes: ["100% Answer Rate", "More Jobs Booked", "Professional Image"],
    processSteps: [],
    faqs: []
  },
  {
    id: "qualified-leads-only",
    slug: "qualified-leads-only",
    icon: Filter,
    title: "Qualified Leads Only",
    shortDesc: "The AI pre-screens every caller. You only spend time on real opportunities, not tyre-kickers.",
    fullDesc: "Don't waste time on quotes for jobs you don't want. The AI qualifies every lead based on your criteria before it ever reaches you.",
    benefits: ["Filter Tyre-Kickers", "Prioritise High Value", "Save Time"],
    detailedDescription: "The AI asks the right questions to determine if a lead is a good fit for your business. It filters out low-value jobs and prioritises the ones that make you money.",
    whoItsFor: ["Electricians tired of time-wasters", "Businesses focusing on high-margin work"],
    outcomes: ["Higher Conversion Rates", "Better Time Management", "More Profitable Jobs"],
    processSteps: [],
    faqs: []
  },
  {
    id: "youre-in-control",
    slug: "youre-in-control",
    icon: ShieldCheck,
    title: "You're in Control",
    shortDesc: "Human-in-the-loop oversight means you review and approve everything before it goes out.",
    fullDesc: "You are the director. The AI drafts quotes and messages, but nothing is sent without your one-click approval.",
    benefits: ["Review Quotes", "Approve Messages", "No AI Mistakes"],
    detailedDescription: "Maintain full control over your customer communications. The AI does the heavy lifting, but you have the final say on everything.",
    whoItsFor: ["Electricians who want to maintain quality", "Control-freak business owners (we get it)"],
    outcomes: ["Peace of Mind", "Quality Assurance", "Personal Touch"],
    processSteps: [],
    faqs: []
  },
  {
    id: "gets-smarter",
    slug: "gets-smarter",
    icon: Brain,
    title: "Gets Smarter Over Time",
    shortDesc: "The AI learns from your feedback and continuously improves. It adapts to your business.",
    fullDesc: "Just like a real employee, your AI receptionist learns your preferences, pricing, and style the more you use it.",
    benefits: ["Learns Your Pricing", "Adapts to You", "Continuous Improvement"],
    detailedDescription: "The system evolves with your business. It learns from every interaction and every correction you make, becoming more autonomous and accurate over time.",
    whoItsFor: ["Long-term thinkers", "Businesses looking to scale"],
    outcomes: ["Increasing Efficiency", "Better Accuracy", "Less Management Time"],
    processSteps: [],
    faqs: []
  },
  {
    id: "one-simple-price",
    slug: "one-simple-price",
    icon: BadgeDollarSign,
    title: "One Simple Price",
    shortDesc: "$50/day*, everything included. Free setup on 12 month contract.",
    fullDesc: "Budget with confidence. One flat weekly rate covers the AI, website, CRM, and social media management.",
    benefits: ["All-Inclusive", "No Hidden Fees", "12 Month Term"],
    detailedDescription: "We believe in transparent pricing. No surprises at the end of the month. Just one simple subscription that covers everything you need to grow.",
    whoItsFor: ["Budget-conscious businesses", "Electricians who hate hidden fees"],
    outcomes: ["Predictable Costs", "High ROI", "Complete Solution"],
    processSteps: [],
    faqs: []
  }
];

export const getValuePropBySlug = (slug: string): ValueProp | undefined => {
  return valuePropsData.find(prop => prop.slug === slug);
};

export const getAllValueProps = (): ValueProp[] => {
  return valuePropsData;
};