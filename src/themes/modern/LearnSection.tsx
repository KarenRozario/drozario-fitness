import React from 'react';
import { Link } from 'react-router-dom';
import { learnContent } from '../../content/learn';
import { ArrowRight } from 'lucide-react';

export const ModernLearnSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#FFFFFF] border-b-2 border-[#2E1A47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b-2 border-[#2E1A47]">
          <div className="space-y-2">
            <span className="font-archivo font-black text-xs uppercase tracking-widest text-[#FF6B4A]">
              {learnContent.kicker}
            </span>
            <h2 className="font-archivo font-black text-4xl sm:text-6xl text-[#2E1A47] uppercase tracking-tight">
              {learnContent.headline}
            </h2>
          </div>
          <Link
            to="/blog"
            className="font-archivo font-black text-xs uppercase tracking-widest text-[#FF6B4A] hover:underline flex items-center gap-1.5 shrink-0 whitespace-nowrap"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* List Rows (category · title · read time · →) Instead of Cards */}
        <div className="divide-y-2 divide-[#2E1A47] border-y-2 border-[#2E1A47]">
          {learnContent.blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="py-8 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#F1ECF8] transition-colors group block"
            >
              <div className="md:w-1/4">
                <span className="font-archivo font-black text-xs uppercase tracking-widest text-[#FF6B4A] bg-[#2E1A47] px-3 py-1 inline-block">
                  {post.category}
                </span>
              </div>

              <div className="md:w-1/2">
                <h3 className="font-archivo font-black text-xl sm:text-2xl text-[#2E1A47] uppercase group-hover:text-[#FF6B4A] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="font-manrope text-xs text-[#2E1A47]/70 mt-1 line-clamp-1 font-medium">
                  {post.excerpt}
                </p>
              </div>

              <div className="md:w-1/4 flex items-center justify-between md:justify-end gap-6 text-xs font-archivo font-bold uppercase text-[#2E1A47]/60">
                <span>{post.readTime}</span>
                <div className="w-10 h-10 bg-[#2E1A47] text-white flex items-center justify-center group-hover:bg-[#FF6B4A] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

