import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { DETAILS } from '../config';

const STEPS = [
  {
    number: '01',
    title: 'A 20 minute call',
    description:
      'We speak about your cafe, review which dishes have no proper photo, and look through what you want to feature.',
  },
  {
    number: '02',
    title: 'A plan for your restaurant',
    description:
      'I map out the photo shoot for each plate, the poster layouts, and the short video ads for Zomato, Swiggy and Instagram.',
  },
  {
    number: '03',
    title: 'I set it up and show your team',
    description:
      'I get a photo for each dish, build the posters and short video ads, and leave one small tracker with your team so no dish goes up without a photo.',
  },
];

export const HowWeStartSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'end 75%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="bg-[#FBF4E8] py-[64px] lg:py-[120px] text-[#2B1D16] border-t border-[#2B1D16]/12"
    >
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="mb-14">
          <span className="text-xs uppercase tracking-widest text-[#C96A2B] font-semibold block mb-2">
            The process
          </span>
          <h2 className="font-serif text-[44px] sm:text-[56px] lg:text-[64px] leading-[1.0] tracking-tight">
            How we start
          </h2>
        </div>

        {/* Steps container with vertical filling line */}
        <div className="relative pl-8 sm:pl-12">
          
          {/* Base background line */}
          <div className="absolute left-[15px] sm:left-[23px] top-2 bottom-6 w-[2px] bg-[#2B1D16]/12" />

          {/* Filling line with accent colour #C96A2B */}
          {!shouldReduceMotion ? (
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-[15px] sm:left-[23px] top-2 w-[2px] bg-[#C96A2B] origin-top"
            />
          ) : (
            <div className="absolute left-[15px] sm:left-[23px] top-2 bottom-6 w-[2px] bg-[#C96A2B]" />
          )}

          <div className="space-y-12 sm:space-y-16">
            {STEPS.map((step, idx) => (
              <div key={step.number} className="relative">
                {/* Step node dot on the line */}
                <div className="absolute -left-[32px] sm:-left-[48px] top-1.5 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-[#FBF4E8] border-2 border-[#C96A2B] flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[#C96A2B]" />
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C96A2B] mb-1 block">
                    Step {step.number}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2B1D16] mb-2 font-medium">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[17px] sm:text-[18px] text-[#2B1D16]/85 leading-relaxed max-w-[62ch]">
                    {step.description}
                  </p>

                  {/* The price line, if any, sits under step 3 */}
                  {idx === 2 && DETAILS.price && (
                    <div className="mt-8 pt-6 border-t border-[#2B1D16]/12">
                      <div className="inline-flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 p-5 sm:p-6 rounded-2xl bg-[#2B1D16]/5 border border-[#2B1D16]/10">
                        <span className="text-xs uppercase tracking-widest text-[#2B1D16]/65 font-semibold">
                          Price
                        </span>
                        <p className="font-serif text-2xl sm:text-3xl text-[#2B1D16] font-semibold">
                          {DETAILS.price}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
