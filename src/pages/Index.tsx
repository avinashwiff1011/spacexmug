import Starfield from '@/components/Starfield';
import StickyNavigation from '@/components/StickyNavigation';
import HeroSection from '@/components/HeroSection';
import TechSpecsSection from '@/components/TechSpecsSection';
import LaunchGallery from '@/components/LaunchGallery';
import FeatureGrid from '@/components/FeatureGrid';
import TelemetryDashboard from '@/components/TelemetryDashboard';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated starfield background */}
      <Starfield />
      
      {/* Sticky glassmorphism navigation */}
      <StickyNavigation />
      
      {/* Main content */}
      <main className="relative z-10">
        {/* Hero section with full-screen immersive background */}
        <HeroSection />
        
        {/* Technical specifications with blueprint animation */}
        <TechSpecsSection />
        
        {/* Horizontal scroll gallery */}
        <LaunchGallery />
        
        {/* Interactive feature grid */}
        <FeatureGrid />
        
        {/* Performance dashboard with animated stats */}
        <TelemetryDashboard />
        
        {/* Call to action */}
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
