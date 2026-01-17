import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import mugOffice from '@/assets/mug-office.jpg';
import mugWorkshop from '@/assets/mug-workshop.jpg';
import mugOutdoor from '@/assets/mug-outdoor.jpg';

const images = [
  { src: mugOffice, alt: 'Mug in modern office', label: 'Mission Control' },
  { src: mugWorkshop, alt: 'Mug in industrial workshop', label: 'Manufacturing Bay' },
  { src: mugOutdoor, alt: 'Mug in outdoor setting', label: 'Field Operations' },
];

const LaunchGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Section header */}
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-xs tracking-space uppercase text-primary mb-4 block">Launch Sequence Gallery</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Every Mission. <span className="text-gradient-orange">One Vessel.</span>
          </h2>
          <p className="text-muted-foreground mt-6">
            From the precision of the engineering floor to the unpredictability of the field, 
            the Interstellar Flight Mug performs at optimal capacity in any environment.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll gallery */}
      <motion.div 
        style={{ x }}
        className="flex gap-8 pl-6"
      >
        {images.map((image, index) => (
          <motion.div
            key={image.label}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex-shrink-0 w-[400px] md:w-[500px] lg:w-[600px] group"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              
              {/* Image label */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs tracking-space uppercase text-primary">{`0${index + 1}`}</span>
                <h3 className="text-2xl font-semibold mt-2">{image.label}</h3>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Spacer for scroll */}
        <div className="flex-shrink-0 w-[100px]" />
      </motion.div>
    </section>
  );
};

export default LaunchGallery;
