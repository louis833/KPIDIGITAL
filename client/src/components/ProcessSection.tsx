import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Bolt, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const processSteps = [
  {
    step: 1,
    icon: Search,
    title: "Clarity",
    subtitle: "Understand Your Business",
    description: "We bring complete clarity to your operations, finances, and growth opportunities. Know exactly where you stand and where you're headed.",
    details: [
      "Comprehensive business analysis",
      "Financial clarity and insights",
      "Opportunity identification",
      "Strategic roadmap development"
    ],
  },
  {
    step: 2,
    icon: Bolt,
    title: "Systems",
    subtitle: "Build Your Foundation",
    description: "We implement proven systems that streamline your operations, automate workflows, and create the foundation for sustainable growth.",
    details: [
      "Workflow automation",
      "Process standardization",
      "Team training and adoption",
      "Performance tracking setup"
    ],
  },
  {
    step: 3,
    icon: TrendingUp,
    title: "Growth",
    subtitle: "Scale With Confidence",
    description: "With clarity and systems in place, you'll have the capacity and confidence to pursue larger projects and scale your business sustainably.",
    details: [
      "Revenue optimization",
      "Capacity expansion",
      "Market positioning",
      "Continuous improvement"
    ],
  },
];

interface ProcessStepProps {
  step: typeof processSteps[0];
  index: number;
  isActive: boolean;
  inView: boolean;
}

function ProcessStep({ step, index, isActive, inView }: ProcessStepProps) {
  const isLast = index === processSteps.length - 1;

  return (
    <div className="relative">
      {/* Connection line */}
      {!isLast && (
        <motion.div
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-primary to-muted -z-10"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
          style={{ transformOrigin: "top" }}
        />
      )}

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        {/* Step number and icon */}
        <motion.div
          className="flex flex-col items-center mb-8"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={`relative w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
              isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}
            animate={isActive ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.6 }}
          >
            <step.icon className="h-8 w-8" />
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
            >
              {step.step}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Card content */}
        <Card className={`p-8 hover-elevate transition-all duration-300 ${
          isActive ? 'border-primary border-2 bg-primary/5' : 'bg-card'
        }`}>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {step.title}
            </h3>
            <p className="text-lg text-primary font-semibold mb-3">
              {step.subtitle}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>

          {/* Details list */}
          <div className="mb-6">
            <h4 className="font-semibold text-foreground mb-4 text-center">What's Included:</h4>
            <ul className="space-y-3">
              {step.details.map((detail, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.2 + idx * 0.1 }}
                >
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  {detail}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Clarity button - only show for Clarity step */}
          {step.step === 1 && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
            >
              <Link href="/clarity-calculator" asChild>
                <Button 
                  className="w-full hover-elevate active-elevate-2 group"
                  variant="default"
                  data-testid="button-check-clarity"
                >
                  Check Your Clarity
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
          )}

          {/* Systems button - only show for Systems step */}
          {step.step === 2 && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
            >
              <Link href="/systems-calculator" asChild>
                <Button 
                  className="w-full hover-elevate active-elevate-2 group"
                  variant="default"
                  data-testid="button-check-systems"
                >
                  Check Your Systems
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
          )}

          {/* Growth button - only show for Growth step */}
          {step.step === 3 && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
            >
              <Link href="/growth-calculator" asChild>
                <Button 
                  className="w-full hover-elevate active-elevate-2 group"
                  variant="default"
                  data-testid="button-check-growth"
                >
                  Check Your Growth
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
          )}

        </Card>
      </motion.div>
    </div>
  );
}

export default function ProcessSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Simulate active step (in real app, this would be based on user progress)
  const activeStep = 1;

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Proven 3-Step Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our systematic approach transforms your business through clarity, proven systems, and sustainable growth.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
                isActive={index === activeStep}
                inView={inView}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-primary/10 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join trades businesses who've already made the leap from chaos to clarity.
            </p>
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2 group"
              onClick={() => console.log("Start your transformation")}
              data-testid="button-start-transformation"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}