interface QuestionCardProps {
  number: number;
  question: string;
  answer: string;
  score: number;
  impact: string;
  diyApproach: string;
  professionalSolution: string;
}

export function QuestionCard({
  number,
  question,
  answer,
  score,
  impact,
  diyApproach,
  professionalSolution,
}: QuestionCardProps) {
  return (
    <div className="mb-12">
      <div className="mb-4">
        <h4 className="mb-3">Question {number}</h4>
        <p className="mb-2">{question}</p>
        <div className="flex items-center gap-4 mt-3">
          <span className="text-sm text-gray-600">Your Answer:</span>
          <span className="text-sm">{answer}</span>
          <span className="ml-auto text-sm px-3 py-1 bg-gray-100 rounded">Score: {score}</span>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-4">
        <h4 className="mb-2">Business Impact:</h4>
        <p className="text-gray-700">{impact}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-gray-300 p-6 rounded-lg">
          <h4 className="mb-3">DIY Approach:</h4>
          <p className="text-gray-700">{diyApproach}</p>
        </div>
        <div className="border-2 border-black p-6 rounded-lg bg-gray-50">
          <h4 className="mb-3">Professional Solution (KPI Digital):</h4>
          <p className="text-gray-700">{professionalSolution}</p>
        </div>
      </div>
    </div>
  );
}
