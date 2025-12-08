import { motion } from "framer-motion";
import { Hammer, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProcessSectionProps {
  onCTAClick?: () => void;
}

export default function ProcessSection({ onCTAClick }: ProcessSectionProps) {
  const steps = [
    {
      icon: Hammer,
      step: "Step 1",
      title: "We Build Your Digital Presence",
      subtitle: "Free Setup · 3-5 Days",
      description: "We create your professional website, optimise your Google Business Profile, and set up your social media — all built to feed enquiries into one system. You don't pay a cent for setup.",
    },
    {
      icon: Zap,
      step: "Step 2",
      title: "AI Goes Live",
      subtitle: "Day 5 Onwards",
      description: "Your AI Executive Assistant starts handling every call, chat, and message. It responds instantly, gathers job details, qualifies leads against your criteria, and logs everything in your dashboard.",
    },
    {
      icon: CheckCircle2,
      step: "Step 3",
      title: "You Review and Approve",
      subtitle: "10 Minutes a Day",
      description: "Each evening, open Director Mode. See your leads, review pre-filled quotes, approve or tweak, and check tomorrow's schedule. The AI handles the chaos — you make the decisions.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">From Setup to Jobs in One Week</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-background p-8 rounded-2xl border border-border h-full flex flex-col">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-semibold text-primary mb-2">{step.step}</div>
                <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                <div className="text-sm font-medium text-muted-foreground mb-4">{step.subtitle}</div>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="px-8 py-6 text-lg font-semibold hover-elevate"
            onClick={onCTAClick}
          >
            Stop Missing Jobs — Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}