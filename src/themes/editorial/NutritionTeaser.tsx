import React from 'react';
import { Link } from 'react-router-dom';
import { nutritionContent } from '../../content/nutrition';
import { ArrowRight } from 'lucide-react';

export const EditorialNutritionTeaser: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#FAF7F2] border-b border-[#1A1714]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Tall Portrait Image (4:5 Crop) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#1A1714]/5 border border-[#1A1714]/15 shadow-sm group">
              <img
                src={nutritionContent.image}
                alt="Women's nutrition coaching consultation with fresh whole foods and tea"
                width={500}
                height={625}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Editorial Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div>
              <span className="font-mono text-[13px] uppercase tracking-[0.25em] text-[#B4532A] font-semibold block mb-3">
                NO. 02 — NOURISHMENT
              </span>
              <h2 className="text-4xl sm:text-6xl font-serif text-[#1A1714] tracking-tight leading-tight">
                {nutritionContent.headline}
              </h2>
              <p className="text-[17px] text-[#1A1714]/75 mt-4 leading-[1.7] max-w-[65ch] font-light">
                {nutritionContent.subhead}
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#1A1714]/15">
              {nutritionContent.whatItCovers.map((topic, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="font-mono text-xs text-[#B4532A] uppercase tracking-wider block">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-lg text-[#1A1714] leading-snug">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-[#1A1714]/70 leading-relaxed font-light">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/nutrition"
                className="btn-editorial-primary whitespace-nowrap"
              >
                <span>Explore Nutrition Coaching</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/nutrition#apply"
                className="btn-editorial-outline whitespace-nowrap"
              >
                Apply For Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

