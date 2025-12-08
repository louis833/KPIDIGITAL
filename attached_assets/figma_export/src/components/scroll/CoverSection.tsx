import { motion } from "motion/react";
import logo from "figma:asset/c1b834135cdba8a42d8f7ddbe2956c113b06d4e5.png";

export function CoverSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-12 py-24">
      <div className="max-w-4xl w-full text-center space-y-16">
        <motion.img
          src={logo}
          alt="KPI Digital"
          className="h-14 mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <div className="space-y-8">
          <motion.h1
            className="text-7xl tracking-tight text-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Business Clarity Assessment
          </motion.h1>

          <motion.div
            className="h-1 w-32 bg-black mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          <motion.div
            className="space-y-4 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-2xl">Report Generated: 1 October 2025</p>
          </motion.div>
        </div>

        <motion.div
          className="pt-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="inline-block bg-black text-white px-12 py-6 rounded-sm">
            <p className="text-6xl">6/36 (17%)</p>
          </div>
          <p className="text-2xl text-gray-600">Assessment Tier: No Clarity</p>
        </motion.div>

        <motion.div
          className="pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-sm text-gray-400 animate-bounce">Scroll to explore your report ↓</p>
        </motion.div>
      </div>
    </section>
  );
}