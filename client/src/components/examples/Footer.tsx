import Footer from '../Footer';

export default function FooterExample() {
  return (
    <div className="min-h-screen bg-background">
      {/* Demo content above footer */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Scroll down to see the footer</h1>
          <p className="text-muted-foreground">The footer contains animated elements and interactive components</p>
        </div>
      </div>
      
      <Footer onCTAClick={() => console.log('Footer CTA clicked')} />
    </div>
  );
}