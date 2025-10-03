import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, CheckCircle, AlertTriangle, XCircle, Zap, Rocket, Share2 } from "lucide-react";
import { Link, useLocation } from "wouter";
import { EmailCaptureModal } from "@/components/EmailCaptureModal";
import { ShareableLinkModal } from "@/components/ShareableLinkModal";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import Navigation from "@/components/Navigation";
import ScrollIndicator from "@/components/ScrollIndicator";
import { updateSEO } from "@/utils/seo";

interface Question {
  id: string;
  category: string;
  question: string;
  options: { value: string; label: string; score: number }[];
}

const questions: Question[] = [
  // Sales & Lead Systems (AI-Enabled)
  {
    id: "sales-1",
    category: "Sales & Lead Systems",
    question: "Is there an AI-powered lead scoring system to prioritize the best prospects?",
    options: [
      { value: "no", label: "No, we don't score leads", score: 0 },
      { value: "manual", label: "Manual scoring only", score: 1 },
      { value: "basic-auto", label: "Basic automated scoring", score: 2 },
      { value: "ai-powered", label: "AI-powered predictive scoring", score: 3 }
    ]
  },
  {
    id: "sales-2",
    category: "Sales & Lead Systems",
    question: "Are leads automatically tracked in a CRM with AI suggestions for next steps?",
    options: [
      { value: "no-crm", label: "No CRM system", score: 0 },
      { value: "basic-crm", label: "CRM but manual tracking", score: 1 },
      { value: "auto-track", label: "Automated tracking in CRM", score: 2 },
      { value: "ai-suggestions", label: "AI-driven next step recommendations", score: 3 }
    ]
  },
  {
    id: "sales-3",
    category: "Sales & Lead Systems",
    question: "Is outreach supported by AI-driven personalization (emails, LinkedIn, SMS)?",
    options: [
      { value: "manual", label: "All manual outreach", score: 0 },
      { value: "templates", label: "Templates with manual personalization", score: 1 },
      { value: "auto-personalize", label: "Automated personalization", score: 2 },
      { value: "ai-driven", label: "AI-driven multi-channel personalization", score: 3 }
    ]
  },
  {
    id: "sales-4",
    category: "Sales & Lead Systems",
    question: "Are sales calls recorded and AI-analyzed for objections, talk ratio, and close signals?",
    options: [
      { value: "no-recording", label: "Calls not recorded", score: 0 },
      { value: "recorded-only", label: "Recorded but not analyzed", score: 1 },
      { value: "manual-review", label: "Recorded with manual review", score: 2 },
      { value: "ai-analysis", label: "AI-analyzed for insights and coaching", score: 3 }
    ]
  },
  {
    id: "sales-5",
    category: "Sales & Lead Systems",
    question: "Do contracts/proposals auto-generate and route with AI-assisted templates + e-sign?",
    options: [
      { value: "manual-docs", label: "Manual document creation", score: 0 },
      { value: "basic-templates", label: "Basic templates, manual routing", score: 1 },
      { value: "auto-generate", label: "Auto-generate with e-sign", score: 2 },
      { value: "ai-assisted", label: "AI-assisted templates with smart routing", score: 3 }
    ]
  },

  // Marketing Systems (Tech-Enabled)
  {
    id: "marketing-1",
    category: "Marketing Systems",
    question: "Is content (blogs, social posts, email) AI-assisted for ideation, drafting, and repurposing?",
    options: [
      { value: "all-manual", label: "All manual content creation", score: 0 },
      { value: "basic-tools", label: "Basic tools for scheduling", score: 1 },
      { value: "ai-ideation", label: "AI for ideation and drafting", score: 2 },
      { value: "full-ai", label: "Full AI workflow with repurposing", score: 3 }
    ]
  },
  {
    id: "marketing-2",
    category: "Marketing Systems",
    question: "Are campaigns tracked in real-time dashboards with predictive analytics?",
    options: [
      { value: "no-tracking", label: "No campaign tracking", score: 0 },
      { value: "basic-reports", label: "Basic reporting after campaigns", score: 1 },
      { value: "real-time", label: "Real-time dashboards", score: 2 },
      { value: "predictive", label: "Predictive analytics and forecasting", score: 3 }
    ]
  },
  {
    id: "marketing-3",
    category: "Marketing Systems",
    question: "Do we have AI-powered chatbots for lead nurturing and FAQs?",
    options: [
      { value: "no-chatbot", label: "No chatbot or automation", score: 0 },
      { value: "basic-chatbot", label: "Basic scripted chatbot", score: 1 },
      { value: "smart-chatbot", label: "Smart chatbot with learning", score: 2 },
      { value: "ai-nurture", label: "AI chatbot with lead nurturing", score: 3 }
    ]
  },
  {
    id: "marketing-4",
    category: "Marketing Systems",
    question: "Are retargeting and remarketing automated across channels (ads, email, SMS)?",
    options: [
      { value: "no-retarget", label: "No retargeting", score: 0 },
      { value: "single-channel", label: "Single channel retargeting", score: 1 },
      { value: "multi-channel", label: "Multi-channel retargeting", score: 2 },
      { value: "ai-optimized", label: "AI-optimized cross-channel automation", score: 3 }
    ]
  },
  {
    id: "marketing-5",
    category: "Marketing Systems",
    question: "Can we measure ROI per channel automatically without manual reporting?",
    options: [
      { value: "no-measure", label: "No ROI tracking", score: 0 },
      { value: "manual-calc", label: "Manual ROI calculations", score: 1 },
      { value: "auto-track", label: "Automated tracking per channel", score: 2 },
      { value: "ai-attribution", label: "AI-powered attribution modeling", score: 3 }
    ]
  },

  // Product/Service Delivery Systems
  {
    id: "delivery-1",
    category: "Product/Service Delivery",
    question: "Is client onboarding automated with AI-driven workflows (welcome sequences, setup guides)?",
    options: [
      { value: "manual", label: "Fully manual onboarding", score: 0 },
      { value: "templates", label: "Email templates only", score: 1 },
      { value: "automated", label: "Automated workflow sequences", score: 2 },
      { value: "ai-personalized", label: "AI-personalized onboarding journeys", score: 3 }
    ]
  },
  {
    id: "delivery-2",
    category: "Product/Service Delivery",
    question: "Are client requests tracked in AI-enhanced ticketing/project systems?",
    options: [
      { value: "email-only", label: "Email and spreadsheets only", score: 0 },
      { value: "basic-ticket", label: "Basic ticketing system", score: 1 },
      { value: "project-mgmt", label: "Project management with automation", score: 2 },
      { value: "ai-enhanced", label: "AI-enhanced with smart routing", score: 3 }
    ]
  },
  {
    id: "delivery-3",
    category: "Product/Service Delivery",
    question: "Do we use AI for quality control (spotting errors, summarizing feedback, auto-checking deliverables)?",
    options: [
      { value: "manual-qa", label: "All manual quality checks", score: 0 },
      { value: "basic-checks", label: "Basic automated checks", score: 1 },
      { value: "smart-qa", label: "Smart QA with alerts", score: 2 },
      { value: "ai-qa", label: "AI-powered quality control and feedback", score: 3 }
    ]
  },
  {
    id: "delivery-4",
    category: "Product/Service Delivery",
    question: "Are progress updates automatically generated (dashboards, AI-written reports)?",
    options: [
      { value: "manual-updates", label: "Manual status updates", score: 0 },
      { value: "basic-dashboard", label: "Basic dashboard only", score: 1 },
      { value: "auto-updates", label: "Automated progress updates", score: 2 },
      { value: "ai-reports", label: "AI-generated reports and insights", score: 3 }
    ]
  },
  {
    id: "delivery-5",
    category: "Product/Service Delivery",
    question: "Are there self-service portals where clients can access status and resources anytime?",
    options: [
      { value: "no-portal", label: "No self-service options", score: 0 },
      { value: "basic-access", label: "Basic file sharing", score: 1 },
      { value: "client-portal", label: "Client portal with status", score: 2 },
      { value: "ai-portal", label: "AI-powered portal with smart resources", score: 3 }
    ]
  },

  // Finance Systems
  {
    id: "finance-1",
    category: "Finance Systems",
    question: "Do we use AI-driven forecasting models for cash flow, revenue, and churn?",
    options: [
      { value: "no-forecast", label: "No forecasting", score: 0 },
      { value: "manual-forecast", label: "Manual spreadsheet forecasts", score: 1 },
      { value: "auto-forecast", label: "Automated forecasting tools", score: 2 },
      { value: "ai-predictive", label: "AI-driven predictive modeling", score: 3 }
    ]
  },
  {
    id: "finance-2",
    category: "Finance Systems",
    question: "Are invoices/payments auto-generated and reconciled with minimal human touch?",
    options: [
      { value: "manual-invoice", label: "Manual invoicing", score: 0 },
      { value: "auto-invoice", label: "Auto-generated invoices", score: 1 },
      { value: "auto-payment", label: "Auto-generated with payment reminders", score: 2 },
      { value: "full-auto", label: "Fully automated with reconciliation", score: 3 }
    ]
  },
  {
    id: "finance-3",
    category: "Finance Systems",
    question: "Can AI flag anomalies (suspicious expenses, missed payments)?",
    options: [
      { value: "no-monitoring", label: "No anomaly detection", score: 0 },
      { value: "manual-review", label: "Manual monthly reviews", score: 1 },
      { value: "basic-alerts", label: "Basic threshold alerts", score: 2 },
      { value: "ai-anomaly", label: "AI-powered anomaly detection", score: 3 }
    ]
  },
  {
    id: "finance-4",
    category: "Finance Systems",
    question: "Is financial data accessible in real-time dashboards instead of static spreadsheets?",
    options: [
      { value: "spreadsheets", label: "Static spreadsheets only", score: 0 },
      { value: "basic-reports", label: "Weekly/monthly reports", score: 1 },
      { value: "dashboards", label: "Real-time dashboards", score: 2 },
      { value: "ai-insights", label: "AI-powered insights and alerts", score: 3 }
    ]
  },

  // People & Management Systems
  {
    id: "people-1",
    category: "People & Management",
    question: "Do team members have AI-assisted productivity tools (task management, meeting summaries)?",
    options: [
      { value: "basic-tools", label: "Basic tools only", score: 0 },
      { value: "task-mgmt", label: "Task management software", score: 1 },
      { value: "smart-tools", label: "Smart tools with automation", score: 2 },
      { value: "ai-assisted", label: "AI-assisted productivity suite", score: 3 }
    ]
  },
  {
    id: "people-2",
    category: "People & Management",
    question: "Are roles and KPIs tracked in a scorecard system with real-time updates?",
    options: [
      { value: "no-tracking", label: "No KPI tracking", score: 0 },
      { value: "spreadsheet", label: "Spreadsheet tracking", score: 1 },
      { value: "dashboard", label: "Dashboard with regular updates", score: 2 },
      { value: "real-time", label: "Real-time scorecard system", score: 3 }
    ]
  },
  {
    id: "people-3",
    category: "People & Management",
    question: "Are AI-driven hiring tools used to screen candidates and predict fit?",
    options: [
      { value: "manual-hire", label: "All manual hiring", score: 0 },
      { value: "job-boards", label: "Job board postings only", score: 1 },
      { value: "ats-system", label: "ATS with basic screening", score: 2 },
      { value: "ai-hiring", label: "AI-driven screening and fit prediction", score: 3 }
    ]
  },
  {
    id: "people-4",
    category: "People & Management",
    question: "Is onboarding/training automated with digital SOPs, AI-driven learning modules, and video guides?",
    options: [
      { value: "manual-train", label: "Manual training only", score: 0 },
      { value: "documents", label: "Written documents/SOPs", score: 1 },
      { value: "video-sops", label: "Video SOPs and guides", score: 2 },
      { value: "ai-learning", label: "AI-driven adaptive learning paths", score: 3 }
    ]
  },
  {
    id: "people-5",
    category: "People & Management",
    question: "Do managers use AI to track performance signals (engagement, output, response times)?",
    options: [
      { value: "no-tracking", label: "No performance tracking", score: 0 },
      { value: "manual-review", label: "Manual performance reviews", score: 1 },
      { value: "basic-metrics", label: "Basic metric tracking", score: 2 },
      { value: "ai-signals", label: "AI-powered performance insights", score: 3 }
    ]
  },

  // Data, Tech & Infrastructure
  {
    id: "tech-1",
    category: "Data & Infrastructure",
    question: "Are all systems integrated via APIs/automation platforms (no double entry)?",
    options: [
      { value: "siloed", label: "Siloed systems, manual entry", score: 0 },
      { value: "some-integration", label: "Some systems connected", score: 1 },
      { value: "mostly-integrated", label: "Most systems integrated", score: 2 },
      { value: "fully-integrated", label: "Fully integrated automation", score: 3 }
    ]
  },
  {
    id: "tech-2",
    category: "Data & Infrastructure",
    question: "Do we use AI for data cleaning and normalization across tools?",
    options: [
      { value: "manual-clean", label: "Manual data cleaning", score: 0 },
      { value: "basic-validation", label: "Basic data validation", score: 1 },
      { value: "auto-clean", label: "Automated data cleaning", score: 2 },
      { value: "ai-normalize", label: "AI-powered normalization", score: 3 }
    ]
  },
  {
    id: "tech-3",
    category: "Data & Infrastructure",
    question: "Is data security/backup automated (compliance-ready)?",
    options: [
      { value: "manual-backup", label: "Manual backups", score: 0 },
      { value: "scheduled-backup", label: "Scheduled backups", score: 1 },
      { value: "auto-security", label: "Automated security and backups", score: 2 },
      { value: "compliance-ready", label: "Compliance-ready automation", score: 3 }
    ]
  },
  {
    id: "tech-4",
    category: "Data & Infrastructure",
    question: "Are there predictive dashboards highlighting issues before they become bottlenecks?",
    options: [
      { value: "reactive", label: "Reactive problem-solving only", score: 0 },
      { value: "basic-alerts", label: "Basic alerts for issues", score: 1 },
      { value: "monitoring", label: "Active monitoring dashboards", score: 2 },
      { value: "predictive", label: "Predictive AI-powered insights", score: 3 }
    ]
  }
];

