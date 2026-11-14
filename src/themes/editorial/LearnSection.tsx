import React from 'react';
import { Link } from 'react-router-dom';
import { learnContent } from '../../content/learn';
import { ArrowRight } from 'lucide-react';

export const EditorialLearnSection: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#FAF7F2] border-b border-[#1A1714]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-[13px] uppercase tracking-[0.25em] text-[#B4532A] font-semibold block mb-3">
              {learnContent.kicker}
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif text-[#1A1714] tracking-tight">
              {learnContent.headline}
            </h2>
            <p className="text-[17px] text-[#1A1714]/75 mt-3 max-w-2xl font-light">
              {learnContent.subhead}
            </p>
          </div>
          <Link
            to="/blog"
            className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A1714] hover:text-[#B4532A] flex items-center gap-2 border-b border-[#1A1714] pb-1 shrink-0 whitespace-nowrap self-start md:self-auto"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learnContent.blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-[#FAF7F2] border border-[#1A1714]/15 overflow-hidden flex flex-col group"
            >
              <div className="aspect-[3/2] overflow-hidden bg-[#1A1714]/5 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-[#1A1714]/60 uppercase mb-2">
                    <span className="text-[#B4532A] font-medium">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1A1714] leading-snug group-hover:text-[#B4532A] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#1A1714]/75 mt-3 leading-relaxed font-light line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1A1714]/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-[#1A1714]/50">By {post.author}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="font-mono text-xs uppercase tracking-wider text-[#1A1714] group-hover:text-[#B4532A] flex items-center gap-1 font-medium whitespace-nowrap"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

