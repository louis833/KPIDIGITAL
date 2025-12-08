import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, CheckCircle, AlertTriangle, XCircle, TrendingUp, Target, Share2 } from "lucide-react";
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
  // Scaling Acquisition
  {
    id: "acq-1",
    category: "Scaling Acquisition",
    question: "Have you identified your highest ROI acquisition channel?",
    options: [
      { value: "no-idea", label: "No idea which channel works best", score: 0 },
      { value: "guess", label: "Have a guess but no data", score: 1 },
      { value: "identified", label: "Identified with data", score: 2 },
      { value: "doubling-down", label: "Identified and doubling down", score: 3 }
    ]
  },
  {
    id: "acq-2",
    category: "Scaling Acquisition",
    question: "Can you increase paid acquisition spend while monitoring CAC vs. LTV?",
    options: [
      { value: "no-tracking", label: "Don't track CAC or LTV", score: 0 },
      { value: "basic-tracking", label: "Track but don't use to guide spend", score: 1 },
      { value: "monitored", label: "Monitor and adjust spend accordingly", score: 2 },
      { value: "optimized", label: "Fully optimized CAC:LTV model", score: 3 }
    ]
  },
  {
    id: "acq-3",
    category: "Scaling Acquisition",
    question: "Are you continuously testing new acquisition channels?",
    options: [
      { value: "no-testing", label: "Stick to what we know", score: 0 },
      { value: "occasional", label: "Test occasionally", score: 1 },
      { value: "regular-testing", label: "Regular channel testing", score: 2 },
      { value: "systematic", label: "Systematic testing framework", score: 3 }
    ]
  },

  // Improving Conversions
  {
    id: "conv-1",
    category: "Improving Conversions",
    question: "Do you track and optimize each step: lead → show → close → upsell?",
    options: [
      { value: "no-tracking", label: "Don't track funnel steps", score: 0 },
      { value: "basic-track", label: "Track but don't optimize", score: 1 },
      { value: "tracked-optimized", label: "Track and optimize regularly", score: 2 },
      { value: "data-driven", label: "Data-driven optimization system", score: 3 }
    ]
  },
  {
    id: "conv-2",
    category: "Improving Conversions",
    question: "Are you using A/B testing for funnels, offers, and messaging?",
    options: [
      { value: "no-testing", label: "No A/B testing", score: 0 },
      { value: "ad-hoc", label: "Ad-hoc testing", score: 1 },
      { value: "regular-testing", label: "Regular A/B tests", score: 2 },
      { value: "systematic", label: "Systematic testing culture", score: 3 }
    ]
  },
  {
    id: "conv-3",
    category: "Improving Conversions",
    question: "Do you have structured upsell, downsell, and cross-sell flows?",
    options: [
      { value: "no-flows", label: "No structured flows", score: 0 },
      { value: "basic-offers", label: "Basic upsell attempts", score: 1 },
      { value: "structured", label: "Structured flows in place", score: 2 },
      { value: "optimized", label: "Optimized and automated flows", score: 3 }
    ]
  },

  // Increasing Lifetime Value
  {
    id: "ltv-1",
    category: "Increasing Lifetime Value",
    question: "Have you implemented recurring revenue streams (subscriptions, retainers)?",
    options: [
      { value: "one-time", label: "One-time sales only", score: 0 },
      { value: "exploring", label: "Exploring recurring options", score: 1 },
      { value: "some-recurring", label: "Some recurring revenue", score: 2 },
      { value: "recurring-focused", label: "Strong recurring revenue model", score: 3 }
    ]
  },
  {
    id: "ltv-2",
    category: "Increasing Lifetime Value",
    question: "Do you have a customer success system to reduce churn?",
    options: [
      { value: "no-system", label: "No retention system", score: 0 },
      { value: "reactive", label: "Reactive to churn", score: 1 },
      { value: "proactive", label: "Proactive success check-ins", score: 2 },
      { value: "systematic", label: "Systematic success program", score: 3 }
    ]
  },
  {
    id: "ltv-3",
    category: "Increasing Lifetime Value",
    question: "Do you have premium/expanded offers for existing clients?",
    options: [
      { value: "no-expansion", label: "No expansion offers", score: 0 },
      { value: "basic-upsells", label: "Basic upsells available", score: 1 },
      { value: "tiered-offers", label: "Tiered expansion offers", score: 2 },
      { value: "value-ladder", label: "Complete value ladder", score: 3 }
    ]
  },

  // Expanding Delivery Capacity
  {
    id: "capacity-1",
    category: "Expanding Delivery Capacity",
    question: "Have you created delivery playbooks and SOPs for scale?",
    options: [
      { value: "no-docs", label: "No documentation", score: 0 },
      { value: "basic-docs", label: "Basic documentation", score: 1 },
      { value: "playbooks", label: "Comprehensive playbooks", score: 2 },
      { value: "optimized", label: "Optimized and regularly updated", score: 3 }
    ]
  },
  {
    id: "capacity-2",
    category: "Expanding Delivery Capacity",
    question: "Are you automating and outsourcing low-value tasks?",
    options: [
      { value: "doing-all", label: "Team does everything", score: 0 },
      { value: "some-delegation", label: "Some delegation", score: 1 },
      { value: "strategic-outsource", label: "Strategic outsourcing", score: 2 },
      { value: "fully-optimized", label: "Fully automated/outsourced", score: 3 }
    ]
  },
  {
    id: "capacity-3",
    category: "Expanding Delivery Capacity",
    question: "Do you hire in advance of demand spikes?",
    options: [
      { value: "reactive", label: "Reactive hiring when slammed", score: 0 },
      { value: "just-in-time", label: "Just-in-time hiring", score: 1 },
      { value: "forecasted", label: "Forecast-based hiring", score: 2 },
      { value: "proactive", label: "Proactive capacity planning", score: 3 }
    ]
  },

  // Protecting Margins
  {
    id: "margin-1",
    category: "Protecting Margins",
    question: "Do you track profit per product/service (unit economics)?",
    options: [
      { value: "no-tracking", label: "Don't track unit economics", score: 0 },
      { value: "rough-idea", label: "Have a rough idea", score: 1 },
      { value: "tracked", label: "Track unit economics", score: 2 },
      { value: "optimized", label: "Track and optimize regularly", score: 3 }
    ]
  },
  {
    id: "margin-2",
    category: "Protecting Margins",
    question: "Are you testing and raising prices strategically?",
    options: [
      { value: "never-raise", label: "Afraid to raise prices", score: 0 },
      { value: "rare-increases", label: "Rare price increases", score: 1 },
      { value: "strategic-testing", label: "Strategic price testing", score: 2 },
      { value: "value-based", label: "Value-based pricing strategy", score: 3 }
    ]
  },
  {
    id: "margin-3",
    category: "Protecting Margins",
    question: "Do expenses grow slower than revenue (operating leverage)?",
    options: [
      { value: "no-tracking", label: "Don't track the ratio", score: 0 },
      { value: "aware", label: "Aware but not managing", score: 1 },
      { value: "monitored", label: "Actively monitoring", score: 2 },
      { value: "optimized", label: "Optimized operating leverage", score: 3 }
    ]
  },

  // Talent Acquisition
  {
    id: "talent-1",
    category: "Talent Acquisition",
    question: "Do you have a repeatable hiring funnel (attract, assess, onboard)?",
    options: [
      { value: "ad-hoc", label: "Ad-hoc hiring when desperate", score: 0 },
      { value: "basic-process", label: "Basic hiring process", score: 1 },
      { value: "structured", label: "Structured hiring funnel", score: 2 },
      { value: "optimized", label: "Optimized talent pipeline", score: 3 }
    ]
  },
  {
    id: "talent-2",
    category: "Talent Acquisition",
    question: "Do you use scorecards for every role with clear KPIs?",
    options: [
      { value: "no-scorecards", label: "No scorecards or KPIs", score: 0 },
      { value: "informal", label: "Informal expectations", score: 1 },
      { value: "documented", label: "Documented scorecards", score: 2 },
      { value: "data-driven", label: "Data-driven performance mgmt", score: 3 }
    ]
  },
  {
    id: "talent-3",
    category: "Talent Acquisition",
    question: "Are you hiring specialists who unlock growth (closers, marketers, operators)?",
    options: [
      { value: "generalists", label: "Generalists only", score: 0 },
      { value: "some-specialists", label: "Some specialists", score: 1 },
      { value: "strategic-hires", label: "Strategic specialist hires", score: 2 },
      { value: "a-players", label: "A-player specialists only", score: 3 }
    ]
  },

  // Money Model
  {
    id: "money-1",
    category: "Money Model",
    question: "Have you defined how $1 in acquisition turns into $X in revenue?",
    options: [
      { value: "unclear", label: "Money model is unclear", score: 0 },
      { value: "rough-model", label: "Rough understanding", score: 1 },
      { value: "defined", label: "Clearly defined model", score: 2 },
      { value: "optimized", label: "Optimized and proven model", score: 3 }
    ]
  },
  {
    id: "money-2",
    category: "Money Model",
    question: "Do you monitor CAC vs. LTV ratio (aiming for 3:1+)?",
    options: [
      { value: "no-tracking", label: "Don't track this ratio", score: 0 },
      { value: "aware", label: "Aware but don't optimize", score: 1 },
      { value: "monitored", label: "Actively monitored", score: 2 },
      { value: "optimized", label: "Optimized to 3:1 or better", score: 3 }
    ]
  },
  {
    id: "money-3",
    category: "Money Model",
    question: "Do you have tiered pricing & packaging to capture more value per client?",
    options: [
      { value: "one-price", label: "One-size-fits-all pricing", score: 0 },
      { value: "basic-tiers", label: "Basic tiered pricing", score: 1 },
      { value: "strategic-tiers", label: "Strategic packaging", score: 2 },
      { value: "value-optimized", label: "Value-optimized tiers", score: 3 }
    ]
  },

  // Scaling Leadership & Vision
  {
    id: "leadership-1",
    category: "Scaling Leadership",
    question: "Does leadership focus on strategy, not operations?",
    options: [
      { value: "in-weeds", label: "Leaders stuck in the weeds", score: 0 },
      { value: "mixed", label: "Mix of strategy and ops", score: 1 },
      { value: "mostly-strategy", label: "Mostly strategic focus", score: 2 },
      { value: "pure-strategy", label: "Pure strategic leadership", score: 3 }
    ]
  },
  {
    id: "leadership-2",
    category: "Scaling Leadership",
    question: "Do you have weekly scorecards/dashboards showing growth metrics?",
    options: [
      { value: "no-dashboards", label: "No regular dashboards", score: 0 },
      { value: "monthly-reports", label: "Monthly reports", score: 1 },
      { value: "weekly-reviews", label: "Weekly scorecard reviews", score: 2 },
      { value: "real-time", label: "Real-time growth dashboards", score: 3 }
    ]
  },
  {
    id: "leadership-3",
    category: "Scaling Leadership",
    question: "Is your culture tied to performance and accountability?",
    options: [
      { value: "no-accountability", label: "Low accountability culture", score: 0 },
      { value: "inconsistent", label: "Inconsistent accountability", score: 1 },
      { value: "performance-focused", label: "Performance-focused culture", score: 2 },
      { value: "high-performance", label: "High-performance culture", score: 3 }
    ]
  },
  {
    id: "leadership-4",
    category: "Scaling Leadership",
    question: "Do you have a growth roadmap (new markets, verticals, or acquisitions)?",
    options: [
      { value: "no-roadmap", label: "No growth roadmap", score: 0 },
      { value: "vague-ideas", label: "Vague expansion ideas", score: 1 },
      { value: "documented", label: "Documented roadmap", score: 2 },
      { value: "executing", label: "Actively executing roadmap", score: 3 }
    ]
  }
];

