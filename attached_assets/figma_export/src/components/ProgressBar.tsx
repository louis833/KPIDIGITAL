interface ProgressBarProps {
  score: number;
  total: number;
  showLabel?: boolean;
}

export function ProgressBar({ score, total, showLabel = true }: ProgressBarProps) {
  const percentage = (score / total) * 100;
  
  return (
    <div className="w-full">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-black transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="mt-2 flex justify-between">
          <span className="text-xs text-gray-600">{score}/{total}</span>
          <span className="text-xs text-gray-600">{Math.round(percentage)}%</span>
        </div>
      )}
    </div>
  );
}
