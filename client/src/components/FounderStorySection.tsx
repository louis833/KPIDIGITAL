import { motion } from "framer-motion";

export default function FounderStorySection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Built by People Who Get It</h2>
                        <p className="text-xl text-muted-foreground">Trade experience. Not tech hype.</p>
                    </div>

                    <div className="bg-background rounded-3xl p-8 md:p-12 border border-border shadow-sm">
                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p className="text-lg md:text-xl leading-relaxed">
                                We've spent years in the electrical industry. We've missed the calls, lost the jobs, and worked the weekends. We built KPI Digital because we needed it — and we reckon you do too.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 text-center text-sm text-muted-foreground font-medium">
                        <p>Based in Launceston, Tasmania · Serving electricians Australia-wide</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
