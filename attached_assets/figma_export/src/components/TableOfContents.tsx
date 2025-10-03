export function TableOfContents() {
  const sections = [
    { title: 'Executive Summary', page: 3 },
    { title: 'Your Assessment Results', page: 3 },
    { title: 'Question-by-Question Analysis', page: 4 },
    { title: 'Lead Generation', page: 4 },
    { title: 'Lead Engagement', page: 5 },
    { title: 'Sales Conversion', page: 6 },
    { title: 'Offer Value & Deal Size', page: 7 },
    { title: 'Cash Collected', page: 8 },
    { title: 'Bottleneck Diagnosis', page: 9 },
    { title: 'Next Steps & Recommendations', page: 10 },
    { title: 'Work With KPI Digital', page: 11 },
  ];

  return (
    <div className="min-h-screen bg-white px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-12">Table of Contents</h1>
        
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="flex justify-between items-center pb-3 border-b border-gray-200"
            >
              <span className="text-lg">{section.title}</span>
              <span className="text-lg text-gray-600">{section.page}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
