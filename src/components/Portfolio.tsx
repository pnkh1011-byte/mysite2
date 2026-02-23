import React from 'react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "First Tee Central Arkansas",
    category: "Commercial",
    videoUrl: "https://player.vimeo.com/video/549534088?badge=0&autopause=0&player_id=0&app_id=58479",
    image: "https://images.pexels.com/photos/36275215/pexels-photo-36275215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    aspect: "aspect-[16/9]"
  },
  {
    title: "Kyle + Hunter (Wedding Trailer)",
    category: "Wedding Film",
    videoUrl: "https://player.vimeo.com/video/787246462?badge=0&autopause=0&player_id=0&app_id=58479",
    image: "https://images.pexels.com/photos/36275295/pexels-photo-36275295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    aspect: "aspect-[16/9]"
  },
  {
    title: "Complexion 2024",
    category: "Fashion Film",
    videoUrl: "https://player.vimeo.com/video/1033318044?badge=0&autopause=0&player_id=0&app_id=58479",
    image: "https://images.pexels.com/photos/36269852/pexels-photo-36269852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    aspect: "aspect-[16/9]"
  },
  {
    title: "IBG COLLECTION",
    category: "Fashion Film",
    videoUrl: "https://mediazilla.com/6Nf4qfjMdr",
    image: "https://images.pexels.com/photos/36264236/pexels-photo-36264236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    aspect: "aspect-[16/9]"
  },
  {
    title: "Wilderness Echoes",
    category: "Documentary",
    videoUrl: "https://www.youtube.com/watch?v=P64CWPaCzf8",
    image: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    aspect: "aspect-[16/9]"
  },
  {
    title: "The Urban Pulse",
    category: "Commercial",
    videoUrl: "https://mediazilla.com/bgvxOMpozg",
    image: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
