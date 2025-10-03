import { motion } from "motion/react";

export function ExecutiveSummarySection() {
  const categories = [
    { name: "Lead Generation", score: "1/6", percentage: "17%" },
    { name: "Lead Engagement", score: "1/6", percentage: "17%" },
    { name: "Sales Conversion", score: "1/6", percentage: "17%" },
    { name: "Offer Value & Deal Size", score: "1/6", percentage: "17%" },
    { name: "Cash Collected", score: "1/6", percentage: "17%" },
    { name: "Bottleneck Diagnosis", score: "1/6", percentage: "17%" },
  ];

  return (
    <section id="executive-summary" className="min-h-screen bg-gray-50 px-8 md:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-6xl mb-12 text-black"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Executive Summary
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              className="bg-white p-8 rounded-sm border-l-4 border-black shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider">Your Score</p>
                <p className="text-5xl text-black">6 / 36 (17%)</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500 uppercase tracking-wider">Assessment Tier</p>
                <p className="text-3xl text-black">No Clarity</p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl text-black">No Clarity: Flying Blind in Your Business</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                You're essentially guessing every day. Without knowing your numbers, you can't make informed
                decisions, identify what's working, or fix what's broken. This leads to wasted ad spend,
                missed opportunities, and unpredictable cash flow.
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-2xl text-black">How This Affects Your Business:</h4>
              <ul className="space-y-3 text-gray-600 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1.5 flex-shrink-0">•</span>
                  <span>You're losing money without knowing where</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1.5 flex-shrink-0">•</span>
                  <span>Can't identify which marketing actually works</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1.5 flex-shrink-0">•</span>
                  <span>No idea why some months are good and others terrible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1.5 flex-shrink-0">•</span>
                  <span>Can't scale because you don't know what to scale</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <motion.h3
              className="text-3xl text-black mb-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Category Breakdown
            </motion.h3>
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg text-gray-700">{category.name}</span>
                  <span className="text-black">
                    {category.score} ({category.percentage})
                  </span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-black h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: category.percentage }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}