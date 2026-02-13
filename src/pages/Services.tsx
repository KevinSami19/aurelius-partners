import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target,
  BarChart3,
  Bot,
  Puzzle,
  BookOpen,
  ChevronDown,
  ArrowRight,
  Clock,
  Calendar,
  LineChart,
  CheckCircle,
} from 'lucide-react';
import { SEO } from '@/components/seo/SEO';
import { Section, SectionLabel, SectionTitle, SectionDescription } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const services = [
  {
    id: 'pipeline',
    icon: Target,
    title: 'Pipeline & Outbound Systems',
    tagline: 'Build a predictable, repeatable client acquisition engine.',
    description:
      'We design and implement outbound systems that feel personal, not spammy. From ICP definition to multi-channel sequences to CRM automation—your pipeline becomes a machine.',
    deliverables: [
      'ICP definition and prospect list strategy',
      'Multi-channel outbound sequences (email, LinkedIn, phone)',
      'Inbound content strategy and SEO foundations',
      'CRM pipeline setup, lead scoring, and nurture workflows',
      'Weekly pipeline reviews and A/B optimization',
      'Attribution tracking so you know what\'s working',
    ],
    outcome: 'Predictable pipeline you can forecast quarter over quarter.',
  },
  {
    id: 'data',
    icon: BarChart3,
    title: 'Data & KPI Dashboards',
    tagline: 'Turn ATS/CRM chaos into decision-grade intelligence.',
    description:
      'Your ATS has years of data. We clean it, structure it, and build dashboards your team actually uses—so every Monday meeting starts with facts, not feelings.',
    deliverables: [
      'Data audit: completeness, accuracy, and consistency scoring',
      'Deduplication and record merging',
      'KPI framework design (leading + lagging indicators)',
      'Custom dashboards built on your existing tools',
      'Automated weekly reports and threshold alerts',
      'Team training on data-driven decision making',
    ],
    outcome: 'KPIs you trust, decisions you can defend.',
  },
  {
    id: 'automation',
    icon: Bot,
    title: 'AI & Workflow Automation',
    tagline: 'Automate admin, not relationships.',
    description:
      'We implement practical AI and automation that saves your team hours every week—without removing the human touch that wins business.',
    deliverables: [
      'Workflow audit and automation opportunity matrix',
      'AI candidate matching and screening implementation',
      'Automated follow-ups, status updates, and notifications',
      'Document generation and compliance workflows',
      'Integration automation between your tools',
      'ROI tracking on every automation deployed',
    ],
    outcome: 'Hours/week saved, fewer errors, happier teams.',
  },
  {
    id: 'tech',
    icon: Puzzle,
    title: 'Tech Stack Strategy & Integrations',
    tagline: 'Make your tools talk to each other.',
    description:
      'Most agencies run 5-10 disconnected tools. We evaluate your stack, fill gaps, and build integrations so data flows where it needs to.',
    deliverables: [
      'Tech stack audit and gap analysis',
      'ATS/CRM selection guidance and migration support',
      'API integrations between platforms',
      'Vendor evaluation and negotiation support',
      'Phased technology improvement roadmap',
      'Cost optimization across your tool spend',
    ],
    outcome: 'Integrated tools, seamless data flow, lower cost.',
  },
  {
    id: 'enablement',
    icon: BookOpen,
    title: 'Enablement & Playbooks',
    tagline: 'Train the team so improvements stick.',
    description:
      'Systems are only as good as the people using them. We build playbooks, SOPs, and training programs that make adoption permanent.',
    deliverables: [
      'Standard operating procedures for sales and recruiting',
      'Onboarding playbooks for new hires',
      'CRM usage and data hygiene guidelines',
      'Recorded walkthroughs and quick-reference guides',
      'Quarterly refresh sessions and advanced training',
      'Adoption metrics and accountability framework',
    ],
    outcome: 'A team that runs the system, not the other way around.',
  },
];

const packages = [
  {
    icon: Clock,
    title: '14-Day Growth Diagnostic',
    price: 'Fixed scope',
    duration: '14 days',
    description:
      'A comprehensive audit of your pipeline, data, tech stack, and workflows. You get a prioritized roadmap with quick wins and long-term plays.',
    includes: [
      'Pipeline and conversion analysis',
      'ATS/CRM data quality assessment',
      'Tech stack evaluation',
      'Workflow automation opportunities',
      'Prioritized recommendations report',
      '90-minute strategy debrief call',
    ],
    highlight: true,
    cta: 'Book Your Diagnostic',
  },
  {
    icon: Calendar,
    title: 'Pipeline Sprint',
    price: 'Fixed scope',
    duration: '30 days',
    description:
      'In 30 days, we build and launch your outbound engine: ICP, sequences, CRM workflows, and a live pipeline dashboard.',
    includes: [
      'ICP definition and prospect targeting',
      'Multi-channel outbound sequence design',
      'CRM pipeline and workflow configuration',
      'Live pipeline dashboard',
      'Team training on outbound execution',
      '30-day post-launch support',
    ],
    highlight: false,
    cta: 'Start Your Sprint',
  },
  {
    icon: LineChart,
    title: 'Data-to-Decisions Dashboard',
    price: 'Fixed scope',
    duration: '21 days',
    description:
      'In 21 days, we clean your data, design your KPI framework, and deliver a live dashboard your team will actually use.',
    includes: [
      'Data audit and deduplication',
      'KPI framework design',
      'Custom dashboard build',
      'Automated reporting setup',
      'Team training and adoption plan',
      '30-day support for refinements',
    ],
    highlight: false,
    cta: 'Build Your Dashboard',
  },
];

