import { motion } from "framer-motion";
import { Calculator, DollarSign, Moon, Star, Clock, Calendar, Timer, HeartCrack } from "lucide-react";

export default function PainPointsSection() {
  const painPoints = [
    {
      icon: DollarSign,
      title: "Missed Income",
      text: "The phone rings while you're up a ladder. By the time you get to it, they've called the next bloke on Google. That's $600 you'll never see.",
    },
    {
      icon: Moon,
      title: "Can't Switch Off",
      text: "Another voicemail at 9pm. You're finally home. Dinner's cold. Do you call back now, or risk losing them by morning?",
    },
    {
      icon: Star,
      title: "Reputation Damage",
      text: "The customer who left a one-star review — not because your work was bad, but because they couldn't get through when they needed you.",
    },
    {
      icon: Clock,
      title: "Time Wasted",
      text: "Twenty minutes on the phone with a tyre-kicker. Wrong suburb. Wants a $50 job. Just shopping around. Time you'll never get back.",
    },
    {
      icon: Calendar,
      title: "No Days Off",
      text: "Sundays are for quoting now. Because the week was spent actually doing the work, and the admin doesn't do itself.",
    },
    {
      icon: Timer,
      title: "Slow Response = Lost Jobs",
      text: "The weekend enquiry that went cold. They messaged Saturday morning. You replied Monday. They booked someone else Sunday arvo.",
    },
    {
      icon: HeartCrack,
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all ${index === 6 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
              >
                <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-destructive" />
                </div>
                <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {point.text}
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
            className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 md:p-10 text-left"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Let's do the maths</h3>
            </div>

            <div className="space-y-6 text-lg">
              <div>
                <h4 className="text-xl font-bold text-destructive mb-2">You Are Lighting $75,000 on Fire Every Year. Here’s How to Stop.</h4>
                <p className="mb-2">Right now, you are trading 15 hours a week doing "admin."</p>
                <p className="mb-2">You think you’re saving money by doing it yourself. <span className="font-bold">You are wrong.</span></p>
                <p>If your time is worth $100/hour on the tools, and you spend 15 hours on the phone or typing quotes, you are losing <span className="font-bold">$1,500 a week</span>.</p>
                <p className="font-bold text-destructive mt-2">That is $78,000 a year in lost production capacity.</p>
                <p className="mt-2">You are basically paying yourself $0 to do a job you hate, while the work that actually pays you sits waiting.</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-primary mb-2">The Fix: The AI Executive Assistant.</h4>
                <p>We built a system that clones your best admin behavior, but it runs 24/7/365 and never asks for a sick day.</p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                  <li>Phone rings? <span className="font-bold">Answered.</span></li>
                  <li>2 AM Enquiry? <span className="font-bold">Replied and booked.</span></li>
                  <li>Need a Quote? <span className="font-bold">Sent instantly.</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-primary mb-2">The Math:</h4>
                <p>You pay $50 a day. You get back $300+ of billable time per day.</p>
                <p className="font-bold mt-2">That is a 6:1 return on investment from Day One.</p>
                <p>It is cheaper than a minimum-wage apprentice, and it doesn't make mistakes.</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-primary mb-2">The Offer:</h4>
                <p className="font-medium">Stop being the bottleneck in your own business.</p>
              </div>

              <div className="pt-4">
                <p className="text-lg font-semibold mb-4">Want to see it in action?</p>
                <a href="tel:+61485900888" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                  Call our AI Executive
                </a>
              </div>
            </div>
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