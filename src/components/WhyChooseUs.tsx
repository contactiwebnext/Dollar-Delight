import React from 'react';
import { Sparkles, Palette, Compass, HeartHandshake, Smile, Check } from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-600" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-teal-600" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-rose-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-orange-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-b border-[#F2EFE9] scroll-mt-20 relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-[#FEF3C7]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-72 h-72 rounded-full bg-[#E0F2F1]/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FEF3C7] text-[#D97706] text-xs font-extrabold uppercase tracking-wider mb-3 border border-[#FDE68A]">
            <Smile className="w-4 h-4 text-[#D97706]" />
            <span>The Dollar Delight Difference</span>
          </div>

          <h2
            id="why-choose-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1A1A] flex items-center justify-center gap-3"
          >
            <span className="w-8 h-[2px] bg-[#FBBF24] inline-block shrink-0"></span>
            <span>Why You'll Love Dollar Delight</span>
            <span className="w-8 h-[2px] bg-[#FBBF24] inline-block shrink-0"></span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            We built Dollar Delight LTD with a simple belief: creativity and joy should always be accessible.
            Here is what makes every trip through our doors a cheerful adventure.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              id={`feature-card-${item.id}`}
              className="group relative bg-[#FDFBF7] rounded-3xl p-7 border border-[#F2EFE9] shadow-xs hover:shadow-xl hover:border-[#FBBF24]/60 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div>
                {/* Icon wrapper */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-xs border border-white bg-white group-hover:scale-110 transition-transform"
                >
                  {getIcon(item.icon)}
                </div>

                <div className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-1">
                  0{index + 1}
                </div>

                {/* Card Title */}
                <h3 className="font-display text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#D97706] transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-gray-600 text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-[#F2EFE9] flex items-center text-xs font-bold text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#2DD4BF]" />
                  <span>Loved by Wetaskiwin makers</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Community Banner Quote */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-[#FFF9EA] border border-[#F2EFE9] p-6 sm:p-8 text-center flex flex-col sm:flex-row items-center gap-6 shadow-xs">
          <div className="w-14 h-14 rounded-full bg-[#2DD4BF] text-white flex items-center justify-center shrink-0 shadow-md">
            <HeartHandshake className="w-8 h-8" />
          </div>
          <div className="text-left">
            <h4 className="font-display text-lg sm:text-xl font-bold text-[#1A1A1A]">
              Wetaskiwin's Community Hub for Makers &amp; Crafters
            </h4>
            <p className="text-gray-600 text-sm mt-1">
              Whether you need three skeins of yarn for a weekend knit or party bags for a school celebration,
              we welcome every neighbor with friendly service and unbeatable value.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
