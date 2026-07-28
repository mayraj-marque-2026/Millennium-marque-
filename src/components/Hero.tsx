import React from 'react';
import { MessageCircle, Star, MapPin, Sparkles, ShieldCheck, Car, Users, Calendar } from 'lucide-react';
import { businessInfo, images } from '../data/businessData';

interface HeroProps {
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCalculator }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A0A0B]">
      {/* Background Hero Banner Image with Elegant Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.heroBanner}
          alt="Millennium Wedding Hall Illuminated Exterior at Night"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/80 to-[#0A0A0B]/60" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] backdrop-blur-md border border-white/10 text-[#C5A059] text-xs font-semibold mb-8 shadow-2xl animate-fadeIn tracking-wider uppercase">
          <div className="flex items-center text-[#C5A059]">
            <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
            <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
            <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
            <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
            <Star className="w-3.5 h-3.5 fill-[#C5A059]/40" />
          </div>
          <span className="font-bold text-white ml-1">{businessInfo.rating}</span>
          <span className="text-gray-400">({businessInfo.reviewCount} Reviews)</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal text-white tracking-tight leading-[0.95] mb-6">
          Millennium <br/>
          <span className="text-[#C5A059]">Wedding</span> <br className="sm:hidden" />
          Hall
        </h1>

        {/* Sub Heading */}
        <p className="text-base sm:text-xl md:text-2xl text-gray-300 font-serif italic max-w-2xl mx-auto mb-10 leading-relaxed">
          {businessInfo.subheading}
        </p>

        {/* Key Venue Highlights */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs text-gray-300 uppercase tracking-widest font-medium mb-10 max-w-3xl mx-auto">
          <span className="px-3.5 py-2 bg-white/[0.03] border border-white/10 flex items-center gap-2">
            <Car className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Huge Car Parking Space</span>
          </span>
          <span className="px-3.5 py-2 bg-white/[0.03] border border-white/10 flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Spacious Capacity</span>
          </span>
          <span className="px-3.5 py-2 bg-white/[0.03] border border-white/10 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Bilal Abad, Peshawar</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          {/* Primary Button */}
          <a
            href={businessInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#C5A059] hover:bg-[#D4B573] text-[#0A0A0B] text-xs font-bold uppercase tracking-[0.2em] transition-colors shadow-2xl flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Book Now on WhatsApp</span>
          </a>

          {/* Secondary Button - Quick Package Estimator */}
          <button
            onClick={onOpenCalculator}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-gray-200 text-xs font-bold uppercase tracking-[0.15em] border border-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            <span>Calculate Event Budget</span>
          </button>
        </div>

        {/* Location Note */}
        <div className="mt-12 text-[11px] uppercase tracking-widest text-gray-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
          <span>Direct Venue Booking • No Commission Fees • Instant Response</span>
        </div>

      </div>

      {/* Bottom Subtle Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0A0A0B] to-transparent pointer-events-none" />
    </section>
  );
};
