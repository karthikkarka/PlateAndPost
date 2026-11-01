import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { FilmGrain } from './FilmGrain';

const PROBLEM_SENTENCE =
  'Diners scroll past your dishes on Zomato and Swiggy because your plates have no photo, guests ask what each dish looks like again and again, and new specials go on the board without a picture.';

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
  isReduced: boolean | null;
}

const Word: React.FC<WordProps> = ({ children, progress, range, isReduced }) => {
  const opacity = useTransform(progress, range, [0.22, 1]);

  if (isReduced) {
    return <span className="text-[#FBF4E8] mr-[0.25em] inline-block">{children}</span>;
  }

  return (
    <motion.span
      style={{ opacity }}
      className="text-[#FBF4E8] mr-[0.25em] inline-block transition-colors"
    >
      {children}
    </motion.span>
  );
};

export const ProblemSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 35%'],
  });

  const words = PROBLEM_SENTENCE.split(' ');

  return (
    <section
      ref={containerRef}
      id="the-problem"
      data-theme="ink"
      className="relative w-full bg-[#2B1D16] py-[72px] sm:py-[100px] lg:py-[130px] overflow-hidden"
    >
      <FilmGrain opacity={0.06} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8">
        <div className="mb-6">
          <span className="text-xs uppercase tracking-widest text-[#C96A2B] font-semibold">
            The problem today
          </span>
        </div>

        <h2 className="font-serif text-[34px] sm:text-[46px] md:text-[56px] lg:text-[64px] leading-[1.12] tracking-tight">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
                isReduced={shouldReduceMotion}
              >
                {word}
              </Word>
            );
          })}
        </h2>
      </div>
    </section>
  );
};
