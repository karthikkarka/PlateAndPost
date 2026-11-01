import React, { useEffect, useState } from 'react';
import { DETAILS } from '../config';
import { MagneticButton } from './MagneticButton';

export const TopBar: React.FC = () => {
  const [theme, setTheme] = useState<'transparent' | 'cream' | 'ink'>('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const topBarHeight = 72;

      if (scrollY < 40) {
        setTheme('transparent');
        return;
      }

      // Check if top bar sits over any dark / ink section
      const inkSections = document.querySelectorAll<HTMLElement>('[data-theme="ink"]');
      let isOverInk = false;

      inkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= topBarHeight && rect.bottom >= 10) {
          isOverInk = true;
        }
      });

      if (isOverInk) {
        setTheme('ink');
      } else {
        setTheme('cream');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine classes according to strictly specified rules:
  // "transparent over the hero, turns cream with a hairline border once you scroll, and turns ink with cream text while it sits over an ink section (never grey or blurred beige)."
  const barBgClass =
    theme === 'transparent'
      ? 'bg-transparent border-transparent'
      : theme === 'ink'
      ? 'bg-[#2B1D16] text-[#FBF4E8] border-b border-[#FBF4E8]/12 shadow-sm'
      : 'bg-[#FBF4E8] text-[#2B1D16] border-b border-[#2B1D16]/12 shadow-xs';

  const linkClass =
    theme === 'ink'
      ? 'text-[#FBF4E8]/85 hover:text-[#FBF4E8] transition-colors font-medium text-[15px]'
      : 'text-[#2B1D16]/85 hover:text-[#2B1D16] transition-colors font-medium text-[15px]';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${barBgClass}`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Left: logo.png (on a small cream rounded panel wherever the bar sits on ink) */}
        <a href="#" className="flex items-center gap-3 group">
          <div
            className={`transition-all duration-300 ${
              theme === 'ink'
                ? 'bg-[#FBF4E8] px-2.5 py-1.5 rounded-xl border border-[#2B1D16]/10 flex items-center gap-2'
                : 'flex items-center gap-2'
            }`}
          >
            <img
              src="/logo.png"
              alt="PlateAndPost logo"
              className="h-8 w-auto object-contain"
              onError={(e) => {
                // If logo image not found, hide img element and reveal text wordmark
                e.currentTarget.style.display = 'none';
              }}
            />
            <span
              className={`font-serif text-2xl font-bold tracking-tight ${
                theme === 'ink' ? 'text-[#2B1D16]' : 'text-[#2B1D16]'
              }`}
            >
              {DETAILS.businessName}
            </span>
          </div>
        </a>

        {/* Center: Three links (What I do, How it works, About) */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#what-i-do" className={linkClass}>
            What I do
          </a>
          <a href="#how-it-works" className={linkClass}>
            How it works
          </a>
          <a href="#about" className={linkClass}>
            About
          </a>
        </nav>

        {/* Right: "Book a call" pill */}
        <div className="flex items-center">
          <MagneticButton
            href={DETAILS.bookingLink}
            target="_blank"
            variant="pill"
            className="px-5 py-2.5 shadow-xs"
          >
            Book a call
          </MagneticButton>
        </div>
      </div>
    </header>
  );
};
