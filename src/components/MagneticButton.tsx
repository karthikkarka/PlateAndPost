import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'pill' | 'ghost';
  target?: string;
  rel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  target,
  rel,
}) => {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Subtle magnetic pull (max 8px displacement)
    setPosition({
      x: distanceX * 0.18,
      y: distanceY * 0.18,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  // Base variants
  // Primary: Accent color #C96A2B with Roast Brown #2B1D16 ink text
  // Text on accent is always ink #2B1D16
  const variantStyles = {
    primary:
      'bg-[#C96A2B] text-[#2B1D16] font-semibold hover:brightness-105 active:scale-[0.97]',
    secondary:
      'bg-transparent text-[#2B1D16] border border-[#2B1D16]/20 hover:border-[#2B1D16]/40 hover:bg-[#2B1D16]/5',
    pill:
      'bg-[#C96A2B] text-[#2B1D16] font-semibold text-sm px-5 py-2 rounded-full hover:brightness-105 active:scale-[0.97]',
    ghost:
      'bg-transparent text-[#2B1D16] hover:text-[#C96A2B] underline decoration-[#2B1D16]/20 underline-offset-4 hover:decoration-[#C96A2B]',
  }[variant];

  const content = (
    <motion.span
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap"
      animate={shouldReduceMotion ? { x: 0, y: 0 } : { x: position.x * 0.35, y: position.y * 0.35 }}
      transition={{ type: 'spring' as const, stiffness: 280, damping: 20 }}
    >
      {children}
    </motion.span>
  );

  const buttonClasses = `relative inline-flex items-center justify-center transition-colors cursor-pointer select-none ${variantStyles} ${className}`;

  if (href) {
    return (
      <motion.a
        ref={ref as unknown as React.RefObject<HTMLAnchorElement | null>}
        href={href}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={shouldReduceMotion ? { x: 0, y: 0 } : { x: position.x, y: position.y }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
        transition={{ type: 'spring' as const, stiffness: 240, damping: 18, mass: 0.5 }}
        className={buttonClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as unknown as React.RefObject<HTMLButtonElement | null>}
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={shouldReduceMotion ? { x: 0, y: 0 } : { x: position.x, y: position.y }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring' as const, stiffness: 240, damping: 18, mass: 0.5 }}
      className={buttonClasses}
    >
      {content}
    </motion.button>
  );
};
