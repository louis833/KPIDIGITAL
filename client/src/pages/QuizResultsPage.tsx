import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Loader2 } from "lucide-react";
import { format } from "date-fns";

interface QuizResult {
  id: string;
  calculatorType: string;
  userName: string;
  userEmail: string;
  totalScore: number;
  maxScore: number;
  tier: string;
  answers: Record<string, any>;
  categoryScores: Record<string, any>;
  createdAt: string;
}

export default function QuizResultsPage() {
  const { id } = useParams();

  const { data: result, isLoading, error } = useQuery<QuizResult>({
    queryKey: ['/api/quiz-results', id],
    enabled: !!id,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-12 w-12 animate-spin text-primary" data-testid="loader-results" />
        </div>
      </div>
    );
  }

  if (error || !result) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">Results Not Found</h1>
          <p className="text-muted-foreground text-center">
            We couldn't find the assessment results you're looking for.
          </p>
        </div>
      </div>
    );
  }

  const percentage = Math.round((result.totalScore / result.maxScore) * 100);
  const calculatorName = result.calculatorType === 'clarity' 
    ? 'Business Clarity Assessment'
    : result.calculatorType === 'systems'
    ? 'Business Systems Assessment'
    : 'Business Growth Assessment';

  const formattedDate = format(new Date(result.createdAt), 'd MMMM yyyy');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Cover Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-32 md:py-24 mt-28 md:mt-36">
        <div className="max-w-4xl w-full text-center space-y-12 md:space-y-16">
          <motion.img
            src={new URL("@assets/kpi_digital_logo_circle_1759274509679.png", import.meta.url).href}
            alt="KPI Digital"
            className="h-12 md:h-14 mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="img-logo"
          />

          <div className="space-y-6 md:space-y-8">
            <motion.h1
              className="text-4xl md:text-7xl tracking-tight text-foreground font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-testid="text-calculator-name"
            >
              {calculatorName}
            </motion.h1>

            <motion.div
              className="h-1 w-24 md:w-32 bg-foreground mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />

            <motion.div
              className="space-y-4 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-lg md:text-2xl" data-testid="text-generated-date">Report Generated: {formattedDate}</p>
              <p className="text-base md:text-xl" data-testid="text-user-name">Prepared for: {result.userName}</p>
            </motion.div>
          </div>

          <motion.div
            className="pt-12 md:pt-16 space-y-4 md:space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="inline-block bg-foreground text-background px-8 md:px-12 py-4 md:py-6 rounded-sm">
              <p className="text-4xl md:text-6xl font-bold" data-testid="text-score">
                {result.totalScore}/{result.maxScore} ({percentage}%)
              </p>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground" data-testid="text-tier">
              Assessment Tier: {result.tier}
            </p>
          </motion.div>

          <motion.div
            className="pt-8 md:pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-sm text-muted-foreground animate-bounce">Scroll to explore your report ↓</p>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-16 md:py-24 bg-muted/30">
        <div className="max-w-5xl w-full space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 md:mb-8" data-testid="text-executive-summary">
              Executive Summary
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Based on your assessment, here's a breakdown of your business performance across key areas. 
              Each category reveals specific opportunities for improvement and growth.
            </p>
          </motion.div>

          <div className="grid gap-4 md:gap-6">
            {Object.entries(result.categoryScores).map(([category, data]: [string, any], index) => (
              <motion.div
                key={category}
                className="bg-background border border-border rounded-lg p-4 md:p-6 hover-elevate"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`card-category-${category}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2" data-testid={`text-category-name-${category}`}>
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Score: <span className="font-semibold text-foreground" data-testid={`text-category-score-${category}`}>
                        {data.score}/{data.maxScore}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="flex-1 md:w-48 bg-muted rounded-full h-3 md:h-4">
                      <div 
                        className="bg-primary rounded-full h-3 md:h-4 transition-all duration-500"
                        style={{ width: `${(data.score / data.maxScore) * 100}%` }}
                        data-testid={`progress-category-${category}`}
                      />
                    </div>
                    <span className="text-base md:text-lg font-bold text-foreground min-w-[3rem] text-right">
                      {Math.round((data.score / data.maxScore) * 100)}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Analysis Section */}
      <section className="min-h-screen flex flex-col items-center justify-start px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-5xl w-full space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6" data-testid="text-detailed-analysis">
              Detailed Analysis
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Your responses reveal specific areas where strategic improvements can drive significant business growth.
            </p>
          </motion.div>

          <div className="space-y-8 md:space-y-12">
            {Object.entries(result.answers).map(([questionKey, answer]: [string, any], index) => (
              <motion.div
                key={questionKey}
                className="bg-background border border-border rounded-lg p-4 md:p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                data-testid={`card-question-${questionKey}`}
              >
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm md:text-base">
                        {index + 1}
                      </span>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground flex-1" data-testid={`text-question-${questionKey}`}>
                        {answer.question || questionKey}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground ml-0 md:ml-13">
                      Your answer: <span className="font-medium text-foreground" data-testid={`text-answer-${questionKey}`}>
                        {answer.answer}
                      </span> 
                      {answer.score !== undefined && (
                        <span className="ml-2">
                          (Score: <span className="font-semibold" data-testid={`text-question-score-${questionKey}`}>
                            {answer.score}
                          </span>)
                        </span>
                      )}
                    </p>
                  </div>

                  {answer.impact && (
                    <div className="bg-muted/50 border-l-4 border-primary p-4 md:p-6 rounded-r-lg">
                      <h4 className="text-sm md:text-base font-semibold text-foreground mb-2">Business Impact</h4>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed" data-testid={`text-impact-${questionKey}`}>
                        {answer.impact}
                      </p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {answer.diyApproach && (
                      <div className="bg-background border border-border p-4 md:p-6 rounded-lg">
                        <h4 className="text-sm md:text-base font-semibold text-foreground mb-3">DIY Approach</h4>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed" data-testid={`text-diy-${questionKey}`}>
                          {answer.diyApproach}
                        </p>
                      </div>
                    )}

                    {answer.professionalSolution && (
                      <div className="bg-foreground text-background p-4 md:p-6 rounded-lg">
                        <h4 className="text-sm md:text-base font-semibold mb-3">Professional KPI Digital Solution</h4>
                        <p className="text-sm md:text-base leading-relaxed opacity-90" data-testid={`text-professional-${questionKey}`}>
                          {answer.professionalSolution}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-16 md:py-24 bg-muted/30">
        <div className="max-w-5xl w-full space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 md:mb-8" data-testid="text-next-steps">
              Next Steps & Recommendations
            </h2>
          </motion.div>

          <motion.div
            className="bg-background border border-border rounded-lg p-6 md:p-8 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">Based on your {result.tier} tier:</h3>
              
              {percentage < 25 && (
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base md:text-lg leading-relaxed">
                    Your assessment reveals significant opportunities for improvement. Focus on establishing foundational systems and clarity in your business operations.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Start tracking key metrics immediately</li>
                    <li>Implement basic processes and systems</li>
                    <li>Focus on the highest-impact areas first</li>
                    <li>Consider professional guidance to accelerate progress</li>
                  </ul>
                </div>
              )}

              {percentage >= 25 && percentage < 50 && (
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base md:text-lg leading-relaxed">
                    You have some fundamentals in place, but there's substantial room for optimization and growth.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Strengthen existing systems and processes</li>
                    <li>Improve data collection and analysis</li>
                    <li>Address critical gaps in your operations</li>
                    <li>Scale what's working and fix what's not</li>
                  </ul>
                </div>
              )}

              {percentage >= 50 && percentage < 75 && (
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base md:text-lg leading-relaxed">
                    Your business has solid foundations. Focus on optimization and scaling what's working.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Optimize existing systems for better performance</li>
                    <li>Implement advanced automation and AI solutions</li>
                    <li>Scale successful processes across the business</li>
                    <li>Focus on strategic growth initiatives</li>
                  </ul>
                </div>
              )}

              {percentage >= 75 && (
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base md:text-lg leading-relaxed">
                    Excellent performance! Focus on maintaining excellence while exploring advanced growth strategies.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Maintain and refine existing excellence</li>
                    <li>Explore innovative growth opportunities</li>
                    <li>Consider market expansion strategies</li>
                    <li>Lead your industry with best practices</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-border">
              <h4 className="text-lg md:text-xl font-semibold text-foreground mb-4">Ready to take action?</h4>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                KPI Digital specializes in helping Australian trades businesses transform their operations and achieve sustainable growth.
              </p>
              <a 
                href="/#contact" 
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-md font-semibold hover-elevate active-elevate-2 transition-all text-sm md:text-base"
                data-testid="button-contact-kpi"
              >
                Schedule Your Free Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-6 md:px-12 border-t border-border">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <img 
            src={new URL("@assets/kpi_digital_logo_circle_1759274509679.png", import.meta.url).href}
            alt="KPI Digital"
            className="h-12 md:h-16 mx-auto opacity-50"
          />
          <p className="text-sm text-muted-foreground">
            © 2025 KPI Digital. Empowering Australian trades businesses with clarity, systems, and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
