import logo from "figma:asset/c1b834135cdba8a42d8f7ddbe2956c113b06d4e5.png";

export function CoverSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-white px-12">
      <div className="max-w-4xl w-full text-center space-y-16">
        <img 
          src={logo} 
          alt="KPI Digital" 
          className="h-12 mx-auto mb-20"
        />
        
        <div className="space-y-8">
          <h1 className="text-6xl tracking-tight text-black">
            Business Clarity Assessment
          </h1>
          
          <div className="h-1 w-32 bg-black mx-auto" />
          
          <div className="space-y-4 text-gray-600">
            <p className="text-2xl">Report Generated: 1 October 2025</p>
          </div>
        </div>
        
        <div className="pt-16 space-y-6">
          <div className="inline-block bg-black text-white px-12 py-6 rounded-sm">
            <p className="text-5xl">6/36 (17%)</p>
          </div>
          <p className="text-2xl text-gray-600">Assessment Tier: No Clarity</p>
        </div>
      </div>
    </div>
  );
}