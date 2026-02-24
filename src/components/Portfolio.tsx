import React from 'react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "KYLE + HUNTER",
    category: "Wedding Trailer",
    videoUrl: "https://player.vimeo.com/video/787246462?badge=0&autopause=0&player_id=0&app_id=58479",
    image: "https://images.pexels.com/photos/36275295/pexels-photo-36275295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    aspect: "aspect-[16/9]"
  },
  {
    title: "COMPLEXION 2024",
    category: "Fashion Film",
    videoUrl: "https://player.vimeo.com/video/1033318044?badge=0&autopause=0&player_id=0&app_id=58479",
    image: "https://images.pexels.com/photos/36269852/pexels-photo-36269852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    aspect: "aspect-[16/9]"
  },
  {
    title: "IBG COLLECTION",
    category: "Fashion Film",
    videoUrl: "https://player.vimeo.com/video/1033318044?badge=0&autopause=0", // Placeholder for IBG if needed, or keep existing
    image: "https://images.pexels.com/photos/36264236/pexels-photo-36264236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    aspect: "aspect-[16/9]"
  }
];

export const Portfolio = () => {
  return (
    <section id="work" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <h2 className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Selected Works</h2>
          <p className="text-5xl md:text-6xl font-bold tracking-tighter">FEATURED PROJECTS</p>
        </div>
        <button className="text-sm font-medium border-b border-primary pb-1 hover:text-primary transition-colors tracking-widest">
          VIEW ALL PROJECTS
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};
