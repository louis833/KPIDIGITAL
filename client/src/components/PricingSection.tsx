import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

interface PricingSectionProps {
    onCTAClick?: () => void;
}

export default function PricingSection({ onCTAClick }: PricingSectionProps) {
    const inclusions = [
        "Every call answered",
        "Every message responded to",
        "Every lead qualified",
        "Every tyre-kicker filtered",
        "Setup included free ($4,397 value)",
        "Cancel anytime",
    ];

    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple Pricing. No Surprises.</h2>
                        <p className="text-xl text-muted-foreground mb-12">
                            Your AI Executive Assistant, working 24/7
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-background rounded-3xl p-8 md:p-12 border-2 border-primary/20 shadow-xl"
                    >
                        <div className="mb-8">
                            <div className="text-6xl md:text-8xl font-extrabold text-primary mb-2">$50</div>
                            <div className="text-2xl text-muted-foreground">/day</div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
                            {inclusions.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-600 shrink-0" />
                                    <span className="text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Price Comparison */}
                        <div className="bg-muted/50 rounded-xl p-6 mb-8 text-sm">
                            <p className="mb-2">
                                <span className="font-medium">A part-time receptionist:</span>{" "}
                                <span className="text-muted-foreground">$25-30/hour (and they go home at 5pm)</span>
                            </p>
                            <p>
                                <span className="font-medium">Your AI Executive Assistant:</span>{" "}
                                <span className="text-primary font-bold">$50/day (and it never sleeps)</span>
                            </p>
                        </div>

                        <Button
                            size="lg"
                            className="px-8 py-6 text-lg font-bold"
                            onClick={onCTAClick}
                        >
                            Get Started for $50/Day
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>

                        {/* Guarantee */}
                        <p className="mt-6 text-sm text-muted-foreground">
                            Cancel anytime. We keep customers by getting results, not contracts.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
