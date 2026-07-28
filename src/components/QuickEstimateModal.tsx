import React, { useState } from 'react';
import { X, Calculator, MessageCircle, Check, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/businessData';

interface QuickEstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickEstimateModal: React.FC<QuickEstimateModalProps> = ({ isOpen, onClose }) => {
  const [guests, setGuests] = useState(400);
  const [menuTier, setMenuTier] = useState<'standard' | 'royal' | 'executive'>('royal');
  const [stageDecor, setStageDecor] = useState<'grand' | 'royal_floral'>('royal_floral');
  const [includeAC, setIncludeAC] = useState(true);

  if (!isOpen) return null;

  // Approximate per-head estimates in PKR
  const menuPrices = {
    standard: 1800, // Traditional Chicken Biryani/Pulao, Korma, Naan, Salad, Kheer
    royal: 2400,    // Mutton/Beef Kabab, Special Biryani, Chicken Karahi, Naan, Desserts
    executive: 3200  // Full Live BBQ, Mutton Karahi, Fish, Special Drinks, Assorted Desserts
  };

  const perHeadCost = menuPrices[menuTier];
  const cateringTotal = guests * perHeadCost;
  const stageCost = stageDecor === 'grand' ? 75000 : 120000;
  const hallHallFee = 80000;
  const totalEstimate = cateringTotal + stageCost + hallHallFee;

  const handleWhatsAppSend = () => {
    const text = `Hello Millennium Wedding Hall!%0A%0A` +
      `I calculated an estimated event package on your website:%0A` +
      `• *Guest Count:* ${guests} Guests%0A` +
      `• *Catering Tier:* ${menuTier.toUpperCase()} Menu (PKR ${perHeadCost.toLocaleString()}/head)%0A` +
      `• *Stage & Lighting:* ${stageDecor === 'grand' ? 'Grand Stage Decor' : 'Royal Floral Arch Stage'}%0A` +
      `• *Hall & AC Service:* Included%0A` +
      `• *Estimated Budget:* PKR ${totalEstimate.toLocaleString()}%0A%0A` +
      `Please confirm venue availability and actual menu customization options. Thank you!`;

    window.open(`https://wa.me/923331441187?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0B]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative max-w-2xl w-full bg-[#121214] border border-white/10 shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-[#0A0A0B] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calculator className="w-5 h-5 text-[#C5A059]" />
            <div>
              <h3 className="font-serif font-normal text-white text-xl">
                Event Budget Calculator
              </h3>
              <p className="text-xs text-gray-400 font-light">Custom wedding & event package estimator for Millennium Hall</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Guest Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">Number of Guests</label>
              <span className="font-serif font-normal text-[#C5A059] text-xl">{guests} Guests</span>
            </div>
            <input
              type="range"
              min={100}
              max={1200}
              step={50}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full h-2 bg-[#0A0A0B] border border-white/10 appearance-none cursor-pointer accent-[#C5A059]"
            />
            <div className="flex justify-between text-[10px] uppercase tracking-widest text-gray-500 mt-2">
              <span>100 Guests</span>
              <span>600 Guests</span>
              <span>1200+ Guests</span>
            </div>
          </div>

          {/* Menu Tier */}
          <div>
            <label className="block text-xs font-bold text-[#C5A059] uppercase tracking-widest mb-3">
              Select Catering Menu Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { key: 'standard', name: 'Standard Banquet', price: '1,800', items: 'Biryani, Karahi, Naan, Sweet' },
                { key: 'royal', name: 'Royal Pakistani', price: '2,400', items: 'Seekh Kabab, Biryani, Karahi, Desserts' },
                { key: 'executive', name: 'Executive VIP', price: '3,200', items: 'BBQ Live, Mutton, Fish, Cold Drinks' },
              ].map((tier) => (
                <button
                  type="button"
                  key={tier.key}
                  onClick={() => setMenuTier(tier.key as any)}
                  className={`p-4 border text-left transition-colors ${
                    menuTier === tier.key
                      ? 'bg-white/[0.05] border-[#C5A059] text-white'
                      : 'bg-[#0A0A0B] border-white/10 text-gray-400 hover:border-white/20'
                  }`}
                >
                  <span className="block font-serif text-sm font-normal text-[#C5A059]">{tier.name}</span>
                  <span className="block text-xs font-bold font-mono text-white mt-1">PKR {tier.price} / head</span>
                  <span className="block text-[10px] text-gray-400 mt-1 font-light leading-snug">{tier.items}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Stage Decor */}
          <div>
            <label className="block text-xs font-bold text-[#C5A059] uppercase tracking-widest mb-3">
              Stage & Lighting Arrangement
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setStageDecor('grand')}
                className={`p-4 border text-left transition-colors ${
                  stageDecor === 'grand'
                    ? 'bg-white/[0.05] border-[#C5A059] text-white'
                    : 'bg-[#0A0A0B] border-white/10 text-gray-400 hover:border-white/20'
                }`}
              >
                <span className="block font-serif text-sm font-normal text-[#C5A059]">Grand Stage</span>
                <span className="block text-[10px] text-gray-400 mt-1 font-light leading-snug">Elegant sofa set, backdrop lights & carpet</span>
              </button>

              <button
                type="button"
                onClick={() => setStageDecor('royal_floral')}
                className={`p-4 border text-left transition-colors ${
                  stageDecor === 'royal_floral'
                    ? 'bg-white/[0.05] border-[#C5A059] text-white'
                    : 'bg-[#0A0A0B] border-white/10 text-gray-400 hover:border-white/20'
                }`}
              >
                <span className="block font-serif text-sm font-normal text-[#C5A059]">Royal Floral Arch Stage</span>
                <span className="block text-[10px] text-gray-400 mt-1 font-light leading-snug">Fresh flower arches, walkway decor & chandelier lighting</span>
              </button>
            </div>
          </div>

          {/* Estimated Calculation Breakdown */}
          <div className="bg-[#0A0A0B] p-5 border border-white/10 space-y-2 text-xs">
            <div className="flex justify-between text-gray-300 font-light">
              <span>Catering ({guests} guests × PKR {perHeadCost.toLocaleString()}):</span>
              <span className="font-mono text-white">PKR {cateringTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-300 font-light">
              <span>Stage & Lighting Decor:</span>
              <span className="font-mono text-white">PKR {stageCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-300 font-light">
              <span>Hall Rental & Waiter Service:</span>
              <span className="font-mono text-white">PKR {hallHallFee.toLocaleString()}</span>
            </div>

            <div className="pt-3 border-t border-white/10 flex justify-between items-center">
              <span className="font-serif text-base font-normal text-white">Estimated Total Package:</span>
              <span className="font-serif text-2xl font-normal text-[#C5A059]">
                PKR {totalEstimate.toLocaleString()}
              </span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 bg-[#0A0A0B] border-t border-white/10 flex items-center justify-between gap-4">
          <span className="text-[10px] uppercase tracking-wider text-gray-500 font-light hidden sm:inline">
            *Estimates subject to menu choices and date confirmation
          </span>

          <button
            onClick={handleWhatsAppSend}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#C5A059] hover:bg-[#D4B573] text-[#0A0A0B] font-bold text-xs uppercase tracking-[0.2em] shadow-lg flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Estimate via WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
