import React from 'react';
import { BOOKING_URL } from '../../config/site';
import { rachelContent } from '../../content/rachel';
import { Check } from 'lucide-react';

export const SoftMeetRachel: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#FFFBF8] border-b border-[#F6E8E1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        {/* Centred Circular Portrait */}
        <div className="relative inline-block mx-auto">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-xl border-4 border-white bg-[#F6E8E1] mx-auto">
            <img
              src={rachelContent.image}
              alt={rachelContent.name}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-2 right-4 bg-[#8FA58A] text-white rounded-full px-4 py-1 text-xs font-dm-sans font-semibold shadow">
            Coach Rachel
          </div>
        </div>

        {/* Letter-Style Intro Paragraph */}
        <div className="space-y-6 max-w-2xl mx-auto bg-[#F6E8E1]/60 p-8 sm:p-12 rounded-[32px] border border-[#F6E8E1] text-left">
          <div className="space-y-1">
            <span className="font-dm-sans text-xs uppercase tracking-widest text-[#8FA58A] font-semibold block">
              A Personal Note From Rachel
            </span>
            <h2 className="font-dm-serif text-3xl sm:text-4xl text-[#3B2F2A]">
              Moving With Warmth & Intent
            </h2>
          </div>

          <p className="font-dm-sans text-base text-[#3B2F2A]/85 leading-relaxed font-normal">
            {rachelContent.softLetterIntro}
          </p>

          <p className="font-dm-sans text-sm text-[#3B2F2A]/75 leading-relaxed font-light">
            {rachelContent.bio}
          </p>

          <div className="pt-2">
            <span className="font-dm-sans text-xs uppercase tracking-wider text-[#8FA58A] font-semibold block mb-2">
              Areas of Specialisation:
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3B2F2A]/80 font-dm-sans">
              {rachelContent.specialities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#8FA58A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Caveat Handwritten Signature */}
          <div className="pt-4 border-t border-[#3B2F2A]/10 flex items-center justify-between">
            <div>
              <p className="font-caveat text-4xl text-[#3B2F2A] font-bold">
                {rachelContent.softSignature}
              </p>
              <p className="font-dm-sans text-xs text-[#3B2F2A]/60">Founder, D'Rozario Fitness</p>
            </div>
            <a
              href={BOOKING_URL}
              className="rounded-full bg-[#3B2F2A] hover:bg-[#8FA58A] text-white px-6 py-2.5 text-xs font-dm-sans font-semibold transition-all shadow whitespace-nowrap"
            >
              Book with Rachel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
