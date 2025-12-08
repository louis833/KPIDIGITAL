import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VSLSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="py-24 bg-background" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        See How It Works in 2 Minutes
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Watch how our AI receptionist handles live calls, qualifies leads, and organises your day.
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-muted group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.01 }}
                >
                    {/* Video Placeholder / Thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                        {/* Play Button */}
                        <motion.div
                            className="relative z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                            whileTap={{ scale: 0.95 }}
                        >
                            <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                        </motion.div>
                    </div>

                    {/* Overlay Text */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                        <h3 className="text-xl font-bold mb-2">The Electrician's AI Receptionist</h3>
                        <p className="text-white/80 text-sm">Watch the full demo • 2:15</p>
                    </div>
                </motion.div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-muted-foreground mb-4">
                        Prefer to speak to a human?
                    </p>
                    <Button variant="outline" className="hover-elevate">
                        Book a Live Demo Instead
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
