import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, CheckCircle, AlertTriangle, XCircle, Target, Share2 } from "lucide-react";
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
  {
    id: "lead-gen-1",
    category: "Lead Generation",
    question: "How many new leads are coming in each week/month?",
    options: [
      { value: "no-idea", label: "I have no idea", score: 0 },
      { value: "rough-guess", label: "I have a rough guess", score: 1 },
      { value: "tracked", label: "I track this regularly", score: 2 },
      { value: "tracked-optimized", label: "I track and optimize this", score: 3 }
    ]
  },
  {
    id: "lead-gen-2",
    category: "Lead Generation",
    question: "What are your lead sources and cost per lead?",
    options: [
      { value: "unknown", label: "I don't know my sources or costs", score: 0 },
      { value: "sources-known", label: "I know my sources but not costs", score: 1 },
      { value: "costs-tracked", label: "I track both sources and costs", score: 2 },
      { value: "optimized", label: "I actively optimize ROI by source", score: 3 }
    ]
  },
  {
    id: "lead-engage-1",
    category: "Lead Engagement",
    question: "What % of leads book a call/demo/meeting?",
    options: [
      { value: "no-tracking", label: "I don't track this", score: 0 },
      { value: "estimate", label: "I have a rough estimate", score: 1 },
      { value: "tracked", label: "I track this metric", score: 2 },
      { value: "optimized", label: "I track and actively improve this", score: 3 }
    ]
  },
  {
    id: "lead-engage-2",
    category: "Lead Engagement",
    question: "Do you track show-up rates and no-shows?",
    options: [
      { value: "no", label: "No, I don't track this", score: 0 },
      { value: "sometimes", label: "I notice but don't track formally", score: 1 },
      { value: "tracked", label: "Yes, I track show rates", score: 2 },
      { value: "managed", label: "Yes, and I have follow-up systems", score: 3 }
    ]
  },
  {
    id: "sales-conv-1",
    category: "Sales Conversion",
    question: "What is your close rate (calls → sales)?",
    options: [
      { value: "unknown", label: "I don't know", score: 0 },
      { value: "rough-idea", label: "I have a rough idea", score: 1 },
      { value: "tracked", label: "I track this regularly", score: 2 },
      { value: "improving", label: "I track and actively improve it", score: 3 }
    ]
  },
  {
    id: "sales-conv-2",
    category: "Sales Conversion",
    question: "Do you have a repeatable sales process?",
    options: [
      { value: "no", label: "No, it's different every time", score: 0 },
      { value: "informal", label: "I have an informal process", score: 1 },
      { value: "documented", label: "Yes, I have a documented process", score: 2 },
      { value: "optimized", label: "Yes, and I continuously improve it", score: 3 }
    ]
  },
  {
    id: "offer-value-1",
    category: "Offer Value & Deal Size",
    question: "What is your average ticket size and lifetime value?",
    options: [
      { value: "unknown", label: "I don't know these numbers", score: 0 },
      { value: "avg-known", label: "I know average ticket size only", score: 1 },
      { value: "both-known", label: "I know both metrics", score: 2 },
      { value: "optimizing", label: "I know both and actively work to increase them", score: 3 }
    ]
  },
  {
    id: "offer-value-2",
    category: "Offer Value & Deal Size",
    question: "Do you have upsell/cross-sell opportunities identified?",
    options: [
      { value: "no", label: "No, not really", score: 0 },
      { value: "some-ideas", label: "I have some ideas but haven't implemented", score: 1 },
      { value: "implemented", label: "Yes, I have some in place", score: 2 },
      { value: "systematic", label: "Yes, I systematically upsell/cross-sell", score: 3 }
    ]
  },
  {
    id: "cash-collected-1",
    category: "Cash Collected",
    question: "How much cash is collected vs. contracted?",
    options: [
      { value: "unknown", label: "I don't track the difference", score: 0 },
      { value: "rough-idea", label: "I have a rough idea", score: 1 },
      { value: "tracked", label: "I track this closely", score: 2 },
      { value: "optimized", label: "I track and optimize collection terms", score: 3 }
    ]
  },
  {
    id: "cash-collected-2",
    category: "Cash Collected",
    question: "Do you have outstanding receivables tracked?",
    options: [
      { value: "no", label: "No, I don't track receivables", score: 0 },
      { value: "aware", label: "I'm aware but don't track systematically", score: 1 },
      { value: "tracked", label: "Yes, I track outstanding invoices", score: 2 },
      { value: "managed", label: "Yes, with follow-up systems in place", score: 3 }
    ]
  },
  {
    id: "bottleneck-1",
    category: "Bottleneck Diagnosis",
    question: "Can you identify your biggest business bottleneck?",
    options: [
      { value: "no-idea", label: "I have no idea what's holding us back", score: 0 },
      { value: "guess", label: "I have a guess but no data", score: 1 },
      { value: "identified", label: "Yes, I can identify it with data", score: 2 },
      { value: "addressing", label: "Yes, and I'm actively addressing it", score: 3 }
    ]
  },
  {
    id: "bottleneck-2",
    category: "Bottleneck Diagnosis",
    question: "Do you know if you need more leads, better conversion, or higher prices?",
    options: [
      { value: "unclear", label: "I'm not sure which to focus on", score: 0 },
      { value: "hunch", label: "I have a hunch but no proof", score: 1 },
      { value: "data-backed", label: "Yes, I have data supporting my focus", score: 2 },
      { value: "executing", label: "Yes, and I'm executing on it", score: 3 }
    ]
  }
];

