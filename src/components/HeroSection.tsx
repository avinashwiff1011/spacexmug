import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-mug.jpg';

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById('tech-specs');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interstellar Flight Mug in spacecraft cockpit"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Telemetry badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs tracking-space uppercase text-primary">Mission Ready</span>
        </motion.div>

        {/* Main headline with glitch effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 glitch"
        >
          <span className="block text-gradient-titanium">INTERSTELLAR</span>
          <span className="block text-foreground mt-2">FLIGHT MUG</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 tracking-wide"
        >
          Engineered for the void. Designed for humanity. 
          <span className="text-primary"> Zero-gravity certified.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="cta" size="lg">
            Add to Manifest — $89
          </Button>
          <Button variant="outline" size="lg" className="border-muted-foreground/30">
            View Specifications
          </Button>
        </motion.div>

        {/* Telemetry stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex justify-center gap-12 mt-16 text-xs tracking-space uppercase"
        >
          <div>
            <span className="text-muted-foreground">Material</span>
            <p className="text-foreground mt-1 font-medium">Aerospace Ti-6Al-4V</p>
          </div>
          <div>
            <span className="text-muted-foreground">Capacity</span>
            <p className="text-foreground mt-1 font-medium">450ml / 15.2oz</p>
          </div>
          <div>
            <span className="text-muted-foreground">Weight</span>
            <p className="text-foreground mt-1 font-medium">182g / 6.4oz</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
      >
        <span className="text-xs tracking-space uppercase">Scroll to Launch</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
