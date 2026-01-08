import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  onCTAClick?: () => void;
}

export default function Navigation({ onCTAClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-bold text-foreground flex items-center gap-2" onClick={handleNavClick}>
              <img src="/logo.png" alt="KPI Digital" className="h-14 w-auto" />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/operational-intelligence">
              <a className="text-sm font-medium text-foreground hover:text-primary transition-colors" onClick={handleNavClick}>
                Operational Intelligence
              </a>
            </Link>
            <Link href="/audit">
              <a className="text-sm font-medium text-foreground hover:text-primary transition-colors" onClick={handleNavClick}>
                Grant Audit
              </a>
            </Link>
            <Button
              onClick={onCTAClick}
              className="hover-elevate"
              data-testid="nav-cta-desktop"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link href="/operational-intelligence">
                <a className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2" onClick={handleNavClick}>
                  Operational Intelligence
                </a>
              </Link>
              <Link href="/audit">
                <a className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2" onClick={handleNavClick}>
                  Grant Audit
                </a>
              </Link>
              <Button
                onClick={() => {
                  setIsOpen(false);
                  onCTAClick?.();
                }}
                className="w-full mt-4"
              >
                Book a Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}