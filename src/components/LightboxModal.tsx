import React from 'react';
import { X, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { GalleryPhoto } from '../types';
import { businessInfo } from '../data/businessData';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0B]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Modal Container */}
      <div className="relative max-w-5xl w-full bg-[#121214] border border-white/10 shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#0A0A0B] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <h3 className="font-serif font-normal text-white text-lg">
              {photo.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close photo lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="relative flex-1 bg-[#0A0A0B] overflow-hidden flex items-center justify-center p-2 min-h-[300px]">
          <img
            src={photo.imageUrl}
            alt={photo.title}
            className="max-h-[65vh] w-auto object-contain shadow-xl"
          />
        </div>

        {/* Caption & Actions Footer */}
        <div className="p-4 sm:p-6 bg-[#121214] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] bg-white/[0.03] px-2.5 py-1 border border-white/10 inline-block mb-1.5">
              {photo.category}
            </span>
            <p className="text-gray-300 text-xs sm:text-sm font-light">
              {photo.description}
            </p>
          </div>

          <a
            href={`${businessInfo.whatsappLink}?text=${encodeURIComponent(`Hello! I saw the photo "${photo.title}" on your website and would like to inquire about booking Millennium Wedding Hall.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#C5A059] hover:bg-[#D4B573] text-[#0A0A0B] font-bold text-xs uppercase tracking-[0.2em] shadow-md flex items-center gap-2 transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire via WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
