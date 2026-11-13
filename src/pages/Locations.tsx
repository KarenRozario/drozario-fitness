import React from 'react';
import { siteConfig, BOOKING_URL } from '../config/site';
import { Button } from '../components/shared/Button';
import { SEO } from '../components/shared/SEO';
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink } from 'lucide-react';

export const Locations: React.FC = () => {
  return (
    <>
      <SEO
        title="Studio Location & Hours | Stoney Creek, Ontario"
        description="Visit D'Rozario Muscle Release in Stoney Creek, Ontario. Directions, studio amenities, and operating hours."
      />

      {/* Hero */}
      <section className="bg-espresso border-b border-espresso-border py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-burntOrange block mb-3">
              Private Athletic Facility
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-cream mb-6">
              Studio Location
            </h1>
            <p className="text-lg text-cream-muted leading-relaxed">
              Located in Stoney Creek, Ontario, serving athletes and recovery clients across Hamilton, Grimsby, Burlington, and the Niagara region. By appointment only for total privacy and focus.
            </p>
          </div>
        </div>
      </section>

      {/* Location Details & OpenStreetMap Embed */}
      <section className="py-20 bg-espresso-surface border-b border-espresso-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Address Card */}
              <div className="bg-espresso-card p-6 rounded-lg border border-espresso-border space-y-4">
                <div className="flex items-center gap-2 text-burntOrange">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase tracking-wider font-bold">
                    Primary Studio
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-display text-cream uppercase">
                    {siteConfig.name}
                  </h2>
                  <p className="text-base text-cream mt-1 font-medium">
                    {siteConfig.address}
                  </p>
                  <p className="text-sm text-cream-muted">
                    {siteConfig.city}, {siteConfig.province}, {siteConfig.country}
                  </p>
                  <p className="text-xs text-cream-dark mt-1">
                    Postal Code: {siteConfig.postalCode}
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Button
                    href={siteConfig.openStreetMapDirectionsUrl}
                    variant="outline"
                    size="sm"
                    external={true}
                    ariaLabel="Get directions via OpenStreetMap"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <Navigation className="w-3.5 h-3.5" />
                      Get Directions
                    </span>
                  </Button>
                  <Button
                    href={BOOKING_URL}
                    variant="primary"
                    size="sm"
                    ariaLabel="Book a session at this studio"
                  >
                    Book a Session
                  </Button>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-espresso-card p-6 rounded-lg border border-espresso-border space-y-4">
                <div className="flex items-center gap-2 text-burntOrange">
                  <Clock className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase tracking-wider font-bold">
                    Operating Hours
                  </span>
                </div>
                <div className="divide-y divide-espresso-border text-sm">
                  {siteConfig.hours.map((item, idx) => (
                    <div key={idx} className="py-2.5 flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-cream-muted font-medium">{item.days}</span>
                      <span className="text-cream font-mono">{item.times}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-cream-dark pt-1">
                  * All personal training and muscle release sessions are scheduled in advance to ensure undivided coach focus.
                </p>
              </div>

              {/* Direct Inquiries Card */}
              <div className="bg-espresso-card p-6 rounded-lg border border-espresso-border space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-burntOrange block">
                  Direct Inquiries
                </span>
                <div className="space-y-2 text-sm text-cream">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-burntOrange" />
                    <span>{siteConfig.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-burntOrange" />
                    <span>{siteConfig.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Map Column (OpenStreetMap Embed - NO Google Maps) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-espresso-card rounded-lg overflow-hidden border border-espresso-border shadow-2xl relative">
                <div className="p-3 bg-espresso border-b border-espresso-border flex items-center justify-between text-xs font-mono text-cream-dark">
                  <span className="flex items-center gap-2 text-cream">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    OpenStreetMap Embed · Stoney Creek
                  </span>
                  <a
                    href={siteConfig.openStreetMapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-burntOrange hover:underline inline-flex items-center gap-1"
                  >
                    <span>View full map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="w-full h-[420px] sm:h-[480px] bg-espresso relative">
                  <iframe
                    title="OpenStreetMap Location of Stoney Creek, Ontario"
                    src={siteConfig.openStreetMapEmbedUrl}
                    className="w-full h-full border-0 filter contrast-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 bg-espresso text-xs text-cream-muted border-t border-espresso-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <span>Interactive map provided via OpenStreetMap contributors</span>
                  <a
                    href={siteConfig.openStreetMapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-burntOrange font-mono hover:underline"
                  >
                    Open external directions →
                  </a>
                </div>
              </div>

              {/* Studio Amenities */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded bg-espresso-card border border-espresso-border text-xs">
                  <span className="font-semibold text-cream block mb-1">Private Parking</span>
                  <span className="text-cream-dark">Dedicated on-site parking stalls for all clients.</span>
                </div>
                <div className="p-3.5 rounded bg-espresso-card border border-espresso-border text-xs">
                  <span className="font-semibold text-cream block mb-1">Private Facility</span>
                  <span className="text-cream-dark">No crowds, spectators, or waiting for stations.</span>
                </div>
                <div className="p-3.5 rounded bg-espresso-card border border-espresso-border text-xs">
                  <span className="font-semibold text-cream block mb-1">Sanitized Protocols</span>
                  <span className="text-cream-dark">Treatment tables and lifting bars sanitized between visits.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
