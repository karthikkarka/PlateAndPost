import React from 'react';
import { DETAILS } from '../config';
import { MagneticButton } from './MagneticButton';
import { RichImage } from './RichImage';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-[#FBF4E8] py-[64px] lg:py-[120px] text-[#2B1D16] border-t border-[#2B1D16]/12"
    >
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        
        {/* Letter Container */}
        <div className="rounded-[28px] bg-[#FBF4E8] border border-[#2B1D16]/12 p-8 sm:p-12 shadow-xs">
          
          {/* Header of letter: small round me.jpg + Heading */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
            <div className="h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-full overflow-hidden shadow-sm border border-[#2B1D16]/12 bg-[#2B1D16]">
              <RichImage
                src="/me.jpg"
                alt={DETAILS.name}
                fallbackText="KK"
                roundedClassName="rounded-full"
                className="h-full w-full"
              />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#C96A2B] font-semibold block mb-1">
                About me
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B1D16] font-medium tracking-tight">
                A note from {DETAILS.name}
              </h2>
            </div>
          </div>

          {/* Letter Body in a slightly larger reading size */}
          <div className="space-y-5 font-sans text-lg sm:text-[21px] leading-relaxed text-[#2B1D16]/90 border-t border-[#2B1D16]/10 pt-6">
            <p>
              I am a professional designer in Hyderabad. I help restaurant owners who want dish photos so every dish gets its photo.
            </p>
            <p>
              You show me which dishes have no proper photo, and I get a photo for each dish, build posters and short video ads for Zomato, Swiggy and Instagram, and leave one small tracker so no dish goes up without a photo.
            </p>
          </div>

          {/* Signature in handwritten-style Google font (Caveat) */}
          <div className="mt-8 pt-4">
            <p className="font-sans text-sm text-[#2B1D16]/60 mb-1">Warmly,</p>
            <p className="font-handwriting text-4xl sm:text-5xl text-[#C96A2B]">
              {DETAILS.firstName}
            </p>
          </div>

          {/* Button under signature: "Book a 20 minute call with [first name]" */}
          <div className="mt-8 pt-6 border-t border-[#2B1D16]/10">
            <MagneticButton
              href={DETAILS.bookingLink}
              target="_blank"
              variant="primary"
              className="px-8 py-3.5 rounded-full text-base font-semibold shadow-xs"
            >
              Book a 20 minute call with {DETAILS.firstName}
            </MagneticButton>
          </div>

        </div>

      </div>
    </section>
  );
};
