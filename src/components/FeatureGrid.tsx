import { motion } from 'framer-motion';
import { Thermometer, Shield, Droplets, Gauge, Atom, Zap } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: Thermometer,
    title: 'Vacuum Insulated',
    description: 'Double-wall construction maintains temperature for 12+ hours hot, 24+ hours cold.',
    detail: 'Sub-zero to 100°C operational range',
  },
  {
    icon: Shield,
    title: 'Heat Shield Coating',
    description: 'Ceramic-based exterior remains cool to touch at any internal temperature.',
    detail: 'NASA-derived thermal technology',
  },
  {
    icon: Droplets,
    title: 'Zero Condensation',
    description: 'Advanced insulation prevents any external moisture buildup.',
    detail: 'Perfect for sensitive equipment',
  },
  {
    icon: Gauge,
    title: 'Pressure Sealed',
    description: 'Magnetic lid creates airtight seal, leak-proof in any orientation.',
    detail: 'Tested to 2 atmospheres',
  },
  {
    icon: Atom,
    title: 'Grade 5 Titanium',
    description: 'Same alloy used in spacecraft and medical implants. Lifetime durability.',
    detail: 'Ti-6Al-4V aerospace standard',
  },
  {
    icon: Zap,
    title: 'Rapid Thermal',
    description: 'Optimized wall thickness enables faster heating and cooling when desired.',
    detail: '40% faster than steel',
  },
];

const FeatureGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-space uppercase text-primary mb-4 block">Feature Matrix</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Built for <span className="text-gradient-orange">Performance</span>
          </h2>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                <div className={`
                  relative h-full p-8 rounded-xl border transition-all duration-500 overflow-hidden
                  ${isHovered 
                    ? 'border-primary/50 bg-card/80' 
                    : 'border-border bg-card/40'
                  }
                `}>
                  {/* Animated background on hover */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isHovered ? 0.1 : 0,
                      scale: isHovered ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-radial from-primary to-transparent"
                  />
                  
                  {/* Heat/cold wave effect */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 0.2, y: -100 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"
                    />
                  )}

                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`
                      w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-300
                      ${isHovered ? 'bg-primary text-primary-foreground' : 'bg-muted text-primary'}
                    `}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    
                    {/* Detail tag */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 10 
                      }}
                      transition={{ duration: 0.3 }}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-xs text-primary font-medium">{feature.detail}</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