const growthTiers = [
  {
    name: "Not Ready to Scale",
    minScore: 0,
    maxScore: 18,
    icon: XCircle,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    description: "Chaos Prevents Growth",
    impact: "Your business isn't ready to scale. Without clarity on your numbers, proven systems, and a solid foundation, trying to grow will only amplify the chaos. You'll burn cash on marketing that doesn't convert, hire people who can't execute, and watch margins evaporate. Growth attempts will create more problems than profit.",
    actions: [
      "Scaling now would multiply existing problems",
      "No clear path from $1 spent to $X earned",
      "Can't deliver quality at current volume, let alone 2x",
      "Hiring would add costs without adding capacity",
      "No data to guide growth decisions"
    ],
    nextSteps: "Focus on clarity and systems first. Get your numbers dialed in, build repeatable processes, and create a foundation that can handle growth. Use the Clarity and Systems calculators to identify gaps."
  },
  {
    name: "Early Growth Stage",
    minScore: 19,
    maxScore: 37,
    icon: AlertTriangle,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    description: "Foundation Set, Growth Inconsistent",
    impact: "You have the basics in place and can handle modest growth, but it's not consistent or predictable. You might have good months followed by terrible ones. You can identify what's working but struggle to scale it. Growth happens, but it's manual, exhausting, and hard to sustain without burning out your team.",
    actions: [
      "Growth happens but isn't predictable",
      "Can't consistently replicate winning months",
      "Team stretched thin, can't scale without breaking",
      "Margins pressured when you try to grow",
      "Missing key specialists to unlock next level"
    ],
    nextSteps: "Systematize what's working. Build repeatable acquisition and conversion processes. Hire strategically to unlock bottlenecks. Start testing pricing and packaging to improve unit economics."
  },
  {
    name: "Scaling Ready",
    minScore: 38,
    maxScore: 56,
    icon: Target,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    description: "Systems Support Growth, Room to Optimize",
    impact: "Your business is ready to scale. You have clarity on your numbers, systems that can handle growth, and a proven model. You can double down on what works and expand strategically. There are still inefficiencies and opportunities to optimize, but you have the foundation to grow profitably without chaos.",
    actions: [
      "Clear money model: know how $1 becomes $X",
      "Can scale acquisition profitably",
      "Systems and team can handle 2-3x growth",
      "Margins protected through operating leverage",
      "Strategic roadmap guides expansion"
    ],
    nextSteps: "Optimize your best channels. Implement value-based pricing. Build out specialist talent. Create a proactive hiring pipeline. Expand to adjacent markets or verticals systematically."
  },
  {
    name: "High-Growth Machine",
    minScore: 57,
    maxScore: 75,
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    description: "Optimized for Rapid, Profitable Scaling",
    impact: "Your business is a high-growth machine. You have complete clarity, battle-tested systems, and a money model that prints cash. You can scale rapidly and profitably because every component is optimized. Leadership focuses on strategy, culture drives performance, and you're expanding into new markets or verticals with confidence.",
    actions: [
      "Predictable, scalable growth model",
      "Can 10x revenue without proportional cost increase",
      "A-player talent unlocking new opportunities",
      "Multiple expansion paths validated and executing",
      "Leadership operates at strategic level only"
    ],
    nextSteps: "Continue optimizing and expanding. Explore acquisitions, new markets, or vertical integration. Build your growth playbook to help other trades businesses scale. Consider raising capital to accelerate expansion."
  }
];

