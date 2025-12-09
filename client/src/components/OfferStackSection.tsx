import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function OfferStackSection() {
    const stackItems = [
        {
            title: "Professional Website Build",
            value: "$3,040",
            description: "A fully custom-built website that is optimised for mobile devices, ensuring it loads quickly and looks great on smartphones and tablets, with a high-converting design focused on turning visitors into customers through intuitive navigation, compelling calls-to-action, and tailored layouts for electrical services."
        },
        {
            title: "Google Business Profile Optimisation",
            value: "$608",
            description: "Enhance your Google Business Profile to rank higher in local search results on Google Maps and Search, including adding accurate business details, photos, services, and encouraging reviews to attract more local electrician inquiries."
        },
        {
            title: "Social Media Setup (FB & Insta)",
            value: "$365",
            description: "Create professional profiles on Facebook (FB) and Instagram (Insta) that are optimised and ready to capture leads, including bio setup, profile pictures, cover images, initial posts, and integration with your website for seamless lead generation."
        },
        {
            title: "AI Executive Assistant Integration",
            value: "$1,216",
            description: "Integrate an Artificial Intelligence (AI) executive assistant for seamless connection to your phone and web forms, automating responses, scheduling, and lead management to save time and improve customer interactions."
        },
        {
            title: "Director Mode Dashboard",
            value: "$725/mo",
            description: "Provide a Director Mode Dashboard offering full visibility and control over your leads, allowing you to track inquiries, monitor performance metrics, and manage your digital presence from a single, user-friendly interface."
        },
        {
            title: "Professional Email Setup",
            value: "$365",
            description: "Set up professional email addresses using your custom domain (e.g., via Google Workspace or Gmail for Business), including configuration, integration with your website and tools, and basic training on usage for secure and branded communication."
        },
        {
            title: "Domain Registration and Hosting",
            value: "$243",
            description: "Register a secure custom domain name for your business and set up reliable web hosting with Secure Sockets Layer (SSL) certification to ensure your site is encrypted, trustworthy, and performs well for visitors."
        },
        {
            title: "Google Ads Manager Setup",
            value: "$730",
            description: "Establish a basic Google Ads Manager account, conduct keyword research targeted to local electrical services, and create an initial campaign template to help drive paid traffic and generate leads efficiently."
        },
        {
            title: "Local SEO Audit and Implementation",
            value: "$608",
            description: "Perform a local Search Engine Optimization (SEO) audit and implement improvements, including on-page SEO adjustments, building citations on relevant directories, and keyword optimization to boost your visibility in local search results."
        },
        {
            title: "Review Management System",
            value: "$365",
            description: "Implement tools to collect, monitor, and respond to customer reviews across platforms like Google and Facebook, with automation features to send review requests and alerts, helping build trust and improve your online reputation."
        },
        {
            title: "Online Booking and Scheduling Integration",
            value: "$486",
            description: "Embed an online booking and scheduling calendar tool directly on your website, integrated with Artificial Intelligence (AI) for automated reminders, allowing clients to book electrical services easily and reducing no-shows."
        },
        {
            title: "Basic CRM Setup",
            value: "$608",
            description: "Set up a lightweight Customer Relationship Management (CRM) system to efficiently track leads, manage quotes, and handle follow-ups, providing a central hub for customer data and interactions tailored to small electrical businesses."
        },
        {
            title: "Google Analytics and Tracking",
            value: "$304",
            description: "Install and configure Google Analytics on your website to track visitor behavior, traffic sources, and performance, complete with a simple reporting dashboard to help you understand and optimize your online presence."
        },
        {
            title: "Logo and Basic Branding Kit",
            value: "$608",
            description: "Design a custom logo, select a cohesive color scheme, and provide templates for business cards and other materials, all optimized for electrical trades to create a professional and memorable brand identity."
        },
        {
            title: "Initial Content Pack",
            value: "$730",
            description: "Develop 5–10 pages of Search Engine Optimization (SEO)-optimized website content, including service descriptions, about us sections, and blog posts on electrical tips, plus custom or stock graphics to enhance visual appeal and engagement."
        }
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
                                $11,001+
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
