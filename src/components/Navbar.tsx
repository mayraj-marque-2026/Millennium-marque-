import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/businessData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-[#0A0A0B] text-gray-300 text-xs py-2 px-4 hidden sm:block border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              {businessInfo.address}
            </span>
            <span className="flex items-center gap-1.5 font-medium text-[#C5A059]">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              {businessInfo.businessHours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`}
              className="text-gray-300 hover:text-[#C5A059] transition-colors flex items-center gap-1.5 font-mono text-xs"
            >
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span>{businessInfo.phone}</span>
            </a>
            <span className="text-white/20">|</span>
            <a 
              href={businessInfo.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:text-[#D4B573] transition-colors font-semibold flex items-center gap-1 text-xs uppercase tracking-wider"
            >
              <MessageCircle className="w-3 h-3 text-[#C5A059]" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A0A0B]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/10' 
          : 'bg-gradient-to-b from-[#0A0A0B]/90 via-[#0A0A0B]/70 to-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-sm bg-[#C5A059] flex items-center justify-center font-serif text-[#0A0A0B] font-bold text-xl shadow-md group-hover:bg-[#D4B573] transition-colors">
              M
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-widest uppercase text-white group-hover:text-[#C5A059] transition-colors block leading-none">
                Millennium
              </span>
              <span className="text-[9px] tracking-[0.25em] uppercase font-semibold text-[#C5A059] block mt-1">
                Wedding Hall & Events
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] font-medium text-gray-300 hover:text-[#C5A059] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C5A059] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`}
              className="px-4 py-2.5 rounded-none bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 text-xs font-medium uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Call Us</span>
            </a>

            <a
              href={businessInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-none bg-[#C5A059] hover:bg-[#D4B573] text-[#0A0A0B] text-xs font-bold uppercase tracking-[0.15em] shadow-lg flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#C5A059]" /> : <Menu className="w-6 h-6 text-gray-300" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A0A0B] border-b border-white/10 px-6 pt-4 pb-6 mt-2 space-y-4 animate-fadeIn shadow-2xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs uppercase tracking-widest text-gray-200 hover:bg-white/5 hover:text-[#C5A059] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={businessInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#C5A059] hover:bg-[#D4B573] text-[#0A0A0B] font-bold text-xs uppercase tracking-[0.2em] text-center flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Now on WhatsApp</span>
              </a>

              <a
                href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`}
                className="w-full py-3 bg-white/5 hover:bg-white/10 text-gray-200 text-xs uppercase tracking-wider font-semibold text-center flex items-center justify-center gap-2 border border-white/10"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call {businessInfo.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
