import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../config/site';
import { useBooking } from '../context/BookingContext';
import { SEO } from '../components/shared/SEO';
import { ArrowLeft, Clock } from 'lucide-react';

export const BlogPostDetail: React.FC = () => {
  const { openBooking } = useBooking();
  const { slug } = useParams<{ slug: string }>();
  const post = siteConfig.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-[#FAF7F2] text-[#1A1714]">
      <SEO
        title={`${post.title}`}
        description={post.excerpt}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="mb-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#1A1714]/60 hover:text-[#B4532A] transition-colors border-b border-[#1A1714]/20 pb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Learn Library</span>
          </Link>
        </div>

        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-3 text-xs text-[#B4532A] font-mono uppercase tracking-[0.2em]">
            <span>{post.category}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span>·</span>
            <span className="text-[#1A1714]/60 font-medium">{post.status}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#1A1714] leading-tight tracking-tight">
            {post.title}
          </h1>

          <p className="text-xs font-mono uppercase tracking-[0.15em] text-[#1A1714]/60 pt-2">
            By {post.author} · Women's Fitness Coach & Founder, D'Rozario Fitness
          </p>
        </div>

        {/* Featured Image */}
        <div className="aspect-[16/9] w-full overflow-hidden border border-[#1A1714]/15 mb-14 bg-[#F2ECE3]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>

        {/* Editorial Pull Excerpt */}
        <div className="p-8 sm:p-10 bg-[#F2ECE3] border-l-2 border-[#1A1714] mb-12">
          <p className="font-serif italic text-xl sm:text-2xl text-[#1A1714] leading-relaxed font-normal">
            {post.excerpt}
          </p>
        </div>

        {/* Post Content With Drop Cap On First Paragraph */}
        <div className="text-[#1A1714]/85 text-[17px] leading-[1.7] space-y-8">
          {post.sections.map((sec, idx) => (
            <div key={idx} className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1714] pt-4">
                {sec.heading}
              </h2>
              {sec.body.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className={`${idx === 0 && pIdx === 0 ? 'drop-cap' : ''} text-[#1A1714]/80 leading-[1.7] font-light max-w-[65ch]`}
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Editorial CTA Box */}
        <div className="mt-20 p-10 sm:p-14 bg-[#1A1714] text-[#FAF7F2] border border-[#1A1714] text-center space-y-4 shadow-xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FAF7F2]/60 block">
            PERSONAL TRAINING IN STONEY CREEK
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif text-[#FAF7F2] tracking-tight">
            Ready to Build Strength Through Every Stage?
          </h3>
          <p className="text-[15px] text-[#FAF7F2]/75 max-w-md mx-auto font-light leading-relaxed">
            Book your 1-on-1 consultation or small group session directly with Rachel D'Rozario.
          </p>
          <div className="pt-4">
            <a
              href={BOOKING_URL}
              onClick={(e) => {
                e.preventDefault();
                openBooking();
              }}
              className="inline-block bg-[#FAF7F2] hover:bg-[#B4532A] hover:text-[#FAF7F2] text-[#1A1714] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
            >
              Book a Session
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
