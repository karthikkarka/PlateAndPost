import React from 'react';
import { DETAILS } from '../config';
import { FilmGrain } from './FilmGrain';
import { MagneticButton } from './MagneticButton';

export const FinalInvitationSection: React.FC = () => {
  return (
    <section
      id="final-invitation"
      data-theme="ink"
      className="relative bg-[#2B1D16] py-[80px] sm:py-[100px] lg:py-[130px] text-[#FBF4E8] overflow-hidden"
    >
      <FilmGrain opacity={0.06} />

      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Big serif line adapted to clients */}
        <h2 className="font-serif text-[42px] sm:text-[56px] md:text-[68px] lg:text-[76px] leading-[1.05] tracking-tight mb-8 max-w-3xl">
          Let's give your restaurant evenings back.
        </h2>

        {/* Booking button in the accent colour */}
        <div className="mb-8">
          <MagneticButton
            href={DETAILS.bookingLink}
            target="_blank"
            variant="primary"
            className="px-9 py-4 text-[17px] rounded-full shadow-lg font-semibold"
          >
            Book a 20 minute call
          </MagneticButton>
        </div>

        {/* WhatsApp and email under it as plain links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[15px] sm:text-[16px]">
          <a
            href={DETAILS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FBF4E8]/80 hover:text-[#C96A2B] transition-colors underline decoration-[#FBF4E8]/30 underline-offset-4"
          >
            Message me on WhatsApp
          </a>

          <span className="hidden sm:inline text-[#FBF4E8]/30">·</span>

          <a
            href={DETAILS.emailLink}
            className="text-[#FBF4E8]/80 hover:text-[#C96A2B] transition-colors underline decoration-[#FBF4E8]/30 underline-offset-4"
          >
            shankarkpr@protonmail.com
          </a>
        </div>

      </div>
    </section>
  );
};
