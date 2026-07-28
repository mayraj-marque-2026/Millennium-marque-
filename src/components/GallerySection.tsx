import React, { useState } from 'react';
import { Sparkles, Maximize2, Camera, Car, Flower, Eye } from 'lucide-react';
import { galleryPhotos } from '../data/businessData';
import { GalleryPhoto } from '../types';

interface GallerySectionProps {
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectPhoto }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hall' | 'exterior' | 'stage' | 'lounge'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'exterior', label: 'Exterior & Parking' },
    { id: 'hall', label: 'Main Marquee Hall' },
    { id: 'stage', label: 'Stage & Walkway' },
    { id: 'lounge', label: 'VIP Lounge' },
  ];

  const filteredPhotos = activeFilter === 'all' 
    ? galleryPhotos 
    : galleryPhotos.filter(photo => photo.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-[#0A0A0B] text-gray-200 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.03] border border-white/10 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Camera className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Venue Photo Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-4">
            Venue Gallery
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mb-6" />
          <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            Explore authentic photos of Millennium Wedding Hall, including our spacious indoor marquee, grand stage arrangements, VIP seating, and extensive car parking compound.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] transition-colors ${
                activeFilter === tab.id
                  ? 'bg-[#C5A059] text-[#0A0A0B]'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className="group relative bg-[#121214] border border-white/10 cursor-pointer overflow-hidden shadow-xl"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[#C5A059] text-[9px] font-bold uppercase tracking-[0.2em] bg-[#0A0A0B]/90 px-2 py-0.5 border border-white/10">
                    {photo.category}
                  </span>
                  <div className="w-7 h-7 bg-[#C5A059] text-[#0A0A0B] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="font-serif text-lg text-white group-hover:text-[#C5A059] transition-colors">
                  {photo.title}
                </h3>
                <p className="text-gray-400 text-xs line-clamp-2 mt-1 font-light">
                  {photo.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 text-center text-xs uppercase tracking-widest text-gray-400">
          <span>Click on any photo to expand and view in full size</span>
        </div>

      </div>
    </section>
  );
};
