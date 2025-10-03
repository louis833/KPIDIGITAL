import logo from "figma:asset/c1b834135cdba8a42d8f7ddbe2956c113b06d4e5.png";

export function TableOfContentsSlide() {
  const sections = [
    { number: "01", title: "Executive Summary" },
    { number: "02", title: "Your Assessment Results" },
    { number: "03", title: "Lead Generation" },
    { number: "04", title: "Lead Engagement" },
    { number: "05", title: "Sales Conversion" },
    { number: "06", title: "Offer Value & Deal Size" },
    { number: "07", title: "Cash Collected" },
    { number: "08", title: "Bottleneck Diagnosis" },
    { number: "09", title: "Next Steps & Recommendations" },
    { number: "10", title: "Work With KPI Digital" },
  ];

  return (
    <div className="h-full bg-white px-24 py-16 flex flex-col">
      <div className="flex items-center justify-between mb-16">
        <img src={logo} alt="KPI Digital" className="h-8" />
        <p className="text-gray-400 text-sm">Business Clarity Assessment</p>
      </div>
      
      <div className="flex-1 flex items-center">
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-5xl mb-16 text-black">Table of Contents</h2>
          
          <div className="grid grid-cols-2 gap-x-16 gap-y-8">
            {sections.map((section) => (
              <div key={section.number} className="flex items-baseline gap-6 group cursor-pointer">
                <span className="text-3xl text-gray-300 group-hover:text-black transition-colors">
                  {section.number}
                </span>
                <span className="text-2xl text-gray-700 group-hover:text-black transition-colors">
                  {section.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}