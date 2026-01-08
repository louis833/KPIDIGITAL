import { motion } from "framer-motion";
import { Search, Map, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProcessSectionProps {
  onCTAClick?: () => void;
}

export default function ProcessSection({ onCTAClick }: ProcessSectionProps) {
  const steps = [
    {
      icon: Search,
      step: "Phase 1",
      title: "The Vision Audit",
      subtitle: "Analysis & Discovery",
      description: "We don't guess. We map. You receive a standalone 30-Point Operational Roadmap identifying every bottleneck, leak, and inefficiency in your current stack. Yours to keep.",
    },
    {
      icon: Map,
      step: "Phase 2",
      title: "The Strategy",
      subtitle: "Solution Design",
      description: "We design a custom roadmap. This isn't generic advice—it's a detailed technical plan showing how we'll integrate your systems and automate your workflows.",
    },
    {
      icon: Rocket,
      step: "Phase 3",
      title: "Implementation",
      subtitle: "Build & Launch",
      description: "We build your dashboards, configure your automations, and train your team. You go live with a fully optimized business operating system.",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Path to Operational Excellence</h2>
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
            Book Your Vision Audit
          </Button>
        </div>
      </div>
    </section>
  );
}