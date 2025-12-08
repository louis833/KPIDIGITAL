import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I was missing three or four calls a day while on jobs. Now every single one gets answered. Last week I picked up two jobs that would've gone to voicemail before.",
      author: "[Name]",
      role: "[Business Name]",
      location: "[Location]",
    },
    {
      quote: "The human-in-the-loop approach sold me. I was worried about AI sending dodgy quotes, but I approve everything. It just saves me two hours a day on admin.",
      author: "[Name]",
      role: "[Business Name]",
      location: "[Location]",
    },
    {
      quote: "Setup was painless. They built my website, sorted my Google profile, and had the AI running in under a week. Wish I'd done it sooner.",
      author: "[Name]",
      role: "[Business Name]",
      location: "[Location]",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hear From Electricians Using It</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-muted/30 p-8 rounded-2xl border border-border"
            >
              <div className="flex gap-1 mb-6 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl mb-6 italic text-foreground font-medium leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center bg-primary/5 rounded-3xl p-8 border border-primary/20">
          <h3 className="text-xl font-bold mb-4">Currently onboarding foundation clients</h3>
          <p className="text-muted-foreground mb-6">
            Be one of the first electricians in Australia with AI-powered enquiry handling. Foundation clients get priority support and input into how the system develops.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Apply to Join →
          </Button>
        </div>
      </div>
    </section>
  );
}