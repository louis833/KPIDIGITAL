import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const results = [
    "Energy waste reduction from the audit alone: Most uncover 15–25% savings through simple fixes.",
    "Total bill reduction with solar & battery: Commonly 50–100%+ lower power bills.",
    "Grants covering upfront costs: Typically pay for 30–60% of the investment – many stack $10k+.",
    "Ongoing automation & AI benefits: Real-time insights, full control, ongoing savings, and time to focus on growth."
];

export default function ResultsSection({ onCTAClick }: { onCTAClick?: () => void }) {
    return (
        <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full -ml-36 -mb-36"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Typical Results Many Tasmanian Businesses Achieve</h2>
                        <p className="text-xl text-slate-400 mb-8">
                            Based on common outcomes from similar SMBs (cafes, shops, offices, small manufacturers). Your exact potential revealed in Phase 1.
                        </p>
                        <div className="space-y-4 mb-10">
                            {results.map((result, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="mt-1 bg-primary/20 p-1 rounded-full group">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                    </div>
                                    <p className="text-lg text-slate-200">{result}</p>
                                </div>
                            ))}
                        </div>
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold shadow-2xl"
                            onClick={onCTAClick}
                        >
                            Check My Eligibility – Free 15-Min Chat
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-2xl"
                    >
                        <div className="space-y-6">
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <span className="text-slate-400 font-medium">Potential ROI</span>
                                <span className="text-primary font-bold text-2xl">High</span>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Energy Savings</span>
                                    <span className="text-green-400">+25%</span>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '75%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="h-full bg-green-400"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span>Grant Coverage</span>
                                    <span className="text-blue-400">Up to 60%</span>
                                </div>
                                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '60%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.7 }}
                                        className="h-full bg-blue-400"
                                    />
                                </div>
                            </div>
                            <div className="mt-8 p-4 bg-primary/10 rounded-xl border border-primary/20">
                                <p className="text-sm text-center font-medium italic text-slate-300">
                                    "The audit uncovered $4,200 in annual waste we didn't even know was happening."
                                </p>
                                <p className="text-xs text-center mt-2 text-slate-500">— Office Property Manager, Hobart</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
