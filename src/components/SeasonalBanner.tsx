import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight, Check } from 'lucide-react';
import { SEASONAL_THEMES } from '../data';
import { SeasonalTheme } from '../types';

export const SeasonalBanner: React.FC = () => {
  const [selectedSeasonIndex, setSelectedSeasonIndex] = useState(0);
  const currentSeason = SEASONAL_THEMES[selectedSeasonIndex];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="seasonal" className="py-16 sm:py-20 bg-white border-b border-[#F2EFE9] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Banner Container */}
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#FBBF24] via-[#F59E0B] to-[#D97706] text-white shadow-xl p-8 sm:p-12 lg:p-16 border border-[#FDE68A]">
          
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#2DD4BF]/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-extrabold uppercase tracking-wider mb-4 border border-white/30">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>Rotates Throughout The Year</span>
              </div>

              {/* Main Heading */}
              <h2
                id="seasonal-heading"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight"
              >
                A Little More Delight for Every Season
              </h2>

              {/* Supporting Copy */}
              <p className="mt-4 text-base sm:text-lg text-amber-50 font-normal leading-relaxed max-w-xl">
                From holiday decorations to summer crafts and everything in between, there's always something new to discover.
              </p>

              {/* Seasonal Selector Tabs for easy preview and interactive engagement */}
              <div className="mt-6 flex flex-wrap gap-2">
                {SEASONAL_THEMES.map((season, idx) => {
                  const isSelected = selectedSeasonIndex === idx;
                  return (
                    <button
                      key={season.id}
                      type="button"
                      onClick={() => setSelectedSeasonIndex(idx)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-white text-[#D97706] shadow-md transform scale-105'
                          : 'bg-white/20 hover:bg-white/30 text-white border border-white/20'
                      }`}
                    >
                      <span>{season.icon}</span>
                      <span>{season.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Season Highlights */}
              <div className="mt-6 p-4 rounded-2xl bg-black/15 backdrop-blur-xs border border-white/15 max-w-xl">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-yellow-200 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Now Featuring: {currentSeason.title}</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-amber-100 mb-3">
                  {currentSeason.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentSeason.highlightItems.map((item, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/20 text-white flex items-center gap-1"
                    >
                      <Check className="w-3 h-3 text-yellow-300" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button: See What's New */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  id="seasonal-see-new-btn"
                  onClick={() => scrollTo('contact')}
                  className="px-7 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-sm shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
                >
                  <span>See What's New in Wetaskiwin</span>
                  <ArrowRight className="w-4 h-4 text-[#FBBF24]" />
                </button>

                <span className="text-xs text-amber-100 italic">
                  Ask our team about upcoming holiday deliveries!
                </span>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-white/10 aspect-4/3 lg:aspect-auto lg:h-96">
                <img
                  src={currentSeason.image}
                  alt={`${currentSeason.title} at Dollar Delight LTD in Wetaskiwin`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#2DD4BF] text-white inline-block mb-1 shadow-xs">
                    Season Spotlight
                  </span>
                  <p className="font-display text-lg font-bold">
                    {currentSeason.name} Specials
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
