import { motion } from "motion/react";

export function NextStepsSection() {
  const steps = [
    {
      number: "01",
      title: "Start with your lowest-scoring categories",
      description: "These represent your biggest opportunities for improvement",
    },
    {
      number: "02",
      title: "Implement DIY solutions for quick wins",
      description: "While planning professional systems for long-term success",
    },
    {
      number: "03",
      title: "Focus on one category at a time",
      description: "Avoid overwhelm and ensure proper implementation",
    },
    {
      number: "04",
      title: "Track your progress monthly",
      description: "And reassess quarterly to measure improvement",
    },
  ];

  return (
    <section id="next-steps" className="min-h-screen bg-white px-8 md:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-6xl text-black mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Your Next Steps
        </motion.h2>

        <div className="space-y-12">
          <motion.div
            className="bg-black text-white p-10 rounded-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-3xl mb-6">Immediate Action</h3>
            <p className="text-xl text-gray-200 leading-relaxed">
              Start with basic tracking: leads per week, close rate, and average job value. Even rough
              numbers are better than no numbers.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.h3
              className="text-3xl text-black"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Recommended Implementation Path
            </motion.h3>

            <div className="grid gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="flex gap-8 items-start group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-20 h-20 bg-gray-100 flex items-center justify-center rounded-sm group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <span className="text-3xl">{step.number}</span>
                  </div>
                  <div className="flex-1 pt-3">
                    <h4 className="text-2xl text-black mb-3">{step.title}</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="border-t-2 border-gray-200 pt-12 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-3xl text-black mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              KPI Digital specializes in helping trades businesses implement the exact systems and strategies
              outlined in this report. We've helped hundreds of trades businesses achieve clarity, build
              systems, and unlock sustainable growth.
            </p>
            <div className="flex items-center gap-6">
              <div className="h-16 w-1.5 bg-black"></div>
              <p className="text-2xl text-black">
                Contact Louis at{" "}
                <a href="mailto:louis@kpidigital.com.au" className="underline hover:text-gray-600 transition-colors">
                  louis@kpidigital.com.au
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}