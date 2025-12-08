import logo from "figma:asset/c1b834135cdba8a42d8f7ddbe2956c113b06d4e5.png";

export function ExecutiveSummarySlide() {
  const categories = [
    { name: "Lead Generation", score: "1/6", percentage: "17%" },
    { name: "Lead Engagement", score: "1/6", percentage: "17%" },
    { name: "Sales Conversion", score: "1/6", percentage: "17%" },
    { name: "Offer Value & Deal Size", score: "1/6", percentage: "17%" },
    { name: "Cash Collected", score: "1/6", percentage: "17%" },
    { name: "Bottleneck Diagnosis", score: "1/6", percentage: "17%" },
  ];

  return (
    <div className="h-full bg-white px-24 py-16 flex flex-col">
      <div className="flex items-center justify-between mb-12">
        <img src={logo} alt="KPI Digital" className="h-8" />
        <p className="text-gray-400 text-sm">Business Clarity Assessment</p>
      </div>
      
      <div className="flex-1">
        <h2 className="text-5xl mb-8 text-black">Executive Summary</h2>
        
        <div className="grid grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-sm border-l-4 border-black">
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider">Your Score</p>
                <p className="text-4xl text-black">6 / 36 (17%)</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500 uppercase tracking-wider">Assessment Tier</p>
                <p className="text-2xl text-black">No Clarity</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl text-black">No Clarity: Flying Blind in Your Business</h3>
              <p className="text-gray-600 leading-relaxed">
                You're essentially guessing every day. Without knowing your numbers, you can't make informed 
                decisions, identify what's working, or fix what's broken. This leads to wasted ad spend, 
                missed opportunities, and unpredictable cash flow.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl text-black">How This Affects Your Business:</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span>You're losing money without knowing where</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span>Can't identify which marketing actually works</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span>No idea why some months are good and others terrible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <span>Can't scale because you don't know what to scale</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-4">
            <h3 className="text-2xl text-black mb-6">Category Breakdown</h3>
            {categories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">{category.name}</span>
                  <span className="text-black">{category.score} ({category.percentage})</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-black h-full rounded-full"
                    style={{ width: category.percentage }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}