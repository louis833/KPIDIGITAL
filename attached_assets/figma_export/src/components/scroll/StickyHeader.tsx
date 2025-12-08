import { motion, useScroll, useTransform } from "motion/react";
import logo from "figma:asset/c1b834135cdba8a42d8f7ddbe2956c113b06d4e5.png";

export function StickyHeader() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm"
      style={{
        backgroundColor,
        borderBottom: `1px solid rgba(0, 0, 0, ${borderOpacity})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <img src={logo} alt="KPI Digital" className="h-8" />
        <p className="text-sm text-gray-400">Business Clarity Assessment</p>
      </div>
    </motion.header>
  );
}