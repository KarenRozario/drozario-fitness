import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { ArrowRight, Clock } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <>
      <SEO
        title="Movement & Recovery Blog [Draft Library]"
        description="Evidence-based articles on personal training, myofascial release, joint mobility, and athletic longevity from Rachel D'Rozario in Stoney Creek."
      />

      {/* Hero */}
      <section className="bg-espresso border-b border-espresso-border py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-3">
              Movement Science & Recovery Library
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-cream mb-6">
              Movement Insights
            </h1>
            <p className="text-lg text-cream-muted leading-relaxed">
              Clear, practical perspectives on human biomechanics, strength progression, and active recovery. All articles are written by Rachel D'Rozario for the Stoney Creek athletic community.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-20 bg-espresso-surface border-b border-espresso-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-espresso-card border border-espresso-border rounded-lg overflow-hidden flex flex-col justify-between hover:border-burntOrange/60 transition-all shadow-xl group"
              >
                <div>
                  <div className="aspect-[16/9] overflow-hidden bg-espresso relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-espresso/90 border border-espresso-border text-burntOrange font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow">
                      {post.status}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-cream-dark font-mono uppercase">
                      <span>{post.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-burntOrange" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl font-display text-cream uppercase tracking-wide group-hover:text-burntOrange transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-cream-muted leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-espresso-border/40 mt-4 flex items-center justify-between">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs font-mono uppercase tracking-widest text-burntOrange hover:underline inline-flex items-center gap-1 font-bold"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-xs text-cream-dark">By {post.author}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
