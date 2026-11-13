import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, BOOKING_URL } from '../../config/site';
import { ArrowRight, Heart, Sparkles, Shield, UserCheck } from 'lucide-react';

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
        return <Heart className="w-5 h-5 text-white" />;
      case 'new-baby':
        return <UserCheck className="w-5 h-5 text-white" />;
      case 'menopause':
        return <Sparkles className="w-5 h-5 text-white" />;
      case 'strong-50':
      default:
        return <Shield className="w-5 h-5 text-white" />;
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
              className={`p-6 rounded-2xl text-left transition-all duration-200 border-2 flex flex-col justify-between min-h-[150px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                isSelected
                  ? 'border-white bg-zinc-900 shadow-2xl translate-y-[-2px]'
                  : 'border-zinc-800 bg-zinc-950/70 hover:bg-zinc-900 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <div className="p-2 rounded-xl bg-black border border-zinc-800">
                  {getStageIcon(stage.id)}
                </div>
                {isSelected && (
                  <span className="text-[10px] font-mono text-black uppercase tracking-wider bg-white px-2 py-0.5 rounded-full font-semibold">
                    Selected
                  </span>
                )}
              </div>

              <div>
                <h3 className={`text-base font-semibold ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                  {stage.buttonLabel}
                </h3>
                <span className="text-xs text-zinc-400 block mt-1">
                  {stage.headline}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Program Summary Card - 50/50 Split Layout */}
      <div className="bg-white text-zinc-900 rounded-3xl border border-zinc-200 shadow-2xl p-8 sm:p-12 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider bg-zinc-100 text-zinc-800 px-3 py-1 rounded-full border border-zinc-200">
              <span>Recommended Path</span>
              <span>·</span>
              <span>{selectedStage.buttonLabel}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-light text-zinc-900 tracking-tight leading-tight">
              {selectedStage.headline}
            </h3>

            <p className="text-base text-zinc-600 leading-relaxed font-normal">
              {selectedStage.description}
            </p>

            {/* Key Focus Points */}
            <div className="pt-2 space-y-2.5">
              <span className="text-xs font-semibold text-zinc-900 uppercase tracking-wider block font-mono">
                What This Program Emphasizes:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedStage.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600">
                    <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">✓</div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical safety notice for prenatal & postnatal */}
            {matchedProgram?.medicalNotice && (
              <div className="p-3.5 rounded-xl bg-zinc-100 border border-zinc-200 text-xs text-zinc-700 leading-relaxed italic">
                <strong>Medical Notice:</strong> {matchedProgram.medicalNotice}
              </div>
            )}

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={BOOKING_URL}
                className="bg-black hover:bg-zinc-800 text-white px-7 py-3.5 rounded text-sm font-semibold transition-colors shadow-md"
              >
                Book a Session
              </a>
              <Link
                to={`/programs/${selectedStage.programSlug}`}
                className="inline-flex items-center gap-1.5 text-sm text-zinc-900 hover:text-zinc-600 font-semibold transition-colors py-2"
              >
                <span>Learn full program details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image (Covers Half the Card) */}
          <div className="lg:col-span-5 flex justify-center">
            {matchedProgram && (
              <div className="w-full max-w-[400px] rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-900 group">
                <div className="h-80 sm:h-96 w-full overflow-hidden">
                  <img
                    src={matchedProgram.image}
                    alt={matchedProgram.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-zinc-900 border-t border-zinc-800 text-xs text-zinc-300 flex items-center justify-between">
                  <span className="font-medium text-white">{matchedProgram.title}</span>
                  <span className="text-zinc-400 font-mono">1-on-1 & Small Group</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {isTeaser && (
          <div className="mt-8 pt-6 border-t border-zinc-100 text-center">
            <Link
              to="/find-your-program"
              className="text-xs font-mono uppercase tracking-wider text-black hover:underline inline-flex items-center gap-1.5 transition-colors"
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
