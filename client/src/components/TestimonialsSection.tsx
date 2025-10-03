import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

//todo: remove mock functionality - replace with real testimonials
const testimonials = [
  {
    id: 1,
    name: "Mike Rodriguez",
    company: "Rodriguez Electrical",
    role: "Owner & Master Electrician",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    quote: "KPI Digital transformed our business from reactive chaos to predictable growth. We've increased our revenue by 140% and finally have systems that work.",
    results: "140% revenue increase",
    location: "Phoenix, AZ",
  },
  {
    id: 2,
    name: "Sarah Chen",
    company: "Chen HVAC Solutions",
    role: "CEO",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    quote: "The clarity dashboards gave us real-time visibility into our business. We now know exactly which jobs are profitable and where to focus our energy.",
    results: "3x profit visibility",
    location: "Austin, TX",
  },
  {
    id: 3,
    name: "Tony Martinez",
    company: "Martinez Plumbing Co",
    role: "Founder",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    quote: "Their sales system setup doubled our conversion rate. We're closing more deals with less effort and attracting higher-quality customers.",
    results: "2x conversion rate",
    location: "Denver, CO",
  },
  {
    id: 4,
    name: "Lisa Thompson",
    company: "Thompson Solar",
    role: "Owner",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    quote: "The pricing audit revealed we were leaving $80k on the table annually. Now every quote is profitable and we're confident in our pricing.",
    results: "$80k recovered annually",
    location: "San Diego, CA",
  },
  {
    id: 5,
    name: "James Wilson",
    company: "Wilson Carpentry",
    role: "Master Carpenter",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    quote: "The referral system is incredible. We get 3-4 quality referrals every week without having to ask. Our calendar is booked solid for months.",
    results: "3-4 weekly referrals",
    location: "Seattle, WA",
  },
];

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
  isActive: boolean;
}

function TestimonialCard({ testimonial, isActive }: TestimonialCardProps) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-8 max-w-4xl mx-auto hover-elevate bg-card relative">
        <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Avatar and info */}
          <div className="flex-shrink-0 text-center md:text-left">
            <Avatar className="w-20 h-20 mx-auto md:mx-0 mb-4">
              <AvatarImage src={testimonial.avatar} />
              <AvatarFallback className="text-lg font-bold">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <h4 className="font-bold text-foreground text-lg mb-1">
              {testimonial.name}
            </h4>
            <p className="text-sm text-muted-foreground mb-1">
              {testimonial.role}
            </p>
            <p className="text-sm font-semibold text-primary mb-2">
              {testimonial.company}
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              {testimonial.location}
            </p>
            
            {/* Rating */}
            <div className="flex justify-center md:justify-start gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            
            {/* Results badge */}
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
              {testimonial.results}
            </div>
          </div>
          
          {/* Quote */}
          <div className="flex-1">
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">
              "{testimonial.quote}"
            </blockquote>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how trades businesses just like yours have transformed chaos into clarity and achieved sustainable growth.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Navigation buttons */}
          <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm hover-elevate"
              data-testid="button-testimonial-previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm hover-elevate"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Testimonial content */}
          <div className="px-16 md:px-24">
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={currentIndex}
                testimonial={testimonials[currentIndex]}
                isActive={true}
              />
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover-elevate ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                data-testid={`button-testimonial-dot-${index}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex justify-center items-center text-sm text-muted-foreground">
            <div>
              <span className="font-semibold">Trusted by Trades Businesses</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}