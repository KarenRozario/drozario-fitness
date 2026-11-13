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
    <div className="bg-white text-slate-800">
      <SEO
        title="Women's Fitness & Life Stages Blog | Learn Library"
        description="Evidence-based articles on prenatal movement, postnatal core reconnection, and strength training through menopause from Rachel D'Rozario in Stoney Creek."
      />

      {/* Hero Banner */}
      <section className="relative min-h-[45vh] flex items-center bg-[#151A20] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blog-core-pelvic-floor.jpg"
            alt="Learn Library at D'Rozario Fitness"
            className="w-full h-full object-cover object-center opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141A22] via-[#141A22]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center sm:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
              Welcome to the Learn Library
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
              With a focus on education, our library is designed to show you that health and fitness are about more than just exercising. From breathwork and pelvic floor coordination to progressive strength loading in midlife, we support your body through every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter & Blog Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-light text-[#3B6B96] mb-8">
              Explore Our Articles
            </h2>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm text-slate-600">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#3B6B96] text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
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
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200/70 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 space-y-3">
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                      {post.category} · {post.status}
                    </div>
                    <h3 className="text-lg font-medium text-[#3B6B96] leading-snug hover:text-burntOrange transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-[#3B6B96] hover:text-burntOrange font-medium"
                  >
                    Read article →
                  </Link>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
