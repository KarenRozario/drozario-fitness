import React from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { SEO } from '../components/shared/SEO';
import { Clock, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';

export const Locations: React.FC = () => {
  return (
    <div className="bg-white text-slate-800">
      <SEO
        title="Studio Location & Hours | Stoney Creek, Ontario"
        description="Visit D'Rozario Muscle Release in Stoney Creek, Ontario. Directions, studio amenities, and operating hours."
      />

      {/* Hero Banner */}
      <section className="relative min-h-[45vh] flex items-center bg-[#151A20] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/studio-stoney-creek.jpg"
            alt="Stoney Creek Studio Facility"
            className="w-full h-full object-cover object-center opacity-35"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141A22] via-[#141A22]/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white mb-4">
              Studio Location
            </h1>
            <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed max-w-xl">
              Private 1-on-1 personal training and muscle release facility in Stoney Creek, Ontario.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Info & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-slate-200 space-y-4">
                <h2 className="text-2xl font-light text-[#3B6B96]">
                  {siteConfig.name}
                </h2>
                <div className="space-y-1 text-sm text-slate-600">
                  <p className="font-medium text-slate-800">{siteConfig.address}</p>
                  <p>{siteConfig.city}, {siteConfig.province}, {siteConfig.country}</p>
                  <p className="text-xs text-slate-400">Postal Code: {siteConfig.postalCode}</p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={siteConfig.openStreetMapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 border border-slate-300 hover:border-slate-500 text-slate-700 px-5 py-2.5 rounded text-sm font-medium transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-burntOrange" />
                    <span>Get Directions</span>
                  </a>
                  <a
                    href={BOOKING_URL}
                    className="inline-flex items-center justify-center bg-[#507C9E] hover:bg-[#416885] text-white px-5 py-2.5 rounded text-sm font-medium transition-colors shadow-sm"
                  >
                    Book a Session
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 text-[#3B6B96]">
                  <Clock className="w-5 h-5 text-burntOrange" />
                  <h3 className="text-lg font-medium text-slate-900">
                    Operating Hours
                  </h3>
                </div>
                <div className="divide-y divide-slate-200 text-sm">
                  {siteConfig.hours.map((item, idx) => (
                    <div key={idx} className="py-2.5 flex justify-between text-xs sm:text-sm text-slate-600">
                      <span className="font-medium text-slate-700">{item.days}</span>
                      <span className="font-mono text-slate-500">{item.times}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400">
                  * All sessions are by private appointment to guarantee Rachel's undivided focus.
                </p>
              </div>

              {/* Direct Inquiries */}
              <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
                <span className="font-semibold text-slate-800 uppercase tracking-wider block mb-1">
                  Direct Contact
                </span>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-burntOrange" />
                  <span>{siteConfig.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-burntOrange" />
                  <span>{siteConfig.email}</span>
                </div>
              </div>
            </div>

            {/* Right Map Column (OpenStreetMap Embed - NO Google Maps) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <div className="p-3 bg-[#F8F9FA] border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <span className="font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    OpenStreetMap Embed · Stoney Creek, Ontario
                  </span>
                  <a
                    href={siteConfig.openStreetMapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3B6B96] hover:text-burntOrange font-medium inline-flex items-center gap-1"
                  >
                    <span>Full Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="w-full h-[440px] bg-slate-100">
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
                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-slate-200 text-xs">
                  <span className="font-semibold text-slate-800 block mb-1">Private Parking</span>
                  <span className="text-slate-500">Dedicated on-site parking stalls for clients.</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-slate-200 text-xs">
                  <span className="font-semibold text-slate-800 block mb-1">Private Facility</span>
                  <span className="text-slate-500">No crowds, spectators, or waiting for stations.</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F8F9FA] border border-slate-200 text-xs">
                  <span className="font-semibold text-slate-800 block mb-1">Sanitized Protocols</span>
                  <span className="text-slate-500">Equipment & tables sanitized after each session.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
