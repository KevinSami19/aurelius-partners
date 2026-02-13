import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { Section, SectionLabel, SectionTitle } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const caseStudies = [
  {
    label: 'Example Outcome',
    title: 'Regional IT Staffing Firm Doubles Qualified Pipeline in 90 Days',
    context:
      'A 30-person IT staffing agency with $5M revenue was relying entirely on referrals and inbound. Pipeline was unpredictable and new business development was ad hoc.',
    approach: [
      'Audited CRM data and identified 400+ dormant accounts with re-engagement potential',
      'Built multi-channel outbound sequences targeting IT directors in mid-market',
      'Created a KPI dashboard tracking pipeline velocity, conversion rates, and rep activity',
      'Automated follow-up workflows and lead scoring in their existing CRM',
    ],
    results: [
      { metric: '2x', label: 'Qualified pipeline' },
      { metric: '35%', label: 'Response rate on outbound' },
      { metric: '12hrs', label: 'Saved per week in manual reporting' },
    ],
  },
  {
    label: 'Example Outcome',
    title: 'Light Industrial Agency Cuts Time-to-Fill by 40% with Automation',
    context:
      'A 50-person light industrial staffing firm was drowning in manual processes: paper applications, spreadsheet tracking, and inconsistent client communication.',
    approach: [
      'Migrated intake process to digital forms with automated routing',
      'Built candidate matching automation using skills, availability, and location data',
      'Integrated ATS with client portal for real-time status visibility',
      'Deployed automated compliance and credential tracking workflows',
    ],
    results: [
      { metric: '40%', label: 'Faster time-to-fill' },
      { metric: '20hrs', label: 'Saved weekly on admin' },
      { metric: '95%', label: 'Compliance accuracy' },
    ],
  },
];

export function Proof() {
  const prefersReduced = useReducedMotion();

  return (
    <Section id="proof" dark>
      <div className="text-center">
        <SectionLabel>Proof</SectionLabel>
        <SectionTitle className="mx-auto">
          Example outcomes from staffing agencies like yours
        </SectionTitle>
        <p className="mx-auto mt-4 max-w-2xl text-lg dark:text-text-muted text-text-dark-muted">
          These are representative results based on real engagement patterns.
          Your mileage may vary—but the system works.
        </p>
      </div>

      <motion.div
        variants={prefersReduced ? undefined : staggerContainer}
        initial={prefersReduced ? undefined : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-16 grid gap-8 lg:grid-cols-2"
      >
        {caseStudies.map((study) => (
          <motion.div key={study.title} variants={prefersReduced ? undefined : staggerItem}>
            <Card glow className="h-full">
              <span className="mb-3 inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                {study.label}
              </span>
              <h3 className="text-xl font-bold dark:text-text-primary text-text-dark">
                {study.title}
              </h3>
              <p className="mt-3 text-sm dark:text-text-muted text-text-dark-muted">
                {study.context}
              </p>

              <div className="mt-4">
                <h4 className="text-sm font-semibold dark:text-text-primary text-text-dark">
                  Approach:
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {study.approach.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm dark:text-text-muted text-text-dark-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 rounded-lg border border-steel/30 dark:border-steel/30 border-gray-200 p-4">
                {study.results.map((r) => (
                  <div key={r.label} className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <TrendingUp size={14} className="text-success" />
                      <span className="text-2xl font-bold text-success">
                        {r.metric}
                      </span>
                    </div>
                    <span className="text-xs dark:text-text-muted text-text-dark-muted">
                      {r.label}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 text-center">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-hover"
        >
          See all case studies <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
