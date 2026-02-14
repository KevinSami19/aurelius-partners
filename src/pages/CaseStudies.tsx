import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowRight, Calendar, Users, BarChart3, Zap } from 'lucide-react';
import { SEO } from '@/components/seo/SEO';
import { Section, SectionLabel } from '@/components/ui/Section';
import { brand } from '@/config/brand';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const caseStudies = [
  {
    id: 'pipeline-doubling',
    label: 'Example Outcome',
    icon: TrendingUp,
    title: 'Regional IT Staffing Firm Doubles Qualified Pipeline in 90 Days',
    industry: 'IT Staffing',
    size: '30 employees, ~$5M revenue',
    challenge:
      'The agency relied entirely on referrals and inbound for new business. Pipeline was unpredictable, and new business development was ad hoc. Sales reps had no structured outbound process, and the CRM was cluttered with stale data.',
    approach: [
      'Audited CRM data and identified 400+ dormant accounts with re-engagement potential',
      'Defined an Ideal Client Profile based on historical win data and market analysis',
      'Built multi-channel outbound sequences targeting IT directors in mid-market companies',
      'Created a KPI dashboard tracking pipeline velocity, conversion rates, and individual rep activity',
      'Automated follow-up workflows and lead scoring in their existing CRM',
      'Trained the sales team on outbound execution and CRM hygiene protocols',
    ],
    results: [
      { metric: '2x', label: 'Qualified pipeline in 90 days' },
      { metric: '35%', label: 'Response rate on outbound sequences' },
      { metric: '12 hrs', label: 'Saved per week in manual reporting' },
      { metric: '3', label: 'New enterprise accounts closed' },
    ],
    testimonial:
      'We went from hoping the phone would ring to knowing exactly how many meetings we\'d book each week. The dashboard alone changed how we run Monday meetings.',
    duration: '90 days',
  },
  {
    id: 'automation-efficiency',
    label: 'Example Outcome',
    icon: Zap,
    title: 'Light Industrial Agency Cuts Time-to-Fill by 40% with Automation',
    industry: 'Light Industrial Staffing',
    size: '50 employees, ~$12M revenue',
    challenge:
      'The agency was drowning in manual processes: paper applications, spreadsheet tracking, inconsistent client communication, and a compliance nightmare. Their ATS was underutilized, and recruiters spent more time on admin than recruiting.',
    approach: [
      'Mapped every workflow from intake to placement, identifying 15+ automation opportunities',
      'Migrated the intake process from paper to digital forms with automated routing',
      'Built candidate matching automation using skills, availability, and location data',
      'Integrated ATS with client portal for real-time status visibility',
      'Deployed automated compliance and credential tracking workflows',
      'Created a real-time operations dashboard for leadership',
    ],
    results: [
      { metric: '40%', label: 'Faster time-to-fill' },
      { metric: '20 hrs', label: 'Saved weekly on admin tasks' },
      { metric: '95%', label: 'Compliance documentation accuracy' },
      { metric: '18%', label: 'Increase in gross margin' },
    ],
    testimonial:
      'Our recruiters finally have time to recruit. The automation handles the paperwork, and we can see everything in real time. It\'s like we upgraded the entire operation overnight.',
    duration: '120 days',
  },
];

export default function CaseStudies() {
  const prefersReduced = useReducedMotion();

  return (
    <>
      <SEO
        title="Case Studies"
        description={`See how staffing agencies doubled pipeline, cut time-to-fill, and modernized operations with ${brand.name}.`}
        path="/case-studies"
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <GradientMesh />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Case Studies</SectionLabel>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="dark:text-text-primary text-text-dark">Results that speak </span>
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              for themselves.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg dark:text-text-muted text-text-dark-muted">
            These are representative outcomes based on real engagement patterns.
            Every agency is different, but the system works.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <Section>
        <motion.div
          variants={prefersReduced ? undefined : staggerContainer}
          initial={prefersReduced ? undefined : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-12"
        >
          {caseStudies.map((study) => (
            <motion.div key={study.id} variants={prefersReduced ? undefined : staggerItem}>
              <div className="rounded-2xl border border-steel/40 dark:border-steel/40 border-gray-200 dark:bg-surface/50 bg-white p-6 lg:p-10">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                      {study.label}
                    </span>
                    <h2 className="mt-3 text-2xl font-bold dark:text-text-primary text-text-dark lg:text-3xl">
                      {study.title}
                    </h2>
                  </div>
                </div>

                {/* Meta */}
                <div className="mt-4 flex flex-wrap gap-4 text-sm dark:text-text-muted text-text-dark-muted">
                  <span className="flex items-center gap-1.5">
                    <BarChart3 size={14} className="text-gold" />
                    {study.industry}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={14} className="text-gold" />
                    {study.size}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-gold" />
                    {study.duration}
                  </span>
                </div>

                {/* Challenge */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold tracking-wider text-gold uppercase">
                    Challenge
                  </h3>
                  <p className="mt-2 dark:text-text-muted text-text-dark-muted">
                    {study.challenge}
                  </p>
                </div>

                {/* Approach */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold tracking-wider text-gold uppercase">
                    Approach
                  </h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
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

                {/* Results */}
                <div className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-steel/30 dark:border-steel/30 border-gray-200 p-6 lg:grid-cols-4">
                  {study.results.map((r) => (
                    <div key={r.label} className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <TrendingUp size={16} className="text-success" />
                        <span className="text-3xl font-bold text-success">{r.metric}</span>
                      </div>
                      <span className="mt-1 block text-sm dark:text-text-muted text-text-dark-muted">
                        {r.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-8 border-l-2 border-gold/40 pl-4 italic dark:text-text-muted text-text-dark-muted">
                  &ldquo;{study.testimonial}&rdquo;
                </blockquote>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold dark:text-text-primary text-text-dark sm:text-4xl">
            Want results like these?
          </h2>
          <p className="mx-auto mt-4 max-w-xl dark:text-text-muted text-text-dark-muted">
            Every engagement starts with a diagnostic. Let's find out where your biggest
            opportunities are hiding.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-obsidian shadow-lg shadow-gold/20 transition-all hover:-translate-y-0.5 hover:bg-gold-hover"
          >
            Book a Free Growth Diagnostic <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </>
  );
}
