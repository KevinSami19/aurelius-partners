import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Target,
  BarChart3,
  Bot,
  Puzzle,
  BookOpen,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import { Section, SectionLabel, SectionTitle } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const services = [
  {
    icon: Target,
    title: 'Pipeline & Outbound Systems',
    summary: 'Ethical, personal outreach that books meetings.',
    details: [
      'ICP definition and prospect list building',
      'Multi-channel outbound sequences (email, LinkedIn, phone)',
      'Inbound content strategy and SEO foundations',
      'CRM pipeline setup and lead scoring',
      'Weekly pipeline reviews and optimization',
    ],
  },
  {
    icon: BarChart3,
    title: 'Data & KPI Dashboards',
    summary: 'Turn ATS/CRM chaos into actionable insights.',
    details: [
      'Data audit and cleansing across your ATS/CRM',
      'KPI framework design (leading + lagging indicators)',
      'Custom dashboards built on your existing tools',
      'Automated reporting and alerts',
      'Team training on data-driven decision making',
    ],
  },
  {
    icon: Bot,
    title: 'AI & Workflow Automation',
    summary: 'Save time, reduce errors, keep the human touch.',
    details: [
      'AI candidate matching and resume parsing',
      'Automated follow-up sequences and status updates',
      'Document generation and compliance workflows',
      'Chatbot and intake form automation',
      'ROI tracking on every automation deployed',
    ],
  },
  {
    icon: Puzzle,
    title: 'Tech Stack Strategy & Integrations',
    summary: 'Make your tools talk to each other.',
    details: [
      'Tech stack audit and gap analysis',
      'ATS/CRM selection guidance and migration support',
      'API integrations between platforms',
      'Vendor evaluation and negotiation support',
      'Roadmap for phased tech improvements',
    ],
  },
  {
    icon: BookOpen,
    title: 'Enablement & Playbooks',
    summary: 'Train the team so improvements stick.',
    details: [
      'Standard operating procedures (SOPs) for sales and recruiting',
      'Onboarding playbooks for new hires',
      'CRM usage and hygiene guidelines',
      'Recorded walkthroughs and quick-reference guides',
      'Quarterly refresh sessions',
    ],
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card glow className="h-full">
      <div className="mb-4 inline-flex rounded-lg bg-gold/10 p-3">
        <service.icon size={24} className="text-gold" />
      </div>
      <h3 className="text-lg font-semibold dark:text-text-primary text-text-dark">
        {service.title}
      </h3>
      <p className="mt-2 text-sm dark:text-text-muted text-text-dark-muted">{service.summary}</p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-hover"
        aria-expanded={expanded}
      >
        {expanded ? 'Less detail' : 'More detail'}
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 space-y-2 overflow-hidden"
          >
            {service.details.map((detail) => (
              <li
                key={detail}
                className="flex items-start gap-2 text-sm dark:text-text-muted text-text-dark-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                {detail}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </Card>
  );
}

export function ServicesGrid() {
  const prefersReduced = useReducedMotion();

  return (
    <Section id="services" dark>
      <div className="text-center">
        <SectionLabel>Services</SectionLabel>
        <SectionTitle className="mx-auto">
          What we build for you
        </SectionTitle>
        <p className="mx-auto mt-4 max-w-2xl text-lg dark:text-text-muted text-text-dark-muted">
          Every engagement is tailored, but our work falls into five core areas. Mix and match,
          or let us recommend based on your diagnostic.
        </p>
      </div>

      {/* Services */}
      <motion.div
        variants={prefersReduced ? undefined : staggerContainer}
        initial={prefersReduced ? undefined : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={prefersReduced ? undefined : staggerItem}>
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </motion.div>

      {/* Reach out CTA */}
      <div className="mt-20">
        <motion.div
          variants={prefersReduced ? undefined : staggerItem}
          initial={prefersReduced ? undefined : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card glow className="border-gold/40 ring-1 ring-gold/20 text-center">
            <h3 className="font-display text-2xl font-bold dark:text-text-primary text-text-dark sm:text-3xl">
              Every engagement is custom
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-base dark:text-text-muted text-text-dark-muted sm:text-lg">
              We don&apos;t do one-size-fits-all. Tell us where you are and what you need—we&apos;ll
              design a plan that fits.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-obsidian shadow-lg shadow-gold/20 transition-all hover:-translate-y-0.5 hover:bg-gold-hover hover:shadow-gold/30"
            >
              Reach out to get started <ArrowRight size={18} />
            </Link>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
