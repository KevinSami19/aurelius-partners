import { motion } from 'framer-motion';
import { AlertTriangle, Database, Bot } from 'lucide-react';
import { Section, SectionLabel, SectionTitle } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const painCards = [
  {
    icon: AlertTriangle,
    title: 'Pipeline is unpredictable',
    description:
      'Outbound feels noisy. Inbound is softer. You know you need a system, but every day is reactive instead of strategic.',
  },
  {
    icon: Database,
    title: 'Your data isn\'t decision-grade',
    description:
      'Your ATS/CRM has years of data, but it\'s messy, duplicated, and doesn\'t answer the questions that drive growth.',
  },
  {
    icon: Bot,
    title: 'AI exists—nobody owns it',
    description:
      'AI tools exist—but nobody owns implementation. The hype is everywhere, the execution plan is nowhere.',
  },
];

export function Reality() {
  const prefersReduced = useReducedMotion();

  return (
    <Section id="reality" dark>
      <div className="text-center">
        <SectionLabel>The Reality</SectionLabel>
        <SectionTitle className="mx-auto">
          Sound familiar?
        </SectionTitle>
        <p className="mx-auto mt-4 max-w-2xl text-lg dark:text-text-muted text-text-dark-muted">
          Most staffing agencies between $1M–$20M hit the same walls. The good news: they&apos;re fixable.
        </p>
      </div>

      <motion.div
        variants={prefersReduced ? undefined : staggerContainer}
        initial={prefersReduced ? undefined : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-16 grid gap-6 md:grid-cols-3"
      >
        {painCards.map((card) => (
          <motion.div key={card.title} variants={prefersReduced ? undefined : staggerItem}>
            <Card glow className="h-full">
              <div className="mb-4 inline-flex rounded-lg bg-danger/10 p-3">
                <card.icon size={24} className="text-danger" />
              </div>
              <h3 className="text-lg font-semibold dark:text-text-primary text-text-dark">
                {card.title}
              </h3>
              <p className="mt-2 leading-relaxed dark:text-text-muted text-text-dark-muted">
                {card.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