const clarityTiers = [
  {
    name: "No Clarity",
    minScore: 0,
    maxScore: 8,
    icon: XCircle,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    description: "Flying Blind in Your Business",
    impact: "You're essentially guessing every day. Without knowing your numbers, you can't make informed decisions, identify what's working, or fix what's broken. This leads to wasted ad spend, missed opportunities, and unpredictable cash flow. Every decision feels like a gamble.",
    actions: [
      "You're losing money without knowing where",
      "Can't identify which marketing actually works",
      "No idea why some months are good and others terrible",
      "Can't scale because you don't know what to scale"
    ],
    nextSteps: "Start with basic tracking: leads per week, close rate, and average job value. Even rough numbers are better than no numbers."
  },
  {
    name: "Low Clarity",
    minScore: 9,
    maxScore: 18,
    icon: AlertTriangle,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    description: "Rough Estimates, Big Gaps",
    impact: "You have some idea of your numbers, but they're rough guesses. You might track some metrics but not others, making it hard to see the full picture. You can identify obvious problems but struggle to find the real bottlenecks. Growth is inconsistent and hard to predict.",
    actions: [
      "You know you're bleeding somewhere but can't pinpoint where",
      "Marketing decisions based on gut feel, not data",
      "Can't confidently forecast revenue or cash flow",
      "Growth happens by accident, not by design"
    ],
    nextSteps: "Implement consistent tracking systems for all key metrics. Create a simple dashboard to review weekly. Start correlating your numbers to find patterns."
  },
  {
    name: "Moderate Clarity",
    minScore: 19,
    maxScore: 27,
    icon: Target,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    description: "Numbers Tracked, Not Optimized",
    impact: "You're tracking your key metrics and know your numbers. However, you're not yet using this data to actively optimize and improve. You can identify bottlenecks but may lack the systems to address them effectively. Your business is more predictable but not yet fully optimized.",
    actions: [
      "You know your numbers but aren't acting on them",
      "Can identify problems but struggle to fix them",
      "Business is somewhat predictable but not optimized",
      "Missing opportunities to maximize every dollar"
    ],
    nextSteps: "Move from tracking to optimization. Set improvement targets for each metric. Test different approaches systematically. Build processes to address identified bottlenecks."
  },
  {
    name: "High Clarity",
    minScore: 28,
    maxScore: 36,
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    description: "Full Visibility, Continuous Improvement",
    impact: "You have complete clarity on your business numbers and use them to drive decisions. You know exactly where leads come from, what they cost, conversion rates, and cash flow. You can identify and address bottlenecks quickly. Your business is predictable, scalable, and continuously improving.",
    actions: [
      "You make data-driven decisions with confidence",
      "Can quickly identify and fix bottlenecks",
      "Predictable revenue and cash flow",
      "Able to scale profitably and systematically"
    ],
    nextSteps: "Maintain your tracking systems. Continue testing and optimizing. Help other trades businesses achieve clarity. Consider expanding your service offerings or geographic reach."
  }
];

