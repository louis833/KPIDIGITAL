import { motion } from "motion/react";

interface Question {
  number: number;
  question: string;
  answer: string;
  score: number;
  impact: string;
  diyApproach: string;
  professionalSolution: string;
}

interface CategorySectionProps {
  id: string;
  title: string;
  score: string;
  questions: Question[];
  isEven?: boolean;
}

export function CategorySection({ id, title, score, questions, isEven = false }: CategorySectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen px-8 md:px-24 py-24 ${isEven ? "bg-white" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl text-black">{title}</h2>
          <div className="bg-black text-white px-8 py-4 rounded-sm">
            <p className="text-2xl">Score: {score}</p>
          </div>
        </motion.div>

        <div className="space-y-12">
          {questions.map((q, qIndex) => (
            <motion.div
              key={q.number}
              className="border-l-4 border-gray-300 pl-8 space-y-6 hover:border-black transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: qIndex * 0.1 }}
            >
              <div className="space-y-3">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Question {q.number}</p>
                <h3 className="text-3xl text-black">{q.question}</h3>
                <p className="text-xl text-gray-600">
                  Your Answer: <span className="text-black">{q.answer}</span> (Score: {q.score})
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + qIndex * 0.1 }}
                >
                  <p className="text-sm uppercase tracking-wider text-gray-500">Business Impact</p>
                  <p className="text-base text-gray-700 leading-relaxed">{q.impact}</p>
                </motion.div>

                <div className="space-y-6">
                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + qIndex * 0.1 }}
                  >
                    <p className="text-sm uppercase tracking-wider text-gray-500">DIY Approach</p>
                    <p className="text-base text-gray-700 leading-relaxed">{q.diyApproach}</p>
                  </motion.div>

                  <motion.div
                    className="space-y-3 bg-gray-100 p-6 rounded-sm"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + qIndex * 0.1 }}
                  >
                    <p className="text-sm uppercase tracking-wider text-black">
                      Professional Solution (KPI Digital)
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed">{q.professionalSolution}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}