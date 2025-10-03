export function NextSteps() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-8 py-16">
        <h1 className="mb-12">Your Next Steps</h1>
        
        <div className="space-y-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="mb-4">Immediate Action:</h3>
            <p className="text-gray-700">
              Start with basic tracking: leads per week, close rate, and average job value. Even rough numbers are better than no numbers.
            </p>
          </div>
          
          <div className="border-l-4 border-black pl-8">
            <h3 className="mb-6">Recommended Implementation Path:</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-black flex-shrink-0">1.</span>
                <span>Start with your lowest-scoring categories - these represent your biggest opportunities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black flex-shrink-0">2.</span>
                <span>Implement DIY solutions for quick wins while planning professional systems</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black flex-shrink-0">3.</span>
                <span>Focus on one category at a time to avoid overwhelm and ensure proper implementation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black flex-shrink-0">4.</span>
                <span>Track your progress monthly and reassess quarterly</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-black text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-white">Ready to Transform Your Business?</h1>
          
          <p className="text-xl text-gray-300">
            KPI Digital specializes in helping trades businesses implement the exact systems and strategies outlined in this report.
          </p>
          
          <p className="text-lg text-gray-400">
            We've helped hundreds of trades businesses achieve clarity, build systems, and unlock sustainable growth.
          </p>
          
          <div className="pt-8">
            <a 
              href="mailto:louis@kpidigital.com.au"
              className="inline-block bg-white text-black px-10 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Louis at louis@kpidigital.com.au
            </a>
          </div>
          
          <p className="text-gray-400 pt-4">
            Let's discuss how we can accelerate your business transformation.
          </p>
        </div>
      </div>
    </div>
  );
}
