import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: 'Height', value: 140, unit: 'mm', progress: 70 },
  { label: 'Diameter', value: 82, unit: 'mm', progress: 41 },
  { label: 'Weight', value: 182, unit: 'g', progress: 36 },
  { label: 'Capacity', value: 450, unit: 'ml', progress: 90 },
  { label: 'Heat Retention', value: 12, unit: 'hrs', progress: 80 },
  { label: 'Cold Retention', value: 24, unit: 'hrs', progress: 96 },
];

const AnimatedNumber = ({ value, isInView }: { value: number; isInView: boolean }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(easeOut * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, isInView]);

  return <span>{displayValue}</span>;
};

const TelemetryDashboard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-space uppercase text-primary mb-4 block">Performance Data</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Mug <span className="text-gradient-orange">Telemetry</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="glass rounded-xl p-6">
                {/* Label */}
                <p className="text-xs tracking-space uppercase text-muted-foreground mb-4">
                  {stat.label}
                </p>
                
                {/* Animated value */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-foreground tabular-nums">
                    <AnimatedNumber value={stat.value} isInView={isInView} />
                  </span>
                  <span className="text-lg text-muted-foreground">{stat.unit}</span>
                </div>
                
                {/* Progress bar */}
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: stat.progress / 100 } : {}}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-mars-light rounded-full origin-left"
                  />
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/30 rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/30 rounded-bl-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="flex items-center justify-center gap-3 mt-12"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
          </span>
          <span className="text-xs tracking-space uppercase text-muted-foreground">
            All Systems Nominal
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default TelemetryDashboard;
