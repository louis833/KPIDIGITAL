import { motion } from "framer-motion";
import { Phone, MessageSquare, Facebook, MapPin, Smartphone, LayoutDashboard } from "lucide-react";

export default function SolutionSection() {
  const features = [
    {
      icon: Phone,
      title: "Phone Calls",
      description: "Answered within two rings, day or night. The AI greets callers with your business name, gathers job details, qualifies the lead, and books a callback or appointment.",
    },
    {
      icon: MessageSquare,
      title: "Website Chat",
      description: "Instant responses to website visitors. No more \"leave a message and we'll get back to you.\" The AI engages them while they're keen.",
    },
    {
      icon: Facebook,
      title: "Social Media Messages",
      description: "Facebook and Instagram DMs handled automatically. Same response quality whether it's 2pm or 2am.",
    },
    {
      icon: MapPin,
      title: "Google Business Messages",
      description: "When someone finds you on Google and hits \"Message,\" the AI responds immediately and captures the lead.",
    },
    {
      icon: Smartphone,
      title: "SMS Enquiries",
      description: "Text messages answered and qualified, just like phone calls.",
    },
    {
      icon: LayoutDashboard,
      title: "Director Mode",
      description: "End of day snapshot of all the key workings of the business. See exactly what happened without getting bogged down in the details.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Your AI Executive Assistant, Working 24/7</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trained on YOUR business. Your service areas. Your pricing. Your way of talking to customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/20 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Note about customisation */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-muted-foreground">
            And if something's outside its scope? It takes a message and lets you handle it personally.
          </p>
        </div>
      </div>
    </section>
  );
}