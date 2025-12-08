import { useParams, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { getValuePropBySlug } from "@shared/valueProps";
import { updateSEO, resetSEO } from "@/utils/seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, CheckCircle, ArrowRight, Target, Users, TrendingUp, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NotFound from "./not-found";

export default function EducationPage() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  
  const valueProp = slug ? getValuePropBySlug(slug) : undefined;

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (valueProp) {
      updateSEO({
        title: `${valueProp.title} - KPI Digital`,
        description: valueProp.fullDesc,
        ogTitle: `${valueProp.title} | Transform Your Trades Business`,
        ogDescription: `${valueProp.shortDesc}. ${valueProp.fullDesc}`,
        ogUrl: window.location.href,
      });
    }

    // Cleanup function to reset SEO when leaving the page
    return () => {
      resetSEO();
    };
  }, [valueProp]);

  if (!valueProp) {
    return <NotFound />;
  }

  const scrollToQuoteForm = () => {
    navigate('/#quote-form');
  };

  const goBack = () => {
    navigate('/');
  };

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={scrollToQuoteForm} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background via-background to-muted/20" ref={heroRef}>
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Back button */}
              <Button
                variant="ghost"
                className="mb-8 focus-ring"
                onClick={goBack}
                data-testid="button-back-home"
                aria-label="Go back to home page"
              >
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Home
              </Button>

              {/* Icon and title */}
              <motion.div
                className="mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={heroInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6" aria-hidden="true">
                  <valueProp.icon className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {valueProp.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {valueProp.shortDesc}
                </p>
              </motion.div>

              {/* Benefits badges */}
              <motion.div
                className="flex flex-wrap justify-center gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {valueProp.benefits.map((benefit, index) => (
                  <Badge key={index} variant="outline" className="px-4 py-2">
                    {benefit}
                  </Badge>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="px-8 py-6 text-lg font-semibold group focus-ring"
                  onClick={scrollToQuoteForm}
                  data-testid="button-get-started-hero"
                  aria-label={`Get started with ${valueProp.title}`}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <motion.section
          className="py-16"
          ref={contentRef}
          variants={containerVariants}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-16">
              
              {/* Overview */}
              <motion.div variants={itemVariants}>
                <Card className="p-8 bg-card">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Target className="h-8 w-8 text-primary" aria-hidden="true" />
                    What You'll Get
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {valueProp.detailedDescription}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {valueProp.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                        <span className="text-foreground font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Who It's For */}
              <motion.div variants={itemVariants}>
                <Card className="p-8 bg-card">
                  <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <Users className="h-8 w-8 text-primary" />
                    Who This Is For
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {valueProp.whoItsFor.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Expected Outcomes */}
              <motion.div variants={itemVariants}>
                <Card className="p-8 bg-primary text-primary-foreground">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <TrendingUp className="h-8 w-8" />
                    Expected Outcomes
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {valueProp.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full mt-2 flex-shrink-0" />
                        <span className="text-primary-foreground font-medium">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Process Steps */}
              <motion.div variants={itemVariants}>
                <Card className="p-8 bg-card">
                  <h2 className="text-3xl font-bold text-foreground mb-8">Our Proven Process</h2>
                  <div className="space-y-6">
                    {valueProp.processSteps.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* FAQs */}
              <motion.div variants={itemVariants}>
                <Card className="p-8 bg-card">
                  <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {valueProp.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left hover:text-primary transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              </motion.div>


              {/* Final CTA */}
              <motion.div variants={itemVariants}>
                <Card className="p-12 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Join hundreds of trades businesses who've already implemented {valueProp.title} and seen incredible results.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="px-8 py-6 text-lg font-semibold group"
                      onClick={scrollToQuoteForm}
                      data-testid="button-get-quote-final"
                    >
                      Get Your Custom Quote
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="px-8 py-6 text-lg font-semibold"
                      onClick={goBack}
                      data-testid="button-back-home-final"
                    >
                      Learn About Other Services
                    </Button>
                  </div>
                </Card>
              </motion.div>

            </div>
          </div>
        </motion.section>
      </main>

      <Footer onCTAClick={scrollToQuoteForm} />
    </div>
  );
}