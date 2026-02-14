export const brand = {
  name: import.meta.env.VITE_APP_NAME || 'Zal Partners',
  tagline: 'Strength through clarity.',
  location: 'DMV (DC/MD/VA), Serving Nationwide',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || '[[CONTACT_EMAIL]]',
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL || '[[LINKEDIN_URL]]',
  schedulerEmbedUrl:
    import.meta.env.VITE_SCHEDULER_URL || '[[CALENDLY_OR_CAL_URL]]',
  formspreeEndpoint:
    import.meta.env.VITE_FORMSPREE_URL || 'https://formspree.io/f/[[FORM_ID]]',
  analyticsId: import.meta.env.VITE_ANALYTICS_ID || '',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://zalpartners.com',
  domain: 'zalpartners.com',
} as const;

export const colors = {
  background: '#0B0F14',
  surface: '#111827',
  border: '#223041',
  primary: '#C9A24E',
  primaryHover: '#B58B2E',
  secondary: '#1F6FEB',
  textPrimary: '#E6EAF2',
  textMuted: '#A7B0C0',
  success: '#2FBF71',
  warning: '#F2C94C',
  danger: '#EB5757',
} as const;

export const seoKeywords = [
  'staffing agency consulting',
  'staffing firm growth',
  'recruitment analytics dashboard',
  'staffing lead generation',
  'recruiting automation',
  'staffing tech strategy',
  'staffing CRM optimization',
  'ATS data analytics',
  'staffing pipeline management',
  'staffing business growth',
] as const;
