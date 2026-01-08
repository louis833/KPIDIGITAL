import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onCTAClick?: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const handleCTAClick = () => {
    onCTAClick?.();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.02 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo/Brand */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <img
              src="/logo.png"
              alt="KPI Digital"
              className="h-32 sm:h-40 md:h-56 lg:h-64 w-auto mx-auto"
            />
          </motion.div>

          {/* Main headline with staggered animation */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-8 tracking-tight leading-none"
          >
            <motion.span
              className="block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              OPERATIONAL INTELLIGENCE.
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Empowering <span className="text-primary font-bold">Tasmanian Businesses</span> with data-driven insights, automated workflows, and smarter decision-making.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mb-16" // Keep mb-16 on the motion.div, or adjust as needed
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-bold hover-elevate shadow-xl shadow-primary/20"
                onClick={onCTAClick}
              >
                Get Your Operational Audit
              </Button>
              <Link href="#process">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg font-semibold bg-background/50 backdrop-blur-sm border-2 hover:bg-background/80"
                >
                  See How It Works
                </Button>
              </Link>
            </div>

            {/* Qualification Filter */}
            <div className="inline-flex flex-wrap justify-center gap-x-8 gap-y-3 p-4 bg-muted/40 backdrop-blur-md rounded-2xl border border-border/50 text-sm font-medium text-muted-foreground/90">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Best for Tasmanian Teams (5–50 Staff)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Currently Hitting an "Operational Ceiling"</span>
              </div>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="text-sm text-muted-foreground font-medium"
          >
            <p className="mb-2">Local expertise. Global standards.</p>
            <p className="text-lg font-semibold text-foreground">Built for Tasmania.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}