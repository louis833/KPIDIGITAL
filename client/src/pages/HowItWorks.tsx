import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
    Phone,
    Filter,
    Mail,
    LayoutDashboard,
    ShieldCheck,
    Brain,
    Package,
    ArrowRight,
    CheckCircle,
    MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

const features = [
    {
        icon: Phone,
        title: "Every Call Answered, 24/7",
        description: "Your AI receptionist answers every inbound call to your business number. It sounds natural, professional, and friendly — just like a real receptionist.",
        details: [
            "Greeting: Custom greeting with your business name",
            "Qualification: Asks electrician-specific questions",
            "Job Details: Gathers property type, access, and urgency",
            "Urgency Triage: Identifies emergencies vs scheduled work",
            "Next Steps: Schedules callbacks or books appointments"
        ]
    },
    {
        icon: Filter,
        title: "Only Talk to Qualified Leads",
        description: "Not every caller is a good fit. The AI pre-screens every lead so you only spend time on real opportunities.",
        details: [
            "Filters out tyre-kickers and price shoppers",
            "Checks service area coverage",
            "Verifies job type matches your services",
            "Prioritises high-value opportunities"
        ]
    },
    {
        icon: Mail,
        title: "Automated Follow-Ups",
        description: "After every call, the AI sends automated emails and SMS messages to keep customers engaged without you lifting a finger.",
        details: [
            "Immediate confirmation SMS/Email",
            "Quote follow-ups",
            "Appointment reminders",
            "Post-job feedback requests"
        ]
    },
    {
        icon: LayoutDashboard,
        title: "Director Mode Dashboard",
        description: "Your command centre. Log in once a day to review your business performance and plan tomorrow.",
        details: [
            "Call summaries and recordings",
            "Pre-filled quotes ready for review",
            "Optimised daily schedule",
            "Revenue and conversion metrics"
        ]
    },
    {
        icon: ShieldCheck,
        title: "You're Always in Control",
        description: "The AI handles the heavy lifting, but you make the final decisions. It's AI-assisted decision making, not autopilot.",
        details: [
            "No auto-send quotes without approval",
            "Override AI suggestions anytime",
            "Complex calls flagged for review",
            "Full transcript visibility"
        ]
    },
    {
        icon: Brain,
        title: "Gets Smarter Over Time",
        description: "Every time you approve, tweak, or override the AI, it learns your preferences and gets better.",
        details: [
            "Learns your pricing patterns",
            "Adapts to your communication style",
            "Remembers business rules",
            "Continuous improvement loop"
        ]
    }
];

function FeatureSection({ feature, index }: { feature: typeof features[0], index: number }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const isEven = index % 2 === 0;

    return (
        <section className={`py-20 ${isEven ? 'bg-background' : 'bg-muted/30'}`} ref={ref}>
            <div className="container mx-auto px-4">
                <div className={`flex flex-col md:flex-row gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>

                    {/* Content */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl">
                                <feature.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-foreground">{feature.title}</h2>
                        </div>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {feature.description}
                        </p>

                        <ul className="space-y-4">
                            {feature.details.map((detail, idx) => (
                                <motion.li
                                    key={idx}
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.2 + (idx * 0.1) }}
                                >
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <span className="text-foreground/80">{detail}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Visual Placeholder */}
                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden group hover-elevate border-2 border-muted">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                            <div className="text-center p-8">
                                <feature.icon className="w-16 h-16 text-muted-foreground/20 mx-auto mb-4" />
                                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                                    {feature.title} Visual
                                </p>
                            </div>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default function HowItWorks() {
    const scrollToBookingForm = () => {
        const element = document.querySelector('#booking-form');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Helmet>
                <title>How It Works | AI Receptionist for Electricians | KPI Digital</title>
                <meta
                    name="description"
                    content="See exactly how our AI receptionist answers calls, qualifies leads, and uses Director Mode to organise your day. Built for Australian electricians."
                />
                <meta
                    name="keywords"
                    content="AI receptionist how it works, electrician call handling, director mode electrician, AI lead qualification"
                />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Navigation onCTAClick={scrollToBookingForm} />

                <main>
                    {/* Hero Section */}
                    <section className="pt-32 pb-20 bg-background relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
                        <div className="container mx-auto px-4 relative z-10 text-center">
                            <motion.h1
                                className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                How Your AI Receptionist Works
                            </motion.h1>
                            <motion.p
                                className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                A complete breakdown of how KPI Digital answers every call, qualifies every lead,
                                and organises your day — so you can focus on the work that makes you money.
                            </motion.p>
                        </div>
                    </section>

                    {/* Feature Sections */}
                    {features.map((feature, index) => (
                        <FeatureSection key={index} feature={feature} index={index} />
                    ))}

                    {/* Full Stack Services Section */}
                    <section className="py-24 bg-primary text-primary-foreground">
                        <div className="container mx-auto px-4 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Package className="w-16 h-16 mx-auto mb-6 text-primary-foreground/90" />
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything You Need, One Price</h2>
                                <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12">
                                    KPI Digital isn't just an AI receptionist. It's a complete business system included in your $380/week subscription.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                                    <Card className="bg-primary-foreground/10 border-primary-foreground/20 p-6 text-primary-foreground">
                                        <LayoutDashboard className="w-10 h-10 mb-4 mx-auto" />
                                        <h3 className="font-bold text-lg mb-2">Custom Website</h3>
                                        <p className="text-sm opacity-80">Professional, mobile-friendly website with SEO optimisation. We build it, you own it.</p>
                                    </Card>
                                    <Card className="bg-primary-foreground/10 border-primary-foreground/20 p-6 text-primary-foreground">
                                        <MessageSquare className="w-10 h-10 mb-4 mx-auto" />
                                        <h3 className="font-bold text-lg mb-2">CRM System</h3>
                                        <p className="text-sm opacity-80">Track leads, jobs, quotes, and invoices in one place. Integrated with your AI.</p>
                                    </Card>
                                    <Card className="bg-primary-foreground/10 border-primary-foreground/20 p-6 text-primary-foreground">
                                        <Phone className="w-10 h-10 mb-4 mx-auto" />
                                        <h3 className="font-bold text-lg mb-2">Social Media</h3>
                                        <p className="text-sm opacity-80">We handle your Facebook, Instagram, and LinkedIn content and engagement.</p>
                                    </Card>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className="py-24 bg-background">
                        <div className="container mx-auto px-4 text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-muted/30 rounded-3xl p-12 max-w-4xl mx-auto border border-border"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                    See It in Action
                                </h2>
                                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                                    Book a free 15-minute call and we'll show you exactly how it works for your business.
                                </p>
                                <Button
                                    size="lg"
                                    className="px-8 py-6 text-lg font-semibold hover-elevate"
                                    onClick={scrollToBookingForm}
                                >
                                    Book a Call
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </motion.div>
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
