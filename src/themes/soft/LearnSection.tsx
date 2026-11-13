import React from 'react';
import { Link } from 'react-router-dom';
import { learnContent } from '../../content/learn';
import { ArrowRight } from 'lucide-react';

export const SoftLearnSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#FFFBF8] border-b border-[#F6E8E1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="font-dm-sans text-xs uppercase tracking-widest text-[#8FA58A] font-semibold block">
              {learnContent.kicker}
            </span>
            <h2 className="font-dm-serif text-3xl sm:text-5xl text-[#3B2F2A] tracking-tight">
              {learnContent.headline}
            </h2>
            <p className="font-dm-sans text-base text-[#3B2F2A]/75 font-normal">
              {learnContent.subhead}
            </p>
          </div>
          <Link
            to="/blog"
            className="rounded-full border border-[#3B2F2A] text-[#3B2F2A] hover:bg-[#3B2F2A] hover:text-white px-6 py-2.5 text-xs font-dm-sans font-semibold transition-all shrink-0 self-start sm:self-auto whitespace-nowrap"
          >
            All Articles →
          </Link>
        </div>

        {/* 3 Cards with Rounded Images & Tag Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learnContent.blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-[28px] overflow-hidden border border-[#F6E8E1] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                {/* Rounded Image */}
                <div className="relative aspect-[3/2] overflow-hidden bg-[#F6E8E1] p-3">
                  <div className="w-full h-full rounded-[20px] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  {/* Tag Pill */}
                  <span className="absolute top-6 left-6 rounded-full px-3.5 py-1 text-xs font-dm-sans font-semibold bg-white/95 text-[#8FA58A] shadow-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <span className="font-dm-sans text-xs text-[#3B2F2A]/50 block">
                    {post.readTime}
                  </span>
                  <h3 className="font-dm-serif text-xl sm:text-2xl text-[#3B2F2A] group-hover:text-[#8FA58A] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-dm-sans text-sm text-[#3B2F2A]/75 leading-relaxed line-clamp-3 font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#F6E8E1] mt-4 flex items-center justify-between">
                <span className="font-dm-sans text-xs text-[#3B2F2A]/60">By {post.author}</span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xs font-dm-sans font-semibold text-[#8FA58A] hover:underline flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

