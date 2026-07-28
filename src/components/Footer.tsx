import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Sparkles, ArrowUp } from 'lucide-react';
import { businessInfo } from '../data/businessData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0B] text-gray-400 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C5A059] flex items-center justify-center text-[#0A0A0B] font-bold shadow-md">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-serif text-lg tracking-wider text-white">
                Millennium Wedding Hall
              </span>
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Premier Wedding & Events Venue in Bilal Abad, Peshawar. Offering spacious marquee halls, royal stage setups, custom catering, and huge car parking space.
            </p>

            <div className="flex items-center gap-2 text-xs font-medium text-[#C5A059]">
              <span>Rating: {businessInfo.rating}</span>
              <span>•</span>
              <span>{businessInfo.reviewCount} Reviews</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-normal text-white uppercase tracking-[0.2em]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-light">
              {['#about', '#services', '#gallery', '#reviews', '#contact'].map((href, idx) => {
                const labels = ['About Venue', 'Event Services', 'Photo Gallery', 'Guest Reviews', 'Booking & Location'];
                return (
                  <li key={idx}>
                    <a href={href} className="hover:text-[#C5A059] transition-colors">
                      {labels[idx]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Services Offered */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-normal text-white uppercase tracking-[0.2em]">
              Event Planning
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400 font-light">
              <li>• Wedding and Engagement</li>
              <li>• Gourmet Catering</li>
              <li>• Religious Wedding / Nikkah</li>
              <li>• Florist & Stage Decor</li>
              <li>• Wedding Lighting Services</li>
              <li>• Professional Waiters</li>
              <li>• Custom Budgeting</li>
            </ul>
          </div>

          {/* Col 4: Address & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-xs font-normal text-white uppercase tracking-[0.2em]">
              Google Map Location
            </h4>
            <div className="text-xs space-y-2.5 text-gray-400 font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{businessInfo.address}</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`} className="hover:text-[#C5A059] font-mono">
                  {businessInfo.phone}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={businessInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] font-mono">
                  WhatsApp: {businessInfo.whatsappNumber}
                </a>
              </p>

              <p className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{businessInfo.businessHours}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 uppercase tracking-widest font-light">
          <p>{businessInfo.copyright}</p>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 bg-white/5 border border-white/10 text-[#C5A059] hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
