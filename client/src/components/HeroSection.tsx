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
            className="text-4xl md:text-8xl lg:text-9xl font-extrabold text-foreground mb-8 tracking-tight leading-none"
          >
            <motion.span
              className="block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              STOP MISSING JOBS.
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Your <span className="text-primary font-bold">AI Executive Assistant</span> answers every call, books jobs, and filters time-wasters — so you can focus on the work.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="px-8 py-6 text-xl md:px-12 md:py-8 md:text-2xl font-bold hover-elevate active-elevate-2 group transition-all duration-300 shadow-xl shadow-primary/20"
              onClick={handleCTAClick}
              data-testid="button-book-call"
            >
              See How It Works
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="text-sm text-muted-foreground font-medium"
          >
            <p className="mb-2">From just <span className="text-primary font-bold">$50/day*</span> · Free setup</p>
            <p className="text-lg font-semibold text-foreground">Built by People Who Get It</p>
            <p className="text-sm text-muted-foreground mt-1">Trade experience. Not tech hype.</p>
            <p className="text-xs text-muted-foreground mt-4 opacity-70">* $50/day with free set up is based on 12 month contract.</p>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}