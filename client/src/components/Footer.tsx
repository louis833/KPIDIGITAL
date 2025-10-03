import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight
} from "lucide-react";

interface FooterProps {
  onCTAClick?: () => void;
}

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Digital Foundations",
  "Pricing Audit",
  "Sales System Setup",
  "Control Dashboard",
  "Referral Toolkit",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];


export default function Footer({ onCTAClick }: FooterProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCTAClick = () => {
    console.log("Footer CTA clicked");
    onCTAClick?.();
  };

  return (
    <footer className="bg-primary text-primary-foreground" ref={ref}>
      {/* Main CTA Section */}
      <motion.section
        className="py-16 border-b border-primary-foreground/10"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Take Control of Your Business. Plan for Growth.
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Stop reacting to chaos. Start building the profitable, systematic business you deserve.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground hover-elevate active-elevate-2 group"
            onClick={handleCTAClick}
            data-testid="button-footer-cta"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </motion.section>

      {/* Main Footer Content */}
      <motion.div
        className="py-16"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div variants={itemVariants}>
              <div className="mb-6">
                <img 
                  src={new URL("@assets/kpi_digital_logo_ready_1759274509680.png", import.meta.url).href}
                  alt="KPI Digital"
                  className="h-24 sm:h-28 md:h-32 w-auto mb-4 invert"
                />
                <p className="text-primary-foreground/80 mb-6">
                  Helping trades businesses move from reactive chaos to predictable, profitable growth.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>123 Business Ave, Suite 100<br />Digital City, DC 12345</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>louis@kpidigital.com.au</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Mon-Fri: 8AM-6PM PST</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm hover-elevate"
                      onClick={() => scrollToSection(link.href)}
                      data-testid={`footer-link-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-primary-foreground/80 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Trust & Social */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-bold mb-6">Connect With Us</h3>
              
              {/* Social Links */}
              <div className="flex gap-3 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={index}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300 hover-elevate"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => console.log(`${social.label} clicked`)}
                    data-testid={`social-link-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.button>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-primary-foreground/10 py-8"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div>
              © 2025 KPI Digital. All rights reserved.
            </div>
            <div className="flex gap-6">
              <button 
                onClick={() => window.location.href = '/privacy-policy'}
                className="hover:text-primary-foreground transition-colors duration-300"
                data-testid="footer-link-privacy"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => window.location.href = '/terms-of-service'}
                className="hover:text-primary-foreground transition-colors duration-300"
                data-testid="footer-link-terms"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => window.location.href = '/cookie-policy'}
                className="hover:text-primary-foreground transition-colors duration-300"
                data-testid="footer-link-cookie"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}