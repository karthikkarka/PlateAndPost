import React from 'react';
import { DETAILS } from '../config';
import { FilmGrain } from './FilmGrain';

export const FooterSection: React.FC = () => {
  return (
    <footer
      id="footer"
      data-theme="ink"
      className="relative bg-[#2B1D16] py-14 sm:py-16 text-[#FBF4E8] border-t border-[#FBF4E8]/10 overflow-hidden"
    >
      <FilmGrain opacity={0.06} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#FBF4E8]/10">
          
          {/* Logo on small cream rounded panel */}
          <div className="flex items-center gap-4">
            <div className="bg-[#FBF4E8] px-3.5 py-2 rounded-xl border border-[#2B1D16]/10 flex items-center gap-2.5 shadow-xs">
              <img
                src="/logo.png"
                alt="PlateAndPost logo"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-[#2B1D16]">
                {DETAILS.businessName}
              </span>
            </div>

            <span className="text-sm text-[#FBF4E8]/70 font-medium">
              {DETAILS.city}
            </span>
          </div>

          {/* Three contact links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm">
            <a
              href={DETAILS.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FBF4E8]/85 hover:text-[#C96A2B] transition-colors underline decoration-[#FBF4E8]/25 underline-offset-4"
            >
              Book a 20 minute call
            </a>

            <a
              href={DETAILS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FBF4E8]/85 hover:text-[#C96A2B] transition-colors underline decoration-[#FBF4E8]/25 underline-offset-4"
            >
              Message me on WhatsApp
            </a>

            <a
              href={DETAILS.emailLink}
              className="text-[#FBF4E8]/85 hover:text-[#C96A2B] transition-colors underline decoration-[#FBF4E8]/25 underline-offset-4"
            >
              {DETAILS.email}
            </a>
          </div>

        </div>

        {/* Year and Business name */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#FBF4E8]/60">
          <p>
            2026 {DETAILS.businessName}. Hyderabad.
          </p>
          <p className="text-[#FBF4E8]/50">
            {DETAILS.promise}
          </p>
        </div>
      </div>
    </footer>
  );
};
