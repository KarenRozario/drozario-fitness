import React from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { Clock, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';

export const Locations: React.FC = () => {
  return (
    <div className="bg-[#FAF7F2] text-[#1A1714]">
      <SEO
        title="Studio Location & Hours | Stoney Creek Women's Fitness"
        description="Visit D'Rozario Fitness in Stoney Creek, Ontario. Directions, studio amenities, and operating hours for women's fitness coaching."
      />

      {/* Hero Banner - Editorial Magazine Header */}
      <section className="relative min-h-[65vh] flex items-end pb-20 bg-[#1A1714] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/studio-stoney-creek.jpg"
            alt="Stoney Creek Studio Facility"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FAF7F2]/90 block mb-3">
              FACILITY & HOURS · STONEY CREEK
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#FAF7F2] tracking-tight leading-[1.05] mb-4">
              Studio Location
            </h1>
            <p className="text-lg sm:text-xl text-[#FAF7F2]/90 font-light max-w-[65ch] leading-[1.7]">
              Private women's fitness studio in Stoney Creek, Ontario. Welcoming, supportive, and baby-friendly.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Info & Map */}
      <section className="py-28 lg:py-36 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#F2ECE3] p-8 border border-[#1A1714]/15 space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#B4532A] block font-medium">
                  SANCTUARY
                </span>
                <h2 className="text-2xl font-serif text-[#1A1714]">
                  {siteConfig.name}
                </h2>
                <div className="space-y-1 text-sm text-[#1A1714]/80 font-light">
                  <p className="font-medium text-[#1A1714]">{siteConfig.address}</p>
                  <p>{siteConfig.city}, {siteConfig.province}, {siteConfig.country}</p>
                  <p className="text-xs text-[#1A1714]/60 font-mono pt-1">Postal Code: {siteConfig.postalCode}</p>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row gap-3">
                  <a
                    href={siteConfig.openStreetMapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial-outline text-center"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                  <a
                    href={BOOKING_URL}
                    className="btn-editorial-primary text-center"
                  >
                    Book a Session
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-[#F2ECE3] p-8 border border-[#1A1714]/15 space-y-4">
                <div className="flex items-center gap-2 text-[#1A1714]">
                  <Clock className="w-4 h-4 text-[#B4532A]" />
                  <h3 className="text-lg font-serif text-[#1A1714]">
                    Studio Hours
                  </h3>
                </div>
                <div className="divide-y divide-[#1A1714]/15 text-sm">
                  {siteConfig.hours.map((item, idx) => (
                    <div key={idx} className="py-2.5 flex justify-between text-xs sm:text-sm text-[#1A1714]/80">
                      <span className="font-medium text-[#1A1714]">{item.days}</span>
                      <span className="font-mono text-[#1A1714]/60">{item.times}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#1A1714]/60 font-light pt-2">
                  * All sessions and small group classes are scheduled in advance to ensure comfortable pacing and personal attention.
                </p>
              </div>

              {/* Direct Inquiries */}
              <div className="bg-[#FAF7F2] p-6 border border-[#1A1714]/15 space-y-2 text-xs text-[#1A1714]/80">
                <span className="font-mono uppercase tracking-wider text-[#B4532A] block mb-1 font-semibold">
                  Direct Inquiries
                </span>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#1A1714]" />
                  <span>{siteConfig.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#1A1714]" />
                  <span>{siteConfig.email}</span>
                </div>
              </div>
            </div>

            {/* Right Map Column (OpenStreetMap Embed - NO Google Maps) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="border border-[#1A1714]/15 bg-[#FAF7F2] shadow-sm">
                <div className="p-4 bg-[#1A1714] text-[#FAF7F2] flex items-center justify-between text-xs font-mono">
                  <span className="font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B4532A]" />
                    OpenStreetMap Embed · Stoney Creek, Ontario
                  </span>
                  <a
                    href={siteConfig.openStreetMapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FAF7F2]/75 hover:text-white inline-flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Full Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="w-full h-[460px] bg-[#F2ECE3]">
                  <iframe
                    title="OpenStreetMap Stoney Creek"
                    src={siteConfig.openStreetMapEmbedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Amenities */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-6 bg-[#F2ECE3] border border-[#1A1714]/15 text-xs space-y-1">
                  <span className="font-serif text-base text-[#1A1714] block">Baby Friendly</span>
                  <span className="text-[#1A1714]/70 font-light">Strollers and little ones welcome in studio.</span>
                </div>
                <div className="p-6 bg-[#F2ECE3] border border-[#1A1714]/15 text-xs space-y-1">
                  <span className="font-serif text-base text-[#1A1714] block">Private Facility</span>
                  <span className="text-[#1A1714]/70 font-light">Comfortable, judgement-free space for women.</span>
                </div>
                <div className="p-6 bg-[#F2ECE3] border border-[#1A1714]/15 text-xs space-y-1">
                  <span className="font-serif text-base text-[#1A1714] block">Easy Parking</span>
                  <span className="text-[#1A1714]/70 font-light">Dedicated on-site parking stalls.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
