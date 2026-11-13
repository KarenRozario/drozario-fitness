import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../config/site';
import { Button } from '../components/shared/Button';
import { SEO } from '../components/shared/SEO';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';

export const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = siteConfig.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <SEO
        title={`${post.title}`}
        description={post.excerpt}
      />

      <article className="min-h-screen bg-espresso">
        {/* Post Header */}
        <header className="border-b border-espresso-border py-16 sm:py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link
                to="/blog"
                className="text-xs font-mono uppercase tracking-widest text-cream-dark hover:text-burntOrange inline-flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Learn Library</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-wider text-burntOrange mb-4">
              <span className="px-2.5 py-1 rounded bg-espresso-surface border border-espresso-border">
                {post.category}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-cream-dark">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span>·</span>
              <span className="text-amber-500 font-bold">{post.status}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-cream mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 pt-4 border-t border-espresso-border text-xs text-cream-muted">
              <div className="w-8 h-8 rounded-full bg-burntOrange/20 border border-burntOrange/50 flex items-center justify-center text-burntOrange font-bold">
                RD
              </div>
              <div>
                <span className="block font-medium text-cream">{post.author}</span>
                <span className="text-[11px] text-cream-dark">
                  Head Coach & Founder, D'Rozario Muscle Release · Stoney Creek
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="rounded-lg overflow-hidden border border-espresso-border bg-espresso-surface shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-72 sm:h-96 object-cover object-center filter contrast-105"
              loading="eager"
            />
          </div>
        </div>

        {/* Article Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="prose prose-invert prose-orange max-w-none space-y-8 text-cream-muted text-base sm:text-lg leading-relaxed font-sans">
            <p className="text-xl sm:text-2xl text-cream font-display leading-snug border-l-4 border-burntOrange pl-4">
              {post.excerpt}
            </p>

            {post.sections.map((sec, index) => (
              <div key={index} className="space-y-4 pt-4">
                <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-cream">
                  {sec.heading}
                </h2>
                {sec.body.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-cream-muted leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Post Footer Call to Action */}
          <div className="mt-16 p-8 rounded-lg bg-espresso-surface border border-espresso-border text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block">
              Experience the Solution In Stoney Creek
            </span>
            <h3 className="text-3xl font-display text-cream uppercase">
              Ready to Resolve Your Movement Restrictions?
            </h3>
            <p className="text-sm text-cream-muted max-w-md mx-auto">
              Schedule an in-person movement and muscle release assessment at our Stoney Creek studio.
            </p>
            <div className="pt-2">
              <Button href={BOOKING_URL} variant="primary" size="lg">
                Book a Session With Rachel
              </Button>
            </div>
          </div>

          {/* Navigation to Other Articles */}
          <div className="mt-12 pt-8 border-t border-espresso-border flex justify-between items-center text-xs font-mono uppercase tracking-wider">
            <Link
              to="/blog"
              className="text-cream-dark hover:text-burntOrange inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Articles</span>
            </Link>
            <Link
              to="/pain-locator"
              className="text-burntOrange hover:underline inline-flex items-center gap-1"
            >
              <span>Explore Pain Locator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};
