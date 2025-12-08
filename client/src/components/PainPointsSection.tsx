import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

export default function PainPointsSection() {
  const painPoints = [
    {
      title: "Missed Income",
      text: "The phone rings while you're up a ladder. By the time you get to it, they've called the next bloke on Google. That's $600 you'll never see.",
    },
    {
      title: "Can't Switch Off",
      text: "Another voicemail at 9pm. You're finally home. Dinner's cold. Do you call back now, or risk losing them by morning?",
    },
    {
      title: "Reputation Damage",
      text: "The customer who left a one-star review — not because your work was bad, but because they couldn't get through when they needed you.",
    },
    {
      title: "Time Wasted",
      text: "Twenty minutes on the phone with a tyre-kicker. Wrong suburb. Wants a $50 job. Just shopping around. Time you'll never get back.",
    },
    {
      title: "No Days Off",
      text: "Sundays are for quoting now. Because the week was spent actually doing the work, and the admin doesn't do itself.",
    },
    {
      title: "Slow Response = Lost Jobs",
      text: "The weekend enquiry that went cold. They messaged Saturday morning. You replied Monday. They booked someone else Sunday arvo.",
    },
    {
      title: "Relationship Strain",
      text: "Your partner's started making comments. \"You're always on that phone.\" They're not wrong.",
    },
  ];

  return (
    <section className="py-24 bg-destructive/5 border-y-2 border-destructive/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Sound Familiar?</h2>
            <p className="text-xl md:text-2xl text-muted-foreground italic">
              You didn't become a sparky to run a call centre. But here you are.
            </p>
          </div>

          {/* Pain Points */}
          <div className="space-y-6 mb-16">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-xl border border-destructive/10 shadow-sm"
              >
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-foreground">{point.title}:</span>{" "}
                  <span className="text-muted-foreground">{point.text}</span>
                </p>
              </motion.div>
            ))}
          </div>

          {/* Pivot Statement */}
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl font-medium text-primary">
              The big electrical companies don't have better sparkies. They just answer faster. That's the only difference.
            </p>
          </div>

          {/* Closing Line */}
          <div className="text-center mb-16">
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              The work is hard enough without being a full-time receptionist on top of it.
            </p>
          </div>

          {/* Let's Do The Maths Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Let's do the maths</h3>
            </div>
            <div className="space-y-3 text-lg mb-6">
              <p>• 3 missed calls per week × $600 average job = <span className="font-bold">$1,800/week lost</span></p>
              <p>• That's <span className="font-bold text-destructive">$7,200/month</span> walking straight to your competitors</p>
              <p>• Plus the jobs that never call back after a slow reply</p>
              <p>• Plus the mental load that never switches off</p>
            </div>
            <p className="text-lg italic text-muted-foreground mb-6">
              What would you do with an extra $7K a month and your evenings back?
            </p>
            <p className="text-xl font-bold text-primary">
              Your AI Executive Assistant costs $50/day. One answered call pays for the whole week.
            </p>
          </motion.div>

          {/* Transition */}
          <div className="text-center mt-16">
            <p className="text-2xl font-medium text-primary">There's a better way.</p>
          </div>
        </div>
      </div>
    </section>
  );
}