const systemsTiers = [
  {
    name: "No Systems",
    minScore: 0,
    maxScore: 21,
    icon: XCircle,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    description: "Manual Operations, Chaos & Inefficiency",
    impact: "Your business runs on manual processes, spreadsheets, and tribal knowledge. Team members waste hours on repetitive tasks, data gets lost or duplicated, and scaling is nearly impossible. You're constantly firefighting instead of growing. Every new hire means weeks of shadowing, and when someone leaves, critical knowledge walks out the door.",
    actions: [
      "Team drowning in manual, repetitive work",
      "High error rates from human data entry",
      "No visibility into what's actually working",
      "Can't scale without hiring more people",
      "Critical knowledge trapped in people's heads"
    ],
    nextSteps: "Start with the highest-pain areas: automate lead capture, implement a CRM, and digitize your most-used processes. Even basic automation will free up hours per week."
  },
  {
    name: "Basic Systems",
    minScore: 22,
    maxScore: 42,
    icon: AlertTriangle,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    description: "Some Automation, Still Mostly Manual",
    impact: "You have a few tools in place—maybe a CRM, project management software, or accounting system. But they don't talk to each other. Your team still does a lot of copy-pasting between systems, manual reporting, and duplicate data entry. You can handle current volume, but growth means more chaos, not more profit.",
    actions: [
      "Tools exist but aren't integrated",
      "Still significant manual work between systems",
      "Reporting requires manual data gathering",
      "Limited visibility across the business",
      "Scaling means hiring, not optimizing"
    ],
    nextSteps: "Focus on integration: connect your core systems via APIs or automation platforms. Eliminate double-entry and create automated reporting dashboards. Layer in AI where it adds the most value."
  },
  {
    name: "Intermediate Systems",
    minScore: 43,
    maxScore: 63,
    icon: Zap,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    description: "Good Automation, Emerging AI Capabilities",
    impact: "Your systems are well-integrated and automated. Data flows between tools, reports generate automatically, and your team focuses on high-value work instead of admin tasks. You're starting to leverage AI for specific use cases—lead scoring, content creation, or basic analytics. The business runs smoothly, but there's still room to optimize with smarter automation and predictive insights.",
    actions: [
      "Core systems integrated and automated",
      "Team productive, minimal manual work",
      "Beginning to use AI for specific tasks",
      "Good visibility but not fully predictive",
      "Can scale efficiently with current systems"
    ],
    nextSteps: "Expand AI capabilities across more functions. Implement predictive analytics for forecasting, AI-driven personalization for marketing and sales, and smart automation for quality control and client delivery."
  },
  {
    name: "Advanced Systems",
    minScore: 64,
    maxScore: 84,
    icon: Rocket,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    description: "Fully AI-Enabled, Automated & Optimized",
    impact: "Your business operates like a well-oiled machine. AI powers lead scoring, personalization, quality control, and predictive analytics. Systems are fully integrated, data flows seamlessly, and insights surface automatically. Your team focuses entirely on strategy and relationships while AI and automation handle the heavy lifting. You can scale revenue without proportionally scaling headcount.",
    actions: [
      "AI-driven decision-making across all functions",
      "Fully integrated, zero-friction workflows",
      "Predictive insights prevent problems before they happen",
      "Team operates at peak productivity",
      "Revenue scales faster than costs"
    ],
    nextSteps: "Continue optimizing with next-gen AI tools. Explore autonomous agents, advanced predictive models, and industry-specific AI solutions. Share your systems playbook to help other trades businesses transform."
  }
];

