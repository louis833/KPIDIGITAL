import { ScoreCard } from './ScoreCard';

export function ExecutiveSummary() {
  const categories = [
    { category: 'Lead Generation', score: 1, total: 6 },
    { category: 'Lead Engagement', score: 1, total: 6 },
    { category: 'Sales Conversion', score: 1, total: 6 },
    { category: 'Offer Value & Deal Size', score: 1, total: 6 },
    { category: 'Cash Collected', score: 1, total: 6 },
    { category: 'Bottleneck Diagnosis', score: 1, total: 6 },
  ];

  return (
    <div className="min-h-screen bg-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-12">Executive Summary</h1>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-gray-600">Your Score:</h3>
              <div className="text-7xl mb-2">6 / 36</div>
              <div className="text-4xl text-gray-500">(17%)</div>
            </div>
            
            <div>
              <h3 className="mb-2 text-gray-600">Assessment Tier:</h3>
              <div className="text-3xl">No Clarity</div>
            </div>
            
            <div>
              <p className="text-sm text-gray-600">Report Date: 1 October 2025</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="mb-4">No Clarity: Flying Blind in Your Business</h2>
              <p className="text-gray-700 mb-6">
                You're essentially guessing every day. Without knowing your numbers, you can't make informed decisions, identify what's working, or fix what's broken. This leads to wasted ad spend, missed opportunities, and unpredictable cash flow. Every decision feels like a gamble.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="mb-4">How This Affects Your Business:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You're losing money without knowing where</li>
                <li>• Can't identify which marketing actually works</li>
                <li>• No idea why some months are good and others terrible</li>
                <li>• Can't scale because you don't know what to scale</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="mb-8">Category Breakdown</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <ScoreCard key={index} {...cat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
