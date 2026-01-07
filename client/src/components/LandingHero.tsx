import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Zap, BarChart3, Bot } from "lucide-react";

interface LandingHeroProps {
    onCTAClick?: () => void;
}

export default function LandingHero({ onCTAClick }: LandingHeroProps) {
    return (
        <section className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-24">
            {/* Background patterns */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0F172A 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                        <Zap className="w-4 h-4" />
                        <span>Powering Tasmanian Business ROI</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                        KPI Digital: <span className="text-primary">Operational Intelligence</span> for Tasmanian Businesses
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto font-medium">
                        Diagnose hidden energy waste, overlay real-time sensors, and integrate AI automation – slash costs, boost productivity, and scale with confidence.
                    </p>

                    <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
                        Independent energy audits, expert implementation, and ongoing AI management to help Tasmanian SMBs cut power bills dramatically and move toward net zero.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Button
                            size="lg"
                            className="px-8 py-7 text-lg font-bold w-full sm:w-auto shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
                            onClick={onCTAClick}
                        >
                            Check My Eligibility – Free 15-Min Chat
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <div className="text-sm font-semibold text-slate-400">
                            Backed by 20 years of expertise
                        </div>
                    </div>

                    {/* Expertise Badges */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-slate-100">
                        <div className="flex items-center justify-center gap-3 text-slate-600">
                            <Zap className="w-5 h-5 text-primary" />
                            <span className="font-medium text-sm">15 Years Electrical Contracting</span>
                        </div>
                        <div className="flex items-center justify-center gap-3 text-slate-600">
                            <BarChart3 className="w-5 h-5 text-primary" />
                            <span className="font-medium text-sm">5 Years Business Coaching</span>
                        </div>
                        <div className="flex items-center justify-center gap-3 text-slate-600">
                            <Bot className="w-5 h-5 text-primary" />
                            <span className="font-medium text-sm">AI Automation Experts</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
