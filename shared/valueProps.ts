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

import { Users, Calculator, Phone, BarChart, Share2 } from "lucide-react";

export const valuePropsData: ValueProp[] = [
  {
    id: "ideal-client-blueprint",
    slug: "ideal-client-blueprint",
    icon: Users,
    title: "Ideal Client Blueprint",
    shortDesc: "Target the right customers",
    fullDesc: "Identify and attract your most profitable customers with our proven targeting system. Stop chasing every lead and focus on clients who value quality work and pay premium rates.",
    benefits: ["Higher profit margins", "Better client relationships", "Reduced marketing waste"],
    detailedDescription: "Our Ideal Client Blueprint is a comprehensive framework that helps trades businesses identify, target, and attract their most profitable customers. Through detailed analysis of your current client base and market research, we create a detailed profile of your ideal customer - including demographics, psychographics, pain points, and buying behaviors. This systematic approach eliminates the guesswork from your marketing efforts and ensures every dollar spent on customer acquisition delivers maximum return.",
    whoItsFor: [
      "Trades business owners struggling with low-quality leads",
      "Companies competing solely on price instead of value",
      "Businesses wanting to increase profit margins per job",
      "Contractors looking to build long-term client relationships"
    ],
    outcomes: [
      "25-40% increase in average project value",
      "50% reduction in time wasted on unqualified leads", 
      "Higher customer lifetime value and repeat business",
      "Improved cash flow from premium-paying clients"
    ],
    processSteps: [
      {
        title: "Current Client Analysis",
        description: "We analyze your existing customer base to identify patterns among your most profitable clients"
      },
      {
        title: "Market Research",
        description: "Comprehensive research into your local market to identify untapped opportunities"
      },
      {
        title: "Ideal Client Profile Creation",
        description: "Develop detailed buyer personas with specific demographics, behaviors, and characteristics"
      },
      {
        title: "Targeting Strategy",
        description: "Create specific marketing and outreach strategies to attract your ideal clients"
      }
    ],
    faqs: [
      {
        question: "How long does it take to see results?",
        answer: "Most clients start seeing higher-quality leads within 2-4 weeks of implementing their Ideal Client Blueprint. Full results typically manifest within 60-90 days."
      },
      {
        question: "Will this work for my specific trade?",
        answer: "Yes, our blueprint methodology works across all trades - electrical, plumbing, HVAC, carpentry, solar, and more. We customize the approach based on your specific industry dynamics."
      },
      {
        question: "What if I'm already getting plenty of leads?",
        answer: "If you're getting leads but struggling with low margins or difficult clients, the blueprint will help you attract better quality prospects who value your work and pay premium rates."
      }
    ]
  },
  {
    id: "pricing-profit-audit",
    slug: "pricing-profit-audit", 
    icon: Calculator,
    title: "Pricing & Profit Audit",
    shortDesc: "Price confidently and profitably",
    fullDesc: "Discover your true costs and set prices that guarantee profit on every job. Our comprehensive audit reveals hidden expenses and optimizes your pricing strategy.",
    benefits: ["Accurate job costing", "Guaranteed profitability", "Competitive positioning"],
    detailedDescription: "Our Pricing & Profit Audit is a deep-dive analysis that uncovers the true cost of doing business and ensures every job you take is profitable. We examine your direct costs, overhead expenses, labor rates, and hidden costs that most contractors miss. The result is a bulletproof pricing strategy that guarantees profit while keeping you competitive in your market.",
    whoItsFor: [
      "Contractors unsure about their true costs per job",
      "Businesses struggling with thin profit margins",
      "Companies that often go over budget on projects",
      "Trades professionals who want to price confidently"
    ],
    outcomes: [
      "15-30% increase in profit margins",
      "100% accuracy in job costing and bidding",
      "Elimination of jobs that lose money",
      "Confidence to quote higher prices based on real data"
    ],
    processSteps: [
      {
        title: "Cost Analysis",
        description: "Comprehensive review of all direct and indirect costs including hidden expenses"
      },
      {
        title: "Profit Margin Assessment",
        description: "Analysis of current profit margins and identification of improvement opportunities"
      },
      {
        title: "Pricing Strategy Development",
        description: "Creation of a pricing framework that ensures profitability on every job"
      },
      {
        title: "Implementation & Training",
        description: "Training your team on the new pricing system and monitoring tools"
      }
    ],
    faqs: [
      {
        question: "What costs do most contractors miss?",
        answer: "Common missed costs include vehicle depreciation, insurance allocations, permit fees, waste disposal, callbacks, and the true cost of your time for estimating and project management."
      },
      {
        question: "Will higher prices cost me jobs?",
        answer: "Initially, you may lose some price-sensitive prospects, but you'll attract quality clients who value professional service. The increased margins more than compensate for any volume reduction."
      },
      {
        question: "How often should I update my pricing?",
        answer: "We recommend quarterly reviews with annual comprehensive audits. We provide tools to easily adjust pricing as costs change."
      }
    ]
  },
  {
    id: "sales-system-setup",
    slug: "sales-system-setup",
    icon: Phone,
    title: "Sales System Setup",
    shortDesc: "Convert more leads consistently",
    fullDesc: "Transform your sales process with proven scripts, follow-up sequences, and conversion strategies that turn prospects into paying customers.",
    benefits: ["Higher conversion rates", "Shorter sales cycles", "Predictable revenue"],
    detailedDescription: "Our Sales System Setup provides you with a complete, systematic approach to converting leads into customers. We develop custom scripts, objection handling techniques, follow-up sequences, and closing strategies specific to your trade and market. This system ensures consistent results regardless of who's handling the sales conversation and dramatically improves your conversion rates.",
    whoItsFor: [
      "Contractors with inconsistent sales results",
      "Businesses struggling to convert estimates to jobs",
      "Companies with long sales cycles",
      "Trades professionals who hate selling"
    ],
    outcomes: [
      "40-60% improvement in conversion rates",
      "25% reduction in sales cycle length",
      "Predictable monthly revenue streams",
      "Increased confidence in sales conversations"
    ],
    processSteps: [
      {
        title: "Sales Process Audit",
        description: "Review current sales approach and identify gaps and opportunities"
      },
      {
        title: "Custom Script Development",
        description: "Create proven scripts tailored to your trade and customer types"
      },
      {
        title: "Follow-up System Creation",
        description: "Develop automated sequences to nurture leads through to conversion"
      },
      {
        title: "Training & Implementation",
        description: "Train your team on the new system and provide ongoing support"
      }
    ],
    faqs: [
      {
        question: "Do scripts sound too salesy?",
        answer: "Our scripts are conversation frameworks that sound natural and professional. They guide the conversation while allowing for your personality to shine through."
      },
      {
        question: "What if I'm not a natural salesperson?",
        answer: "That's exactly why you need a system. Our proven scripts and processes work even if you're uncomfortable with selling. Many of our most successful clients started as reluctant salespeople."
      },
      {
        question: "How long before I see results?",
        answer: "Most contractors see immediate improvement in their next sales conversation. Full system integration typically shows results within 2-3 weeks."
      }
    ]
  },
  {
    id: "control-dashboard",
    slug: "control-dashboard",
    icon: BarChart,
    title: "Control Dashboard",
    shortDesc: "Real-time business insights",
    fullDesc: "Get instant visibility into your business performance with custom dashboards that track what matters most - profitability, efficiency, and growth metrics.",
    benefits: ["Data-driven decisions", "Early problem detection", "Performance tracking"],
    detailedDescription: "Our Control Dashboard gives you complete visibility into your business performance with real-time tracking of key metrics that matter most to trades businesses. Monitor job profitability, cash flow, team productivity, customer satisfaction, and growth indicators all in one place. Make informed decisions based on data, not guesswork, and spot problems before they become costly mistakes.",
    whoItsFor: [
      "Business owners flying blind without key metrics",
      "Contractors wanting to make data-driven decisions",
      "Companies needing better financial visibility",
      "Businesses ready to scale systematically"
    ],
    outcomes: [
      "Real-time visibility into business performance",
      "15-25% improvement in operational efficiency",
      "Faster identification and resolution of problems",
      "Confident decision-making based on accurate data"
    ],
    processSteps: [
      {
        title: "Metrics Identification",
        description: "Identify the key performance indicators most critical to your business success"
      },
      {
        title: "Data Integration",
        description: "Connect your existing systems and processes to create a unified data view"
      },
      {
        title: "Dashboard Creation",
        description: "Build custom dashboards that display your metrics in an easy-to-understand format"
      },
      {
        title: "Training & Optimization",
        description: "Train your team to use the dashboard and continuously optimize based on insights"
      }
    ],
    faqs: [
      {
        question: "What metrics should I track?",
        answer: "Key metrics include job profitability, cash flow, lead conversion rates, customer acquisition costs, team productivity, and customer satisfaction scores. We customize based on your specific business."
      },
      {
        question: "Is this too complex for a small business?",
        answer: "Not at all. We design dashboards to be simple and intuitive. You'll see the most important information at a glance without information overload."
      },
      {
        question: "How current is the data?",
        answer: "Most data updates in real-time or daily, depending on the metric. Financial data typically updates daily, while operational metrics can be real-time."
      }
    ]
  },
  {
    id: "referral-maximizer-toolkit",
    slug: "referral-maximizer-toolkit",
    icon: Share2,
    title: "Referral Maximizer Toolkit",
    shortDesc: "Turn clients into advocates",
    fullDesc: "Systematically generate referrals with our proven toolkit that makes it easy for satisfied customers to recommend your services to others.",
    benefits: ["Consistent referral flow", "Lower acquisition costs", "Trusted recommendations"],
    detailedDescription: "Our Referral Maximizer Toolkit transforms your satisfied customers into active advocates for your business. Through systematic follow-up processes, incentive programs, and easy referral mechanisms, we make it simple for happy clients to recommend your services. This creates a consistent stream of high-quality, pre-qualified leads that convert at much higher rates than cold prospects.",
    whoItsFor: [
      "Businesses relying solely on paid advertising",
      "Contractors with satisfied clients but few referrals",
      "Companies wanting to reduce customer acquisition costs",
      "Businesses looking for sustainable growth strategies"
    ],
    outcomes: [
      "3-5 quality referrals per month minimum",
      "60-80% reduction in customer acquisition costs",
      "Higher conversion rates from referred prospects", 
      "Sustainable growth through word-of-mouth marketing"
    ],
    processSteps: [
      {
        title: "Referral System Design",
        description: "Create a systematic approach to requesting and managing referrals"
      },
      {
        title: "Incentive Program Setup",
        description: "Develop compelling incentives that motivate customers to make referrals"
      },
      {
        title: "Follow-up Automation",
        description: "Implement automated sequences to stay top-of-mind with past clients"
      },
      {
        title: "Tracking & Optimization",
        description: "Monitor referral performance and continuously improve the system"
      }
    ],
    faqs: [
      {
        question: "What kind of incentives work best?",
        answer: "The most effective incentives vary by trade and customer base. Options include cash rewards, service discounts, charity donations, or reciprocal referrals. We help you choose what resonates with your clients."
      },
      {
        question: "When should I ask for referrals?",
        answer: "The best time is when customer satisfaction is highest - typically right after successful project completion. We create multiple touchpoints to maximize opportunities."
      },
      {
        question: "What if customers don't want to give referrals?",
        answer: "Most customers are happy to refer when asked properly and given easy ways to do so. Our system makes the process comfortable and beneficial for everyone involved."
      }
    ]
  }
];

export const getValuePropBySlug = (slug: string): ValueProp | undefined => {
  return valuePropsData.find(prop => prop.slug === slug);
};

export const getAllValueProps = (): ValueProp[] => {
  return valuePropsData;
};