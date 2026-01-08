import { motion } from "framer-motion";
import { Database, BarChart3, Workflow, ShieldCheck, Zap, LineChart } from "lucide-react";

export default function SolutionSection() {
  const features = [
    {
      icon: Database,
      title: "Data Integration",
      description: "We connect your dispersed systems—CRM, accounting, inventory—into a single, unified data map. No more copying and pasting.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Visualization",
      description: "See your business pulse instantly. Custom dashboards that show you exactly what's happening, when it's happening.",
    },
    {
      icon: Workflow,
      title: "Automated Workflows",
      description: "Replace manual, repetitive tasks with intelligent automation. From efficient invoicing to automated customer follow-ups.",
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description: "Don't just look back—look forward. Use data to forecast trends, demand, and potential issues before they hit.",
    },
    {
      icon: Zap,
      title: "Operational Speed",
      description: "Accelerate your decision-making loop. With instant access to accurate data, you move faster than the competition.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance & Security",
      description: "Ensure your operations meet industry standards with automated compliance checks and secure data handling.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Operational Intelligence: Your Competitive Edge</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just give you a dashboard; we give you clarity, control, and the power to scale with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/20 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Note about customisation */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-muted-foreground">
            Tailored specifically for the unique challenges of the Tasmanian market.
          </p>
        </div>
      </div>
    </section>
  );
}