export default function ClarityCalculator() {
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
      title: "Business Clarity Calculator - Free Assessment | KPI Digital",
      description: "Discover your business clarity score with our free 12-question assessment. Get insights on lead generation, sales conversion, and cash flow for your trades business.",
      ogTitle: "Check Your Business Clarity - Free Calculator",
      ogDescription: "Take our free assessment to discover where you stand with lead tracking, conversion rates, and cash flow management.",
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
    return clarityTiers.find(tier => score >= tier.minScore && score <= tier.maxScore) || clarityTiers[0];
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
          impact: getQuestionImpact(q.id, option?.label || ''),
          diyApproach: getQuestionDIY(q.id),
          professionalSolution: getQuestionSolution(q.id)
        };
      });

      const response = await apiRequest('POST', '/api/quiz-results', {
        calculatorType: 'clarity',
        userName: email.split('@')[0],
        userEmail: email,
        totalScore: score,
        maxScore: 36,
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

  const getQuestionImpact = (questionId: string, answer: string): string => {
    const impactMap: Record<string, string> = {
      "lead-gen-1": "Without knowing your lead volume, you can't forecast growth, allocate marketing budget effectively, or identify trends.",
      "lead-gen-2": "Not knowing your cost per lead means you're gambling with your marketing budget.",
      "lead-engage-1": "Your booking rate reveals how well leads convert to opportunities.",
      "lead-engage-2": "No-shows directly impact revenue and waste your team's time.",
      "sales-conv-1": "Your close rate is your business's most powerful lever.",
      "sales-conv-2": "Without a repeatable sales process, your results depend on mood, energy, and luck.",
      "offer-value-1": "Not knowing these numbers prevents strategic pricing and accurate forecasting.",
      "offer-value-2": "Systematic upsells can increase revenue 30-50% without acquiring new customers.",
      "cash-collected-1": "Cash flow kills more businesses than profitability issues.",
      "cash-collected-2": "Outstanding receivables are dead money.",
      "bottleneck-1": "Your bottleneck determines your growth ceiling.",
      "bottleneck-2": "Wrong focus wastes time and money."
    };
    return impactMap[questionId] || "Understanding this metric is crucial for business growth.";
  };

  const getQuestionDIY = (questionId: string): string => {
    const diyMap: Record<string, string> = {
      "lead-gen-1": "Start a simple spreadsheet tracking leads by source each week.",
      "lead-gen-2": "Calculate monthly marketing spend divided by total leads by channel.",
      "lead-engage-1": "Track total leads vs. booked appointments weekly.",
      "lead-engage-2": "Record show-up rates and implement reminder systems.",
      "sales-conv-1": "Track calls/demos vs. closed deals. Record common objections.",
      "sales-conv-2": "Document your best sales calls. Create a simple script or checklist.",
      "offer-value-1": "Calculate average transaction value and customer lifetime value manually.",
      "offer-value-2": "List complementary services. Create simple upsell scripts.",
      "cash-collected-1": "Track invoiced vs. collected amount monthly.",
      "cash-collected-2": "Create an aging receivables report. Implement systematic follow-up.",
      "bottleneck-1": "Map your business process. Time each step.",
      "bottleneck-2": "Calculate: Lead volume × Conversion rate × Average price."
    };
    return diyMap[questionId] || "Start tracking this metric manually in a spreadsheet.";
  };

  const getQuestionSolution = (questionId: string): string => {
    const solutionMap: Record<string, string> = {
      "lead-gen-1": "KPI Digital implements automated lead tracking dashboards with predictive analytics.",
      "lead-gen-2": "KPI Digital builds multi-channel attribution systems that optimize budget allocation.",
      "lead-engage-1": "KPI Digital creates automated booking funnels with AI-powered lead qualification.",
      "lead-engage-2": "KPI Digital deploys automated reminder sequences and no-show recovery campaigns.",
      "sales-conv-1": "KPI Digital implements AI call analysis and data-driven sales process optimization.",
      "sales-conv-2": "KPI Digital builds complete sales playbooks with CRM automation.",
      "offer-value-1": "KPI Digital creates automated revenue analytics with predictive modeling.",
      "offer-value-2": "KPI Digital designs AI-powered upsell engines based on customer data.",
      "cash-collected-1": "KPI Digital implements automated invoicing with cash flow forecasting.",
      "cash-collected-2": "KPI Digital deploys automated collections workflows with smart follow-up.",
      "bottleneck-1": "KPI Digital conducts comprehensive business analysis to pinpoint exact bottlenecks.",
      "bottleneck-2": "KPI Digital provides business intelligence dashboards for strategic decision-making."
    };
    return solutionMap[questionId] || "KPI Digital can help you implement automated solutions for this area.";
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
                Your Clarity Assessment Results
              </h1>
              <p className="text-xl text-muted-foreground">
                Based on your answers, here's where you stand
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
                  Your Score: <span className="font-bold text-foreground">{score}</span> / 36
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
                  Get Help Achieving Clarity
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
              calculatorType="Clarity"
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
              Check Your Business Clarity
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Answer 12 questions to discover where you stand
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
