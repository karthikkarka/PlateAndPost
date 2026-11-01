import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { RichImage } from './RichImage';

interface CardData {
  number: string;
  title: string;
  imageSrc: string;
  today: string;
  withPlateAndPost: string;
}

const CARDS: CardData[] = [
  {
    number: '01',
    title: 'Dish photography',
    imageSrc: '/work-1.jpg',
    today: 'Dishes go on the menu without a photo, and diners skip them for items they can see.',
    withPlateAndPost: 'I show your cafe which dishes have no proper photo and get a photo for each dish.',
  },
  {
    number: '02',
    title: 'Posters and short video ads',
    imageSrc: '/work-2.jpg',
    today: 'Posts and listings go out without clear artwork or short clips to show the dish.',
    withPlateAndPost: 'I build a poster and a short video ad around it for Zomato, Swiggy and Instagram.',
  },
  {
    number: '03',
    title: 'Menu photo tracker',
    imageSrc: '/work-3.jpg',
    today: 'New dishes go up on the boards and delivery apps before anyone takes a picture.',
    withPlateAndPost: 'I leave one small tracker so no dish goes up without a photo.',
  },
];

export const WhatIDoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Slide sideways across the 3 cards on desktop
  // 3 cards, each 70vw wide + gap. Total translation ~ -52% to -58%
  const x = useTransform(scrollYProgress, [0.05, 0.95], ['0%', '-56%']);

  return (
    <section id="what-i-do" className="bg-[#FBF4E8] text-[#2B1D16]">
      {/* 
        DESKTOP PINNED EXPERIENCE
        When not reduced motion and screen >= lg:
        Sticky container inside a 300vh wrapper.
      */}
      {!shouldReduceMotion ? (
        <div ref={containerRef} className="hidden lg:block relative h-[320vh]">
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-10">
            {/* Pinned Heading */}
            <div className="mx-auto w-full max-w-7xl px-8 mb-8 shrink-0">
              <span className="text-xs uppercase tracking-widest text-[#C96A2B] font-semibold block mb-2">
                What I set up
              </span>
              <h2 className="font-serif text-[60px] xl:text-[72px] leading-[1.0] tracking-tight">
                What I do
              </h2>
            </div>

            {/* Sliding Cards Track */}
            <div className="w-full overflow-hidden pl-8 lg:pl-[calc((100vw-1280px)/2+2rem)] xl:pl-[calc((100vw-1280px)/2+2rem)]">
              <motion.div style={{ x }} className="flex gap-8 w-max">
                {CARDS.map((card) => (
                  <div
                    key={card.number}
                    className="w-[68vw] max-w-[840px] h-[540px] rounded-[28px] bg-[#FBF4E8] border border-[#2B1D16]/12 flex flex-col overflow-hidden shadow-sm shrink-0"
                  >
                    {/* Top 60%: Work Picture */}
                    <div className="h-[60%] w-full relative overflow-hidden bg-[#2B1D16]">
                      <RichImage
                        src={card.imageSrc}
                        alt={card.title}
                        fallbackText={card.number}
                        roundedClassName="rounded-t-[28px] rounded-b-none"
                        className="h-full w-full"
                      />
                    </div>

                    {/* Bottom 40%: Details */}
                    <div className="h-[40%] p-6 sm:p-7 flex flex-col justify-between bg-[#FBF4E8]">
                      <div className="flex items-baseline gap-4 mb-2">
                        <span className="font-serif text-3xl font-light text-[#C96A2B]">
                          {card.number}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl text-[#2B1D16] font-medium">
                          {card.title}
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-[#2B1D16]/10 text-[15px] sm:text-[16px]">
                        <div>
                          <p className="font-semibold text-[#2B1D16]/60 mb-0.5 text-xs uppercase tracking-wider">
                            Today:
                          </p>
                          <p className="text-[#2B1D16]/85 leading-relaxed">
                            {card.today}
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-[#C96A2B] mb-0.5 text-xs uppercase tracking-wider">
                            With PlateAndPost:
                          </p>
                          <p className="text-[#2B1D16] font-medium leading-relaxed">
                            {card.withPlateAndPost}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        /* Reduced motion fallback for desktop: standard stacked layout */
        <div className="hidden lg:block py-[120px] max-w-5xl mx-auto px-8">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C96A2B] font-semibold block mb-2">
              What I set up
            </span>
            <h2 className="font-serif text-[64px] leading-[1.0] tracking-tight">
              What I do
            </h2>
          </div>
          <div className="space-y-8">
            {CARDS.map((card) => (
              <div
                key={card.number}
                className="w-full rounded-[28px] bg-[#FBF4E8] border border-[#2B1D16]/12 overflow-hidden shadow-xs"
              >
                <div className="h-[360px] w-full relative bg-[#2B1D16]">
                  <RichImage
                    src={card.imageSrc}
                    alt={card.title}
                    fallbackText={card.number}
                    roundedClassName="rounded-t-[28px] rounded-b-none"
                    className="h-full w-full"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-serif text-3xl font-light text-[#C96A2B]">
                      {card.number}
                    </span>
                    <h3 className="font-serif text-3xl text-[#2B1D16]">
                      {card.title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#2B1D16]/10">
                    <div>
                      <p className="font-semibold text-[#2B1D16]/60 text-xs uppercase tracking-wider mb-1">
                        Today:
                      </p>
                      <p className="text-[#2B1D16]/85">{card.today}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#C96A2B] text-xs uppercase tracking-wider mb-1">
                        With PlateAndPost:
                      </p>
                      <p className="text-[#2B1D16] font-medium">{card.withPlateAndPost}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 
        MOBILE EXPERIENCE:
        "On a phone the cards stack and swipe sideways instead."
      */}
      <div className="lg:hidden py-[64px] px-6">
        <div className="mb-6">
          <span className="text-xs uppercase tracking-widest text-[#C96A2B] font-semibold block mb-1">
            What I set up
          </span>
          <h2 className="font-serif text-[44px] leading-[1.0] tracking-tight">
            What I do
          </h2>
        </div>

        {/* Swipe sideways container with snap */}
        <div className="-mx-6 px-6 overflow-x-auto flex snap-x snap-mandatory gap-5 pb-4 scrollbar-none">
          {CARDS.map((card) => (
            <div
              key={card.number}
              className="snap-center w-[84vw] max-w-[340px] shrink-0 rounded-[28px] bg-[#FBF4E8] border border-[#2B1D16]/12 overflow-hidden shadow-xs flex flex-col"
            >
              {/* Picture top 60% */}
              <div className="h-[220px] w-full relative bg-[#2B1D16]">
                <RichImage
                  src={card.imageSrc}
                  alt={card.title}
                  fallbackText={card.number}
                  roundedClassName="rounded-t-[28px] rounded-b-none"
                  className="h-full w-full"
                />
              </div>

              {/* Bottom content */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-serif text-2xl font-light text-[#C96A2B]">
                      {card.number}
                    </span>
                    <h3 className="font-serif text-2xl text-[#2B1D16] font-medium">
                      {card.title}
                    </h3>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-[#2B1D16]/10 text-[14px]">
                    <div>
                      <p className="font-semibold text-[#2B1D16]/60 text-xs uppercase tracking-wider mb-0.5">
                        Today:
                      </p>
                      <p className="text-[#2B1D16]/85 leading-relaxed">
                        {card.today}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#C96A2B] text-xs uppercase tracking-wider mb-0.5">
                        With PlateAndPost:
                      </p>
                      <p className="text-[#2B1D16] font-medium leading-relaxed">
                        {card.withPlateAndPost}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
