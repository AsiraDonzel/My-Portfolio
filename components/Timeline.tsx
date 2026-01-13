import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Experience } from '../types';

interface TimelineProps {
  data: Experience[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative pl-8 md:pl-0 max-w-5xl mx-auto overflow-hidden px-2">
      {/* Central Line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800/50 -translate-x-1/2">
        <motion.div 
          style={{ height: lineHeight }} 
          className="w-full bg-gradient-to-b from-emerald-500 to-cyan-500 origin-top shadow-[0_0_15px_rgba(16,185,129,0.3)]" 
        />
      </div>

      <div className="space-y-24">
        {data.map((item, index) => {
          const isEven = index % 2 === 0;
          
          const imageList: string[] = [];
          if (item.images && Array.isArray(item.images)) {
            imageList.push(...item.images);
          } else if (item.image) {
            imageList.push(item.image);
          }

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: isEven ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex items-center w-full md:justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Animated Dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-slate-950 border-2 border-emerald-400 rounded-full z-10">
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} 
                  transition={{ repeat: Infinity, duration: 2 }} 
                  className="absolute inset-0 rounded-full bg-emerald-400" 
                />
              </div>

              {/* Spacer for Desktop Layout */}
              <div className="hidden md:block w-[45%]" />

              {/* Content Card */}
              <div className="w-full md:w-[45%] pl-8 md:pl-0">
                <div className="group bg-slate-900/40 border border-slate-800/50 rounded-3xl hover:border-emerald-500/50 transition-all duration-500 backdrop-blur-xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  
                  {/* Image Grid Section */}
                  {imageList.length > 0 && (
                    <div className={`grid gap-1 border-b border-slate-800/50 ${
                      imageList.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
                    }`}>
                      {imageList.map((img, i) => (
                        <div key={i} className={`overflow-hidden h-48 md:h-56 ${
                          imageList.length === 3 && i === 0 ? 'col-span-2' : ''
                        }`}>
                          <img 
                            src={img} 
                            alt={`${item.role} ${i}`} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110" 
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="p-6 md:p-8">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] md:text-xs font-bold mb-4 tracking-widest uppercase">
                      {item.year}
                    </span>
                    {/* Role title handles wrapping better */}
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors leading-tight">
                      {item.role}
                    </h3>
                    <h4 className="text-slate-400 font-medium mb-4 uppercase tracking-wider text-[10px] md:text-xs">
                      {item.company}
                    </h4>
                    {/* Balanced text for long German words */}
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors antialiased hyphens-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};