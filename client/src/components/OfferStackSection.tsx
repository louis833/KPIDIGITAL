import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function OfferStackSection() {
    const stackItems = [
        {
            title: "Professional Website Build",
            value: "$2,500",
            description: "Mobile-optimised, high-converting design."
        },
        {
            title: "Google Business Profile Optimisation",
            value: "$500",
            description: "Rank higher in local searches."
        },
        {
            title: "Social Media Setup (FB & Insta)",
            value: "$300",
            description: "Professional profiles ready to capture leads."
        },
        {
            title: "AI Executive Assistant Integration",
            value: "$1,000",
            description: "Seamless connection to your phone and web forms."
        },
        {
            title: "Director Mode Dashboard",
            value: "$97/mo",
            description: "Full visibility and control over your leads."
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Here's What You Get</h2>
                        <p className="text-xl text-muted-foreground">We set everything up for you. You don't lift a finger.</p>
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
                                            <span className="font-bold text-muted-foreground hidden sm:block">Value: {item.value}</span>
                                        </div>
                                        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                                        <span className="font-bold text-muted-foreground sm:hidden text-sm mt-2 block">Value: {item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t-2 border-dashed border-primary/30 text-center">
                            <div className="mb-2 text-muted-foreground text-lg font-medium">Total Value</div>
                            <div className="text-4xl md:text-5xl font-bold text-muted-foreground line-through decoration-destructive decoration-4 opacity-70 mb-4">
                                $4,397+
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <div className="text-2xl font-bold text-primary">Your Setup Price:</div>
                                <div className="text-6xl md:text-7xl font-extrabold text-foreground tracking-tight">
                                    $0
                                </div>
                                <div className="text-sm font-medium text-muted-foreground bg-primary/10 px-4 py-1 rounded-full mt-2">
                                    Then just $50/day for your AI Executive Assistant
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
