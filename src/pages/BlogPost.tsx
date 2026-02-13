import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/seo/SEO';
import { Section } from '@/components/ui/Section';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { blogPosts } from '@/content/posts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 2);

  // Simple markdown-to-JSX renderer for our blog content
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="my-4 ml-6 list-disc space-y-1 dark:text-text-muted text-text-dark-muted">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>,
        );
        listItems = [];
      }
    };

    lines.forEach((line, i) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={i} className="mt-10 mb-4 text-2xl font-bold dark:text-text-primary text-text-dark">
            {trimmed.replace('## ', '')}
          </h2>,
        );
      } else if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={i} className="mt-8 mb-3 text-xl font-semibold dark:text-text-primary text-text-dark">
            {trimmed.replace('### ', '')}
          </h3>,
        );
      } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        flushList();
        elements.push(
          <p key={i} className="mt-4 mb-2 font-semibold dark:text-text-primary text-text-dark">
            {trimmed.replace(/\*\*/g, '')}
          </p>,
        );
      } else if (trimmed.startsWith('- ')) {
        // Handle bold in list items
        const text = trimmed.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '$1');
        listItems.push(text);
      } else if (trimmed.startsWith('*') && trimmed.endsWith('*')) {
        flushList();
        elements.push(
          <p key={i} className="my-4 italic dark:text-text-muted text-text-dark-muted">
            {trimmed.replace(/^\*|\*$/g, '')}
          </p>,
        );
      } else if (trimmed === '') {
        flushList();
      } else {
        flushList();
        // Handle inline bold
        const parts = trimmed.split(/\*\*(.*?)\*\*/g);
        elements.push(
          <p key={i} className="my-3 leading-relaxed dark:text-text-muted text-text-dark-muted">
            {parts.map((part, j) =>
              j % 2 === 1 ? (
                <strong key={j} className="font-semibold dark:text-text-primary text-text-dark">
                  {part}
                </strong>
              ) : (
                part
              ),
            )}
          </p>,
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        path={`/insights/${post.slug}`}
        article
      />

      <section className="relative overflow-hidden py-20 md:py-28">
        <GradientMesh />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/insights"
            className="mb-6 inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-gold-hover"
          >
            <ArrowLeft size={16} /> Back to Insights
          </Link>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight dark:text-text-primary text-text-dark sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-4 text-sm dark:text-text-muted text-text-dark-muted">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime}
            </span>
            <span>{post.author}</span>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <article className="prose-custom">{renderContent(post.content)}</article>

          {/* CTA Banner */}
          <div className="mt-16 rounded-xl border border-gold/30 bg-gold/5 p-8 text-center">
            <h3 className="text-xl font-bold dark:text-text-primary text-text-dark">
              Want to apply these ideas to your agency?
            </h3>
            <p className="mt-2 dark:text-text-muted text-text-dark-muted">
              Book a free growth diagnostic and get a tailored plan for your staffing firm.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-semibold text-obsidian transition-all hover:bg-gold-hover"
            >
              Book a Free Growth Diagnostic <ArrowRight size={16} />
            </Link>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-xl font-bold dark:text-text-primary text-text-dark">
                Related insights
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    to={`/insights/${related.slug}`}
                    className="rounded-xl border border-steel/40 dark:border-steel/40 border-gray-200 dark:bg-surface/50 bg-white p-5 transition-all hover:border-gold/40"
                  >
                    <div className="flex flex-wrap gap-1.5">
                      {related.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs text-gold">{tag}</span>
                      ))}
                    </div>
                    <h4 className="mt-2 font-semibold dark:text-text-primary text-text-dark line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="mt-1 text-sm dark:text-text-muted text-text-dark-muted line-clamp-2">
                      {related.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
