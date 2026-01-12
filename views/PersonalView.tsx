import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Translation, ProjectType } from '../types';
import { PROJECTS } from '../constants';
import { 
  Sparkles, Linkedin, Github, Instagram, Gamepad2, BookOpen, 
  Trophy, MonitorPlay, Code2, Heart, Languages, Tv2, X, ExternalLink 
} from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';

interface PersonalViewProps {
  t: Translation;
}

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

// --- 3D Tilt Card Component (Preserved from original) ---
const TiltCard: React.FC<TiltCardProps> = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-shadow duration-300 ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
};

// --- Kinetic Typography Component (Preserved) ---
const KineticValues = ({ values }: { values: string[] }) => {
  return (
    <div className="h-20 overflow-hidden relative inline-block align-bottom">
      <motion.div
        animate={{ y: ["0%", "-75%"] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear", repeatType: "mirror" }}
        className="flex flex-col text-left"
      >
        {values.map((val, i) => (
          <span key={i} className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 block h-20 leading-[5rem]">
            {val}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export const PersonalView: React.FC<PersonalViewProps> = ({ t }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState<null | number>(null);

  // Life Components Data with Stories mapped to current language 't'
  const lifeComponents = [
    { 
      title: t.personal.hobbies.gaming, 
      icon: Gamepad2, 
      color: "from-cyan-500/20",
      story: t.personal.stories.gaming 
    },
    { 
      title: t.personal.hobbies.sports, 
      icon: Trophy, 
      color: "from-red-600/20",
      story: t.personal.stories.sports
    },
    { 
      title: t.personal.hobbies.anime, 
      icon: Sparkles, 
      color: "from-purple-500/20",
      story: t.personal.stories.anime
    },
    { 
      title: t.personal.hobbies.manhwa, 
      icon: BookOpen, 
      color: "from-indigo-500/20",
      story: t.personal.stories.manhwa
    },
    { 
      title: t.personal.hobbies.languages, 
      icon: Languages, 
      color: "from-emerald-500/20",
      story: t.personal.stories.languages
    },
    { 
      title: t.personal.hobbies.movies, 
      icon: Tv2, 
      color: "from-blue-500/20",
      story: t.personal.stories.movies
    },
    { 
      title: t.personal.hobbies.solving, 
      icon: Code2, 
      color: "from-amber-500/20",
      story: t.personal.stories.solving
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-7xl mx-auto pt-24 px-6 pb-20"
    >
      {/* 1. Kinetic Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            animate={{ letterSpacing: "0.5em", opacity: 0.6 }}
            className="text-sm md:text-base font-mono text-indigo-300 mb-6 uppercase"
          >
            {t.personal.heroPrefix}
          </motion.div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
             <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter">
               {t.personal.heroMain}
             </h1>
             <KineticValues values={t.personal.aboutValues} />
          </div>
          <p className="mt-8 text-lg md:text-xl text-indigo-200/60 max-w-2xl mx-auto font-light leading-relaxed">
            {t.personal.heroDescription}
          </p>
        </motion.div>
      </section>

      {/* 2. Asira's Hobbies (4 Cards) */}
      <section className="mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-12"
        >
            <h2 className="text-4xl font-bold font-display text-white italic underline decoration-indigo-500/50 underline-offset-8">
                {t.personal.hobbiesTitle}
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TiltCard>
            <div className="h-full bg-gradient-to-br from-[#A50044] to-[#004D98] rounded-[2.5rem] border border-white/10 p-10 flex flex-col justify-between overflow-hidden shadow-2xl relative group">
              <Trophy size={40} className="text-[#EDBB00] z-10" />
              <div className="z-10">
                <h3 className="text-4xl font-display font-black text-white uppercase tracking-tighter">{t.personal.fcb.title}</h3>
                <p className="text-white/80 mt-4 leading-relaxed">
                  {t.personal.fcb.description}
                </p>
              </div>
              <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Trophy size={280} />
              </div>
            </div>
          </TiltCard>

          <div className="h-full perspective-1000" onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
            <motion.div animate={{ rotateY: isFlipped ? 180 : 0 }} transition={{ duration: 0.8, type: "spring", bounce: 0.3 }} style={{ transformStyle: "preserve-3d" }} className="relative w-full h-full cursor-pointer">
              <div className="absolute inset-0 bg-slate-900 rounded-[2.5rem] border border-indigo-500/20 p-8 flex flex-col items-center justify-center text-center backface-hidden shadow-2xl">
                <BookOpen size={48} className="text-indigo-400 mb-6" />
                <h3 className="text-3xl font-display font-bold text-white">{t.personal.manhwa.title}</h3>
                <p className="text-xs font-mono text-indigo-300 mt-4 uppercase">{t.personal.manhwa.featured}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[2.5rem] p-10 flex flex-col justify-center text-center backface-hidden [transform:rotateY(180deg)] shadow-2xl">
                <p className="text-xl font-display font-bold text-white mb-4 italic">"{t.personal.manhwa.quote}"</p>
                <p className="text-sm text-indigo-100">
                   {t.personal.manhwa.backDescription}
                </p>
              </div>
            </motion.div>
          </div>

          <TiltCard>
            <div className="relative h-full w-full rounded-[2rem] bg-indigo-900/20 border border-indigo-500/20 overflow-hidden group">
            {/* Content */}
            <div className="relative z-10 p-8">
              <h4 className="text-2xl font-bold text-white">{t.personal.gaming.title}</h4>
              <p className="text-slate-400 mt-2">{t.personal.gaming.description}</p>
            </div>
              <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <p><Gamepad2 size={200} className="rotate-12" /></p>
              </div>
            </div>
          </TiltCard>

          <TiltCard>
            <div className="h-full bg-emerald-950/30 rounded-[2.5rem] p-10 border border-emerald-500/20 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <Code2 size={40} className="text-emerald-400 z-10" />
              <div className="z-10">
                <h3 className="text-3xl font-display font-bold text-white uppercase">{t.personal.solving.title}</h3>
                <p className="text-white/60 mt-4 text-lg font-light leading-relaxed italic">
                  {t.personal.solving.description}
                </p>
              </div>
              <div className="absolute -left-20 -bottom-20 p-40 bg-emerald-500/5 rounded-full blur-[80px]"></div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* 3. Components of Asira's Life */}
      <section className="mb-40">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-bold font-display text-white tracking-tighter mb-4 uppercase">{t.personal.lifeComponentsTitle}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        </motion.div>

        <div className="relative flex flex-wrap justify-center gap-8 perspective-1000">
          {lifeComponents.map((item, idx) => (
            <motion.div 
              key={idx}
              onClick={() => setActiveOverlay(idx)}
              initial={{ opacity: 0, rotateY: -20, z: -100 }}
              whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
              whileHover={{ scale: 1.05, rotateZ: idx % 2 === 0 ? 1 : -1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`w-64 h-80 rounded-[2.5rem] bg-white/5 border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group shadow-xl backdrop-blur-xl cursor-pointer`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${item.color} to-transparent opacity-40 group-hover:opacity-80 transition-opacity`} />
              <div className="p-4 bg-white/5 rounded-2xl w-fit relative z-10 group-hover:bg-white/10">
                <item.icon size={28} className="text-white group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-xl font-display font-bold text-white/90 group-hover:text-white relative z-10 tracking-tight">{item.title}</h4>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeOverlay !== null && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-2xl"
              onClick={() => setActiveOverlay(null)}
            >
              <motion.div
                layoutId={`card-${activeOverlay}`}
                initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                className="max-w-xl w-full bg-zinc-900 border border-white/10 rounded-[3rem] p-12 relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setActiveOverlay(null)} className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors">
                  <X size={32} />
                </button>
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${lifeComponents[activeOverlay].color} to-transparent flex items-center justify-center mb-8`}>
                   {React.createElement(lifeComponents[activeOverlay].icon, { size: 40, className: "text-white" })}
                </div>
                <h3 className="text-4xl font-display font-bold text-white mb-6 uppercase tracking-tight">{lifeComponents[activeOverlay].title}</h3>
                <p className="text-xl text-gray-400 leading-relaxed font-light italic">
                  {lifeComponents[activeOverlay].story}
                </p>
                <div className="mt-12 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                   <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1 }} className="h-full bg-indigo-500" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 4. Footer */}
      <footer className="mt-40 mb-16 flex flex-col items-center text-center">
          <div className="mb-12 relative">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-2xl opacity-20" />
            <svg width="280" height="80" viewBox="0 0 300 100" className="stroke-white fill-none stroke-[1.5] relative z-10">
               <motion.path d="M20,60 Q50,20 80,60 T140,60 T200,60 T260,60" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2.5 }} />
               <text x="50%" y="65%" textAnchor="middle" className="fill-white font-display text-3xl font-black uppercase">DONZEL ASIRA</text>
            </svg>
          </div>
          <h3 className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-indigo-400/50 mb-8 uppercase tracking-tighter italic underline decoration-indigo-500/50 underline-offset-8">
            {t.personal.footerTitle}
          </h3>
          <div className="flex items-center gap-8 p-6 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-3xl shadow-2xl">
            {[{ icon: Github, color: 'bg-black', link: 'https://github.com/AsiraDonzel' }, { icon: Linkedin, color: 'bg-[#0077b5]', link: 'https://www.linkedin.com/in/donzel-asira-99b5a3365' }, { icon: Instagram, color: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]', link: '/' }].map((soc, i) => (
                <a key={i} href={soc.link} target="_blank" rel="noreferrer"><MagneticButton className={`p-5 rounded-2xl ${soc.color} text-white shadow-lg`}><soc.icon size={28} /></MagneticButton></a>
            ))}
          </div>
          <div className="mt-20 text-[10px] text-gray-600 uppercase tracking-[0.5em] font-bold">
            {t.personal.copyright} • © {new Date().getFullYear()}
          </div>
      </footer>
    </motion.div>
  );
};