import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    Check,
    X,
    HelpCircle,
    ArrowRight,
    ShieldCheck,
    Calculator
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

const inclusions = [
    "24/7 AI Receptionist - Unlimited calls",
    "Smart Lead Qualification",
    "Email & SMS Automation",
    "Director Mode Dashboard",
    "Custom Website (Built for you)",
    "Full CRM System",
    "Social Media Management",
    "Ongoing AI Training",
    "Hands-On Support",
    "Human-in-the-Loop Oversight"
];

const faqs = [
    {
        question: "Is there a setup fee?",
        answer: "No. Setup, AI training, and website build are all included in your weekly price."
    },
    {
        question: "Are there per-call charges?",
        answer: "No. Unlimited calls are included. Answer 10 calls a week or 100 — same price."
    },
    {
        question: "What if I want to cancel?",
        answer: "Cancel anytime with 2 weeks' notice."
    },
    {
        question: "Do I need to change my phone number?",
        answer: "No. We integrate with your existing number, or we can provide a new one if you prefer."
    },
    {
        question: "What if the AI makes a mistake?",
        answer: "You review everything in Director Mode before it goes to the customer. The AI suggests, you approve."
    },
    {
        question: "Can I customise the AI's responses?",
        answer: "Absolutely. We train the AI on your business, your pricing, and your tone. You can tweak it anytime."
    }
];

