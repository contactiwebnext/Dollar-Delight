import React from 'react';
import { Sparkles, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#1A1A1A] text-gray-300 pt-16 pb-12 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2A2A2A]">
          
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FBBF24] flex items-center justify-center text-[#1A1A1A] shadow-md font-bold">
                <Sparkles className="w-5 h-5 fill-[#1A1A1A] text-[#1A1A1A]" />
              </div>
              <div>
                <span className="font-display text-2xl font-extrabold text-white tracking-tight">
                  Dollar Delight
                </span>
                <span className="ml-1.5 text-xs font-bold px-2 py-0.5 rounded-full bg-[#FBBF24]/20 text-[#FBBF24] border border-[#FBBF24]/40">
                  LTD
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
              Wetaskiwin's first craft, gift &amp; hobby dollar store.
              From cozy yarn and DIY kits to notebooks and seasonal decor — all at prices that make you smile.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#FBBF24]">
              <span>{BUSINESS_INFO.trustTag}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">
              Explore Store
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
                  className="hover:text-[#FBBF24] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  onClick={(e) => { e.preventDefault(); scrollTo('#shop'); }}
                  className="hover:text-[#FBBF24] transition-colors"
                >
                  Shop Categories
                </a>
              </li>
              <li>
                <a
                  href="#featured"
                  onClick={(e) => { e.preventDefault(); scrollTo('#featured'); }}
                  className="hover:text-[#FBBF24] transition-colors"
                >
                  Today's Delightful Finds
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => { e.preventDefault(); scrollTo('#why-us'); }}
                  className="hover:text-[#FBBF24] transition-colors"
                >
                  Why Dollar Delight
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}
                  className="hover:text-[#FBBF24] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
                  className="hover:text-[#FBBF24] transition-colors"
                >
                  Contact &amp; Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider mb-4">
              Contact Information
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center gap-3 text-gray-300 hover:text-[#FBBF24] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#2A2A2A] flex items-center justify-center text-[#FBBF24] group-hover:bg-[#FBBF24]/20">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-[#2DD4BF] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#2A2A2A] flex items-center justify-center text-[#2DD4BF] group-hover:bg-[#2DD4BF]/20">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="break-all">{BUSINESS_INFO.email}</span>
              </a>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-[#2A2A2A] flex items-center justify-center text-[#F472B6]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{BUSINESS_INFO.location}</span>
              </div>
            </div>

            <div className="mt-6 p-3 rounded-2xl bg-[#262626] border border-[#333333] text-xs text-gray-400">
              <p className="font-semibold text-gray-200">Proudly serving Wetaskiwin</p>
              <p className="text-[11px] mt-0.5">Where creativity meets unbeatable everyday dollar value.</p>
            </div>
          </div>

        </div>

        {/* Center Aligned Footer Copyright & Attribution */}
        <div className="pt-8 text-center space-y-2">
          <p className="text-xs text-gray-400">
            &copy; 2026 Dollar Delight LTD. All rights reserved.
          </p>

          <p className="text-xs text-gray-400">
            Developed by{' '}
            <a
              href="https://iwebnext.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FBBF24] hover:text-[#FCD34D] font-semibold underline underline-offset-2 transition-colors"
            >
              iWebNext
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
