import React from 'react';
import { Link } from 'react-router-dom';
import { nutritionContent } from '../../content/nutrition';
import { FileText, MessageCircle, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

export const SoftNutritionTeaser: React.FC = () => {
  const stepIcons = [
    <FileText className="w-5 h-5" />,
    <MessageCircle className="w-5 h-5" />,
    <Heart className="w-5 h-5" />,
    <CheckCircle2 className="w-5 h-5" />,
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#8FA58A] text-white border-b border-[#7D9478]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="font-dm-sans text-xs uppercase tracking-widest text-white/80 font-semibold block">
            {nutritionContent.kicker}
          </span>
          <h2 className="font-dm-serif text-3xl sm:text-5xl text-white tracking-tight">
            {nutritionContent.headline}
          </h2>
          <p className="font-dm-sans text-base sm:text-lg text-white/90 font-normal leading-relaxed">
            {nutritionContent.subhead}
          </p>
        </div>

        {/* Step Timeline (Apply → Consult → Guidance → Check-ins) with soft circular icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {nutritionContent.howItWorks.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 text-center space-y-3 border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-white text-[#8FA58A] flex items-center justify-center mx-auto shadow-md">
                {stepIcons[idx]}
              </div>
              <span className="font-dm-sans text-xs font-semibold uppercase tracking-wider text-white/70 block">
                Step 0{idx + 1}
              </span>
              <h3 className="font-dm-serif text-xl text-white">
                {item.title}
              </h3>
              <p className="font-dm-sans text-xs text-white/85 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/nutrition"
            className="rounded-full bg-white text-[#3B2F2A] hover:bg-[#F6E8E1] px-8 py-3.5 text-xs font-dm-sans font-semibold tracking-wide transition-all shadow-md flex items-center gap-2 whitespace-nowrap"
          >
            <span>Learn About Nutrition Coaching</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/nutrition#apply"
            className="rounded-full border-2 border-white text-white hover:bg-white/20 px-8 py-3.5 text-xs font-dm-sans font-semibold tracking-wide transition-all whitespace-nowrap"
          >
            Apply for Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};
