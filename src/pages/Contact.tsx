import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v4';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  MapPin,
  Linkedin,
  Calendar,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { useState } from 'react';
import { SEO } from '@/components/seo/SEO';
import { Section, SectionLabel } from '@/components/ui/Section';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { brand } from '@/config/brand';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required'),
  role: z.string().min(1, 'Your role is required'),
  companySize: z.string().min(1, 'Please select company size'),
  interest: z.string().min(1, 'Please select an area of interest'),
  message: z.string().min(10, 'Please share a bit more about your needs (10+ characters)'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const prefersReduced = useReducedMotion();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setError('');
      const endpoint = brand.formspreeEndpoint;
      if (endpoint.includes('[[FORM_ID]]')) {
        // Demo mode: simulate submission
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmitted(true);
        return;
      }
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or email us directly.');
    }
  };

  const fieldClasses =
    'w-full rounded-lg border border-steel/40 dark:border-steel/40 border-gray-200 dark:bg-surface bg-white px-4 py-3 text-sm dark:text-text-primary text-text-dark placeholder:text-text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors';
  const errorClasses = 'mt-1 text-xs text-danger';
  const labelClasses = 'mb-1.5 block text-sm font-medium dark:text-text-primary text-text-dark';

  return (
    <>
      <SEO
        title="Contact"
        description={`Book a free growth diagnostic or get in touch with ${brand.name}. Let's talk about turning your staffing operations into a growth system.`}
        path="/contact"
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <GradientMesh />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="dark:text-text-primary text-text-dark">Let&apos;s talk about </span>
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              your growth.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg dark:text-text-muted text-text-dark-muted">
            Book a free 30-minute growth diagnostic, or fill out the form and we&apos;ll
            get back to you within one business day. No pitch deck—just an honest conversation.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={prefersReduced ? undefined : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-success/30 bg-success/5 p-8 text-center"
              >
                <CheckCircle size={48} className="mx-auto text-success" />
                <h2 className="mt-4 text-2xl font-bold dark:text-text-primary text-text-dark">
                  Message received!
                </h2>
                <p className="mt-2 dark:text-text-muted text-text-dark-muted">
                  We&apos;ll review your information and get back to you within one business
                  day. Looking forward to the conversation.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClasses}>Full Name *</label>
                    <input
                      id="name"
                      {...register('name')}
                      className={fieldClasses}
                      placeholder="Jane Smith"
                    />
                    {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>Email *</label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className={fieldClasses}
                      placeholder="jane@agency.com"
                    />
                    {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className={labelClasses}>Company *</label>
                    <input
                      id="company"
                      {...register('company')}
                      className={fieldClasses}
                      placeholder="Your Staffing Agency"
                    />
                    {errors.company && <p className={errorClasses}>{errors.company.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="role" className={labelClasses}>Your Role *</label>
                    <input
                      id="role"
                      {...register('role')}
                      className={fieldClasses}
                      placeholder="Owner, VP Sales, etc."
                    />
                    {errors.role && <p className={errorClasses}>{errors.role.message}</p>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="companySize" className={labelClasses}>Company Size *</label>
                    <select id="companySize" {...register('companySize')} className={fieldClasses}>
                      <option value="">Select size...</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-25">11-25 employees</option>
                      <option value="26-50">26-50 employees</option>
                      <option value="51-100">51-100 employees</option>
                      <option value="100+">100+ employees</option>
                    </select>
                    {errors.companySize && <p className={errorClasses}>{errors.companySize.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="interest" className={labelClasses}>Primary Interest *</label>
                    <select id="interest" {...register('interest')} className={fieldClasses}>
                      <option value="">Select area...</option>
                      <option value="growth-diagnostic">14-Day Growth Diagnostic</option>
                      <option value="pipeline">Pipeline & Outbound</option>
                      <option value="data">Data & KPI Dashboards</option>
                      <option value="automation">AI & Automation</option>
                      <option value="tech-strategy">Tech Strategy</option>
                      <option value="other">Other / Not sure</option>
                    </select>
                    {errors.interest && <p className={errorClasses}>{errors.interest.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>
                    Tell us about your biggest challenge *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className={fieldClasses}
                    placeholder="What's the #1 thing holding your agency back right now?"
                  />
                  {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
                </div>

                {error && (
                  <div className="flex items-center gap-2 rounded-lg bg-danger/10 p-3 text-sm text-danger">
                    <AlertCircle size={16} />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-obsidian shadow-lg shadow-gold/20 transition-all hover:bg-gold-hover disabled:opacity-50 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-obsidian border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Scheduler */}
              <div className="rounded-xl border border-gold/30 bg-gold/5 p-6">
                <Calendar size={24} className="text-gold" />
                <h3 className="mt-3 text-lg font-semibold dark:text-text-primary text-text-dark">
                  Prefer to book directly?
                </h3>
                <p className="mt-2 text-sm dark:text-text-muted text-text-dark-muted">
                  Schedule a free 30-minute growth diagnostic call.
                </p>
                <a
                  href={brand.schedulerEmbedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-obsidian transition-all hover:bg-gold-hover"
                >
                  <Calendar size={16} />
                  Open Scheduler
                </a>
              </div>

              {/* Contact info */}
              <div className="rounded-xl border border-steel/40 dark:border-steel/40 border-gray-200 dark:bg-surface/50 bg-white p-6">
                <h3 className="text-lg font-semibold dark:text-text-primary text-text-dark">
                  Get in touch
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href={`mailto:${brand.contactEmail}`}
                    className="flex items-center gap-3 text-sm dark:text-text-muted text-text-dark-muted transition-colors hover:text-gold"
                  >
                    <Mail size={16} className="text-gold" />
                    {brand.contactEmail}
                  </a>
                  <a
                    href={brand.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm dark:text-text-muted text-text-dark-muted transition-colors hover:text-gold"
                  >
                    <Linkedin size={16} className="text-gold" />
                    Connect on LinkedIn
                  </a>
                  <div className="flex items-center gap-3 text-sm dark:text-text-muted text-text-dark-muted">
                    <MapPin size={16} className="text-gold" />
                    {brand.location}
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="rounded-xl border border-steel/40 dark:border-steel/40 border-gray-200 dark:bg-surface/50 bg-white p-6">
                <h3 className="text-sm font-semibold dark:text-text-primary text-text-dark">
                  What to expect
                </h3>
                <ul className="mt-3 space-y-2 text-sm dark:text-text-muted text-text-dark-muted">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="mt-0.5 text-success" />
                    Response within 1 business day
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="mt-0.5 text-success" />
                    30-minute diagnostic call, no commitment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="mt-0.5 text-success" />
                    Honest advice, even if we&apos;re not the right fit
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
