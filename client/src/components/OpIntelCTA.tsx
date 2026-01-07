import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function OpIntelCTA({ onCTAClick }: { onCTAClick?: () => void }) {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Background circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full -mr-48 -mb-48"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                            Ready to Build Your Operational Intelligence?
                        </h2>
                        <p className="text-xl md:text-2xl mb-10 text-white/90 font-medium">
                            Book a free 15-minute chat – no obligation, just clear answers on your savings potential.
                        </p>

                        <div className="flex flex-col items-center gap-6">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="px-12 py-8 text-xl font-bold bg-white text-primary hover:bg-slate-100 shadow-2xl hover:scale-105 transition-all group"
                                onClick={onCTAClick}
                            >
                                Check My Eligibility – Free 15-Min Chat
                                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <div className="flex items-center gap-2 text-white/80 font-semibold">
                                <BadgeCheck className="w-5 h-5" />
                                <span>Many clients stack $10k+ in grants – secure 2026’s peak incentives now.</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
