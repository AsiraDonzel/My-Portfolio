import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Persona, Translation } from '../types';
import { Briefcase, Code, Compass, Send, Loader2, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactHubProps {
  t: Translation;
  isPro: boolean;
}

const personaConfig = {
  [Persona.RECRUITER]: { icon: Briefcase, color: "bg-emerald-500", text: "text-emerald-400" },
  [Persona.DEVELOPER]: { icon: Code, color: "bg-blue-500", text: "text-blue-400" },
  [Persona.ADVENTURER]: { icon: Compass, color: "bg-purple-500", text: "text-purple-400" },
};

export const ContactHub: React.FC<ContactHubProps> = ({ t, isPro }) => {
  const [activePersona, setActivePersona] = useState<Persona>(Persona.RECRUITER);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        'service_jguw8j8', 
        'template_x1n7qvs',
        formRef.current, 
        'wbD_uxAX-EMkULgOs'
      );

      setIsSent(true);
      formRef.current.reset();
      setTimeout(() => setIsSent(false), 5000);
    } catch (error) {
      alert("Failed to send message. Please try again or email me directly at donzelefachita@gmail.com ");
    } finally {
      setIsSending(false);
    }
  };

  const themeClass = isPro ? 'bg-slate-900 border-slate-700' : 'bg-indigo-950/50 border-indigo-500/30 backdrop-blur-xl';

  return (
    <div id="contact" className="py-24 px-4 w-full flex justify-center items-center min-h-[80vh]">
      <motion.div 
        layout
        className={`w-full max-w-2xl rounded-3xl border p-8 overflow-hidden relative ${themeClass} shadow-2xl`}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-display font-bold">{t.contact.title}</h2>
          
          <div className="flex gap-2 p-1 bg-black/20 rounded-full">
            {(Object.keys(personaConfig) as Persona[]).map((p) => {
              const Icon = personaConfig[p].icon;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => setActivePersona(p)}
                  className={`p-2 rounded-full transition-colors relative ${activePersona === p ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                  title={t.contact.personas[p]}
                >
                  {activePersona === p && (
                    <motion.div
                      layoutId="activePersonaBg"
                      className={`absolute inset-0 rounded-full ${personaConfig[p].color}`}
                    />
                  )}
                  <span className="relative z-10"><Icon size={18} /></span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isSent ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-12 text-center space-y-4"
            >
              <CheckCircle2 size={64} className="text-emerald-400" />
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <p className="text-gray-400">Thanks for reaching out, Donzel will get back to you shortly.</p>
            </motion.div>
          ) : (
            <motion.form
              ref={formRef}
              key={activePersona}
              layout
              initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="flex flex-col gap-4"
              onSubmit={handleSend}
            >
              {/* Hidden field to pass persona type to the email template */}
              <input type="hidden" name="persona" value={activePersona} />

              {activePersona === Persona.ADVENTURER && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl mb-2"
                >
                  <p className="text-xs text-purple-300 italic">
                    "Adventure is out there! Whether it's a hiking trail or a new tech stack, let's connect."
                  </p>
                </motion.div>
              )}

              <motion.div layout className={`text-sm font-medium uppercase tracking-wider mb-2 ${personaConfig[activePersona].text}`}>
                {activePersona === Persona.RECRUITER && "Professional Inquiry"}
                {activePersona === Persona.DEVELOPER && "Code Collaboration"}
                {activePersona === Persona.ADVENTURER && "Random Chit-Chat"}
              </motion.div>

              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-gray-400 ml-2">Who are you?</label>
                  <input 
                    required
                    name="from_name"
                    type="text" 
                    placeholder={
                      activePersona === Persona.RECRUITER ? "Recruiter Name / Company" : 
                      activePersona === Persona.DEVELOPER ? "GitHub Username" : "Your Nickname"
                    }
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-400 ml-2">How to reach you?</label>
                  <input 
                    required
                    name="from_email"
                    type="email" 
                    placeholder={
                      activePersona === Persona.ADVENTURER ? "Discord / Email" : t.contact.placeholders.email
                    }
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>
              </motion.div>

              <motion.div layout className="space-y-1">
                <label className="text-xs text-gray-400 ml-2">Message</label>
                <textarea 
                  required
                  name="message"
                  rows={4}
                  placeholder={t.contact.placeholders.message}
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </motion.div>

              <motion.button
                layout
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`mt-4 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-white shadow-lg ${personaConfig[activePersona].color} disabled:opacity-50`}
              >
                {isSending ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>{t.contact.submit}</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};