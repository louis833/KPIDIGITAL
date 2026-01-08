import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function OfferStackSection() {
    const stackItems = [
        {
            title: "Comprehensive Operational Audit",
            description: "A deep-dive analysis of your current systems, workflows, and data bottlenecks. We identify exactly where you're losing time and money."
        },
        {
            title: "Unified Data Dashboard",
            description: "Custom-built dashboard integrating your financial, operational, and customer data into a single source of truth. Real-time visibility, anytime."
        },
        {
            title: "Automated Workflow System",
            description: "Implementation of intelligent automation for your core processes—invoicing, lead follow-up, and project tracking. Set it and forget it."
        },
        {
            title: "Strategic Growth Roadmap",
            description: "A data-backed plan for scaling your operations. We use your own data to tell you the best path forward for profitable growth."
        },
        {
            title: "Integration Setup (Xero, HubSpot, etc.)",
            description: "Seamless connection of your existing software tools. We make them talk to each other so you don't have to be the middleman."
        },
        {
            title: "Team Training & Handoff",
            description: "We don't just build it; we teach your team how to use it. Comprehensive training to ensure adoption and maximize ROI."
        },
        {
            title: "Proactive System Monitoring",
            description: "We perform continuous health checks on your systems, ensuring data accuracy and spotting optimization opportunities as they arise."
        }
    ];

    const scrollToBooking = () => {
        const element = document.querySelector('#booking-form');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">The Operational Framework</h2>
                        <p className="text-xl text-muted-foreground">The 7 components we install to bulletproof your business.</p>
                    </div>

                    <Card className="p-8 md:p-12 border-2 border-primary/20 shadow-2xl bg-card relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="space-y-6 relative z-10">
                            {stackItems.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 border-b border-border/50 pb-6 last:border-0 last:pb-0">
                                    <div className="mt-1 bg-green-500/10 rounded-full p-1 shrink-0">
                                        <Check className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-xl font-bold">{item.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t-2 border-dashed border-primary/30 text-center">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <div className="text-2xl font-bold text-primary">Your Investment</div>
                                <p className="text-muted-foreground max-w-md mx-auto">
                                    Every business is unique. We provide a custom proposal based on your specific operational needs and complexity.
                                </p>
                                <Button
                                    size="lg"
                                    className="px-8 py-6 text-lg font-bold hover-elevate mt-4"
                                    onClick={scrollToBooking}
                                >
                                    Get Your Custom Proposal
                                </Button>
                                <div className="text-xs text-muted-foreground mt-2 opacity-70">
                                    * We start with an audit to determine your exact requirements.
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
