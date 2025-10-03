import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

interface NavigationProps {
  onCTAClick?: () => void;
}

export default function Navigation({ onCTAClick }: NavigationProps) {
  const [, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "/digital-foundations", isPage: true },
    { label: "Process", href: "#process", isPage: false },
    { label: "Results", href: "#results", isPage: false },
    { label: "About", href: "#about", isPage: false },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isPage) {
      setLocation(item.href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Check if we're on the home page
      const currentPath = window.location.pathname;
      if (currentPath !== '/') {
        // Navigate to home first, then scroll to section
        setLocation('/');
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home, just scroll to section
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleCTAClick = () => {
    console.log("Navigation CTA clicked");
    onCTAClick?.();
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-28 md:h-36">
            {/* Logo */}
            <motion.button
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                setLocation('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              data-testid="button-logo-home"
            >
              <img 
                src={new URL("@assets/kpi_digital_logo_circle_1759274509679.png", import.meta.url).href}
                alt="KPI Digital"
                className="h-24 md:h-32 w-auto"
              />
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium focus-ring"
                  onClick={() => handleNavClick(item)}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  data-testid={`nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              
              <Button
                size="sm"
                className="hover-elevate active-elevate-2"
                onClick={handleCTAClick}
                data-testid="button-nav-cta"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover-elevate"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={`fixed inset-0 z-40 md:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <motion.div
          className="absolute top-28 left-0 right-0 bg-background border-b border-border shadow-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ 
            y: isMobileMenuOpen ? 0 : -20, 
            opacity: isMobileMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  className="text-left text-lg text-foreground hover:text-primary transition-colors duration-300 font-medium focus-ring"
                  onClick={() => handleNavClick(item)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ 
                    x: isMobileMenuOpen ? 0 : -20,
                    opacity: isMobileMenuOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </motion.button>
              ))}
              
              <div className="flex flex-col space-y-4 pt-4 border-t border-border">
                
                <Button
                  className="w-full hover-elevate active-elevate-2"
                  onClick={() => {
                    handleCTAClick();
                    setIsMobileMenuOpen(false);
                  }}
                  data-testid="button-mobile-cta"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}