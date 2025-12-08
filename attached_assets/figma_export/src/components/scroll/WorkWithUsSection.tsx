import { motion } from "motion/react";

export function WorkWithUsSection() {
  const whyChoose = [
    {
      title: "Trades-Specific Expertise",
      description: "We understand your industry's unique challenges and opportunities",
    },
    {
      title: "Proven Systems",
      description: "Our solutions are battle-tested across hundreds of trades businesses",
    },
    {
      title: "Data-Driven Results",
      description: "We focus on metrics that matter - revenue, profit, and cash flow",
    },
    {
      title: "End-to-End Support",
      description: "From strategy to implementation to ongoing optimization",
    },
  ];

  const services = [
    {
      title: "Business Clarity Programs",
      description: "Get complete visibility into your numbers",
    },
    {
      title: "Systems Implementation",
      description: "Build automated workflows that run your business",
    },
    {
      title: "Growth Acceleration",
      description: "Scale profitably with proven strategies",
    },
    {
      title: "Technology Integration",
      description: "AI-powered tools for competitive advantage",
    },
  ];

  const nextSteps = [
    "Email Louis at louis@kpidigital.com.au with this report",
    "Schedule a complimentary strategy session to discuss your specific situation",
    "Receive a custom proposal outlining how we'll help you achieve your goals",
  ];

  return (
    <section id="work-with-us" className="min-h-screen bg-gray-50 px-8 md:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-6xl text-black mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work With KPI Digital
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.h3
                className="text-3xl text-black"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Why Choose KPI Digital?
              </motion.h3>
              <div className="space-y-5">
                {whyChoose.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-3 h-3 bg-black rounded-full mt-2"></div>
                    <div>
                      <p className="text-xl text-black">{item.title}</p>
                      <p className="text-base text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <motion.h3
                className="text-3xl text-black"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Our Services Include
              </motion.h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.p
                    key={index}
                    className="flex items-start gap-4 text-gray-700 text-lg"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <span className="text-black flex-shrink-0">•</span>
                    <span>
                      <strong className="text-black">{service.title}:</strong> {service.description}
                    </span>
                  </motion.p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <motion.div
              className="bg-white p-10 rounded-sm shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl text-black mb-6">What to Expect</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our engagement starts with a deep-dive analysis of your business, followed by a custom
                implementation roadmap. We work alongside you to build and optimize systems, ensuring
                sustainable results long after our engagement.
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.h3
                className="text-3xl text-black"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Next Steps
              </motion.h3>
              <div className="space-y-6">
                {nextSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-6 items-start"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center rounded-sm">
                      {index + 1}
                    </div>
                    <p className="text-lg text-gray-700 pt-2 leading-relaxed">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="bg-black text-white p-10 rounded-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-sm text-gray-400 mb-3">YOUR ASSESSMENT TIER</p>
              <p className="text-4xl mb-8">No Clarity</p>
              <p className="text-base text-gray-300">This report was generated on 1 October 2025</p>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="border-t-2 border-gray-300 pt-8 mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <p className="text-sm text-gray-400">© 2025 KPI Digital. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}