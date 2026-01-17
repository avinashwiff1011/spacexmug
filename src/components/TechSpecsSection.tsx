import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const specs = [
  { label: 'Heat Shield Coating', description: 'Ceramic-based thermal barrier', position: { top: '15%', left: '10%' } },
  { label: 'Vacuum Chamber', description: 'Double-wall insulation', position: { top: '40%', left: '5%' } },
  { label: 'Ergonomic Payload Handle', description: 'Zero-G certified grip', position: { top: '65%', left: '8%' } },
  { label: 'Thermal Seal Lid', description: 'Magnetic locking mechanism', position: { top: '10%', right: '10%' } },
  { label: 'Grade 5 Titanium Body', description: 'Aerospace-standard alloy', position: { top: '50%', right: '5%' } },
  { label: 'Anti-Slip Base', description: 'Silicone dampening ring', position: { top: '85%', right: '15%' } },
];

const TechSpecsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech-specs" className="relative py-32 overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-space uppercase text-primary mb-4 block">Technical Specifications</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Engineering <span className="text-gradient-orange">Excellence</span>
          </h2>
        </motion.div>

        {/* Blueprint visualization */}
        <div ref={ref} className="relative max-w-4xl mx-auto aspect-square">
          {/* Central mug SVG blueprint */}
          <motion.svg
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            viewBox="0 0 400 500"
            className="w-full h-full"
            style={{ filter: 'drop-shadow(0 0 20px hsla(16, 73%, 62%, 0.3))' }}
          >
            {/* Main body outline */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M120 100 L120 400 Q120 430 150 430 L250 430 Q280 430 280 400 L280 100 Q280 70 250 70 L150 70 Q120 70 120 100 Z"
              fill="none"
              stroke="hsl(16 73% 62%)"
              strokeWidth="2"
              strokeDasharray="1000"
            />
            
            {/* Handle */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              d="M280 150 Q340 150 340 250 Q340 350 280 350"
              fill="none"
              stroke="hsl(16 73% 62%)"
              strokeWidth="2"
              strokeDasharray="1000"
            />
            
            {/* Lid */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              d="M110 70 L290 70 M130 50 Q200 30 270 50 L270 70 L130 70 Z"
              fill="none"
              stroke="hsl(16 73% 62%)"
              strokeWidth="2"
              strokeDasharray="1000"
            />
            
            {/* Inner details */}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
              d="M140 120 L260 120 M140 200 L260 200 M140 280 L260 280 M140 360 L260 360"
              fill="none"
              stroke="hsl(16 73% 62% / 0.4)"
              strokeWidth="1"
              strokeDasharray="500"
            />
            
            {/* Measurement lines */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <line x1="80" y1="70" x2="80" y2="430" stroke="hsl(0 0% 63%)" strokeWidth="0.5" strokeDasharray="4" />
              <line x1="75" y1="70" x2="85" y2="70" stroke="hsl(0 0% 63%)" strokeWidth="0.5" />
              <line x1="75" y1="430" x2="85" y2="430" stroke="hsl(0 0% 63%)" strokeWidth="0.5" />
              <text x="65" y="250" fill="hsl(0 0% 63%)" fontSize="10" textAnchor="middle" transform="rotate(-90, 65, 250)">140mm</text>
            </motion.g>
          </motion.svg>

          {/* Spec labels */}
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.5 + index * 0.15 }}
              className="absolute glass px-4 py-3 rounded-lg max-w-[200px]"
              style={spec.position as React.CSSProperties}
            >
              <p className="text-xs font-semibold text-primary tracking-wide">{spec.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{spec.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecsSection;
