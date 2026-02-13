import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const chips = [
  'Pipeline you can forecast',
  'KPIs you trust',
  'Hours/week saved with automation',
];

export function Hero() {
  const prefersReduced = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <GradientMesh />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          variants={prefersReduced ? undefined : container}
          initial={prefersReduced ? undefined : 'hidden'}
          animate="visible"
          className="max-w-4xl"
        >
          {/* Credibility line */}
          <motion.p
            variants={prefersReduced ? undefined : item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-sm font-medium text-gold"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
            Built by a former staffing-tech operator turned software engineer
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={prefersReduced ? undefined : item}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="dark:text-text-primary text-text-dark">Turn staffing operations into a </span>
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              growth system.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={prefersReduced ? undefined : item}
            className="mt-6 max-w-2xl text-lg leading-relaxed dark:text-text-muted text-text-dark-muted sm:text-xl"
          >
            We help small-to-mid staffing agencies build predictable client pipeline,
            clean up ATS/CRM noise into decision-grade KPIs, and implement practical
            automation—without losing the human touch.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={prefersReduced ? undefined : item}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-obsidian shadow-lg shadow-gold/20 transition-all hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-gold/30"
            >
              Book a Free Growth Diagnostic
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-steel dark:border-steel border-gray-300 px-8 py-4 text-base font-semibold dark:text-text-primary text-text-dark transition-all hover:border-gold/50 hover:text-gold"
            >
              See Services
            </Link>
          </motion.div>

          {/* Outcome chips */}
          <motion.div
            variants={prefersReduced ? undefined : item}
            className="mt-12 flex flex-wrap gap-3"
          >
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-steel/40 dark:border-steel/40 border-gray-200 dark:bg-surface/50 bg-gray-50 px-4 py-2 text-sm dark:text-text-muted text-text-dark-muted"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={prefersReduced ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="dark:text-text-muted text-text-dark-muted" size={24} />
      </motion.div>
    </section>
  );
}
