import logo from "figma:asset/ae950917de87536a78978df19f99bb030a784505.png";

export function CoverPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 relative">
      <div className="text-center space-y-12">
        <img 
          src={logo} 
          alt="KPI Digital" 
          className="w-64 mx-auto"
        />
        
        <div className="space-y-4">
          <h1 className="text-6xl tracking-tight">Business Clarity</h1>
          <h1 className="text-6xl tracking-tight">Assessment</h1>
        </div>
      </div>
      
      <div className="absolute bottom-12 right-12 text-right text-sm text-gray-600 space-y-1">
        <p>Report Generated: 1 October 2025</p>
        <p>louis@kpidigital.com.au</p>
      </div>
    </div>
  );
}
