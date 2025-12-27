import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, animate, AnimatePresence } from 'framer-motion';
import { Translation, ProjectType } from '../types';
import { PROJECTS, EXPERIENCE } from '../constants';
import { 
  Briefcase, GraduationCap, TrendingUp, ShieldCheck, Zap, Code2, 
  Map, Sparkles, Github, Terminal, Globe2, Cpu, Copy, Check, 
  ExternalLink, Instagram, Linkedin, Eye 
} from 'lucide-react';
import { Timeline } from '../components/Timeline';
import { ParallaxProjectCard } from '../components/ParallaxProjectCard';

interface ProfessionalViewProps {
  t: Translation;
}

// --- 3D Tilt Card Component (Preserved) ---
const TiltCard: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };
  
  return (
    <motion.div 
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={() => {x.set(0); y.set(0)}} 
      className={`relative transition-shadow duration-300 ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="h-full">{children}</div>
    </motion.div>
  );
};

// --- Animated Counter (Preserved) ---
const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  const numericPart = value.match(/\d+/);
  const numericValue = numericPart ? parseInt(numericPart[0]) : null;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (numericValue !== null) {
      const controls = animate(0, numericValue, {
        duration,
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [numericValue, duration]);

  return (
    <span>
      {numericValue !== null ? `${displayValue}${suffix}` : value}
    </span>
  );
};

// --- Animation Variants (Preserved) ---
const containerVars = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: "easeInOut" } }
};

const itemVars = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const nameLetterVars = {
  hidden: { y: 40, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.05, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }
  })
};

export const ProfessionalView: React.FC<ProfessionalViewProps> = ({ t }) => {
  const [activeTimeline, setActiveTimeline] = useState<'WORK' | 'EDUCATION' | 'JOURNEY'>('WORK');
  const [activeTab, setActiveTab] = useState<ProjectType>(ProjectType.VIBE);
  const [copied, setCopied] = useState(false);
  
  const mouseXFollow = useMotionValue(0);
  const mouseYFollow = useMotionValue(0);
  const followX = useSpring(mouseXFollow, { stiffness: 250, damping: 25 });
  const followY = useSpring(mouseYFollow, { stiffness: 250, damping: 25 });

  const handleFollowMouseMove = (e: React.MouseEvent) => {
    mouseXFollow.set(e.clientX);
    mouseYFollow.set(e.clientY);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("donzelefachita@gmail.com"); 
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const liveProjects = PROJECTS.filter(p => p.type === ProjectType.LIVE);
  const filteredPlayground = PROJECTS.filter(p => p.type === activeTab);
  
  const roleText = t?.hero?.role || "Senior Full-Stack Engineer"; 
  const locationText = t?.hero?.location || "Remote";

  // --- Updated Data Logic (Total Control Integrated) ---
  const workData = EXPERIENCE.filter(item => item.type === 'WORK').map(item => {
    if (item.id === '1' && t.language === 'DE') {
      return { ...item, role: t.professional.journey.work1Role, description: t.professional.journey.work1Desc };
    }
    return item;
  });

  const educationData = EXPERIENCE.filter(item => item.type === 'EDUCATION').map(item => {
    if (t.language === 'DE') {
      if (item.id === 'edu1') return { ...item, role: t.professional.journey.edu1Role, description: t.professional.journey.edu1Desc };
      if (item.id === 'edu2') return { ...item, role: t.professional.journey.edu2Role, description: t.professional.journey.edu2Desc };
    }
    return item;
  });

  const journeyData = EXPERIENCE.filter(item => item.type === 'JOURNEY').map(item => {
    if (t.language === 'DE') {
      if (item.id === 'j1') return { ...item, role: t.professional.journey.j1Title, description: t.professional.journey.j1Desc };
      if (item.id === 'j2') return { ...item, role: t.professional.journey.j2Title, description: t.professional.journey.j2Desc };
      if (item.id === 'j3') return { ...item, role: t.professional.journey.j3Title, description: t.professional.journey.j3Desc };
      if (item.id === 'j4') return { ...item, role: t.professional.journey.j4Title, description: t.professional.journey.j4Desc };
      if (item.id === 'j5') return { ...item, role: t.professional.journey.j5Title, description: "" };
    }
    return item;
  });

  const activeData = activeTimeline === 'WORK' ? workData : activeTimeline === 'EDUCATION' ? educationData : journeyData;

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <motion.div variants={containerVars} initial="hidden" animate="show" exit="exit" className="w-full max-w-6xl mx-auto pt-32 px-6 pb-32">
      
      {/* 0. Name Reveal Section */}
      <section className="mb-16">
        <motion.div variants={itemVars} className="flex flex-col items-start overflow-hidden">
           <motion.span 
             initial={{ opacity: 0, x: -10 }}
             animate={{ opacity: 0.5, x: 0 }}
             className="text-xs font-mono uppercase tracking-[0.5em] text-emerald-400 mb-4"
           >
             {t.language === 'EN' ? '// INTRODUCING' : '// VORSTELLUNG'}
           </motion.span>
           <h2 className="flex flex-wrap gap-x-4 text-4xl md:text-7xl font-display font-black text-white uppercase tracking-tighter leading-none">
              {["DONZEL", "ASIRA"].map((word, wordIdx) => (
                <span key={wordIdx} className="flex">
                  {word.split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i + (wordIdx * 7)}
                      variants={nameLetterVars}
                      className="inline-block hover:text-emerald-400 transition-colors duration-300"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
           </h2>
        </motion.div>
      </section>

      {/* 1. Hero Section */}
      <section className="mb-32 flex flex-col md:flex-row items-center gap-16 relative">
        <motion.div variants={itemVars} className="flex-1 space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-wider uppercase rounded-full">
            <Zap size={12} className="animate-pulse" />
            {t.language === 'EN' ? 'Available for hire' : 'Bereit für Projekte'}
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight text-white leading-[0.9]">
            {roleText.split(' ').map((word, i) => <span key={i} className="block">{word}</span>)}
          </h1>
          <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-light italic border-l-2 border-emerald-500/20 pl-6">{locationText}</p>
          
          <div className="flex flex-wrap items-center gap-6 pt-4">
            <motion.a 
              href="/Donzel_Asira_Resume.pdf" 
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="group flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-400 transition-all shadow-xl"
            >
              <Eye size={20} /> {t.hero.cta}
            </motion.a>
            
            <div className="flex items-center gap-4">
               {[
                 { icon: Github, href: "https://github.com/AsiraDonzel", color: "hover:text-emerald-400" },
                 { icon: Linkedin, href: "https://www.linkedin.com/in/donzel-asira-99b5a3365", color: "hover:text-blue-500" },
                 { icon: Instagram, href: "/", color: "hover:text-pink-500" }
               ].map((social, idx) => (
                 <motion.a
                   key={idx}
                   href={social.href}
                   target="_blank"
                   rel="noreferrer"
                   whileHover={{ y: -5 }}
                   className={`p-3 bg-white/5 border border-white/10 rounded-2xl text-white transition-colors ${social.color}`}
                 >
                   <social.icon size={22} />
                 </motion.a>
               ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={itemVars} className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
            <motion.div style={{ y: y1 }} className="absolute inset-0 rounded-full border border-slate-800 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-slate-900/50 relative grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                     <img src="/images/img1.jpeg" alt="Avatar" className="w-full h-full object-cover" />
                 </div>
            </div>
        </motion.div>
      </section>

      {/* 2. Professional DNA */}
      <section className="mb-40">
        <motion.div variants={itemVars} className="flex items-center gap-4 mb-12">
            <h3 className="text-3xl font-display font-bold text-white uppercase tracking-widest italic">
              {t.professional.coreExpertise}
            </h3>
            <div className="h-[1px] flex-1 bg-slate-800"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[200px]">
          <TiltCard className="md:col-span-8 md:row-span-2">
             <div className="h-full bg-slate-950 rounded-[2rem] border border-white/5 p-10 relative overflow-hidden group">
                <div className="flex justify-between items-start mb-12">
                   <div>
                      <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-[0.2em]">Primary Stack</span>
                      <h4 className="text-4xl font-display font-black text-white mt-2 uppercase tracking-tighter">Django, Node.js</h4>
                   </div>
                   <div className="p-4 bg-white/5 rounded-2xl text-emerald-500"><Cpu size={32} /></div>
                </div>
                <div className="flex flex-wrap gap-3">
                   {['HTML', 'Node.js', 'CSS', 'React', 'Next.js', 'Python', 'TypeScript', 'Django', 'MySQL', 'Tailwind', 'Wagtail'].map((tech) => (
                     <motion.span 
                        key={tech}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#10b981' }}
                        className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-slate-400 transition-colors"
                     >
                       {tech}
                     </motion.span>
                   ))}
                </div>
             </div>
          </TiltCard>

          <TiltCard className="md:col-span-4">
             <div className="h-full bg-indigo-950/30 rounded-[2rem] border border-indigo-500/20 p-8 flex flex-col justify-between group">
                <div className="flex items-center gap-3">
                   <Globe2 size={24} className="text-indigo-400" />
                   <span className="text-xs font-black text-white/40 uppercase tracking-widest">Polyglot</span>
                </div>
                <div>
                   <h4 className="text-xl font-bold text-white mb-1">English, German, A little bit of French</h4>
                </div>
             </div>
          </TiltCard>

          <TiltCard className="md:col-span-4">
             <div className="h-full bg-slate-900 rounded-[2rem] border border-white/5 p-8 relative overflow-hidden group">
                <div className="relative z-10 h-full flex flex-col justify-between">
                   <h4 className="text-2xl font-display font-bold text-white uppercase leading-tight">Software and Web<br/>Developer</h4>
                   <div className="space-y-1 opacity-40">
                      <div className="h-1 w-full bg-white/10 rounded-full" />
                      <div className="h-1 w-2/3 bg-white/10 rounded-full" />
                   </div>
                </div>
                <div className="absolute -bottom-4 right-4 opacity-5 transition-opacity"><Terminal size={120} /></div>
             </div>
          </TiltCard>

          <TiltCard className="md:col-span-4 md:row-span-2">
             <div 
                onMouseMove={handleFollowMouseMove}
                onClick={copyEmail}
                className="h-full bg-gradient-to-br from-indigo-600 to-purple-800 rounded-[2rem] p-10 flex flex-col justify-center text-center shadow-2xl relative overflow-hidden group cursor-none" 
             >
                <Sparkles size={48} className="mx-auto mb-6 text-white animate-pulse" />
                <h4 className="text-3xl font-display font-black text-white leading-tight uppercase">Do you want to ask a question?</h4>
                <div className="mt-8 mx-auto w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-all">
                   {copied ? <Check size={20} className="text-emerald-300" /> : <Copy size={20} className="text-white" />}
                </div>

                <motion.div
                    style={{ x: followX, y: followY, left: -100, top: -20 }}
                    className="fixed pointer-events-none z-[100] bg-white text-black px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    {copied ? (t.language === 'EN' ? 'Copied!' : 'Kopiert!') : (t.language === 'EN' ? 'Copy my email' : 'Email kopieren')}
                </motion.div>
             </div>
          </TiltCard>

          <TiltCard className="md:col-span-8">
             <div className="h-full bg-zinc-950 rounded-[2rem] border border-white/5 p-8 font-mono text-xs flex flex-col justify-between overflow-hidden shadow-inner">
                <div className="flex gap-1.5 mb-4">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                   <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                </div>
                <div className="space-y-2 text-slate-500">
                   <p className="text-emerald-400/80">// Graduation Status: Loading</p>
                   <p className="text-white/90 text-xl font-bold">Graduating soon, let's build what's next.</p>
                   <p className="opacity-40">import {`{ moduleName }`} from 'future-path';</p>
                </div>
             </div>
          </TiltCard>
        </div>
      </section>

      {/* 3. Metrics */}
      <motion.section 
        variants={itemVars} 
        className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40 border-y border-slate-800/50 py-20 bg-slate-900/20 backdrop-blur-md rounded-[3rem] px-12 shadow-inner"
      >
        {[
          { label: 'Years Experience', value: '1+', icon: TrendingUp },
          { label: 'Projects Delivered', value: '2', icon: Zap },
          { label: 'Code Quality', value: 'A+', icon: Code2 }
        ].map((stat, idx) => (
          <div key={idx} className="text-center group relative">
            <div className="flex justify-center mb-4 text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors">
                <stat.icon size={40} />
            </div>
            <div className="text-5xl md:text-6xl font-display font-black text-white mb-2 group-hover:text-emerald-400 transition-colors duration-500">
               <Counter value={stat.value} />
            </div>
            <div className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-black">{stat.label}</div>
          </div>
        ))}
      </motion.section>

      {/* 4. Journey Hub */}
      <motion.section variants={itemVars} className="mb-40">
        <div className="flex flex-col items-center mb-16 text-center">
            <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter uppercase mb-10 italic">
              {t.professional.hubTitle}
            </h3>
            <div className="flex bg-white/5 p-1.5 rounded-full backdrop-blur-2xl border border-white/10">
                {[
                  { id: 'WORK', icon: Briefcase, label: t.professional.tabs.work }, 
                  { id: 'EDUCATION', icon: GraduationCap, label: t.professional.tabs.education }, 
                  { id: 'JOURNEY', icon: Map, label: t.professional.tabs.journey }
                ].map((type) => (
                    <button key={type.id} onClick={() => setActiveTimeline(type.id as any)} className="relative px-8 py-4 rounded-full text-sm font-bold transition-all">
                        {activeTimeline === type.id && <motion.div layoutId="timelineHighlight" className={`absolute inset-0 rounded-full shadow-2xl ${type.id === 'WORK' ? 'bg-emerald-600' : type.id === 'EDUCATION' ? 'bg-blue-600' : 'bg-purple-600'}`} />}
                        <span className={`relative z-10 flex items-center gap-2 ${activeTimeline === type.id ? 'text-white' : 'text-gray-400'}`}>
                            <type.icon size={16} /> {type.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
        <AnimatePresence mode="wait">
            <motion.div key={activeTimeline} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
                <Timeline data={activeData} />
            </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* 5. Selected Work */}
      <section className="mb-40">
        <motion.div variants={itemVars} className="flex items-center gap-6 mb-16">
            <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter uppercase italic">{t.professional.selectedWorksTitle}</h3>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
        </motion.div>
        <div className="flex flex-col gap-24">
          {liveProjects.map((project) => (
            <motion.div key={project.id} variants={itemVars} className="relative group">
                <ParallaxProjectCard project={project} viewCaseStudyText={t.professional.viewCaseStudy} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Coding Playground */}
      <section className="mb-32">
        <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold font-display mb-10 text-white tracking-tight uppercase italic">{t.personal.codingTitle}</h2>
            <div className="flex bg-white/5 p-1.5 rounded-full backdrop-blur-2xl border border-white/10 shadow-inner">
                {[ProjectType.LIVE, ProjectType.DEMO, ProjectType.VIBE].map((type) => (
                    <button key={type} onClick={() => setActiveTab(type)} className="relative px-8 py-4 rounded-full text-sm font-bold transition-all">
                        {activeTab === type && <motion.div layoutId="subTabHighlight" className={`absolute inset-0 rounded-full shadow-2xl ${type === ProjectType.VIBE ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gradient-to-r from-indigo-600 to-blue-600'}`} />}
                        <span className={`relative z-10 flex items-center gap-2 ${activeTab === type ? 'text-white' : 'text-gray-400'}`}>
                            {type === ProjectType.VIBE && <Sparkles size={18} />}
                            {type === ProjectType.LIVE ? t.personal.tabs.live : type === ProjectType.DEMO ? t.personal.tabs.demo : t.personal.tabs.vibe}
                        </span>
                    </button>
                ))}
            </div>
        </div>
        <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredPlayground.map((project) => (
                    <TiltCard key={project.id}>
                        <div className={`h-full group relative rounded-[2rem] overflow-hidden border backdrop-blur-md transition-all shadow-xl flex flex-col ${activeTab === ProjectType.VIBE ? 'bg-purple-900/5 border-purple-500/20' : 'bg-indigo-900/5 border-indigo-500/20'}`}>
                            <div className="aspect-[16/10] overflow-hidden relative">
                              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                 <a href={activeTab === ProjectType.LIVE ? (project as any).liveUrl : (project as any).githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-bold text-xs hover:bg-indigo-500 hover:text-white transition-colors">
                                    {activeTab === ProjectType.LIVE ? <><ExternalLink size={14}/> {t.personal.links.live}</> : <><Github size={14}/> {t.personal.links.repo}</>}
                                 </a>
                              </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col justify-between">
                                <div>
                                  <h4 className="text-2xl font-display font-bold text-white mb-3">{project.title}</h4>
                                  <p className="text-gray-400 text-sm italic mb-6">"{project.description}"</p>
                                </div>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                  <div className="flex gap-2">{project.tags.map(tag => (<span key={tag} className="text-[10px] uppercase font-black tracking-widest text-white/40 group-hover:text-white/80">{tag}</span>))}</div>
                                  <Code2 size={16} className="text-white/20" />
                                </div>
                            </div>
                        </div>
                    </TiltCard>
                ))}
            </motion.div>
        </AnimatePresence>
      </section>

    </motion.div>
  );
};