import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { ThemePageHero } from '../themes';
import { ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Prenatal & Postnatal', 'Postnatal Fitness', 'Menopause & Beyond'];

  const filteredPosts = selectedCategory === 'All'
    ? siteConfig.blogPosts
    : siteConfig.blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#FAF7F2] text-[#1A1714]">
      <SEO
        title="Women's Fitness & Life Stages Blog | Learn Library"
        description="Evidence-based articles on prenatal movement, postnatal core reconnection, and strength training through menopause from Rachel D'Rozario in Stoney Creek."
      />

      {/* Dynamic Theme Page Hero */}
      <ThemePageHero
        title="Learn Library"
        kicker="MOVEMENT ESSAYS & RESEARCH · STONEY CREEK"
        description="Evidence-based guides on pelvic floor coordination, maternal fitness, and midlife strength training."
        image={`${import.meta.env.BASE_URL}images/blog-core-pelvic-floor.webp`}
      />

      {/* Category Filter & Magazine Article Cards */}
      <section className="py-24 sm:py-32 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B4532A] block mb-2 font-medium">
              CURATED TOPICS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1714] mb-8 tracking-tight">
              Explore Our Articles
            </h2>

            {/* Filter Buttons - Small-Caps Outline */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 text-xs font-mono uppercase tracking-[0.15em] transition-colors border ${
                    selectedCategory === cat
                      ? 'bg-[#1A1714] text-[#FAF7F2] border-[#1A1714]'
                      : 'bg-transparent text-[#1A1714]/75 border-[#1A1714]/15 hover:border-[#1A1714]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid - Magazine Style, Clean Whitespace */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[3/2] overflow-hidden border border-[#1A1714]/15 mb-6 bg-[#F2ECE3]">
                    <img
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="text-[11px] font-mono text-[#B4532A] uppercase tracking-[0.2em]">
                      {post.category} · {post.readTime}
                    </div>
                    <h3 className="text-2xl font-serif text-[#1A1714] leading-snug group-hover:text-[#B4532A] transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-[15px] text-[#1A1714]/70 leading-relaxed font-light line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#1A1714]/15 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#1A1714]/60">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-[#1A1714] hover:text-[#B4532A] font-medium inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span>{post.status}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
