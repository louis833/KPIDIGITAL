import { motion } from "framer-motion";

export default function FounderStorySection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-8 flex items-center justify-center">
                            <img src="/logo.png" alt="KPI Digital" className="w-12 h-auto opacity-80" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Built by Locals. Engineered for Scale.</h2>
                        <p className="text-lg text-primary font-medium mb-8">Tasmanian insights. World-class systems.</p>

                        <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
                            <p>
                                We aren't just software resellers. We are <strong>Operational Engineers</strong> based right here in Tasmania.
                            </p>
                            <p>
                                We watched too many excellent local businesses hit a "growth ceiling"—struggling not because they lacked good product, but because their backend systems were chaos. Disconnected spreadsheets, manual data entry, and "flying blind" on financials.
                            </p>
                            <p>
                                We built KPI Digital to fix the machine behind the business. We take the same enterprise-grade operational intelligence used by global corps and tailor it for the agile Tasmanian SME.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-border">
                            <p className="font-bold text-foreground">Based in Deloraine, Tasmania · Empowering local businesses to scale.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
