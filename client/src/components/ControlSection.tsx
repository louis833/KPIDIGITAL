import { motion } from "framer-motion";
import { Shield, Bell, CheckCircle, Settings } from "lucide-react";

export default function ControlSection() {
    const controlPoints = [
        {
            icon: Settings,
            title: "You set the rules",
            text: "Service areas, job types, pricing guidance — the AI only says what you've approved.",
        },
        {
            icon: CheckCircle,
            title: "You approve quotes",
            text: "The AI gathers the info and drafts the response. You review it before it goes out.",
        },
        {
            icon: Bell,
            title: "You get notified instantly",
            text: "New enquiry? You'll know within seconds. Urgent job? It's flagged for you.",
        },
        {
            icon: Shield,
            title: "Nothing happens without your say-so",
            text: "Think of it as an executive assistant who never sleeps, never forgets, and always checks with you first.",
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">You Stay In Control — Always</h2>
                        <p className="text-xl text-muted-foreground">
                            This isn't some black-box AI that says whatever it wants. You're in charge.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {controlPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-muted/30 p-6 rounded-xl border border-border"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                                        <point.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{point.title}</h3>
                                        <p className="text-muted-foreground">{point.text}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Flowchart Description */}
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 text-center">
                        <p className="text-lg font-medium mb-4">How it works:</p>
                        <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base">
                            <span className="bg-background px-3 py-1 rounded-full border">Customer calls</span>
                            <span className="text-primary">→</span>
                            <span className="bg-background px-3 py-1 rounded-full border">AI answers & qualifies</span>
                            <span className="text-primary">→</span>
                            <span className="bg-background px-3 py-1 rounded-full border">You get notification</span>
                            <span className="text-primary">→</span>
                            <span className="bg-background px-3 py-1 rounded-full border">You approve response</span>
                            <span className="text-primary">→</span>
                            <span className="bg-background px-3 py-1 rounded-full border">Customer receives reply</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4 font-medium">Human in the loop. Every time.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
