import logo from "figma:asset/c1b834135cdba8a42d8f7ddbe2956c113b06d4e5.png";

export function WorkWithUsSlide() {
  return (
    <div className="h-full bg-white px-24 py-16 flex flex-col">
      <div className="flex items-center justify-between mb-12">
        <img src={logo} alt="KPI Digital" className="h-8" />
        <p className="text-gray-400 text-sm">Business Clarity Assessment</p>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="w-full max-w-5xl mx-auto space-y-10">
          <h2 className="text-5xl text-black">Work With KPI Digital</h2>
          
          <div className="grid grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl text-black">Why Choose KPI Digital?</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Trades-Specific Expertise",
                      description: "We understand your industry's unique challenges and opportunities"
                    },
                    {
                      title: "Proven Systems",
                      description: "Our solutions are battle-tested across hundreds of trades businesses"
                    },
                    {
                      title: "Data-Driven Results",
                      description: "We focus on metrics that matter - revenue, profit, and cash flow"
                    },
                    {
                      title: "End-to-End Support",
                      description: "From strategy to implementation to ongoing optimization"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-2"></div>
                      <div>
                        <p className="text-black">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl text-black">Our Services Include</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-start gap-3">
                    <span className="text-black">•</span>
                    <span><strong className="text-black">Business Clarity Programs:</strong> Get complete visibility into your numbers</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-black">•</span>
                    <span><strong className="text-black">Systems Implementation:</strong> Build automated workflows that run your business</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-black">•</span>
                    <span><strong className="text-black">Growth Acceleration:</strong> Scale profitably with proven strategies</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-black">•</span>
                    <span><strong className="text-black">Technology Integration:</strong> AI-powered tools for competitive advantage</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-sm space-y-4">
                <h3 className="text-2xl text-black">What to Expect</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our engagement starts with a deep-dive analysis of your business, followed by a custom 
                  implementation roadmap. We work alongside you to build and optimize systems, ensuring 
                  sustainable results long after our engagement.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl text-black">Next Steps</h3>
                <div className="space-y-4">
                  {[
                    "Email Louis at louis@kpidigital.com.au with this report",
                    "Schedule a complimentary strategy session to discuss your specific situation",
                    "Receive a custom proposal outlining how we'll help you achieve your goals"
                  ].map((step, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-black text-white flex items-center justify-center rounded-sm text-sm">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-black text-white p-8 rounded-sm">
                <p className="text-sm text-gray-400 mb-2">YOUR ASSESSMENT TIER</p>
                <p className="text-3xl mb-6">No Clarity</p>
                <p className="text-sm text-gray-300">
                  This report was generated on 1 October 2025
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t-2 border-gray-200 pt-6 text-center">
            <p className="text-sm text-gray-400">© 2025 KPI Digital. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}