export default function Pricing() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const scrollToBookingForm = () => {
        const element = document.querySelector('#booking-form');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Helmet>
                <title>Pricing | $380/Week All-Inclusive | AI Receptionist for Electricians</title>
                <meta
                    name="description"
                    content="Simple, transparent pricing. $380/week includes AI receptionist, website, CRM, and social media. No setup fees. 30-day money-back guarantee."
                />
                <meta
                    name="keywords"
                    content="electrician AI receptionist pricing, electrician answering service cost, electrician CRM pricing"
                />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Navigation onCTAClick={scrollToBookingForm} />

                <main>
                    {/* Hero Section */}
                    <section className="pt-32 pb-16 bg-background text-center">
                        <div className="container mx-auto px-4">
                            <motion.h1
                                className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Simple, Transparent Pricing
                            </motion.h1>
                            <motion.p
                                className="text-xl text-muted-foreground max-w-2xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                One weekly price. Everything included. No surprises.
                            </motion.p>
                        </div>
                    </section>

                    {/* Pricing Card Section */}
                    <section className="pb-24" ref={ref}>
                        <div className="container mx-auto px-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6 }}
                                className="max-w-3xl mx-auto"
                            >
                                <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl relative">
                                    {/* Badge */}
                                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-6 py-2 rounded-bl-xl font-bold text-sm">
                                        MOST POPULAR
                                    </div>

                                    <div className="p-8 md:p-12 bg-card">
                                        <div className="text-center mb-10">
                                            <p className="text-muted-foreground line-through text-xl mb-2">~~$1,500~~/week</p>
                                            <p className="text-sm text-muted-foreground mb-4">If purchased separately</p>

                                            <div className="flex items-center justify-center gap-2 mb-2">
                                                <span className="text-6xl md:text-7xl font-bold text-foreground">$380</span>
                                                <span className="text-xl text-muted-foreground self-end mb-2">/week</span>
                                            </div>

                                            <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-bold">
                                                Save $1,120/week | 75% OFF
                                            </div>

                                            <p className="mt-4 text-muted-foreground">Custom quotes available for larger teams</p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
                                            {inclusions.map((item, index) => (
                                                <div key={index} className="flex items-center gap-3">
                                                    <div className="bg-primary/10 p-1 rounded-full">
                                                        <Check className="w-4 h-4 text-primary" />
                                                    </div>
                                                    <span className="text-foreground/90">{item}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Button
                                            size="lg"
                                            className="w-full py-8 text-xl font-bold hover-elevate shadow-lg"
                                            onClick={scrollToBookingForm}
                                        >
                                            Get Your Custom Quote
                                            <ArrowRight className="ml-2 h-6 w-6" />
                                        </Button>

                                        <p className="text-center text-sm text-muted-foreground mt-4">
                                            No setup fees • Cancel anytime • 30-day money-back guarantee
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>
                    </section>

                    {/* ROI Section */}
                    <section className="py-24 bg-muted/30">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What's the Real Cost?</h2>
                                    <p className="text-lg text-muted-foreground">Let's do the math on missed opportunities.</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <Card className="p-8 bg-background border-destructive/20">
                                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-destructive">
                                            <X className="w-6 h-6" />
                                            Cost of Missed Calls
                                        </h3>
                                        <ul className="space-y-4">
                                            <li className="flex justify-between border-b pb-2">
                                                <span className="text-muted-foreground">Avg. Job Value</span>
                                                <span className="font-semibold">$500 - $2,000</span>
                                            </li>
                                            <li className="flex justify-between border-b pb-2">
                                                <span className="text-muted-foreground">Missed Calls/Week</span>
                                                <span className="font-semibold">5 - 10</span>
                                            </li>
                                            <li className="flex justify-between pt-2">
                                                <span className="font-bold text-destructive">Potential Lost Revenue</span>
                                                <span className="font-bold text-destructive">$2,500 - $20,000/week</span>
                                            </li>
                                        </ul>
                                    </Card>

                                    <Card className="p-8 bg-background border-primary/20">
                                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
                                            <Check className="w-6 h-6" />
                                            Cost of KPI Digital
                                        </h3>
                                        <div className="flex items-center justify-center h-32 mb-4">
                                            <span className="text-5xl font-bold text-primary">$380</span>
                                            <span className="text-xl text-muted-foreground ml-2">/week</span>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-lg text-center">
                                            <p className="font-medium text-foreground">
                                                If the AI helps you book just <span className="text-primary font-bold">ONE</span> extra job per week, it's paid for itself.
                                            </p>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Comparison Table */}
                    <section className="py-24 bg-background">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How We Compare</h2>

                            <div className="overflow-x-auto max-w-5xl mx-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-muted">
                                            <th className="p-4 text-left text-muted-foreground font-medium">Feature</th>
                                            <th className="p-4 text-center text-muted-foreground font-medium">Traditional Answering</th>
                                            <th className="p-4 text-center text-muted-foreground font-medium">Trade Software</th>
                                            <th className="p-4 text-center text-primary font-bold bg-primary/5 rounded-t-xl">KPI Digital</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { name: "24/7 Call Answering", trad: true, soft: false, kpi: true },
                                            { name: "AI Lead Qualification", trad: false, soft: false, kpi: true },
                                            { name: "Director Mode Dashboard", trad: false, soft: false, kpi: true },
                                            { name: "Custom Website", trad: false, soft: false, kpi: true },
                                            { name: "CRM Included", trad: false, soft: true, kpi: true },
                                            { name: "Social Media Mgmt", trad: false, soft: false, kpi: true },
                                            { name: "Electrician Specific", trad: false, soft: "partial", kpi: true },
                                        ].map((row, i) => (
                                            <tr key={i} className="border-b border-muted/50 hover:bg-muted/10">
                                                <td className="p-4 font-medium">{row.name}</td>
                                                <td className="p-4 text-center">
                                                    {row.trad ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}
                                                </td>
                                                <td className="p-4 text-center">
                                                    {row.soft === "partial" ? <span className="text-yellow-500 font-bold">⚠️</span> :
                                                        row.soft ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />}
                                                </td>
                                                <td className="p-4 text-center bg-primary/5">
                                                    <Check className="w-6 h-6 text-primary mx-auto" />
                                                </td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td className="p-4 font-bold">Price</td>
                                            <td className="p-4 text-center text-muted-foreground">$200-$400/mo + calls</td>
                                            <td className="p-4 text-center text-muted-foreground">$50-$150/mo</td>
                                            <td className="p-4 text-center font-bold text-primary bg-primary/5 rounded-b-xl">$380/week</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Guarantee */}
                    <section className="py-20 bg-primary text-primary-foreground">
                        <div className="container mx-auto px-4 text-center max-w-3xl">
                            <ShieldCheck className="w-16 h-16 mx-auto mb-6 opacity-90" />
                            <h2 className="text-3xl font-bold mb-6">30-Day Money-Back Guarantee</h2>
                            <p className="text-xl opacity-90 leading-relaxed">
                                Try KPI Digital risk-free for 30 days. If you're not seeing results — more calls answered,
                                more qualified leads, less admin time — we'll refund every cent. No questions asked.
                            </p>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="py-24 bg-background">
                        <div className="container mx-auto px-4 max-w-3xl">
                            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-left text-lg font-medium">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </section>

                    <div id="quote-form">
                        <BookingForm />
                    </div>
                </main>

                <Footer onCTAClick={scrollToBookingForm} />
            </div>
        </>
    );
}
