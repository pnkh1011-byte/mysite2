import React from 'react';
import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';

const verticalProjects = [
  {
    title: "Paul + Britteny",
    category: "Wedding Trailer",
    videoUrl: "https://player.vimeo.com/video/1167119506?badge=0&autopause=0&player_id=0&app_id=58479",
    image: "https://images.pexels.com/photos/36269441/pexels-photo-36269441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    aspect: "aspect-[9/16]"
  },
  {
    title: "khollin.musiq",
    category: "Saxophone Reel",
    videoUrl: "https://player.vimeo.com/video/1121034578?badge=0&autopause=0&player_id=0&app_id=58479",
    image: "https://images.pexels.com/photos/36269542/pexels-photo-36269542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    aspect: "aspect-[9/16]"
  },
  {
    title: "Juneteenth",
    category: "Event Reel",
    videoUrl: "https://player.vimeo.com/video/1107549014?badge=0&autopause=0&player_id=0&app_id=58479",
    image: "https://images.pexels.com/photos/36269668/pexels-photo-36269668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    aspect: "aspect-[9/16]"
  },
  {
    title: "Velocity",
    category: "Automotive",
    videoUrl: "https://mediazilla.com/iDhC7r13yC",
    image: "https://images.pexels.com/photos/36264441/pexels-photo-36264441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    aspect: "aspect-[9/16]"
  },
  {
    title: "Neon Pulse",
    category: "Lifestyle",
    videoUrl: "https://mediazilla.com/6Nf4qfjMdr",
    image: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    aspect: "aspect-[9/16]"
  },
  {
    title: "Urban Flow",
    category: "Street",
    videoUrl: "https://mediazilla.com/bgvxOMpozg",
    image: "https://images.pexels.com/photos/36264236/pexels-photo-36264236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    aspect: "aspect-[9/16]"
  }
];

export const VerticalReels = () => {
  return (
    <section className="py-32 bg-surface/30 border-y border-border/50">
      <div className="px-8 max-w-7xl mx-auto mb-16">
        <h2 className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Social & Mobile</h2>
        <p className="text-5xl md:text-6xl font-bold tracking-tighter">VERTICAL REELS</p>
      </div>

      <div className="flex overflow-x-auto pb-12 px-8 gap-8 no-scrollbar snap-x snap-mandatory">
        {verticalProjects.map((project, index) => (
          <motion.div 
            key={index}
            className="flex-none w-[280px] md:w-[320px] snap-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProjectCard {...project} index={index} />
          </motion.div>
        ))}
      </div>
      
      <div className="px-8 max-w-7xl mx-auto mt-8">
        <p className="text-textSecondary text-sm italic">
          * Optimized for mobile viewing and social platforms.
        </p>
      </div>
    </section>
  );
};
