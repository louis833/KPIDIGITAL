import { motion } from "framer-motion";
import { Search, Settings, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const phases = [
    {
        icon: Search,
        title: "Phase 1: The Energy Audit",
        subtitle: "Detailed diagnostic of your electrical systems and processes.",
        quote: "Stop guessing where your energy costs are hiding.",
        description: "We uncover waste, quick wins, and net zero opportunities – often fully or largely reimbursed by the $1,000 PowerSmart grant.",
        color: "bg-blue-50"
    },
    {
        icon: Settings,
        title: "Phase 2: Project-Managed Implementation",
        subtitle: "Hardware and software upgrades with zero hassle.",
        quote: "See real-time visibility and efficiency gains without disrupting your operations.",
        description: "We handle everything: sourcing IoT sensors, solar/battery if viable (maximising current federal rebates), and custom integrations.",
        color: "bg-indigo-50"
    },
    {
        icon: Activity,
        title: "Phase 3: Ongoing Monitoring & Support",
        subtitle: "AI agents and automation for hands-off optimisation.",
        quote: "Let your systems run smarter so you can focus on growth.",
        description: "Monthly reporting, predictive adjustments, and sustained savings through a flexible support agreement.",
        color: "bg-slate-50"
    }
];

export default function JourneySection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Proven 3-Phase Journey to Operational Intelligence</h2>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
                                <CardHeader className={`${phase.color} pb-8 transition-colors duration-300 group-hover:bg-primary/10`}>
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <phase.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold">{phase.title}</CardTitle>
                                    <p className="text-slate-600 font-medium">{phase.subtitle}</p>
                                </CardHeader>
                                <CardContent className="pt-8">
                                    <p className="italic text-primary font-bold mb-4">"{phase.quote}"</p>
                                    <p className="text-slate-600 leading-relaxed">
                                        {phase.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
