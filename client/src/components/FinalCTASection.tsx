import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

interface FinalCTASectionProps {
    onCTAClick?: () => void;
}

export default function FinalCTASection({ onCTAClick }: FinalCTASectionProps) {
    return (
        <section className="py-24 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Scale Without the Chaos?</h2>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        Book your free Operational Intelligence Audit. We'll identify your biggest bottlenecks and show you exactly how to fix them.
                    </p>

                    {/* Guarantee */}
                    <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-700 px-4 py-2 rounded-full mb-8">
                        <Shield className="w-5 h-5" />
                        <span className="font-medium">Data-backed results. Proven operational frameworks.</span>
                    </div>

                    <div className="mb-8">
                        <Button
                            size="lg"
                            className="px-8 py-6 text-lg font-bold hover-elevate active-elevate-2 group"
                            onClick={onCTAClick}
                        >
                            Get Your Free Audit
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground font-medium">
                        <span>Actionable Insights</span>
                        <span>·</span>
                        <span>No Obligation</span>
                        <span>·</span>
                        <span>Tasmanian Focused</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
