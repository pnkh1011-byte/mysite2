import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  videoUrl?: string;
  index: number;
  aspect?: string;
}

export const ProjectCard = ({ title, category, image, videoUrl, index, aspect = "aspect-[16/9]" }: ProjectCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className={`relative ${aspect} overflow-hidden rounded-2xl bg-surface border border-border/50`}>
        <AnimatePresence mode="wait">
          {!isPlaying ? (
            <motion.div
              key="thumbnail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              
              {videoUrl && (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group/btn"
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-500 group-hover/btn:scale-110 group-hover/btn:bg-primary group-hover/btn:border-primary">
                    <Play className="w-6 h-6 text-white fill-current" />
                  </div>
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black"
            >
              <iframe
                src={videoUrl}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={title}
              />
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-primary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-6 space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">{category}</p>
        <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};
