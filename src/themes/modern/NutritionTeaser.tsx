import React from 'react';
import { Link } from 'react-router-dom';
import { nutritionContent } from '../../content/nutrition';
import { ArrowRight } from 'lucide-react';

export const ModernNutritionTeaser: React.FC = () => {
  return (
    <section className="bg-[#FF6B4A] text-white py-20 lg:py-28 border-b-2 border-[#2E1A47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-archivo font-black text-xs uppercase tracking-widest text-[#2E1A47] bg-white px-3.5 py-1 inline-block">
              {nutritionContent.kicker}
            </span>
            <h2 className="font-archivo font-black text-4xl sm:text-6xl uppercase tracking-tight leading-none text-white">
              {nutritionContent.headline}
            </h2>
            <p className="font-manrope text-base sm:text-lg text-white/95 max-w-[55ch] font-medium leading-relaxed">
              {nutritionContent.subhead}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {nutritionContent.whatItCovers.map((topic, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs font-manrope font-semibold text-white/90">
                  <div className="w-4 h-4 bg-[#2E1A47] text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                    ✓
                  </div>
                  <span>{topic.title}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                to="/nutrition"
                className="inline-flex items-center gap-2 bg-[#2E1A47] hover:bg-black text-white px-8 py-4 font-archivo font-black uppercase text-xs tracking-widest transition-colors shadow-lg whitespace-nowrap"
              >
                <span>Read Full Nutrition Syllabus</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Form Preview Card with "Apply Now" */}
          <div className="lg:col-span-5 bg-white text-[#2E1A47] p-8 sm:p-10 border-4 border-[#2E1A47] shadow-2xl space-y-6">
            <div className="space-y-2">
              <span className="font-archivo font-black text-xs uppercase tracking-wider text-[#FF6B4A]">
                {nutritionContent.formPreview.badge}
              </span>
              <h3 className="font-archivo font-black text-2xl sm:text-3xl uppercase tracking-tight">
                {nutritionContent.formPreview.title}
              </h3>
              <p className="font-manrope text-xs text-[#2E1A47]/80">
                {nutritionContent.formPreview.desc}
              </p>
            </div>

            <div className="space-y-3 bg-[#F1ECF8] p-5 border border-[#2E1A47]/20 font-manrope text-xs">
              <div className="flex justify-between py-1 border-b border-[#2E1A47]/10">
                <span className="font-bold">Format:</span>
                <span>1-on-1 Consultation + Habits</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#2E1A47]/10">
                <span className="font-bold">Focus:</span>
                <span>Pregnancy, Postpartum, Menopause</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-bold">Location:</span>
                <span>Stoney Creek, ON or Remote</span>
              </div>
            </div>

            <Link
              to="/nutrition#apply"
              className="w-full block text-center bg-[#FF6B4A] hover:bg-[#E55A3A] text-white py-4 font-archivo font-black uppercase text-xs tracking-widest transition-colors shadow-md"
            >
              {nutritionContent.formPreview.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
