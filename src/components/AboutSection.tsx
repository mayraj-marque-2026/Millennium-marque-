import React from 'react';
import { CheckCircle2, Car, Shield, Sparkles, MapPin, Users, Award } from 'lucide-react';
import { businessInfo, images } from '../data/businessData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0A0A0B] text-gray-200 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.03] border border-white/10 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>About Our Venue</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-4">
            {businessInfo.name}
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mb-6" />
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-light">
            Welcome to <strong className="text-white font-medium">{businessInfo.name}</strong> — Peshawar's distinguished address for unforgettable wedding celebrations, Barat & Walima receptions, engagement parties, and corporate galas.
          </p>
        </div>

        {/* Grid Layout: Photos & Key Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Photo Composition */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative overflow-hidden border border-white/10 bg-[#121214] group shadow-2xl">
              <img
                src={images.dayExterior}
                alt="Millennium Wedding Hall Daytime Exterior and Large Parking Compound"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <span className="px-3 py-1.5 bg-[#0A0A0B]/90 text-[#C5A059] text-xs font-semibold uppercase tracking-wider border border-white/10 flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Huge Car Parking Space</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 bg-[#0A0A0B]/90 px-2.5 py-1.5 border border-white/10">
                  Bilal Abad, Peshawar
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden border border-white/10 bg-[#121214] group shadow-lg">
                <img
                  src={images.illuminatedSign}
                  alt="Millennium Marquee Weddings & Events Illuminated Sign"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-[#0A0A0B]/30" />
                <span className="absolute bottom-2 left-2 text-[10px] uppercase tracking-widest font-medium text-gray-200 bg-[#0A0A0B]/90 px-2 py-1 border border-white/10">
                  Illuminated Entrance
                </span>
              </div>

              <div className="relative overflow-hidden border border-white/10 bg-[#121214] group shadow-lg">
                <img
                  src={images.loungeSeating}
                  alt="VIP Lounge Seating Area"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-[#0A0A0B]/30" />
                <span className="absolute bottom-2 left-2 text-[10px] uppercase tracking-widest font-medium text-gray-200 bg-[#0A0A0B]/90 px-2 py-1 border border-white/10">
                  VIP Tufted Seating
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Key Features & Text Description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#121214] p-6 sm:p-8 border border-white/10 shadow-2xl relative">
              <h3 className="font-serif text-2xl font-normal text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#C5A059]" />
                <span>Peshawar's Premier Venue Experience</span>
              </h3>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                Situated at <strong className="text-white font-medium">{businessInfo.address}</strong>, <strong className="text-[#C5A059] font-medium">{businessInfo.name}</strong> offers a grand, air-conditioned venue capable of hosting large gatherings with total comfort, elegance, and peace of mind.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Huge Car Parking Compound",
                  "Spacious Marquee & Hall",
                  "Royal Stage Decor & Lighting",
                  "Delicious Traditional Catering",
                  "Dedicated VIP Seating Area",
                  "Professional Banquet Waiters",
                  "Air-Conditioned Comfort",
                  "Central Bilal Abad Location"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stat Bar */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-[#121214] p-5 border border-white/5">
                <span className="block font-serif text-3xl text-[#C5A059] mb-1">4.1 ★</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">336 Reviews</span>
              </div>
              <div className="bg-[#121214] p-5 border border-white/5">
                <span className="block font-serif text-3xl text-[#C5A059] mb-1">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Secure Parking</span>
              </div>
              <div className="bg-[#121214] p-5 border border-white/5">
                <span className="block font-serif text-3xl text-[#C5A059] mb-1">1000+</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Guest Capacity</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
