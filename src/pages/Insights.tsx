import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, ArrowRight, Clock } from 'lucide-react';
import { SEO } from '@/components/seo/SEO';
import { Section, SectionLabel } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { blogPosts } from '@/content/posts';

export default function Insights() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = !activeTag || post.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, activeTag]);

  return (
    <>
      <SEO
        title="Insights"
        description="Practical insights on staffing growth, recruitment analytics, pipeline development, and automation from Aurelius Partners."
        path="/insights"
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <GradientMesh />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Insights</SectionLabel>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="dark:text-text-primary text-text-dark">Thinking on </span>
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              staffing growth.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text-dark-muted-readable dark:text-text-muted-readable">
            Practical ideas on pipeline, data, automation, and strategy for staffing
            agency owners and operators.
          </p>
        </div>
      </section>

      <Section>
        {/* Search + Filter */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-md flex-1">
            <Search size={16} className="absolute top-1/2 left-3 -translate-y-1/2 text-text-muted" />
            <input
              type="search"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-steel/40 dark:border-steel/40 border-gray-200 dark:bg-surface bg-white py-2.5 pr-4 pl-10 text-sm dark:text-text-primary text-text-dark placeholder:text-text-muted focus:border-gold focus:outline-none"
              aria-label="Search insights"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                !activeTag
                  ? 'bg-gold text-obsidian'
                  : 'border border-steel/40 dark:text-text-muted text-text-dark-muted hover:border-gold/40 hover:text-gold'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  tag === activeTag
                    ? 'bg-gold text-obsidian'
                    : 'border border-steel/40 dark:text-text-muted text-text-dark-muted hover:border-gold/40 hover:text-gold'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Posts grid */}
        {filteredPosts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg text-text-dark-muted-readable dark:text-text-muted-readable">
              No posts match your search. Try different keywords or clear the filter.
            </p>
          </div>
        ) : (
          <motion.div
            variants={prefersReduced ? undefined : staggerContainer}
            initial={prefersReduced ? undefined : 'hidden'}
            animate="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.slug} variants={prefersReduced ? undefined : staggerItem}>
                <Link to={`/insights/${post.slug}`}>
                  <Card glow className="flex h-full flex-col transition-all hover:border-gold/40">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gold/10 px-2.5 py-0.5 text-xs font-medium text-gold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="mt-3 text-lg font-semibold dark:text-text-primary text-text-dark line-clamp-2 flex-1">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-text-dark-muted-readable dark:text-text-muted-readable line-clamp-3">
                      {post.description}
                    </p>
                      <div className="mt-4 flex items-center justify-between pt-4 border-t border-steel/20 dark:border-steel/20 border-gray-100">
                      <div className="flex items-center gap-3 text-xs text-text-dark-muted-readable dark:text-text-muted-readable">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} /> {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {post.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-medium text-gold">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Section>
    </>
  );
}
