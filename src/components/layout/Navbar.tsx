import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { brand } from '@/config/brand';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useTheme } from '@/hooks/useTheme';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollDirection, atTop } = useScrollDirection();
  const { theme, toggleTheme, isDark } = useTheme();
  const location = useLocation();

  const isHidden = scrollDirection === 'down' && !atTop && !mobileOpen;

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
          atTop
            ? 'bg-transparent'
            : isDark
              ? 'border-b border-steel/40 bg-obsidian/80 backdrop-blur-xl'
              : 'border-b border-gray-200 bg-white/80 backdrop-blur-xl'
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-xl font-bold tracking-tight text-gold"
            aria-label={`${brand.name} home`}
          >
            {brand.name}
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`group relative px-4 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-gold'
                    : isDark
                      ? 'text-text-muted hover:text-text-primary'
                      : 'text-text-dark-muted hover:text-text-dark'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gold transition-transform origin-left ${
                    location.pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`rounded-lg p-2 transition-colors ${
                isDark ? 'text-text-muted hover:text-gold' : 'text-text-dark-muted hover:text-gold'
              }`}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-obsidian transition-all hover:bg-gold-hover md:inline-flex"
            >
              Book a Free Growth Diagnostic
              <ArrowRight size={16} />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`rounded-lg p-2 md:hidden ${
                isDark ? 'text-text-primary' : 'text-text-dark'
              }`}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-[72px] z-30 border-b p-6 md:hidden ${
              isDark
                ? 'border-steel bg-obsidian/95 backdrop-blur-xl'
                : 'border-gray-200 bg-white/95 backdrop-blur-xl'
            }`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'bg-gold/10 text-gold'
                      : isDark
                        ? 'text-text-muted hover:text-text-primary'
                        : 'text-text-dark-muted hover:text-text-dark'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-base font-semibold text-obsidian"
              >
                Book a Free Growth Diagnostic
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
