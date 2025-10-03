import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <HeroSection 
      onCTAClick={() => console.log('Strategy call booking initiated')}
    />
  );
}