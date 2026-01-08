import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
    const faqs = [
        {
            question: "How does the engagement structure work?",
            answer: "We start with the Operational Audit. This is a low-risk, standalone engagement where we map your entire business effectively giving you a blueprint for scale. From there, we present a Custom Proposal for implementation. You can hire us to build it, or take the roadmap and do it yourself.",
            defaultOpen: true,
        },
        {
            question: "Is this just software?",
            answer: "No. Software is a tool, not a solution. We provide 'Operational Intelligence'—which combines strategy, process re-engineering, and automation. We don't just give you a login; we build the machine that runs your business.",
            defaultOpen: true,
        },
        {
            question: "Do I need to change my existing software?",
            answer: "Rarely. We specialize in integrating the tools you already use (Xero, HubSpot, ServiceM8, simPRO, Jobber, etc.). We make your disparate systems talk to each other so you stop acting as the manual bridge between them.",
            defaultOpen: true,
        },
        {
            question: "Who is this best suited for?",
            answer: "We work best with Tasmanian businesses tackling the 'scale ceiling'—typically teams of 5–50 staff where the owner is still too involved in day-to-day fires. If you are drowning in spreadsheets or admin, this is for you.",
        },
        {
            question: "What exactly do I get in the Audit?",
            answer: "You receive a comprehensive 'Operational Roadmap'. This includes a visual map of your current data flow, a 'Red Flag' report on bottlenecks, and a detailed technical strategy for automation. It is a physical asset you keep.",
        },
        {
            question: "How long until I see results?",
            answer: "The Audit is delivered within 3-5 days of our initial discovery session. For implementation, most clients see 10+ hours/week saved within the first 14 days of go-live.",
        },
    ];

    // Determine which items are open by default
    const defaultOpenValues = faqs
        .filter((faq) => faq.defaultOpen)
        .map((_, index) => `item-${index}`);

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Common Questions</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Clarifying the path from chaos to clarity.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="multiple" defaultValue={defaultOpenValues} className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg font-semibold">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