export default function GrowthCalculator() {
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
      title: "Growth Readiness Calculator - Free Business Scaling Assessment | KPI Digital",
      description: "Discover if your trades business is ready to scale. Evaluate market positioning, operations, finances, team, and strategy with our comprehensive growth readiness assessment.",
      ogTitle: "Are You Ready to Scale? - Free Growth Calculator",
      ogDescription: "Take our 25-question assessment to discover your growth readiness score and get actionable insights for scaling your trades business profitably.",
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
    return growthTiers.find(tier => score >= tier.minScore && score <= tier.maxScore) || growthTiers[0];
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
          impact: "Understanding this growth area is critical for sustainable business scaling.",
          diyApproach: "Begin with basic planning and incremental improvements in this area.",
          professionalSolution: "KPI Digital delivers strategic growth solutions and expert guidance."
        };
      });

      const response = await apiRequest('POST', '/api/quiz-results', {
        calculatorType: 'growth',
        userName: email.split('@')[0],
        userEmail: email,
        totalScore: score,
        maxScore: 75,
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
                Your Growth Readiness Results
              </h1>
              <p className="text-xl text-muted-foreground">
                Based on your answers, here's your growth readiness level
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
                  Your Score: <span className="font-bold text-foreground">{score}</span> / 75
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
                  Get Help Scaling Your Business
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
              calculatorType="Growth"
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
              Check Your Growth Readiness
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Answer 28 questions to discover if you're ready to scale
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
