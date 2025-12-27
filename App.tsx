import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, Mode } from './types';
import { TRANSLATIONS } from './constants';
import { ProfessionalView } from './views/ProfessionalView';
import { PersonalView } from './views/PersonalView';
import { ContactHub } from './components/ContactHub';
import { MagneticButton } from './components/MagneticButton';
import { Globe } from 'lucide-react';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [mode, setMode] = useState<Mode>(Mode.PROFESSIONAL);
  
  // --- SCROLL TO TOP LOGIC ---
  useEffect(() => {
    // When mode changes, force scroll to top before/during transition
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'instant' prevents jarring overlap with animations
    });
  }, [mode]);

  // Cinematic Background Transitions
  const bgClass = mode === Mode.PROFESSIONAL 
    ? 'bg-slate-950 selection:bg-emerald-500 selection:text-white' 
    : 'bg-[#050511] selection:bg-purple-500 selection:text-white';

  const t = TRANSLATIONS[language];
  const isPro = mode === Mode.PROFESSIONAL;

  const toggleLanguage = () => {
    setLanguage(prev => prev === Language.EN ? Language.DE : Language.EN);
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 ease-in-out ${bgClass} font-sans relative`}>
      
      {/* Background Ambience (Personal Mode) */}
      <AnimatePresence>
        {!isPro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
          >
             <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] animate-float"></div>
             <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[100px] animate-pulse-slow"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Right: Language Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button 
          onClick={toggleLanguage}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md transition-all ${
            isPro 
              ? 'border-slate-700 bg-slate-900/50 text-slate-300 hover:text-white' 
              : 'border-indigo-500/30 bg-black/30 text-indigo-200 hover:text-white'
          }`}
        >
          <Globe size={16} />
          <span className="text-sm font-medium">{language}</span>
        </button>
      </div>

      {/* Main Content Area with Cinematic Transitions */}
      <main className="relative z-10 pb-32 overflow-hidden min-h-screen">
        <AnimatePresence mode="wait">
          {isPro ? (
            <motion.div 
                key="pro" 
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="origin-top"
            >
               <ProfessionalView t={t} />
            </motion.div>
          ) : (
            <motion.div 
                key="personal" 
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="origin-top"
            >
               <PersonalView t={t} />
            </motion.div>
          )}
        </AnimatePresence>
        
        <ContactHub t={t} isPro={isPro} />
      </main>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className={`flex items-center p-2 rounded-full backdrop-blur-xl border shadow-2xl transition-colors duration-500 ${
          isPro ? 'bg-slate-900/80 border-slate-700' : 'bg-black/60 border-indigo-500/30'
        }`}>
          <MagneticButton 
            isActive={mode === Mode.PROFESSIONAL} 
            onClick={() => setMode(Mode.PROFESSIONAL)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
              mode === Mode.PROFESSIONAL ? 'text-slate-900 font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className={mode === Mode.PROFESSIONAL ? 'text-black z-10 relative' : ''}>
                {t.nav.pro}
            </span>
          </MagneticButton>

          <MagneticButton 
            isActive={mode === Mode.PERSONAL}
            onClick={() => setMode(Mode.PERSONAL)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
              mode === Mode.PERSONAL ? 'text-white font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            {t.nav.personal}
          </MagneticButton>

          <div className={`w-[1px] h-6 mx-2 ${isPro ? 'bg-slate-700' : 'bg-white/10'}`}></div>

          <MagneticButton 
            onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-full text-sm font-medium text-gray-400 hover:text-white"
          >
            {t.nav.contact}
          </MagneticButton>
        </div>
      </div>

    </div>
  );
};

export default App;