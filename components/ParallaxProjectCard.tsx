import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ParallaxProjectCardProps {
  project: Project;
  viewCaseStudyText: string;
}

export const ParallaxProjectCard: React.FC<ParallaxProjectCardProps> = ({ project, viewCaseStudyText }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the mouse movement
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse position to image translate (Parallax effect)
  const xMove = useTransform(mouseX, [-0.5, 0.5], ["-5%", "5%"]);
  const yMove = useTransform(mouseY, [-0.5, 0.5], ["-5%", "5%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    
    // Normalized coordinates (-0.5 to 0.5)
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={project.liveUrl}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial="initial"
      whileHover="hover"
      className="group relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden cursor-pointer block"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ x: xMove, y: yMove, scale: 1.1 }}
        className="absolute inset-0 z-0"
      >
        <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </motion.div>

      {/* Dimming Overlay */}
      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors duration-500 z-10" />
      
      {/* Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-20" />

      {/* Content */}
      <div className="absolute inset-0 z-30 p-8 md:p-12 flex flex-col justify-end transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
        
        {/* Top-right arrow */}
        <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
             <div className="p-4 bg-white rounded-full text-black">
                <ArrowUpRight size={24} />
             </div>
        </div>

        <motion.div
            variants={{
                initial: { y: 0 },
                hover: { y: -10 }
            }}
            transition={{ duration: 0.4 }}
        >
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/20">
                        {tag}
                    </span>
                ))}
            </div>
            
            <h3 className="text-4xl font-display font-bold text-white mb-3">{project.title}</h3>
            
            <p className="text-slate-300 max-w-lg mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                {project.description}
            </p>

            <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                {viewCaseStudyText} <ArrowUpRight size={16} />
            </div>
        </motion.div>
      </div>
    </motion.a>
  );
};