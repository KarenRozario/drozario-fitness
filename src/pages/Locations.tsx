import React from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { Clock, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';

export const Locations: React.FC = () => {
  return (
    <div className="bg-white text-zinc-900">
      <SEO
        title="Studio Location & Hours | Stoney Creek Women's Fitness"
        description="Visit D'Rozario Fitness in Stoney Creek, Ontario. Directions, studio amenities, and operating hours for women's fitness coaching."
      />

      {/* Hero Banner - Covers 70vh */}
      <section className="relative min-h-[70vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/studio-stoney-creek.jpg"
            alt="Stoney Creek Studio Facility"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-300 font-mono block mb-3">
              Facility & Hours
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-4">
              Studio Location
            </h1>
            <p className="text-lg sm:text-2xl text-zinc-200 font-light max-w-2xl leading-relaxed">
              Private women's fitness studio in Stoney Creek, Ontario. Welcoming, supportive, and baby-friendly.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Info & Map */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200 space-y-4">
                <h2 className="text-2xl font-light text-zinc-900">
                  {siteConfig.name}
                </h2>
                <div className="space-y-1 text-sm text-zinc-600">
                  <p className="font-semibold text-zinc-900">{siteConfig.address}</p>
                  <p>{siteConfig.city}, {siteConfig.province}, {siteConfig.country}</p>
                  <p className="text-xs text-zinc-500 font-mono">Postal Code: {siteConfig.postalCode}</p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={siteConfig.openStreetMapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 border border-zinc-300 hover:border-black text-zinc-900 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                  <a
                    href={BOOKING_URL}
                    className="inline-flex items-center justify-center bg-black hover:bg-zinc-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-md"
                  >
                    Book a Session
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200 space-y-4">
                <div className="flex items-center gap-2 text-zinc-900">
                  <Clock className="w-5 h-5 text-black" />
                  <h3 className="text-lg font-medium text-zinc-900">
                    Operating Hours
                  </h3>
                </div>
                <div className="divide-y divide-zinc-200 text-sm">
                  {siteConfig.hours.map((item, idx) => (
                    <div key={idx} className="py-2.5 flex justify-between text-xs sm:text-sm text-zinc-600">
                      <span className="font-medium text-zinc-800">{item.days}</span>
                      <span className="font-mono text-zinc-500">{item.times}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-zinc-500">
                  * All sessions and small group classes are scheduled in advance to ensure comfortable pacing and personal attention.
                </p>
              </div>

              {/* Direct Inquiries */}
              <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 space-y-2 text-xs text-zinc-600">
                <span className="font-semibold text-zinc-900 uppercase tracking-wider block mb-1 font-mono">
                  Direct Inquiries
                </span>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-black" />
                  <span>{siteConfig.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-black" />
                  <span>{siteConfig.email}</span>
                </div>
              </div>
            </div>

            {/* Right Map Column (OpenStreetMap Embed - NO Google Maps) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-3xl overflow-hidden border border-zinc-200 shadow-xl">
                <div className="p-3.5 bg-zinc-900 text-white flex items-center justify-between text-xs">
                  <span className="font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    OpenStreetMap Embed · Stoney Creek, Ontario
                  </span>
                  <a
                    href={siteConfig.openStreetMapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-300 hover:text-white font-medium inline-flex items-center gap-1 font-mono"
                  >
                    <span>Full Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="w-full h-[460px] bg-zinc-100">
                  <iframe
                    title="OpenStreetMap Stoney Creek"
                    src={siteConfig.openStreetMapEmbedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Amenities */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs">
                  <span className="font-semibold text-zinc-900 block mb-1">Baby Friendly</span>
                  <span className="text-zinc-500">Strollers and little ones welcome in studio.</span>
                </div>
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs">
                  <span className="font-semibold text-zinc-900 block mb-1">Private Facility</span>
                  <span className="text-zinc-500">Comfortable, judgement-free space for women.</span>
                </div>
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs">
                  <span className="font-semibold text-zinc-900 block mb-1">Easy Parking</span>
                  <span className="text-zinc-500">Dedicated on-site parking stalls.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
