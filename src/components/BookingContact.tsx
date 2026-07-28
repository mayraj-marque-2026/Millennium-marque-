import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Calendar, 
  Users, 
  Send, 
  CheckCircle2, 
  Building,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { businessInfo } from '../data/businessData';

export const BookingContact: React.FC = () => {
  const [eventType, setEventType] = useState('Wedding / Barat');
  const [guestCount, setGuestCount] = useState('300 - 500 Guests');
  const [eventDate, setEventDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [notes, setNotes] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Millennium Wedding Hall!%0A%0A` +
      `I would like to check availability and request a quote:%0A` +
      `• *Name:* ${customerName || 'Valued Guest'}%0A` +
      `• *Event Type:* ${eventType}%0A` +
      `• *Guest Capacity:* ${guestCount}%0A` +
      `• *Preferred Date:* ${eventDate || 'Flexible'}%0A` +
      (notes ? `• *Special Notes:* ${notes}%0A` : '') +
      `%0APlease let me know the booking details and pricing. Thank you!`;

    window.open(`https://wa.me/923331441187?text=${msg}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0B] text-gray-200 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.03] border border-white/10 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Building className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Booking & Contact</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-4">
            Book Your Event
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mb-6" />
          <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            Contact us today for instant availability, venue walkthroughs, and custom wedding package quotes in Peshawar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Venue Contact Details & Business Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="bg-[#121214] p-8 border border-white/10 shadow-2xl space-y-6">
              <h3 className="font-serif text-2xl font-normal text-white border-b border-white/5 pb-4">
                Venue Contact Details
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0A0A0B] border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">Address</span>
                  <p className="text-white text-sm font-medium mt-1">{businessInfo.address}</p>
                  <a
                    href="https://maps.google.com/?q=XH97%2B54G,+Bilal+Abad,+Peshawar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#C5A059] hover:underline mt-1 font-medium"
                  >
                    <span>Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0A0A0B] border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">Phone Call</span>
                  <a href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`} className="text-white text-base font-mono font-bold hover:text-[#C5A059] transition-colors block mt-1">
                    {businessInfo.phone}
                  </a>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500">Available 9:00 AM - 8:00 PM</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0A0A0B] border border-white/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">WhatsApp</span>
                  <a href={businessInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white text-base font-mono font-bold hover:text-[#C5A059] transition-colors block mt-1">
                    {businessInfo.whatsappNumber}
                  </a>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500">Instant WhatsApp Response</span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                <div className="w-10 h-10 bg-[#0A0A0B] border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">Business Hours</span>
                  <p className="text-white text-sm font-medium mt-1">{businessInfo.businessHours}</p>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Callout Banner */}
            <a
              href={businessInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 bg-[#C5A059] hover:bg-[#D4B573] text-[#0A0A0B] transition-colors shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] block text-[#0A0A0B]/80">Prefer Quick Chat?</span>
                  <h4 className="font-serif text-xl font-bold mt-1">Book Instantly via WhatsApp</h4>
                  <p className="text-xs text-[#0A0A0B]/80 mt-1 font-light">Direct response from Millennium Hall Management</p>
                </div>
                <MessageCircle className="w-8 h-8 fill-current shrink-0" />
              </div>
            </a>

          </div>

          {/* Right Column: Interactive WhatsApp Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121214] p-8 border border-white/10 shadow-2xl">
              
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-white">
                    Quick Booking Inquiry
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 font-light">Fill in your details to create a formatted WhatsApp booking request</p>
                </div>
                <div className="px-3 py-1 bg-white/[0.03] border border-white/10 text-[#C5A059] text-[10px] uppercase tracking-widest font-semibold">
                  Instant Response
                </div>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Your Full Name</label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Farhan Ali"
                      className="w-full px-4 py-3 bg-[#0A0A0B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Event Date</label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0A0A0B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Event Category</label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0A0A0B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Wedding / Barat">Wedding / Barat</option>
                      <option value="Walima Reception">Walima Reception</option>
                      <option value="Engagement Ceremony">Engagement Ceremony</option>
                      <option value="Anniversary Party">Anniversary Party</option>
                      <option value="Corporate / Conference">Corporate / Conference</option>
                      <option value="Religious Wedding / Nikkah">Religious Wedding / Nikkah</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Estimated Guest Count</label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0A0A0B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="100 - 250 Guests">100 - 250 Guests</option>
                      <option value="300 - 500 Guests">300 - 500 Guests</option>
                      <option value="500 - 800 Guests">500 - 800 Guests</option>
                      <option value="800 - 1200+ Guests">800 - 1200+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Special Requirements</label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mention preferences regarding stage decoration, flower themes, buffet menu, or parking..."
                    className="w-full px-4 py-3 bg-[#0A0A0B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C5A059] hover:bg-[#D4B573] text-[#0A0A0B] text-xs font-bold uppercase tracking-[0.2em] shadow-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-gray-400 pt-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Opens WhatsApp directly with pre-filled message</span>
                </div>

              </form>

            </div>
          </div>

        </div>

        {/* Embedded Google Maps Location */}
        <div className="mt-16 bg-[#121214] border border-white/10 shadow-2xl">
          <div className="p-6 bg-[#0A0A0B] flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#C5A059] shrink-0" />
              <div>
                <h4 className="font-serif font-normal text-white text-base">
                  Google Map Location
                </h4>
                <p className="text-xs text-gray-400 font-light">{businessInfo.address}</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=XH97%2B54G,+Bilal+Abad,+Peshawar"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#C5A059] hover:bg-[#D4B573] text-[#0A0A0B] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <span>Open Directions in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-80 bg-[#0A0A0B] relative">
            <iframe
              title="Millennium Wedding Hall Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5!2d71.55!3d34.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAwJzM2LjAiTiA3McKwMzMnMDAuMCJF!5e0!3m2!1sen!2spk!4v1600000000000!5m2!1sen!2spk"
              className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
