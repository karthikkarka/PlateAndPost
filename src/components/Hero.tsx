import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { DETAILS } from '../config';
import { MagneticButton } from './MagneticButton';
import { RichImage } from './RichImage';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax: arch moves a little slower than the page
  const archY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen bg-[#FBF4E8] pt-[110px] pb-[64px] lg:pt-[140px] lg:pb-[120px] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Mobile: Arch appears on top. Desktop: Arch is on the right (cols 7-12) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              style={shouldReduceMotion ? undefined : { y: archY }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]"
            >
              {/* Tall Arch Frame: rounded top, square bottom */}
              <div className="relative shadow-xl">
                <RichImage
                  src="/me.jpg"
                  alt={`${DETAILS.name}, founder of ${DETAILS.businessName}`}
                  fallbackText="KK"
                  isArch={true}
                  className="w-full aspect-[3/4] bg-[#2B1D16]"
                />

                {/* Floating card on the corner reading "Karthik Karka, founder of PlateAndPost" */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="absolute -bottom-4 -left-3 sm:-left-6 z-20 rounded-2xl bg-[#FBF4E8] px-4 py-3 border border-[#2B1D16]/12 shadow-md max-w-[240px]"
                >
                  <p className="text-xs uppercase tracking-wider text-[#2B1D16]/60 font-semibold mb-0.5">
                    {DETAILS.businessName}
                  </p>
                  <p className="font-serif text-lg leading-snug text-[#2B1D16] font-medium">
                    {DETAILS.name}, founder of {DETAILS.businessName}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Words: on mobile sits below the arch; on desktop sits on the left (cols 1-7) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center">
            
            {/* Small line */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="text-[14px] sm:text-[15px] font-semibold text-[#2B1D16]/70 uppercase tracking-widest">
                For the restuarant owners who want dish photos in Hyderabad
              </span>
            </motion.div>

            {/* My promise as the headline in very large serif type */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={shouldReduceMotion ? false : { y: '100%' }}
                animate={shouldReduceMotion ? undefined : { y: '0%' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-[44px] sm:text-[60px] lg:text-[76px] xl:text-[84px] leading-[1.0] text-[#2B1D16] tracking-tight"
              >
                Every dish gets its{' '}
                <span className="italic text-[#C96A2B] font-normal">photo</span>.
              </motion.h1>
            </div>

            {/* One plain line under it saying what I set up in a sentence */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-sans text-[17px] sm:text-[18px] leading-[1.6] text-[#2B1D16]/85 max-w-[68ch] mb-8"
            >
              I show your cafe which dishes have no proper photo, get a photo for each dish, build a poster and a short video ad around it for Zomato, Swiggy and Instagram, and leave one small tracker so no dish goes up without a photo.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <MagneticButton
                href={DETAILS.bookingLink}
                target="_blank"
                variant="primary"
                className="px-8 py-4 text-[16px] sm:text-[17px] rounded-full shadow-md justify-center"
              >
                Book a 20 minute call
              </MagneticButton>

              <MagneticButton
                href={DETAILS.whatsappLink}
                target="_blank"
                variant="secondary"
                className="px-6 py-4 text-[16px] rounded-full justify-center"
              >
                Message me on WhatsApp
              </MagneticButton>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
