import React from 'react';
import { BOOKING_URL } from '../../config/site';
import { rachelContent } from '../../content/rachel';
import { Check } from 'lucide-react';

export const EditorialMeetRachel: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 bg-[#FAF7F2] border-b border-[#1A1714]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait Photo with Asymmetric Frame */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden border border-[#1A1714]/20 shadow-xl bg-[#F2ECE3]">
              <img
                src={rachelContent.image}
                alt={rachelContent.name}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-[#FAF7F2]">
                <p className="font-serif text-lg text-white">{rachelContent.name}</p>
                <p className="text-[11px] font-mono tracking-widest text-[#FAF7F2]/80 uppercase">{rachelContent.role}</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-[#1A1714]/50 font-mono tracking-wider">
              {rachelContent.certifications}
            </p>
          </div>

          {/* Right Column: Editorial Text with Drop Cap */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="font-mono text-[13px] uppercase tracking-[0.25em] text-[#B4532A] font-semibold block mb-2">
                FOUNDER & HEAD COACH
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1A1714] tracking-tight">
                Meet {rachelContent.name}
              </h2>
            </div>

            {/* Paragraph with Drop Cap */}
            <p className="drop-cap text-[17px] text-[#1A1714]/85 leading-[1.75] font-light">
              {rachelContent.bio}
            </p>

            {/* Specialities Editorial Box */}
            <div className="bg-[#F2ECE3] p-8 border border-[#1A1714]/15 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1A1714] font-medium block">
                Coaching Focus & Specialisations
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#1A1714]/80 font-light">
                {rachelContent.specialities.map((spec, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#B4532A] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={BOOKING_URL}
                className="btn-editorial-primary whitespace-nowrap"
              >
                Book a Session with Rachel
              </a>
              <span className="text-xs text-[#1A1714]/60 font-mono">
                Stoney Creek Studio & Private Pods
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

