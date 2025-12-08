import logo from "figma:asset/c1b834135cdba8a42d8f7ddbe2956c113b06d4e5.png";

interface Question {
  number: number;
  question: string;
  answer: string;
  score: number;
  impact: string;
  diyApproach: string;
  professionalSolution: string;
}

interface CategorySlideProps {
  title: string;
  score: string;
  questions: Question[];
}

export function CategorySlide({ title, score, questions }: CategorySlideProps) {
  return (
    <div className="h-full bg-white px-24 py-16 flex flex-col">
      <div className="flex items-center justify-between mb-12">
        <img src={logo} alt="KPI Digital" className="h-8" />
        <p className="text-gray-400 text-sm">Business Clarity Assessment</p>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-5xl text-black">{title}</h2>
          <div className="bg-black text-white px-6 py-3 rounded-sm">
            <p className="text-xl">Score: {score}</p>
          </div>
        </div>
        
        <div className="space-y-8">
          {questions.map((q) => (
            <div key={q.number} className="border-l-4 border-gray-300 pl-8 space-y-4">
              <div className="space-y-2">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Question {q.number}</p>
                <h3 className="text-2xl text-black">{q.question}</h3>
                <p className="text-lg text-gray-600">Your Answer: <span className="text-black">{q.answer}</span> (Score: {q.score})</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-wider text-gray-500">Business Impact</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{q.impact}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-wider text-gray-500">DIY Approach</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{q.diyApproach}</p>
                  </div>
                  
                  <div className="space-y-2 bg-gray-50 p-4 rounded-sm">
                    <p className="text-sm uppercase tracking-wider text-black">Professional Solution (KPI Digital)</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{q.professionalSolution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}