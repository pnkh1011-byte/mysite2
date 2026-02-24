import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const About = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.4, 0.6], [0.9, 1]);

  return (
    <section id="about" className="py-32 px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div style={{ scale }} className="relative aspect-video rounded-2xl overflow-hidden order-2 lg:order-1">
          <img 
            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="City Skyline Bridge"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        </motion.div>

        <div className="order-1 lg:order-2">
          <h2 className="text-sm uppercase tracking-[0.4em] text-primary mb-6">The Vision</h2>
          <h3 className="text-5xl font-bold tracking-tighter mb-8 leading-tight">
            WE DON'T JUST RECORD MOMENTS. WE CAPTURE EMOTIONS.
          </h3>
          <p className="text-textSecondary text-lg mb-8 leading-relaxed">
            With over a decade of experience behind the lens, COZ Films has collaborated with global brands to create visual experiences that resonate. Our approach combines technical precision with raw storytelling.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-3xl font-bold text-primary">150+</p>
              <p className="text-xs uppercase tracking-widest text-textSecondary">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">12</p>
              <p className="text-xs uppercase tracking-widest text-textSecondary">Industry Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
