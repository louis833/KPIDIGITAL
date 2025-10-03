import { ProgressBar } from './ProgressBar';

interface ScoreCardProps {
  category: string;
  score: number;
  total: number;
}

export function ScoreCard({ category, score, total }: ScoreCardProps) {
  const percentage = Math.round((score / total) * 100);
  
  return (
    <div className="border border-gray-200 p-6 rounded-lg hover:border-black transition-colors">
      <h4 className="mb-4">{category}</h4>
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-3xl">{score}/{total}</span>
        <span className="text-gray-500">({percentage}%)</span>
      </div>
      <ProgressBar score={score} total={total} showLabel={false} />
    </div>
  );
}
