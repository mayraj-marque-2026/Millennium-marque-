import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingContact } from './components/BookingContact';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { QuickEstimateModal } from './components/QuickEstimateModal';
import { MessageCircle, Phone } from 'lucide-react';
import { businessInfo } from './data/businessData';
import { GalleryPhoto } from './types';

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [calculatorOpen, setCalculatorOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      
      {/* Navigation Header */}
      <Navbar onOpenBooking={() => setCalculatorOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenCalculator={() => setCalculatorOpen(true)} />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection onSelectService={(serviceName) => {
          window.open(`${businessInfo.whatsappLink}?text=${encodeURIComponent(`Hello! I would like to inquire about "${serviceName}" at Millennium Wedding Hall.`)}`, '_blank');
        }} />

        {/* Gallery Section */}
        <GallerySection onSelectPhoto={(photo) => setSelectedPhoto(photo)} />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Booking & Contact Section */}
        <BookingContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky Call & WhatsApp Buttons on Mobile */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
        <a
          href={businessInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 text-white shadow-2xl flex items-center justify-center hover:bg-emerald-400 transition-all hover:scale-110 border-2 border-emerald-300/40 group relative"
          aria-label="Book on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
          <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-stone-900 text-amber-200 text-xs font-bold rounded-lg border border-amber-500/30 whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        <a
          href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`}
          className="w-12 h-12 rounded-full bg-amber-500 text-stone-950 shadow-xl flex items-center justify-center hover:bg-amber-400 transition-all hover:scale-110 sm:hidden"
          aria-label="Call Venue"
        >
          <Phone className="w-5 h-5 fill-current" />
        </a>
      </div>

      {/* Lightbox Photo Modal */}
      <LightboxModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />

      {/* Quick Budget Calculator Modal */}
      <QuickEstimateModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
      />

    </div>
  );
}
