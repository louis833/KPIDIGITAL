import { motion } from "framer-motion";
import { FileSpreadsheet, Network, EyeOff, Clock, TrendingDown, Users } from "lucide-react";

export default function PainPointsSection() {
  const painPoints = [
    {
      icon: FileSpreadsheet,
      title: "Spreadsheet Chaos",
      text: "Running your business on disconnected spreadsheets that are out of date the moment you save them. No single source of truth.",
    },
    {
      icon: Network,
      title: "Disconnected Systems",
      text: "Your accounting, CRM, and inventory software don't talk to each other. You're wasting hours manually entering data across platforms.",
    },
    {
      icon: EyeOff,
      title: "Flying Blind",
      text: "Making critical decisions based on gut feeling because you don't have real-time visibility into your operational performance.",
    },
    {
      icon: Clock,
      title: "Inefficient Workflows",
      text: "Staff spending valuable time on repetitive, low-value tasks that could be automated, causing bottlenecks and delays.",
    },
    {
      icon: TrendingDown,
      title: "Missed Opportunities",
      text: "Leads slipping through the cracks and upsell opportunities missed because you lack the insights to act at the right time.",
    },
    {
      icon: Users,
      title: "Staff Burnout",
      text: "Overworking your team with administrative burden instead of empowering them to focus on high-impact work.",
    },
  ];

  return (
    <section className="py-24 bg-destructive/5 border-y-2 border-destructive/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Operational Friction?</h2>
            <p className="text-xl md:text-2xl text-muted-foreground italic">
              Growth shouldn't mean more chaos.
            </p>
          </div>

          {/* Pain Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Pivot Statement */}
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl font-medium text-primary">
              Your data should work for you, not against you. The difference between struggling and scaling is <strong>Operational Intelligence</strong>.
            </p>
          </div>

          {/* Closing Line */}
          <div className="text-center mb-16">
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              Stop running your business in the dark.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}