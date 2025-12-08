import logo from "figma:asset/c1b834135cdba8a42d8f7ddbe2956c113b06d4e5.png";

export function NextStepsSlide() {
  return (
    <div className="h-full bg-white px-24 py-16 flex flex-col">
      <div className="flex items-center justify-between mb-12">
        <img src={logo} alt="KPI Digital" className="h-8" />
        <p className="text-gray-400 text-sm">Business Clarity Assessment</p>
      </div>
      
      <div className="flex-1 flex items-center">
        <div className="w-full max-w-5xl mx-auto space-y-12">
          <h2 className="text-5xl text-black">Your Next Steps</h2>
          
          <div className="space-y-8">
            <div className="bg-black text-white p-8 rounded-sm">
              <h3 className="text-2xl mb-4">Immediate Action</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Start with basic tracking: leads per week, close rate, and average job value. 
                Even rough numbers are better than no numbers.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl text-black">Recommended Implementation Path</h3>
              
              <div className="grid gap-6">
                {[
                  {
                    number: "01",
                    title: "Start with your lowest-scoring categories",
                    description: "These represent your biggest opportunities for improvement"
                  },
                  {
                    number: "02",
                    title: "Implement DIY solutions for quick wins",
                    description: "While planning professional systems for long-term success"
                  },
                  {
                    number: "03",
                    title: "Focus on one category at a time",
                    description: "Avoid overwhelm and ensure proper implementation"
                  },
                  {
                    number: "04",
                    title: "Track your progress monthly",
                    description: "And reassess quarterly to measure improvement"
                  }
                ].map((step) => (
                  <div key={step.number} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-100 flex items-center justify-center rounded-sm">
                      <span className="text-2xl text-black">{step.number}</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="text-xl text-black mb-2">{step.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t-2 border-gray-200 pt-8">
              <h3 className="text-2xl text-black mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                KPI Digital specializes in helping trades businesses implement the exact systems and 
                strategies outlined in this report. We've helped hundreds of trades businesses achieve 
                clarity, build systems, and unlock sustainable growth.
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-1 bg-black"></div>
                <p className="text-xl text-black">
                  Contact Louis at <span className="underline">louis@kpidigital.com.au</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}