import { SectionHeader } from './SectionHeader';
import { QuestionCard } from './QuestionCard';
import logo from "figma:asset/ae950917de87536a78978df19f99bb030a784505.png";

interface Question {
  number: number;
  question: string;
  answer: string;
  score: number;
  impact: string;
  diyApproach: string;
  professionalSolution: string;
}

interface CategoryPageProps {
  title: string;
  score: number;
  total: number;
  questions: Question[];
}

export function CategoryPage({ title, score, total, questions }: CategoryPageProps) {
  return (
    <div className="min-h-screen bg-white px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <img src={logo} alt="KPI Digital" className="w-32" />
        </div>
        
        <SectionHeader title={title} score={`Category Score: ${score} / ${total}`} />
        
        <div className="space-y-8">
          {questions.map((q) => (
            <QuestionCard key={q.number} {...q} />
          ))}
        </div>
      </div>
    </div>
  );
}
