import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={() => console.log('Navigation CTA clicked')} />
      
      {/* Demo content to show navigation behavior */}
      <div className="pt-20">
        <div className="h-screen flex items-center justify-center bg-muted/20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Scroll down to see navigation changes</h1>
            <p className="text-muted-foreground">The navigation bar adapts as you scroll</p>
          </div>
        </div>
        
        <div id="services" className="h-screen flex items-center justify-center bg-background">
          <h2 className="text-3xl font-bold">Services Section</h2>
        </div>
        
        <div id="process" className="h-screen flex items-center justify-center bg-muted/20">
          <h2 className="text-3xl font-bold">Process Section</h2>
        </div>
        
        <div id="results" className="h-screen flex items-center justify-center bg-background">
          <h2 className="text-3xl font-bold">Results Section</h2>
        </div>
        
        <div id="about" className="h-screen flex items-center justify-center bg-muted/20">
          <h2 className="text-3xl font-bold">About Section</h2>
        </div>
      </div>
    </div>
  );
}