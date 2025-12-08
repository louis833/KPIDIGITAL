import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
    const faqs = [
        {
            question: "How much does it cost?",
            answer: "Your AI Executive Assistant costs $50/day. That's less than a single missed job — and most sparkies tell us they make it back before lunchtime. Setup is free.",
            defaultOpen: true,
        },
        {
            question: "What if the AI makes a mistake or says something wrong?",
            answer: "You stay in control. The AI only says what you've approved. For anything outside its training, it takes a message and lets you handle it. Plus, you can review and adjust responses anytime.",
            defaultOpen: true,
        },
        {
            question: "How long does it take to get set up?",
            answer: "Most businesses are up and running within 48 hours. We handle the technical setup — you just need to tell us about your business.",
            defaultOpen: true,
        },
        {
            question: "Do I need to be tech-savvy?",
            answer: "Not at all. If you can use a smartphone, you can use this. We set everything up for you, and you manage it through a simple app.",
        },
        {
            question: "What if I want to cancel?",
            answer: "Cancel anytime. We keep customers by getting results, not trapping them.",
        },
        {
            question: "Will customers know they're talking to an AI?",
            answer: "The AI introduces itself as your assistant, so customers know they're speaking with AI. But here's the thing — they don't care, as long as they get a fast, helpful response. Call us to speak with our own AI receptionist and judge for yourself.",
        },
        {
            question: "What happens to after-hours calls?",
            answer: "The AI handles them 24/7. Urgent calls can be flagged for immediate notification. Everything else waits for you in the morning, fully summarised and ready to action.",
        },
        {
            question: "Is $50/day worth it?",
            answer: "One missed $600 job pays for nearly two weeks of service. Most sparkies miss at least a few calls per week — the AI pays for itself many times over.",
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions You Might Have</h2>
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
