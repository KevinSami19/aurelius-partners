import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { brand } from '@/config/brand';

const footerLinks = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Insights', href: '/insights' },
    { label: 'Growth Score Quiz', href: '/#quiz' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  Services: [
    { label: 'Pipeline & Outbound', href: '/services#pipeline' },
    { label: 'Data & KPIs', href: '/services#data' },
    { label: 'AI & Automation', href: '/services#automation' },
    { label: 'Tech Strategy', href: '/services#tech' },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-steel/40 dark:border-steel/40 border-gray-200 bg-obsidian dark:bg-obsidian bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-xl font-bold text-gold">
              {brand.name}
            </Link>
            <p className="mt-3 text-sm italic text-gold-light">{brand.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
              We turn staffing operations into a growth system: predictable pipeline,
              clean KPIs, and practical automation.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" />
                {brand.location}
              </span>
              <a
                href={`mailto:${brand.contactEmail}`}
                className="flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Mail size={14} className="text-gold" />
                {brand.contactEmail}
              </a>
              <a
                href={brand.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Linkedin size={14} className="text-gold" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-text-primary uppercase">
                {title}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-text-muted transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-steel/30 pt-8 text-xs text-text-muted sm:flex-row">
          <p>&copy; {year} {brand.name}. All rights reserved.</p>
          <p>DMV-based, serving nationwide.</p>
        </div>
      </div>
    </footer>
  );
}
