import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Zap } from 'lucide-react';
import { Section, SectionLabel, SectionTitle } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const pillars = [
  {
    icon: TrendingUp,
    title: 'Pipeline Engine',
    description: 'Build a repeatable, measurable client acquisition system.',
    bullets: [
      'Outbound sequences that feel personal, not spammy',
      'Inbound content & SEO that attracts the right prospects',
      'CRM workflows that nurture leads automatically',
      'Clear attribution so you know what\'s working',
    ],
    outcome: 'Result: Predictable pipeline you can forecast quarter over quarter.',
    color: 'text-success',
    bgColor: 'bg-success/10',
  },
  {
    icon: BarChart3,
    title: 'Clarity Dashboard',
    description: 'Transform ATS/CRM noise into decision-grade KPIs.',
    bullets: [
      'Clean, deduplicate, and enrich your existing data',
      'Build dashboards your team actually uses',
      'Track leading indicators, not just lagging ones',
      'Make data the language of your Monday meetings',
    ],
    outcome: 'Result: KPIs you trust, decisions you can defend.',
    color: 'text-royal',
    bgColor: 'bg-royal/10',
  },
  {
    icon: Zap,
    title: 'Automation Ops',
    description: 'Automate admin, not relationships.',
    bullets: [
      'AI-assisted candidate matching and screening',
      'Automated status updates and follow-ups',
      'Integration workflows between your tools',
      'Time-back to your team for high-value activities',
    ],
    outcome: 'Result: Hours/week saved, fewer errors, happier teams.',
    color: 'text-gold',
    bgColor: 'bg-gold/10',
  },
];

export function System() {
  const prefersReduced = useReducedMotion();

  return (
    <Section id="system">
      <div className="text-center">
        <SectionLabel>The System</SectionLabel>
        <SectionTitle className="mx-auto">
          Three pillars. One growth system.
        </SectionTitle>
        <p className="mx-auto mt-4 max-w-2xl text-lg dark:text-text-muted text-text-dark-muted">
          We don&apos;t sell deliverables in isolation. Every engagement connects pipeline, data, and
          automation into one operating system for growth.
        </p>
      </div>

      <motion.div
        variants={prefersReduced ? undefined : staggerContainer}
        initial={prefersReduced ? undefined : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-16 grid gap-8 lg:grid-cols-3"
      >
        {pillars.map((pillar) => (
          <motion.div key={pillar.title} variants={prefersReduced ? undefined : staggerItem}>
            <Card glow className="h-full">
              <div className={`mb-4 inline-flex rounded-lg ${pillar.bgColor} p-3`}>
                <pillar.icon size={24} className={pillar.color} />
              </div>
              <h3 className="text-xl font-semibold dark:text-text-primary text-text-dark">
                {pillar.title}
              </h3>
              <p className="mt-2 dark:text-text-muted text-text-dark-muted">{pillar.description}</p>
              <ul className="mt-4 space-y-2">
                {pillar.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm dark:text-text-muted text-text-dark-muted"
                  >
                    <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${pillar.bgColor.replace('/10', '')}`} />
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className={`mt-6 text-sm font-semibold ${pillar.color}`}>
                {pillar.outcome}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
