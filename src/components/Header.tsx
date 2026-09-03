import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, MapPin, Menu, X, Heart, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface HeaderProps {
  onOpenContactModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'shop', 'featured', 'why-us', 'about', 'seasonal', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Shop', href: '#shop', id: 'shop' },
    { label: 'Featured', href: '#featured', id: 'featured' },
    { label: 'Why Dollar Delight', href: '#why-us', id: 'why-us' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#F2EFE9] py-2.5'
          : 'bg-white border-b border-[#F2EFE9] py-3.5'
      }`}
    >
      {/* Top micro announcement bar */}
      <div className="hidden md:block bg-[#FFF9EA] py-1.5 px-4 text-xs font-medium text-[#1A1A1A] border-b border-[#F2EFE9]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#FBBF24] text-white text-[10px] font-bold">
              ★
            </span>
            <span className="font-medium text-[#1A1A1A]">Wetaskiwin's first craft, gift &amp; hobby dollar store</span>
          </div>
          <div className="flex items-center gap-4 text-[#1A1A1A]">
            <a
              id="header-top-phone"
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 hover:text-[#D97706] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#D97706]" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <span className="text-[#F2EFE9]">|</span>
            <span className="inline-flex items-center gap-1 text-[#1A1A1A]/80">
              <MapPin className="w-3.5 h-3.5 text-[#2DD4BF]" />
              <span>{BUSINESS_INFO.location}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark matching theme */}
          <a
            id="brand-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FBBF24] rounded-lg p-1"
          >
            <div className="w-10 h-10 bg-[#FBBF24] rounded-full flex items-center justify-center shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold leading-tight tracking-tight text-[#1A1A1A]">
                Dollar Delight <span className="text-[#2DD4BF]">LTD</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest opacity-60 font-semibold text-[#1A1A1A]">
                Wetaskiwin, Alberta
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-[#D97706] bg-[#FEF3C7] font-bold'
                      : 'text-[#1A1A1A] hover:text-[#FBBF24] hover:bg-[#FFF9EA]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-cta-phone"
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#1A1A1A] bg-white border border-[#F2EFE9] hover:border-[#FBBF24] hover:bg-[#FFF9EA] transition-all"
              title="Call Dollar Delight"
            >
              <Phone className="w-3.5 h-3.5 text-[#D97706]" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>

            <a
              id="header-visit-button"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 bg-[#2DD4BF] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-[#1FB19F] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Visit Us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="p-2 rounded-full bg-[#FEF3C7] text-[#D97706] border border-[#FDE68A]"
              aria-label="Call store"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#F2EFE9] text-[#1A1A1A] hover:bg-[#FEF3C7] focus:outline-none focus:ring-2 focus:ring-[#FBBF24]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-white border-b border-[#F2EFE9] px-4 pt-3 pb-6 shadow-xl transition-all"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-${link.id}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-base font-semibold text-[#1A1A1A] hover:bg-[#FFF9EA] hover:text-[#D97706] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#F2EFE9] flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-[#1A1A1A]/80 bg-[#FFF9EA] p-3 rounded-2xl border border-[#F2EFE9]">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#2DD4BF]" />
                {BUSINESS_INFO.location}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                id="mobile-call-btn"
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-full text-sm font-bold bg-white text-[#1A1A1A] border border-[#F2EFE9] shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#D97706]" />
                <span>Call Us</span>
              </a>
              <a
                id="mobile-visit-btn"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-full text-sm font-bold bg-[#2DD4BF] text-white shadow-xs hover:bg-[#1FB19F]"
              >
                <span>Visit Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
