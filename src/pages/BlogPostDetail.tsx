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
    <div className="bg-white text-slate-800">
      <SEO
        title={`${post.title}`}
        description={post.excerpt}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-[#3B6B96] hover:text-burntOrange font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Healthy Living Library</span>
          </Link>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono uppercase">
            <span>{post.category}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
            <span>·</span>
            <span className="text-burntOrange font-semibold">{post.status}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-light text-[#3B6B96] leading-tight">
            {post.title}
          </h1>

          <p className="text-sm text-slate-500">
            By {post.author} · Founder & Head Coach, D'Rozario Muscle Release
          </p>
        </div>

        {/* Featured Image */}
        <div className="rounded-2xl overflow-hidden shadow-md mb-10 border border-slate-200">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-80 sm:h-96 object-cover object-center"
            loading="eager"
          />
        </div>

        {/* Post Content */}
        <div className="prose max-w-none text-slate-600 text-base sm:text-lg leading-relaxed space-y-6">
          <p className="text-xl text-slate-800 font-normal leading-relaxed border-l-4 border-[#3B6B96] pl-4 italic">
            {post.excerpt}
          </p>

          {post.sections.map((sec, idx) => (
            <div key={idx} className="space-y-3 pt-4">
              <h2 className="text-2xl font-light text-[#3B6B96]">
                {sec.heading}
              </h2>
              {sec.body.map((p, pIdx) => (
                <p key={pIdx} className="text-base text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-16 p-8 rounded-2xl bg-[#F8F9FA] border border-slate-200 text-center space-y-4">
          <h3 className="text-2xl font-light text-[#3B6B96]">
            Ready to Move Pain-Free in Stoney Creek?
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Book your 1-on-1 movement and recovery assessment directly with Rachel D'Rozario.
          </p>
          <div className="pt-2">
            <a
              href={BOOKING_URL}
              className="inline-block bg-[#507C9E] hover:bg-[#416885] text-white px-8 py-3.5 rounded text-sm font-medium transition-colors shadow-sm"
            >
              Book an Assessment Session
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
