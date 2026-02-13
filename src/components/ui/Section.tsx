import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ id, children, className = '', dark }: SectionProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={prefersReduced ? undefined : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={prefersReduced ? undefined : fadeInUp}
      className={`relative py-20 md:py-28 ${dark ? 'bg-surface dark:bg-surface' : ''} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
      {children}
    </span>
  );
}

export function SectionTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionDescription({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 max-w-2xl text-lg text-text-muted dark:text-text-muted text-text-dark-muted leading-relaxed">
      {children}
    </p>
  );
}
