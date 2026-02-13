import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, TrendingUp } from 'lucide-react';
import { Section, SectionLabel, SectionTitle } from '@/components/ui/Section';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const steps = [
  {
    icon: Search,
    phase: '01',
    title: 'Diagnose',
    description: 'We audit your pipeline, data, tech stack, and team workflows. No assumptions—just evidence.',
    deliverables: [
      'Pipeline & conversion analysis',
      'ATS/CRM data quality score',
      'Tech stack evaluation',
      'Prioritized opportunity map',
    ],
  },
  {
    icon: PenTool,
    phase: '02',
    title: 'Design',
    description: 'We build a custom roadmap: what to fix first, what to automate, and what ROI to expect.',
    deliverables: [
      'Growth system blueprint',
      'KPI framework',
      'Automation opportunity matrix',
      'Implementation timeline',
    ],
  },
  {
    icon: Rocket,
    phase: '03',
    title: 'Deploy',
    description: 'We implement alongside your team—building systems, dashboards, and automations that stick.',
    deliverables: [
      'Pipeline engine launch',
      'Live dashboards & reports',
      'Automation workflows',
      'Team training & playbooks',
    ],
  },
  {
    icon: TrendingUp,
    phase: '04',
    title: 'Drive',
    description: 'We measure, optimize, and iterate. Growth systems need tuning—we stay in the loop.',
    deliverables: [
      'Monthly performance reviews',
      'A/B testing & optimization',
      'Quarterly roadmap refresh',
      'Ongoing advisory support',
    ],
  },
];

export function HowWeWork() {
  const prefersReduced = useReducedMotion();

  return (
    <Section id="how-we-work">
      <div className="text-center">
        <SectionLabel>How We Work</SectionLabel>
        <SectionTitle className="mx-auto">
          Diagnose. Design. Deploy. Drive.
        </SectionTitle>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-dark-muted-readable dark:text-text-muted-readable">
          Every engagement follows a proven four-phase process. No mystery, no scope creep—just
          clear milestones and tangible outcomes.
        </p>
      </div>

      <motion.div
        variants={prefersReduced ? undefined : staggerContainer}
        initial={prefersReduced ? undefined : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-16"
      >
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-8 hidden w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.phase}
                variants={prefersReduced ? undefined : staggerItem}
                className="relative flex flex-col gap-6 lg:flex-row lg:gap-12"
              >
                {/* Phase marker */}
                <div className="flex items-start gap-4 lg:w-48 lg:flex-shrink-0">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
                    <step.icon size={28} className="text-gold" />
                  </div>
                  <div className="lg:hidden">
                    <span className="text-sm font-medium text-gold">Phase {step.phase}</span>
                    <h3 className="text-xl font-bold dark:text-text-primary text-text-dark">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 rounded-xl border border-steel/40 dark:border-steel/40 border-gray-200 dark:bg-surface/50 bg-white p-6 lg:p-8">
                  <div className="hidden lg:block">
                    <span className="text-sm font-medium text-gold">Phase {step.phase}</span>
                    <h3 className="mt-1 text-xl font-bold dark:text-text-primary text-text-dark">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-text-dark-muted-readable dark:text-text-muted-readable">
                    {step.description}
                  </p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold dark:text-text-primary text-text-dark">
                      Key deliverables:
                    </h4>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                      {step.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2 text-sm text-text-dark-muted-readable dark:text-text-muted-readable"
                        >
                          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="mt-4 text-xs text-gold/60">
                      Flows into Phase {steps[i + 1].phase} →
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
