import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface CardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
}

export function Card({ children, className = '', glow = false, hover = true }: CardProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      whileHover={
        hover && !prefersReduced
          ? { y: -4, transition: { duration: 0.2 } }
          : undefined
      }
      className={`relative rounded-xl border border-steel/60 dark:border-steel/60 border-gray-200 bg-white dark:bg-surface p-6 transition-all duration-300 ${
        glow ? 'hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5' : 'hover:border-steel'
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
