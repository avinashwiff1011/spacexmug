import { motion, AnimatePresence } from 'framer-motion';
import { Rocket } from 'lucide-react';

interface PageLoaderProps {
  isLoading: boolean;
}

const PageLoader = ({ isLoading }: PageLoaderProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {/* Starfield background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  '--delay': `${Math.random() * 2}s`,
                  '--duration': `${Math.random() * 2 + 2}s`,
                  '--min-opacity': '0.1',
                  '--max-opacity': '0.8',
                } as React.CSSProperties}
              />
            ))}
          </div>

          {/* Rocket animation */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: -200, opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 1.8,
              ease: [0.4, 0, 0.2, 1],
              times: [0, 0.1, 0.7, 1],
            }}
            className="relative"
          >
            <Rocket className="h-12 w-12 text-primary rotate-[-45deg]" />
            
            {/* Rocket trail */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: [0, 1, 0.5], scaleY: [0, 1, 2] }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-20 rounded-full bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top"
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-20 text-sm tracking-space text-muted-foreground uppercase"
          >
            Initializing Launch Sequence
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
