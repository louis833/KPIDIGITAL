import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getAllValueProps } from "@shared/valueProps";

const valueProps = getAllValueProps();

interface ValueCardProps {
  value: typeof valueProps[0];
  index: number;
  isFlipped: boolean;
  onFlip: (index: number) => void;
}

function ValueCard({ value, index, isFlipped, onFlip }: ValueCardProps) {
  return (
    <motion.div
      className="relative h-96 group perspective-1000"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of card */}
        <Card 
          className={`absolute inset-0 w-full h-full backface-hidden bg-card hover-elevate p-8 flex flex-col items-center justify-center text-center cursor-pointer ${
            isFlipped ? 'pointer-events-none' : 'pointer-events-auto'
          }`}
          onClick={() => onFlip(index)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onFlip(index);
            }
          }}
          aria-label={`Learn more about ${value.title}`}
        >
          <motion.div
            className="mb-6 p-4 bg-primary/10 rounded-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <value.icon className="h-12 w-12 text-primary" />
          </motion.div>
          
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {value.title}
          </h3>
          
          <p className="text-muted-foreground text-lg mb-6">
            {value.shortDesc}
          </p>
          
          <div className="mt-auto text-sm text-muted-foreground flex items-center gap-2">
            Click to learn more
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Card>

        {/* Back of card */}
        <Card className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground p-6 flex flex-col ${
          isFlipped ? 'pointer-events-auto' : 'pointer-events-none'
        }`}>
          <div className="mb-3">
            <value.icon className="h-7 w-7 mb-3 text-primary-foreground/90" />
            <h3 className="text-lg font-bold mb-3 leading-tight">{value.title}</h3>
          </div>
          
          <p className="text-primary-foreground/95 mb-4 text-sm leading-relaxed">
            {value.fullDesc}
          </p>
          
          <div className="mb-4 flex-1">
            <h4 className="font-semibold mb-2 text-sm text-primary-foreground/90">Key Benefits:</h4>
            <ul className="space-y-1.5">
              {value.benefits.map((benefit, idx) => (
                <li key={idx} className="text-sm text-primary-foreground/85 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-foreground/70 rounded-full mt-1.5 flex-shrink-0" />
                  <span className="leading-tight">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto pt-2">
            <Link href={`/education/${value.slug}`}>
              <Button
                variant="secondary"
                size="sm"
                className="w-full bg-primary-foreground/95 text-primary hover:bg-primary-foreground border-primary-foreground/20 font-medium group shadow-sm"
                onClick={(e) => e.stopPropagation()}
                data-testid={`button-learn-${value.slug}`}
              >
                Learn More
                <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function ValueCardsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const handleCardFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section className="py-24 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our comprehensive toolkit covers every aspect of business growth. Click each card to explore the details.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {valueProps.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ValueCard
                value={value}
                index={index}
                isFlipped={flippedCards.has(index)}
                onFlip={handleCardFlip}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/#quote-form">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold"
              data-testid="button-get-started-value"
            >
              Get Started Today
            </Button>
          </Link>
        </motion.div>
      </div>

    </section>
  );
}