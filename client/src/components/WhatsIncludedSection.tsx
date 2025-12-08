import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function WhatsIncludedSection() {
    const freeSetup = [
        {
            title: "Professional Website",
            description: "Mobile-optimised, fast-loading, built to convert visitors into enquiries. Click-to-call buttons, quote forms, and chat — all connected to your AI assistant.",
        },
        {
            title: "Google Business Profile",
            description: "Fully optimised so you show up when locals search \"electrician near me.\" Photos, services, posts, and messaging — all handled.",
        },
        {
            title: "Social Media Presence",
            description: "Facebook and Instagram profiles set up and optimised. Ready to capture leads and build credibility.",
        },
        {
            title: "All Channels Connected",
            description: "Every enquiry — phone, web, social, Google — flows into one dashboard. Nothing falls through the cracks.",
        },
    ];

    const ongoing = [
        {
            title: "AI Assistant",
            description: "24/7 coverage across all channels. Instant responses. Lead qualification. Appointment booking. Follow-up messages.",
        },
        {
            title: "Director Mode Dashboard",
            description: "Your daily command centre. Leads, quotes, schedule, and approvals — all in one place. Designed for tradies, not tech experts.",
        },
        {
            title: "Continuous Improvement",
            description: "The AI learns your preferences, pricing, and style. The more you use it, the better it gets.",
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything You Need, Set Up For You</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Free Setup Column */}
                    <div className="bg-muted/30 rounded-3xl p-8 md:p-10 border border-border">
                        <div className="mb-8">
                            <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                One-Time
                            </span>
                            <h3 className="text-2xl font-bold">Free Setup Includes:</h3>
                        </div>
                        <div className="space-y-8">
                            {freeSetup.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="mt-1 bg-background rounded-full p-1 shrink-0 h-6 w-6 flex items-center justify-center border border-border">
                                        <Check className="w-3 h-3 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2">{item.title}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ongoing Column */}
                    <div className="bg-primary/5 rounded-3xl p-8 md:p-10 border border-primary/20">
                        <div className="mb-8">
                            <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Monthly Service
                            </span>
                            <h3 className="text-2xl font-bold">Ongoing:</h3>
                        </div>
                        <div className="space-y-8">
                            {ongoing.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="mt-1 bg-background rounded-full p-1 shrink-0 h-6 w-6 flex items-center justify-center border border-primary/20">
                                        <Check className="w-3 h-3 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2">{item.title}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
