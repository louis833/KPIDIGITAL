import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AlertTriangle, Clock, DollarSign, BarChart3, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "No Systems or Automation",
    description: "Everything is manual, reactive, and overwhelming. You're constantly putting out fires instead of building your business.",
  },
  {
    icon: Clock,
    title: "Reacting Instead of Planning",
    description: "Your days are chaotic with no clear direction. You're always behind and struggling to keep up with demand.",
  },
  {
    icon: DollarSign,
    title: "Undercharging for Jobs",
    description: "You're not sure what to charge and often underestimate costs, leaving money on the table with every project.",
  },
  {
    icon: BarChart3,
    title: "No Clarity on Numbers",
    description: "You don't know which jobs are profitable, where your money goes, or how to make data-driven decisions.",
  },
  {
    icon: Target,
    title: "No Sales Process",
    description: "Lead generation is inconsistent and you don't have a systematic way to convert prospects into paying customers.",
  },
];

export default function PainPointsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sound Familiar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You got into trades to build something meaningful, but these challenges keep holding you back from the growth you deserve.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Card className="p-8 h-full hover-elevate transition-all duration-300 border-2 hover:border-destructive/20 bg-card">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="mb-6 p-4 bg-destructive/10 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <point.icon className="h-8 w-8 text-destructive" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-destructive transition-colors duration-300">
                    {point.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-block bg-destructive/10 text-destructive px-6 py-3 rounded-full text-lg font-semibold">
            It doesn't have to be this way.
          </div>
        </motion.div>
      </div>
    </section>
  );
}