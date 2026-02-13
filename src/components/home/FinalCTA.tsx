import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function FinalCTA() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />

      <motion.div
        initial={prefersReduced ? undefined : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          <span className="dark:text-text-primary text-text-dark">Ready to turn operations into </span>
          <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
            your growth engine?
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg dark:text-text-muted text-text-dark-muted">
          The 14-Day Growth Diagnostic gives you a clear picture of where you stand
          and a prioritized roadmap for what to fix first. No commitment beyond the diagnostic—
          just clarity.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-obsidian shadow-lg shadow-gold/20 transition-all hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-gold/30"
          >
            <Calendar size={18} />
            Book a Free Growth Diagnostic
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-steel dark:border-steel border-gray-300 px-8 py-4 text-base font-semibold dark:text-text-primary text-text-dark transition-all hover:border-gold/50 hover:text-gold"
          >
            Explore Services
            <ArrowRight size={18} />
          </Link>
        </div>
        <p className="mt-6 text-sm dark:text-text-muted text-text-dark-muted">
          Free 30-minute call. No pitch deck—just an honest conversation about your growth.
        </p>
      </motion.div>
    </section>
  );
}
