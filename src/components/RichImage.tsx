import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FilmGrain } from './FilmGrain';

interface RichImageProps {
  src: string;
  alt: string;
  fallbackText: string;
  className?: string;
  roundedClassName?: string;
  isArch?: boolean;
  priority?: boolean;
}

export const RichImage: React.FC<RichImageProps> = ({
  src,
  alt,
  fallbackText,
  className = '',
  roundedClassName = 'rounded-[28px]',
  isArch = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const archClasses = isArch
    ? 'rounded-t-[140px] md:rounded-t-[200px] rounded-b-none'
    : roundedClassName;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={shouldReduceMotion ? undefined : { clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden ${archClasses} ${className}`}
    >
      {/* Underlying Rich Panel (acts as finished placeholder & fallback) */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2B1D16] via-[#3C281C] to-[#C96A2B] select-none">
        <FilmGrain opacity={0.06} />
        {/* Subtle decorative ring for depth */}
        <div className="absolute inset-4 rounded-[20px] border border-[#FBF4E8]/10 pointer-events-none" />
        {/* Huge outline serif text (initials or card number) */}
        <span
          className="font-serif text-7xl sm:text-8xl md:text-9xl tracking-tight text-transparent select-none"
          style={{
            WebkitTextStroke: '2px rgba(251, 244, 232, 0.4)',
          }}
        >
          {fallbackText}
        </span>
      </div>

      {/* Actual image file if present */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`relative z-10 h-full w-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </motion.div>
  );
};
