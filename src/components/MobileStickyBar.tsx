import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { DETAILS } from '../config';

export const MobileStickyBar: React.FC = () => {
  const [show, setShow] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        // Shows once hero is largely scrolled out of view
        setShow(rect.bottom <= 80);
      } else {
        setShow(window.scrollY > 450);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={shouldReduceMotion ? false : { y: 60, opacity: 0 }}
          animate={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { y: 60, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#FBF4E8]/95 backdrop-blur-xs border-t border-[#2B1D16]/12 px-4 py-2.5 shadow-lg"
        >
          <a
            href={DETAILS.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-full items-center justify-center rounded-full bg-[#C96A2B] text-[#2B1D16] font-semibold text-sm shadow-xs active:scale-[0.98] transition-transform"
          >
            Book a 20 minute call
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
