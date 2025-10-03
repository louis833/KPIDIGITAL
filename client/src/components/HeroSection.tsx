import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

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
    console.log("Book Strategy Call clicked");
    onCTAClick?.();
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
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
              src={new URL("@assets/kpi_digital_logo_ready_1759274509680.png", import.meta.url).href}
              alt="KPI Digital"
              className="h-32 sm:h-40 md:h-56 lg:h-64 w-auto mx-auto"
            />
          </motion.div>

          {/* Main headline with staggered animation */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight"
          >
            <motion.span
              className="block"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Clarity.
            </motion.span>
            <motion.span
              className="block"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Systems.
            </motion.span>
            <motion.span
              className="block text-primary"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Growth.
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Helping trades businesses move from reactive chaos to predictable, profitable growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2 group transition-all duration-300"
              onClick={handleCTAClick}
              data-testid="button-book-strategy-call"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="text-sm text-muted-foreground"
          >
            <p className="mb-4">Trusted by trades businesses Australia-wide</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-xs font-medium">Money-Back Guarantee</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}