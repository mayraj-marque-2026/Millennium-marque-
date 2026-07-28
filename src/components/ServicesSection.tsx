import React from 'react';
import { 
  Heart, 
  Utensils, 
  PartyPopper, 
  Briefcase, 
  Sparkles, 
  Flower2, 
  Lightbulb, 
  UserCheck, 
  Calculator,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { servicesList, businessInfo } from '../data/businessData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart': return <Heart className="w-5 h-5 text-[#C5A059]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#C5A059]" />;
      case 'PartyPopper': return <PartyPopper className="w-5 h-5 text-[#C5A059]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#C5A059]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
      case 'Flower2': return <Flower2 className="w-5 h-5 text-[#C5A059]" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-[#C5A059]" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#C5A059]" />;
      case 'Calculator': return <Calculator className="w-5 h-5 text-[#C5A059]" />;
      default: return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0A0A0B] text-gray-200 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.03] border border-white/10 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Comprehensive Event Services</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-4">
            Services Offered
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mb-6" />
          <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            From complete wedding decor and gourmet catering to customized budgeting, Millennium Wedding Hall provides end-to-end event management.
          </p>
        </div>

        {/* 9 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service: ServiceItem, idx: number) => (
            <div
              key={service.id}
              className="bg-[#121214] p-8 border border-white/5 hover:border-[#C5A059]/40 transition-colors duration-300 flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 bg-white/[0.03] border border-white/10 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-gray-600 font-mono text-xs tracking-widest">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-normal text-white mb-3 group-hover:text-[#C5A059] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                  {service.description}
                </p>
              </div>

              {/* Inquire CTA */}
              <a
                href={`${businessInfo.whatsappLink}?text=${encodeURIComponent(`Hello! I would like to inquire about "${service.title}" at Millennium Wedding Hall.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-4 border-t border-white/5 text-xs font-semibold uppercase tracking-widest text-[#C5A059] hover:text-[#D4B573] flex items-center justify-between group/link"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform text-[#C5A059]" />
              </a>

            </div>
          ))}
        </div>

        {/* Custom Budgeting Banner */}
        <div className="mt-16 bg-[#121214] p-8 sm:p-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl font-normal text-white">
              Need a Custom Event Package & Menu Plan?
            </h3>
            <p className="text-gray-400 text-sm max-w-xl font-light">
              We tailor custom budgeting based on your guest count, seating layout, floral stage preferences, and traditional menu choices.
            </p>
          </div>
          
          <a
            href={businessInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#C5A059] hover:bg-[#D4B573] text-[#0A0A0B] text-xs font-bold uppercase tracking-[0.2em] shadow-xl flex items-center gap-2 transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with Wedding Planner</span>
          </a>
        </div>

      </div>
    </section>
  );
};
