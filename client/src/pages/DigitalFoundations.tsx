import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Search, 
  Users, 
  Mail, 
  ShoppingCart, 
  BarChart3, 
  Shield, 
  Palette,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useLocation } from "wouter";
import ScrollIndicator from "@/components/ScrollIndicator";

const foundations = [
  {
    icon: Globe,
    title: "Online Presence",
    description: "Your digital storefront working 24/7",
    benefits: [
      "Professional, mobile-responsive website",
      "Local SEO & Google Business Profile",
      "Secure hosting and memorable domain"
    ],
    impact: "Customers find you when they need you, not just when you're advertising."
  },
  {
    icon: Search,
    title: "Search Visibility",
    description: "Be found when customers are searching",
    benefits: [
      "Search engine optimization (SEO)",
      "Strategic content marketing",
      "Targeted paid advertising campaigns"
    ],
    impact: "Consistent lead flow from customers actively looking for your services."
  },
  {
    icon: Users,
    title: "Social Media & Community",
    description: "Build trust and stay top-of-mind",
    benefits: [
      "Active presence on relevant platforms",
      "Community engagement and interaction",
      "Reputation management and reviews"
    ],
    impact: "Build a loyal following that refers you and chooses you first."
  },
  {
    icon: Mail,
    title: "Customer Communication",
    description: "Stay connected with leads and clients",
    benefits: [
      "Email marketing and automation",
      "CRM for managing relationships",
      "Live chat and messaging support"
    ],
    impact: "Turn more leads into customers and keep clients coming back."
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Transactions",
    description: "Accept payments seamlessly",
    benefits: [
      "Online booking and payment systems",
      "Secure payment gateways",
      "Customer portals for self-service"
    ],
    impact: "Get paid faster and make it easy for customers to do business with you."
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Know what's working and what's not",
    benefits: [
      "Analytics and conversion tracking",
      "Performance dashboards",
      "Data-driven decision making"
    ],
    impact: "Stop guessing and start making decisions based on real numbers."
  },
  {
    icon: Shield,
    title: "Security & Trust",
    description: "Protect your business and customers",
    benefits: [
      "SSL certificates and HTTPS",
      "Data privacy compliance",
      "Backup and cybersecurity measures"
    ],
    impact: "Build trust and protect your business from costly security issues."
  },
  {
    icon: Palette,
    title: "Branding & Creative Assets",
    description: "Look professional everywhere",
    benefits: [
      "Consistent visual identity",
      "Professional templates and assets",
      "High-quality video and multimedia"
    ],
    impact: "Stand out from competitors and look like the premium choice."
  }
];

const whyItMatters = [
  {
    title: "Stop Losing Leads",
    description: "Without proper digital foundations, you're invisible to customers searching online. You're losing jobs to competitors who show up first."
  },
  {
    title: "No More Wasted Ad Spend",
    description: "Poor setup means your marketing dollars disappear with little to show for it. Proper foundations ensure every dollar works harder."
  },
  {
    title: "Build Real Trust",
    description: "Customers research before they buy. A professional digital presence builds the trust you need to win premium projects."
  },
  {
    title: "Scale Without Breaking",
    description: "Growth reveals cracks in your foundation. Build it right once, then scale with confidence knowing it can handle the volume."
  }
];

export default function DigitalFoundations() {
  const [, setLocation] = useLocation();
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [foundationsRef, foundationsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleGetStarted = () => {
    setLocation("/#quote-form");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            ref={headerRef}
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Digital Foundations
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              The complete digital infrastructure your trades business needs to compete, grow, and win premium projects.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Most trades businesses approach digital marketing piecemeal—a website here, some ads there. 
              The result? Wasted money, missed opportunities, and constant frustration. 
              <span className="text-foreground font-semibold"> Digital Foundations changes that.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-background" ref={whyRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Digital Foundations Matter
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Without the right foundation, your digital marketing is built on sand
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyItMatters.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover-elevate">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Elements Section */}
      <section className="py-20 bg-muted/30" ref={foundationsRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={foundationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The 8 Pillars of Digital Foundations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need, working together seamlessly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {foundations.map((foundation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={foundationsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover-elevate">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <foundation.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {foundation.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {foundation.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 text-sm">What's Included:</h4>
                    <ul className="space-y-2">
                      {foundation.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium text-foreground">
                      <span className="text-primary">Impact:</span> {foundation.impact}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Difference Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Digital Foundations Difference
              </h2>
              <p className="text-xl text-muted-foreground">
                We don't just build websites. We build complete digital ecosystems that work together 
                to attract, convert, and retain your ideal customers.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6 hover-elevate">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Built for Trades Businesses</h3>
                    <p className="text-muted-foreground">
                      Not generic templates—every element is designed specifically for how trades businesses attract 
                      and win customers.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-elevate">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Integrated & Automated</h3>
                    <p className="text-muted-foreground">
                      All systems work together seamlessly—no manual work, no data silos, no dropped leads.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-elevate">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Ongoing Optimization</h3>
                    <p className="text-muted-foreground">
                      We continuously monitor, test, and improve your digital presence to ensure maximum ROI.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Build Your Foundation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stop losing customers to competitors with better digital presence. 
              Let's build your complete digital foundation.
            </p>
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2 group"
              onClick={handleGetStarted}
              data-testid="button-get-started-foundations"
            >
              Get Your Custom Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollIndicator />
    </div>
  );
}
