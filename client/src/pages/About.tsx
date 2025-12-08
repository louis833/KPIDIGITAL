import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
    Users,
    HeartHandshake,
    Lightbulb,
    ShieldCheck,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

const values = [
    {
        icon: Users,
        title: "Electrician-First",
        description: "We only work with electricians. That means we understand your business, your challenges, and your language. No generic solutions here."
    },
    {
        icon: HeartHandshake,
        title: "Hands-On Support",
        description: "We don't just sell you software and disappear. We set you up, train you, and continuously improve your system based on your feedback."
    },
    {
        icon: Lightbulb,
        title: "Transparency",
        description: "One price, no hidden fees, no surprises. You know exactly what you're paying for and what you're getting."
    },
    {
        icon: ShieldCheck,
        title: "Human-in-the-Loop",
        description: "AI is powerful, but you're the expert. We build systems that assist you, not replace you."
    }
];

export default function About() {
    const scrollToBookingForm = () => {
        const element = document.querySelector('#booking-form');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Helmet>
                <title>About Us | Built for Electricians | KPI Digital</title>
                <meta
                    name="description"
                    content="10+ years working with electrical businesses. We built KPI Digital to help Australian electricians never miss a call and grow without admin overload."
                />
                <meta
                    name="keywords"
                    content="electrician business solutions, AI for electricians, electrician growth system"
                />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Navigation onCTAClick={scrollToBookingForm} />

                <main>
                    {/* Hero Section */}
                    <section className="pt-32 pb-20 bg-background text-center">
                        <div className="container mx-auto px-4">
                            <motion.h1
                                className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                Built by Someone Who Gets It
                            </motion.h1>
                            <motion.p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                10+ years working with electrical businesses. I've seen what works,
                                what doesn't, and what sparkies actually need to grow.
                            </motion.p>
                        </div>
                    </section>

                    {/* Founder Story */}
                    <section className="py-24 bg-muted/30">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1">
                                    <div className="aspect-square bg-muted rounded-2xl overflow-hidden relative shadow-xl">
                                        {/* Placeholder for Founder Image */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-muted flex items-center justify-center">
                                            <Users className="w-24 h-24 text-muted-foreground/20" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold mb-6">Why Electricians?</h2>
                                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                        <p>
                                            I've spent over a decade working hands-on with electrical trade businesses — not as a consultant
                                            dropping in for a day, but in the trenches, dealing with the same challenges you face every day.
                                        </p>
                                        <p>
                                            I've seen talented electricians lose jobs because they couldn't answer the phone while on the tools.
                                            I've watched businesses struggle with admin overload, unqualified leads, and slow response times.
                                        </p>
                                        <p>
                                            And I've seen the same pattern over and over: the electricians who win aren't always the best
                                            at the trade — they're the ones who answer the phone fastest and follow up consistently.
                                        </p>
                                        <p className="font-medium text-foreground">
                                            That's why I built KPI Digital. Not as a generic "business solution," but as a purpose-built
                                            system for electricians who want to grow without drowning in admin.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Mission Section */}
                    <section className="py-24 bg-primary text-primary-foreground text-center">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
                            <p className="text-2xl md:text-3xl font-medium leading-relaxed opacity-90 mb-12">
                                "To help Australian electricians never miss another call, never waste time on unqualified leads,
                                and never spend another evening buried in admin."
                            </p>
                            <p className="text-lg opacity-80 max-w-2xl mx-auto">
                                We believe the best electricians should win the work — not the ones with the biggest marketing
                                budgets or the most admin staff. KPI Digital levels the playing field.
                            </p>
                        </div>
                    </section>

                    {/* Values Section */}
                    <section className="py-24 bg-background">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What We Stand For</h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {values.map((value, index) => (
                                    <Card key={index} className="p-8 hover-elevate border-t-4 border-t-primary">
                                        <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                                            <value.icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {value.description}
                                        </p>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className="py-24 bg-muted/30">
                        <div className="container mx-auto px-4 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Talk</h2>
                            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Book a free 15-minute call. No pressure, no sales pitch — just a conversation about your business.
                            </p>
                            <Button
                                size="lg"
                                className="px-8 py-6 text-lg font-semibold hover-elevate"
                                onClick={scrollToBookingForm}
                            >
                                Book a Call
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
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
