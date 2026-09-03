import React from 'react';
import { Heart, Sparkles, MapPin, Smile, Users, ShoppingBag, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FDFBF7] scroll-mt-20 relative border-b border-[#F2EFE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Visual Collage */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
                  alt="Cozy craft making supplies and wooden tabletop projects at Dollar Delight LTD"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Secondary Overlapping Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 w-56 sm:w-64 bg-white p-4 rounded-2xl shadow-xl border border-[#F2EFE9]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[#D97706]">
                    <Heart className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
                  </span>
                  <span className="text-xs font-extrabold text-[#1A1A1A]">
                    Locally Cherished
                  </span>
                </div>
                <p className="text-[11px] text-gray-600 leading-snug">
                  Proudly serving Wetaskiwin families, crafters, students &amp; hobbyists with a smile.
                </p>
              </div>

              {/* Floating Pill */}
              <div className="absolute -top-3 -left-3 bg-[#2DD4BF] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 fill-white" />
                <span>Wetaskiwin, Alberta</span>
              </div>

            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FEF3C7] text-[#D97706] text-xs font-extrabold uppercase tracking-wider mb-4 border border-[#FDE68A]">
              <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
              <span>Our Story</span>
            </div>

            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1A1A] leading-tight flex items-center gap-3"
            >
              <span>Welcome to Dollar Delight LTD</span>
            </h2>

            {/* Requested Exact Copy */}
            <div className="mt-6 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-[#1A1A1A]">
                Dollar Delight LTD is Wetaskiwin's first craft, gift &amp; hobby dollar store, created for people who love discovering fun, useful, and creative finds at prices that make them smile.
              </p>

              <p className="text-gray-600">
                Whether you're starting a new DIY project, looking for a thoughtful gift, stocking up on craft supplies, or simply browsing for something delightful, we're here to make every visit a little more fun.
              </p>
            </div>

            {/* Core Values Bullet Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-[#F2EFE9] shadow-2xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 font-bold">
                  <ShoppingBag className="w-5 h-5 text-[#D97706]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A]">Affordable Creativity</h4>
                  <p className="text-xs text-gray-600 mt-0.5">High joy, small budget. Everyone can craft and decorate.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#F2EFE9] shadow-2xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#E0F2F1] text-[#0D9488] flex items-center justify-center shrink-0 font-bold">
                  <Users className="w-5 h-5 text-[#0D9488]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A1A]">Community First</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Bringing neighborly warmth and personalized care to Wetaskiwin.</p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Plan Your Visit to Wetaskiwin</span>
                <ArrowRight className="w-4 h-4 text-[#FBBF24]" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#FFFBEB] text-[#D97706] font-bold text-sm border-2 border-[#FBBF24] shadow-2xs"
              >
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
