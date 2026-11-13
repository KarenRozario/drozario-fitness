import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { ArrowLeft, Clock } from 'lucide-react';

export const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = siteConfig.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-white text-zinc-900">
      <SEO
        title={`${post.title}`}
        description={post.excerpt}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Learn Library</span>
          </Link>
        </div>

        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono uppercase">
            <span>{post.category}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
            <span>·</span>
            <span className="text-black font-semibold">{post.status}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-light text-zinc-900 leading-tight tracking-tight">
            {post.title}
          </h1>

          <p className="text-sm text-zinc-500 font-light">
            By {post.author} · Women's Fitness Coach & Founder, D'Rozario Fitness
          </p>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 border border-zinc-200 bg-zinc-950">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 sm:h-[460px] object-cover object-center"
            loading="eager"
          />
        </div>

        {/* Post Content */}
        <div className="prose max-w-none text-zinc-600 text-base sm:text-lg leading-relaxed space-y-6">
          <p className="text-xl text-zinc-900 font-normal leading-relaxed border-l-4 border-black pl-5 italic">
            {post.excerpt}
          </p>

          {post.sections.map((sec, idx) => (
            <div key={idx} className="space-y-3 pt-6">
              <h2 className="text-2xl sm:text-3xl font-light text-zinc-900">
                {sec.heading}
              </h2>
              {sec.body.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-zinc-600 leading-relaxed font-light">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-16 p-10 rounded-3xl bg-zinc-950 text-white border border-zinc-800 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-light tracking-tight">
            Ready to Build Strength in Stoney Creek?
          </h3>
          <p className="text-sm text-zinc-300 max-w-md mx-auto font-light">
            Book your 1-on-1 consultation or small group session directly with Rachel D'Rozario.
          </p>
          <div className="pt-2">
            <a
              href={BOOKING_URL}
              className="inline-block bg-white hover:bg-zinc-200 text-black px-8 py-3.5 rounded text-sm font-semibold transition-colors shadow-md"
            >
              Book a Session
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
