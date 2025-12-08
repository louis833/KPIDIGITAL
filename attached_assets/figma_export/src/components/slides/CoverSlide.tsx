import logo from "figma:asset/c1b834135cdba8a42d8f7ddbe2956c113b06d4e5.png";

export function CoverSlide() {
  return (
    <div className="h-full bg-gradient-to-br from-white via-neutral-50 to-neutral-100 flex flex-col items-center justify-center px-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-900/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-900/5 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="text-center space-y-16 relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img 
            src={logo} 
            alt="KPI Digital" 
            className="h-16 w-auto grayscale"
          />
        </div>
        
        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-7xl tracking-tight text-neutral-900">
            Business Clarity
          </h1>
          <h1 className="text-7xl tracking-tight text-neutral-900">
            Assessment
          </h1>
          <div className="h-1 w-32 bg-neutral-900 mx-auto mt-8" />
        </div>

        {/* Metadata */}
        <div className="space-y-3 pt-8">
          <div className="inline-block px-6 py-3 bg-neutral-900 text-white rounded-lg">
            <p className="text-lg">Report Generated: 1 October 2025</p>
          </div>
          <div className="space-y-1">
            <p className="text-xl text-neutral-700">Your Score: <span className="text-neutral-900">6/36 (17%)</span></p>
            <p className="text-xl text-neutral-700">Assessment Tier: <span className="text-neutral-900">No Clarity</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
