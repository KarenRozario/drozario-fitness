import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../../config/site';
import { Check, ArrowRight, Heart, Sparkles, Shield, UserCheck } from 'lucide-react';

interface FindYourProgramProps {
  isTeaser?: boolean;
}

export const FindYourProgram: React.FC<FindYourProgramProps> = ({ isTeaser = false }) => {
  const [selectedId, setSelectedId] = useState<string>('pregnant');

  const selectedStage =
    siteConfig.lifeStages.find((s) => s.id === selectedId) || siteConfig.lifeStages[0];

  const matchedProgram = siteConfig.programs.find(
    (p) => p.slug === selectedStage.programSlug
  );

  const getStageIcon = (id: string) => {
    switch (id) {
      case 'pregnant':
        return <Heart className="w-5 h-5 text-burntOrange" />;
      case 'new-baby':
        return <UserCheck className="w-5 h-5 text-[#3B6B96]" />;
      case 'menopause':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'strong-50':
      default:
        return <Shield className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* 4 Large Selectable Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        role="tablist"
        aria-label="Women's Life Stage Selection"
      >
        {siteConfig.lifeStages.map((stage) => {
          const isSelected = selectedStage.id === stage.id;
          return (
            <button
              key={stage.id}
              role="tab"
              aria-selected={isSelected}
              tabIndex={0}
              onClick={() => setSelectedId(stage.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedId(stage.id);
                }
              }}
              className={`p-6 rounded-2xl text-left transition-all duration-200 border-2 flex flex-col justify-between min-h-[140px] focus:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange ${
                isSelected
                  ? 'border-burntOrange bg-white shadow-lg ring-1 ring-burntOrange/30 translate-y-[-2px]'
                  : 'border-slate-200/90 bg-[#F8F9FA] hover:bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <div className="p-2 rounded-xl bg-white shadow-xs border border-slate-100">
                  {getStageIcon(stage.id)}
                </div>
                {isSelected && (
                  <span className="text-[11px] font-semibold text-burntOrange uppercase tracking-wider bg-burntOrange/10 px-2 py-0.5 rounded-full">
                    Selected
                  </span>
                )}
              </div>

              <div>
                <h3 className={`text-base font-semibold ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                  {stage.buttonLabel}
                </h3>
                <span className="text-xs text-slate-500 block mt-1">
                  {stage.headline}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Program Summary Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-8 sm:p-12 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-burntOrange uppercase tracking-wider bg-[#FFF7ED] px-3 py-1 rounded-full border border-burntOrange/20">
              <span>Recommended Path</span>
              <span>·</span>
              <span>{selectedStage.buttonLabel}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-light text-[#3B6B96] tracking-tight">
              {selectedStage.headline}
            </h3>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              {selectedStage.description}
            </p>

            {/* Key Focus Points */}
            <div className="pt-2 space-y-2.5">
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                What This Program Emphasizes:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedStage.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical safety notice for prenatal & postnatal */}
            {matchedProgram?.medicalNotice && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
                <strong>Medical Notice:</strong> {matchedProgram.medicalNotice}
              </div>
            )}

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={BOOKING_URL}
                className="bg-[#507C9E] hover:bg-[#416885] text-white px-7 py-3 rounded-md text-sm font-medium transition-colors shadow-sm"
              >
                Book a Session
              </a>
              <Link
                to={`/programs/${selectedStage.programSlug}`}
                className="inline-flex items-center gap-1.5 text-sm text-[#3B6B96] hover:text-burntOrange font-medium transition-colors py-2"
              >
                <span>Learn full program details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center">
            {matchedProgram && (
              <div className="w-full max-w-[360px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src={matchedProgram.image}
                  alt={matchedProgram.title}
                  className="w-full h-80 object-cover object-center"
                  loading="lazy"
                />
                <div className="p-4 bg-[#F8F9FA] border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span className="font-medium text-slate-800">{matchedProgram.title}</span>
                  <span className="text-[#3B6B96] font-semibold">1-on-1 & Small Group</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {isTeaser && (
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <Link
              to="/find-your-program"
              className="text-xs font-semibold uppercase tracking-wider text-[#3B6B96] hover:text-burntOrange inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Explore All Life Stage Options & FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
