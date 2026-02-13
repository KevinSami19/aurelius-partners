import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Database,
  Code2,
  Users,
  Lightbulb,
  Target,
  Heart,
  Shield,
  Calendar,
} from 'lucide-react';
import { SEO } from '@/components/seo/SEO';
import { Section, SectionLabel, SectionTitle } from '@/components/ui/Section';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { brand } from '@/config/brand';

const journey = [
  {
    icon: Database,
    period: 'Chapter 1',
    title: 'Inside Staffing Operations',
    description:
      'Worked as a Data Analyst on the Technology team at one of the largest staffing firms in the world. Not in a corner office—deep in the systems, data, and workflows that power recruiting operations.',
    highlights: [
      'Modernized processes across technology and operations teams',
      'Transformed messy ATS/CRM data into decision-grade intelligence',
      'Introduced AI and workflow automation to staffing operations',
      'Measurably improved both client and talent acquisition quality and quantity',
    ],
  },
  {
    icon: Code2,
    period: 'Chapter 2',
    title: 'Building Data Science Applications',
    description:
      'Became a Software Engineer at a tech firm, working on data science applications. Brought a deeper technical toolkit to the staffing problems already understood firsthand.',
    highlights: [
      'Built production data science applications',
      'Deepened expertise in AI/ML, analytics, and software architecture',
      'Understood how to build technology that operators actually use',
      'Bridged the gap between "what tech can do" and "what staffing needs"',
    ],
  },
  {
    icon: Lightbulb,
    period: 'Chapter 3',
    title: 'Founding Aurelius Partners',
    description:
      'Saw that small-to-mid staffing agencies face the same problems that enterprise firms do—but without dedicated technology teams to solve them. Founded Aurelius Partners to be that team.',
    highlights: [
      'Bringing enterprise-grade thinking to agencies that can\'t afford enterprise budgets',
      'Every engagement is hands-on: building, not just advising',
      'Combining operator instinct with engineering rigor',
      'Making AI and automation accessible, practical, and human-first',
    ],
  },
];

const values = [
  {
    icon: Target,
    title: 'Outcomes over outputs',
    description: 'We measure success by your growth metrics, not by how many deliverables we ship.',
  },
  {
    icon: Heart,
    title: 'Human-first technology',
    description: 'Automate admin, not relationships. Technology should amplify your people, not replace them.',
  },
  {
    icon: Shield,
    title: 'Honest advice',
    description: 'If something won\'t work for your agency, we\'ll tell you. No upselling, no hype.',
  },
  {
    icon: Users,
    title: 'Operator mindset',
    description: 'We\'ve been inside the systems we help you build. We know what works in practice.',
  },
];

export default function About() {
  const prefersReduced = useReducedMotion();

  return (
    <>
      <SEO
        title="About"
        description="Aurelius Partners was founded by a hands-on staffing-tech operator and software engineer who understands the staffing industry from the inside."
        path="/about"
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <GradientMesh />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>About</SectionLabel>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="dark:text-text-primary text-text-dark">Built by someone who&apos;s been </span>
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              in your systems.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg dark:text-text-muted text-text-dark-muted">
            {brand.name} was founded on a simple insight: small-to-mid staffing agencies
            face the same data, pipeline, and automation challenges that enterprise firms
            do—they just don&apos;t have a dedicated technology team to solve them. Until now.
          </p>
        </div>
      </section>

      {/* Journey */}
      <Section>
        <SectionLabel>The Journey</SectionLabel>
        <SectionTitle>Operator. Builder. Innovator.</SectionTitle>
        <p className="mt-4 max-w-2xl text-lg dark:text-text-muted text-text-dark-muted">
          The founder&apos;s path from staffing operations to software engineering
          to consulting isn&apos;t an accident—it&apos;s exactly the combination staffing
          agencies need.
        </p>

        <motion.div
          variants={prefersReduced ? undefined : staggerContainer}
          initial={prefersReduced ? undefined : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 space-y-8"
        >
          {journey.map((chapter) => (
            <motion.div
              key={chapter.title}
              variants={prefersReduced ? undefined : staggerItem}
              className="rounded-xl border border-steel/40 dark:border-steel/40 border-gray-200 dark:bg-surface/50 bg-white p-6 lg:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg bg-gold/10 p-3">
                  <chapter.icon size={28} className="text-gold" />
                </div>
                <div>
                  <span className="text-sm font-medium text-gold">{chapter.period}</span>
                  <h3 className="mt-1 text-xl font-bold dark:text-text-primary text-text-dark">
                    {chapter.title}
                  </h3>
                  <p className="mt-2 dark:text-text-muted text-text-dark-muted">
                    {chapter.description}
                  </p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {chapter.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm dark:text-text-muted text-text-dark-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Values */}
      <Section dark>
        <div className="text-center">
          <SectionLabel>Values</SectionLabel>
          <SectionTitle className="mx-auto">How we operate</SectionTitle>
          <p className="mx-auto mt-4 max-w-xl dark:text-text-muted text-text-dark-muted">
            These aren&apos;t poster slogans. They guide every engagement, every recommendation,
            and every line of code.
          </p>
        </div>

        <motion.div
          variants={prefersReduced ? undefined : staggerContainer}
          initial={prefersReduced ? undefined : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={prefersReduced ? undefined : staggerItem}>
              <div className="rounded-xl border border-steel/40 dark:border-steel/40 border-gray-200 dark:bg-surface/50 bg-white p-6 text-center">
                <div className="mx-auto mb-4 inline-flex rounded-lg bg-gold/10 p-3">
                  <value.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-semibold dark:text-text-primary text-text-dark">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm dark:text-text-muted text-text-dark-muted">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold dark:text-text-primary text-text-dark sm:text-4xl">
            Let&apos;s talk about your growth.
          </h2>
          <p className="mx-auto mt-4 max-w-xl dark:text-text-muted text-text-dark-muted">
            No pitch deck. No pressure. Just an honest conversation about where your
            agency stands and what would move the needle most.
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
