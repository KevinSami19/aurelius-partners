import { SEO } from '@/components/seo/SEO';
import { Section, SectionLabel } from '@/components/ui/Section';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { brand } from '@/config/brand';

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description={`Privacy policy for ${brand.name}.`} path="/privacy" />

      <section className="relative overflow-hidden py-20 md:py-28">
        <GradientMesh />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Legal</SectionLabel>
          <h1 className="font-display text-4xl font-bold tracking-tight dark:text-text-primary text-text-dark sm:text-5xl">
            Privacy Policy
          </h1>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          <div>
            <h2 className="text-xl font-bold dark:text-text-primary text-text-dark">Information We Collect</h2>
            <p className="mt-2 dark:text-text-muted text-text-dark-muted">
              When you fill out our contact form or take our Growth Score quiz, we collect the
              information you provide (name, email, company information, and your responses).
              We use this to respond to your inquiry and provide relevant services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold dark:text-text-primary text-text-dark">How We Use Your Information</h2>
            <p className="mt-2 dark:text-text-muted text-text-dark-muted">
              We use your information solely to communicate with you about our services, respond
              to your inquiries, and improve our website. We do not sell your information to third
              parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold dark:text-text-primary text-text-dark">Analytics</h2>
            <p className="mt-2 dark:text-text-muted text-text-dark-muted">
              We may use privacy-respecting analytics to understand how visitors use our website.
              This data is aggregated and cannot identify individual visitors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold dark:text-text-primary text-text-dark">Contact</h2>
            <p className="mt-2 dark:text-text-muted text-text-dark-muted">
              If you have questions about this privacy policy, please contact us at{' '}
              <a href={`mailto:${brand.contactEmail}`} className="text-gold hover:text-gold-hover">
                {brand.contactEmail}
              </a>
              .
            </p>
          </div>

          <p className="text-sm dark:text-text-muted text-text-dark-muted">
            Last updated: February 2026
          </p>
        </div>
      </Section>
    </>
  );
}
