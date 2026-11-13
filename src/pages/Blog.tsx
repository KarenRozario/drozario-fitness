import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { SEO } from '../components/shared/SEO';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Prenatal & Postnatal', 'Postnatal Fitness', 'Menopause & Beyond'];

  const filteredPosts = selectedCategory === 'All'
    ? siteConfig.blogPosts
    : siteConfig.blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-white text-zinc-900">
      <SEO
        title="Women's Fitness & Life Stages Blog | Learn Library"
        description="Evidence-based articles on prenatal movement, postnatal core reconnection, and strength training through menopause from Rachel D'Rozario in Stoney Creek."
      />

      {/* Hero Banner - Covers 70vh */}
      <section className="relative min-h-[70vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blog-core-pelvic-floor.jpg"
            alt="Learn Library at D'Rozario Fitness"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-300 font-mono block mb-3">
              Movement Education & Science
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-4">
              Learn Library
            </h1>
            <p className="text-lg sm:text-2xl text-zinc-200 font-light max-w-2xl leading-relaxed">
              Evidence-based articles on pelvic floor coordination, maternal fitness, and midlife strength training.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter & Blog Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-2 font-mono">
              Curated Topics
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-zinc-900 mb-8 tracking-tight">
              Explore Our Articles
            </h2>

            {/* Category Filter Pills (Monochrome) */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-black text-white shadow-md'
                      : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-zinc-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-64 overflow-hidden bg-zinc-950">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-7 space-y-3">
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      {post.category} · {post.status}
                    </div>
                    <h3 className="text-xl font-light text-zinc-900 leading-snug group-hover:text-zinc-600 transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3 font-light">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0 border-t border-zinc-200/60 mt-4 flex items-center justify-between text-xs text-zinc-500">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-black font-semibold hover:underline"
                  >
                    Read article →
                  </Link>
                  <span className="font-mono">{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
