import { Helmet } from 'react-helmet-async';
import { brand, seoKeywords } from '@/config/brand';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  article?: boolean;
}

export function SEO({
  title,
  description = 'We turn staffing operations into a growth system: predictable pipeline, clean KPIs, and practical automation.',
  path = '',
  image = '/og.png',
  article = false,
}: SEOProps) {
  const pageTitle = title
    ? `${title} | ${brand.name}`
    : `${brand.name} | Staffing Growth Consulting`;
  const url = `${brand.siteUrl}${path}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: brand.name,
    description,
    url: brand.siteUrl,
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'DC/MD/VA',
      addressCountry: 'US',
    },
    serviceType: [
      'Staffing Agency Consulting',
      'Recruitment Analytics',
      'Staffing Automation',
      'ATS/CRM Optimization',
      'Lead Generation for Staffing Firms',
    ],
    knowsAbout: [
      'Staffing Industry',
      'Recruiting Technology',
      'Data Analytics',
      'AI Automation',
      'Pipeline Development',
    ],
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={seoKeywords.join(', ')} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${brand.siteUrl}${image}`} />
      <meta property="og:site_name" content={brand.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${brand.siteUrl}${image}`} />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
