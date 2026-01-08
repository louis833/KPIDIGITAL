import { motion } from "framer-motion";
import { Clock, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AutomationExamplesSection() {
    const examples = [
        {
            icon: Clock,
            title: "From \"Sunday Admin\" to Paid Instantly",
            subtitle: "INVOICE PROCESSING",
            before: "Spending weekends manually copying timesheets to Xero. Errors frequent. Invoices sent days late.",
            after: "Workflow triggers instant invoice draft upon job completion. Client receives it before your van leaves the driveway.",
            impact: "Saved 10+ Admin Hours / Week"
        },
        {
            icon: Users,
            title: "Stop The \"Phone Tag\" Loop",
            subtitle: "LEAD QUALIFICATION",
            before: "Missed calls while working. Calling back hours later only to find they've hired someone else.",
            after: "AI instantly engages missed calls, qualifies the lead, and books the quote 24/7. You just show up.",
            impact: "2x Increase in Qualified Leads"
        },
        {
            icon: TrendingUp,
            title: "End The \"Busy but Broke\" Cycle",
            subtitle: "PROJECT PROFITABILITY",
            before: "Guessing job profitability. Finding out months later that a 'big job' actually lost money.",
            after: "Live dashboard tracks labor & materials vs quote in real-time. Alerts you if margins slip.",
            impact: "15% Profit Margin Increase"
        }
    ];

    const scrollToBookingForm = () => {
        const element = document.querySelector('#booking-form');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Automation in Action</h2>
                    <p className="text-xl text-muted-foreground">
                        Theory is nice. Results are better. Here is what Operational Intelligence actually looks like in practice.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {examples.map((example, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-8 h-full border border-border shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <example.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div className="mb-6">
                                    <div className="text-sm font-bold text-primary uppercase tracking-wide mb-1">{example.subtitle}</div>
                                    <h3 className="text-2xl font-bold">{example.title}</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="p-4 bg-red-500/5 rounded-lg border border-red-500/10">
                                        <div className="text-xs font-bold text-red-600 mb-1 uppercase">Before</div>
                                        <p className="text-sm text-foreground/80">{example.before}</p>
                                    </div>
                                    <div className="p-4 bg-green-500/5 rounded-lg border border-green-500/10">
                                        <div className="text-xs font-bold text-green-600 mb-1 uppercase">After</div>
                                        <p className="text-sm text-foreground/80">{example.after}</p>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-border">
                                    <div className="text-center font-bold text-lg text-primary">
                                        {example.impact}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-6">Stop Tolerating Inefficiency.</h3>
                    {/* The parent component DigitalFoundations needs to pass us the scroll function or we duplicate it. 
                         The previous code didn't use a button so I'll just use a direct document access or link for now 
                         to avoid prop drilling complexity if the parent doesn't adhere to it yet. 
                         Actually, I'll add the button using native DOM logic for simplicity as defined above. 
                     */}
                    <button
                        onClick={scrollToBookingForm}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20 hover-elevate"
                    >
                        Get Your Operational Audit
                    </button>
                </div>
            </div>
        </section>
    );
}