function ServiceDetail({ service }: { service: typeof services[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id={service.id}
      className="scroll-mt-24 rounded-xl border border-steel/40 dark:border-steel/40 border-gray-200 dark:bg-surface/50 bg-white p-6 lg:p-8"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 rounded-lg bg-gold/10 p-3">
          <service.icon size={28} className="text-gold" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold dark:text-text-primary text-text-dark">
            {service.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-gold">{service.tagline}</p>
          <p className="mt-3 dark:text-text-muted text-text-dark-muted">{service.description}</p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-hover"
            aria-expanded={expanded}
          >
            {expanded ? 'Hide deliverables' : 'See deliverables'}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={16} />
            </motion.span>
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-sm dark:text-text-muted text-text-dark-muted"
                    >
                      <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-success" />
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold text-gold">{service.outcome}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const prefersReduced = useReducedMotion();

  return (
    <>
      <SEO
        title="Services"
        description="Pipeline systems, data dashboards, AI automation, tech strategy, and team enablement for staffing agencies."
        path="/services"
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <GradientMesh />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Services</SectionLabel>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="dark:text-text-primary text-text-dark">Everything your agency needs to </span>
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              grow systematically.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg dark:text-text-muted text-text-dark-muted">
            We don't sell one-size-fits-all packages. Every engagement starts with understanding
            where you are and building what you actually need.
          </p>
        </div>
      </section>

      {/* Service details */}
      <Section>
        <motion.div
          variants={prefersReduced ? undefined : staggerContainer}
          initial={prefersReduced ? undefined : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-6"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={prefersReduced ? undefined : staggerItem}>
              <ServiceDetail service={service} />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Packages */}
      <Section dark>
        <div className="text-center">
          <SectionLabel>Packages</SectionLabel>
          <SectionTitle className="mx-auto">Ready-to-launch packages</SectionTitle>
          <SectionDescription>
            Fixed scope, clear timelines, tangible outcomes. Pick the one that fits.
          </SectionDescription>
        </div>

        <motion.div
          variants={prefersReduced ? undefined : staggerContainer}
          initial={prefersReduced ? undefined : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {packages.map((pkg) => (
            <motion.div key={pkg.title} variants={prefersReduced ? undefined : staggerItem}>
              <Card
                glow
                className={`flex h-full flex-col ${
                  pkg.highlight ? 'border-gold/40 ring-1 ring-gold/20' : ''
                }`}
              >
                {pkg.highlight && (
                  <span className="mb-3 inline-block self-start rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                    Most Popular
                  </span>
                )}
                <div className="mb-3 inline-flex self-start rounded-lg bg-gold/10 p-3">
                  <pkg.icon size={24} className="text-gold" />
                </div>
                <h3 className="text-xl font-bold dark:text-text-primary text-text-dark">
                  {pkg.title}
                </h3>
                <div className="mt-2 flex items-center gap-3 text-sm">
                  <span className="text-gold font-medium">{pkg.price}</span>
                  <span className="dark:text-text-muted text-text-dark-muted">·</span>
                  <span className="flex items-center gap-1 dark:text-text-muted text-text-dark-muted">
                    <Clock size={14} /> {pkg.duration}
                  </span>
                </div>
                <p className="mt-3 text-sm dark:text-text-muted text-text-dark-muted flex-1">
                  {pkg.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm dark:text-text-muted text-text-dark-muted"
                    >
                      <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all ${
                    pkg.highlight
                      ? 'bg-gold text-obsidian hover:bg-gold-hover'
                      : 'border border-gold/40 text-gold hover:bg-gold/10'
                  }`}
                >
                  {pkg.cta} <ArrowRight size={14} />
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold dark:text-text-primary text-text-dark sm:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl dark:text-text-muted text-text-dark-muted">
            The 14-Day Growth Diagnostic is the best first step. We'll assess everything
            and give you a clear roadmap—no commitment beyond that.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-obsidian shadow-lg shadow-gold/20 transition-all hover:-translate-y-0.5 hover:bg-gold-hover"
          >
            <Calendar size={18} />
            Book a Free Growth Diagnostic
          </Link>
        </div>
      </Section>
    </>
  );
}
