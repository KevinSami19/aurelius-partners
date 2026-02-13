import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { Section, SectionLabel, SectionTitle } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { blogPosts } from '@/content/posts';

export function InsightsPreview() {
  const prefersReduced = useReducedMotion();
  const featured = blogPosts.slice(0, 3);

  return (
    <Section id="insights">
      <div className="text-center">
        <SectionLabel>Insights</SectionLabel>
        <SectionTitle className="mx-auto">
          Thinking on staffing growth
        </SectionTitle>
        <p className="mx-auto mt-4 max-w-2xl text-lg dark:text-text-muted text-text-dark-muted">
          Practical ideas on pipeline, data, and automation for staffing leaders.
        </p>
      </div>

      <motion.div
        variants={prefersReduced ? undefined : staggerContainer}
        initial={prefersReduced ? undefined : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-16 grid gap-6 md:grid-cols-3"
      >
        {featured.map((post) => (
          <motion.div key={post.slug} variants={prefersReduced ? undefined : staggerItem}>
            <Link to={`/insights/${post.slug}`}>
              <Card glow className="h-full transition-all hover:border-gold/40">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gold/10 px-2.5 py-0.5 text-xs font-medium text-gold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-3 text-lg font-semibold dark:text-text-primary text-text-dark line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm dark:text-text-muted text-text-dark-muted line-clamp-3">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs dark:text-text-muted text-text-dark-muted">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-gold">
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 text-center">
        <Link
          to="/insights"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-hover"
        >
          View all insights <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
