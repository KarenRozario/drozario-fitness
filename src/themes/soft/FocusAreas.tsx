import React from 'react';
import { focusAreasContent } from '../../content/focusAreas';
import { ShieldCheck, Dumbbell, Sparkles, HeartHandshake } from 'lucide-react';

export const SoftFocusAreas: React.FC = () => {
  const icons = [
    <ShieldCheck className="w-5 h-5 text-[#8FA58A]" />,
    <Dumbbell className="w-5 h-5 text-[#8FA58A]" />,
    <Sparkles className="w-5 h-5 text-[#8FA58A]" />,
    <HeartHandshake className="w-5 h-5 text-[#8FA58A]" />,
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#FFFBF8] border-b border-[#F6E8E1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-dm-sans text-xs uppercase tracking-widest text-[#8FA58A] font-semibold block">
            {focusAreasContent.kicker}
          </span>
          <h2 className="font-dm-serif text-3xl sm:text-5xl text-[#3B2F2A] tracking-tight">
            {focusAreasContent.headline}
          </h2>
          <p className="font-dm-sans text-base text-[#3B2F2A]/75 font-normal leading-relaxed">
            {focusAreasContent.subhead}
          </p>
        </div>

        {/* Two-Column List with Soft Circular Icons, NO Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {focusAreasContent.areas.map((area, idx) => (
            <div key={area.id} className="flex items-start gap-5">
              {/* Soft circular icon */}
              <div className="w-14 h-14 rounded-full bg-[#F6E8E1] shrink-0 flex items-center justify-center shadow-sm">
                {icons[idx]}
              </div>

              {/* Text block */}
              <div className="space-y-2">
                <span className="font-dm-sans text-xs uppercase tracking-wider text-[#8FA58A] font-semibold block">
                  Pillar {area.number}
                </span>
                <h3 className="font-dm-serif text-2xl text-[#3B2F2A] leading-snug">
                  {area.title}
                </h3>
                <p className="font-dm-sans text-sm text-[#3B2F2A]/80 leading-relaxed font-normal">
                  {area.description}
                </p>
                <ul className="pt-1 space-y-1 text-xs text-[#3B2F2A]/65 font-dm-sans">
                  {area.benefitsList.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8FA58A]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