export default function SystemsCalculator() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareableUrl, setShareableUrl] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  useEffect(() => {
    updateSEO({
      title: "Business Systems Maturity Calculator - Free AI & Automation Assessment | KPI Digital",
      description: "Evaluate your systems maturity across sales, marketing, finance, and operations. Discover your AI and automation readiness with our comprehensive 28-question assessment.",
      ogTitle: "Check Your Systems Maturity - Free Calculator",
      ogDescription: "Are your systems ready for AI and automation? Take our free assessment to discover your systems maturity level across 6 key business areas.",
    });
  }, []);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isAnswered = answers[questions[currentQuestion]?.id] !== undefined;

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else {
      setLocation("/");
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach(q => {
      const answer = answers[q.id];
      if (answer) {
        const option = q.options.find(opt => opt.value === answer);
        totalScore += option?.score || 0;
      }
    });
    return totalScore;
  };

  const getTier = (score: number) => {
    return systemsTiers.find(tier => score >= tier.minScore && score <= tier.maxScore) || systemsTiers[0];
  };

  const getCategoryScores = () => {
    const categoryMap = new Map<string, { score: number; maxScore: number }>();
    
    questions.forEach(q => {
      const answer = answers[q.id];
      if (answer) {
        const option = q.options.find(opt => opt.value === answer);
        const current = categoryMap.get(q.category) || { score: 0, maxScore: 0 };
        categoryMap.set(q.category, {
          score: current.score + (option?.score || 0),
          maxScore: current.maxScore + 3
        });
      }
    });

    return Array.from(categoryMap.entries()).map(([name, data]) => ({
      name,
      ...data
    }));
  };

  const saveResults = async (email: string) => {
    setShowEmailModal(false);
    setUserEmail(email);
    
    const score = calculateScore();
    const tier = getTier(score);
    const categories = getCategoryScores();

    try {
      const detailedAnswers: Record<string, any> = {};
      
      questions.forEach(q => {
        const answer = answers[q.id];
        const option = q.options.find(opt => opt.value === answer);
        
        detailedAnswers[q.id] = {
          question: q.question,
          answer: option?.label || 'Not answered',
          score: option?.score || 0,
          category: q.category,
          impact: "Implementing proper systems in this area significantly improves operational efficiency.",
          diyApproach: "Start documenting processes and implementing basic automation tools.",
          professionalSolution: "KPI Digital provides comprehensive system integration and automation solutions."
        };
      });

      const response = await apiRequest('POST', '/api/quiz-results', {
        calculatorType: 'systems',
        userName: email.split('@')[0],
        userEmail: email,
        totalScore: score,
        maxScore: 84,
        tier: tier.name,
        answers: detailedAnswers,
        categoryScores: categories
      });

      const data: any = await response.json();
      const baseUrl = window.location.origin;
      const url = `${baseUrl}/results/${data.id}`;
      setShareableUrl(url);
      setShowShareModal(true);

      toast({
        title: "Results Saved!",
        description: "Your results have been saved and emailed to you.",
      });
    } catch (error) {
      console.error('Save results error:', error);
      toast({
        title: "Error",
        description: "Failed to save results. Please try again.",
        variant: "destructive",
      });
    }
  };

  const score = calculateScore();
  const tier = getTier(score);

  if (showResults) {
    const TierIcon = tier.icon;
    
    return (
      <div className="min-h-screen bg-background py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Your Systems Assessment Results
              </h1>
              <p className="text-xl text-muted-foreground">
                Based on your answers, here's your systems maturity level
              </p>
            </div>

            <Card className={`p-8 md:p-12 mb-8 border-2 ${tier.borderColor} ${tier.bgColor}`}>
              <div className="text-center mb-8">
                <TierIcon className={`h-20 w-20 ${tier.color} mx-auto mb-6`} />
                <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${tier.color}`}>
                  {tier.name}
                </h2>
                <p className="text-xl text-foreground font-semibold mb-4">
                  {tier.description}
                </p>
                <div className="text-lg text-muted-foreground">
                  Your Score: <span className="font-bold text-foreground">{score}</span> / 84
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    How This Affects Your Business:
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {tier.impact}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    What This Means:
                  </h3>
                  <ul className="space-y-2">
                    {tier.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <AlertTriangle className={`h-5 w-5 ${tier.color} flex-shrink-0 mt-0.5`} />
                        <span className="text-muted-foreground">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background/50 rounded-lg p-6 mt-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Next Steps:
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {tier.nextSteps}
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setShowEmailModal(true)}
                className="hover-elevate active-elevate-2 group"
                data-testid="button-get-full-report"
              >
                <Share2 className="mr-2 h-5 w-5" />
                Get Full Report & Share Link
              </Button>
              <Link href="/#quote-form" asChild>
                <Button 
                  size="lg"
                  variant="outline"
                  data-testid="button-get-help"
                >
                  Get Help Building Systems
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestion(0);
                  setAnswers({});
                }}
                data-testid="button-retake"
              >
                Retake Assessment
              </Button>
            </div>

            <EmailCaptureModal
              open={showEmailModal}
              onOpenChange={setShowEmailModal}
              onSubmit={saveResults}
              calculatorType="Systems"
            />

            <ShareableLinkModal
              isOpen={showShareModal}
              onClose={() => setShowShareModal(false)}
              shareableUrl={shareableUrl}
              userEmail={userEmail}
            />
          </motion.div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const selectedAnswer = answers[question.id];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 max-w-3xl py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Check Your Systems Maturity
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Answer 28 questions to discover your automation and AI readiness
            </p>
            <Progress value={progress} className="h-3" />
            <p className="text-sm text-muted-foreground mt-2">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          <Card className="p-8 md:p-10">
            <div className="mb-8">
              <div className="text-sm font-semibold text-primary mb-3">
                {question.category}
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {question.question}
              </h2>

              <RadioGroup value={selectedAnswer} onValueChange={handleAnswer}>
                <div className="space-y-3">
                  {question.options.map((option) => (
                    <div
                      key={option.value}
                      className={`flex items-center space-x-3 rounded-lg border-2 p-4 transition-all cursor-pointer hover-elevate ${
                        selectedAnswer === option.value
                          ? 'border-primary bg-primary/5'
                          : 'border-border'
                      }`}
                      onClick={() => handleAnswer(option.value)}
                    >
                      <RadioGroupItem 
                        value={option.value} 
                        id={option.value}
                        data-testid={`radio-${option.value}`}
                      />
                      <Label
                        htmlFor={option.value}
                        className="flex-1 cursor-pointer text-base"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div className="flex justify-between gap-4">
              <Button
                variant="outline"
                onClick={handleBack}
                data-testid="button-back"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={!isAnswered}
                className="hover-elevate active-elevate-2 group"
                data-testid="button-next"
              >
                {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
      <ScrollIndicator />
    </div>
  );
}
