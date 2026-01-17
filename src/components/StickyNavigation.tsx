import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StickyNavigation = () => {
  const { scrollY } = useScroll();
  
  const navOpacity = useTransform(scrollY, [0, 300, 400], [0, 0, 1]);
  const navY = useTransform(scrollY, [300, 400], [-20, 0]);

  return (
    <motion.header
      style={{ opacity: navOpacity, y: navY }}
      className="fixed top-0 left-0 right-0 z-50 glass-dark"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Rocket className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium tracking-wider-custom uppercase">
            Interstellar Flight Mug
          </span>
        </div>

        {/* CTA Button */}
        <Button
          variant="cta"
          size="sm"
          className="text-xs"
        >
          Add to Manifest
        </Button>
      </div>
    </motion.header>
  );
};

export default StickyNavigation;
