import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

const WITHOUT_LINES = [
  'Diners message asking for pictures of your specials before ordering.',
  'Orders stall on Zomato and Swiggy because dishes sit without a photo.',
  'Your team takes quick phone snaps in dim kitchen light between orders.',
  'New dishes go live on your delivery listings without any artwork or video clip.',
];

const WITH_LINES = [
  'Diners see every plate clearly before they place their order.',
  'Your Zomato, Swiggy and Instagram listings show a clean photo for each dish.',
  'Posters and short video ads run for your menu items.',
  'Your team uses the tracker so every new dish gets its photo first.',
];

export const BeforeAfterSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'without' | 'with'>('without');
  const shouldReduceMotion = useReducedMotion();

  const isWith = activeTab === 'with';
  const currentLines = isWith ? WITH_LINES : WITHOUT_LINES;

  return (
    <section
      id="before-after"
      className="bg-[#FBF4E8] py-[64px] lg:py-[120px] text-[#2B1D16] border-t border-[#2B1D16]/12"
    >
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        
        {/* Header and Switch */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C96A2B] font-semibold block mb-2">
              Your evening
            </span>
            <h2 className="font-serif text-[40px] sm:text-[52px] leading-[1.05] tracking-tight">
              Before and after
            </h2>
          </div>

          {/* Two-position switch */}
          <div className="inline-flex p-1.5 rounded-full bg-[#2B1D16]/8 border border-[#2B1D16]/12 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('without')}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors select-none ${
                !isWith ? 'text-[#2B1D16]' : 'text-[#2B1D16]/65 hover:text-[#2B1D16]'
              }`}
            >
              {!isWith && (
                <motion.div
                  layoutId="switch-bubble"
                  className="absolute inset-0 rounded-full bg-[#FBF4E8] shadow-xs border border-[#2B1D16]/10"
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { type: 'spring', stiffness: 350, damping: 28 }
                  }
                />
              )}
              <span className="relative z-10">Without PlateAndPost</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('with')}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors select-none ${
                isWith ? 'text-[#2B1D16]' : 'text-[#2B1D16]/65 hover:text-[#2B1D16]'
              }`}
            >
              {isWith && (
                <motion.div
                  layoutId="switch-bubble"
                  className="absolute inset-0 rounded-full bg-[#C96A2B] shadow-xs"
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { type: 'spring', stiffness: 350, damping: 28 }
                  }
                />
              )}
              <span className={`relative z-10 ${isWith ? 'text-[#2B1D16] font-semibold' : ''}`}>
                With PlateAndPost
              </span>
            </button>
          </div>
        </div>

        {/* 
          Day-in-the-life List:
          Both lists sit stacked in the same place and crossfade:
          one fades out while the other fades in, with no empty moment.
        */}
        <div className="relative min-h-[300px] rounded-[28px] bg-[#FBF4E8] border border-[#2B1D16]/12 p-7 sm:p-10 shadow-xs overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeTab}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="space-y-6"
            >
              {currentLines.map((line, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 pb-6 border-b border-[#2B1D16]/10 last:border-b-0 last:pb-0"
                >
                  <span
                    className={`mt-1 h-2.5 w-2.5 rounded-full shrink-0 ${
                      isWith ? 'bg-[#C96A2B]' : 'bg-[#2B1D16]/35'
                    }`}
                  />
                  <p className="font-sans text-[17px] sm:text-[19px] leading-relaxed text-[#2B1D16]">
                    {line}
                  </p>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
