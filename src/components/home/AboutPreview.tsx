import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Database, Users } from 'lucide-react';
import { Section, SectionLabel, SectionTitle } from '@/components/ui/Section';

export function AboutPreview() {
  return (
    <Section id="about" dark>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionLabel>About</SectionLabel>
          <SectionTitle>
            Built by someone who&apos;s been in your systems.
          </SectionTitle>
          <div className="mt-6 space-y-4 dark:text-text-muted text-text-dark-muted leading-relaxed">
            <p>
              Aurelius Partners was founded by a hands-on operator and builder who spent years
              inside one of the largest staffing firms in the world—not in a corner office,
              but deep in the data and systems that power recruiting operations.
            </p>
            <p>
              As a Data Analyst on the Technology team, they modernized processes, transformed
              messy ATS/CRM data into decision-grade intelligence, introduced AI and workflow
              automation, and measurably improved both client and talent acquisition quality
              and quantity through the strategic use of data.
            </p>
            <p>
              They later became a Software Engineer at a tech firm, building data science
              applications—bringing an even deeper technical toolkit to the staffing
              problems they already understood firsthand.
            </p>
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-hover"
          >
            Read the full story <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: Database,
              label: 'Data Analyst',
              desc: 'Staffing technology team at a global firm',
            },
            {
              icon: Code2,
              label: 'Software Engineer',
              desc: 'Data science applications at a tech firm',
            },
            {
              icon: Users,
              label: 'Operator & Builder',
              desc: 'Lived inside the systems, not above them',
            },
            {
              icon: ArrowRight,
              label: 'Innovator',
              desc: 'AI, automation, and data-driven growth',
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-steel/40 dark:border-steel/40 border-gray-200 dark:bg-surface/50 bg-white p-5"
            >
              <item.icon size={24} className="text-gold" />
              <h4 className="mt-3 font-semibold dark:text-text-primary text-text-dark">
                {item.label}
              </h4>
              <p className="mt-1 text-sm dark:text-text-muted text-text-dark-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
