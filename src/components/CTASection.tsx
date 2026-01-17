import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, Shield, Award } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Pre-header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
          >
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-xs tracking-space uppercase text-primary">Limited Production Run</span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            Your Mission
            <span className="block text-gradient-orange mt-2">Awaits</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Join the pioneers who demand excellence in every detail. 
            The Interstellar Flight Mug isn't just a vessel—it's a statement.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button variant="cta" size="xl" className="animate-pulse-glow">
              Add to Manifest — $89
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 mt-12 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Lifetime Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm">30-Day Mission Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-primary" />
              <span className="text-sm">Free Earth Delivery</span>
            </div>
          </motion.div>

          {/* Shipping notice */}
          <p className="text-xs text-muted-foreground/60 mt-8 tracking-wide">
            Ships within 48 hours. Currently serving Earth-based destinations only.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
