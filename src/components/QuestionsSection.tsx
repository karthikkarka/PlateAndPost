import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { DETAILS } from '../config';

interface FAQItem {
  question: string;
  answer: string;
}

const QUESTIONS: FAQItem[] = [
  {
    question: 'Who is this for?',
    answer: `For ${DETAILS.targetAudience} in ${DETAILS.city}.`,
  },
  {
    question: 'What exactly do you set up?',
    answer: DETAILS.whatISetUp,
  },
  {
    question: 'How long does setup take?',
    answer: 'It is agreed on the call.',
  },
  {
    question: 'What does it cost?',
    answer: DETAILS.price,
  },
  {
    question: 'How do we start?',
    answer:
      'Book a 20 minute call. We speak about your cafe, review which dishes need photos, and agree on the plan.',
  },
];

export const QuestionsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="questions"
      className="bg-[#FBF4E8] py-[64px] lg:py-[120px] text-[#2B1D16] border-t border-[#2B1D16]/12"
    >
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-[#C96A2B] font-semibold block mb-2">
            Common questions
          </span>
          <h2 className="font-serif text-[44px] sm:text-[56px] leading-[1.0] tracking-tight">
            Questions
          </h2>
        </div>

        <div className="border-t border-[#2B1D16]/12">
          {QUESTIONS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-[#2B1D16]/12 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between gap-6 text-left cursor-pointer group"
                >
                  <span className="font-serif text-[24px] sm:text-[28px] leading-snug text-[#2B1D16] group-hover:text-[#C96A2B] transition-colors">
                    {item.question}
                  </span>

                  {/* Plus turns into a cross */}
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-[#2B1D16]/15 group-hover:border-[#C96A2B] text-[#2B1D16] group-hover:text-[#C96A2B] transition-colors">
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { duration: 0.25, ease: 'easeInOut' }
                      }
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </motion.svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? false
                          : { height: 0, opacity: 0 }
                      }
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : { height: 'auto', opacity: 1 }
                      }
                      exit={
                        shouldReduceMotion
                          ? undefined
                          : { height: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pr-12 font-sans text-[17px] sm:text-[18px] leading-[1.6] text-[#2B1D16]/85 max-w-[68ch]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
