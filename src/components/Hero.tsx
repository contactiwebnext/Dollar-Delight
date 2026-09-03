import React, { useRef, useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Volume2, VolumeX } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

const HERO_VIDEO_URL = 'https://rurjyvb6c7idclyc.public.blob.vercel-storage.com/Create_video_for_dollar_store_202609032259.mp4';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const toggleAudio = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
    } else {
      setIsMuted((prev) => !prev);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#F2EFE9] pt-14 pb-18 lg:pt-24 lg:pb-28"
    >
      {/* Background Video with Warm Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={HERO_VIDEO_URL}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover object-center"
        />
        {/* Warm organic gradient overlay adjusted to make video 25% more visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9EA]/60 via-[#FDFBF7]/65 to-white/75" />
      </div>

      {/* Hero Video Audio Toggle Button */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">
        <button
          id="hero-audio-toggle-btn"
          type="button"
          onClick={toggleAudio}
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1A1A1A]/85 hover:bg-[#1A1A1A] text-white border border-white/20 backdrop-blur-md shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer text-xs font-semibold"
          aria-label={isMuted ? 'Unmute hero video audio' : 'Mute hero video audio'}
          title={isMuted ? 'Unmute video sound' : 'Mute video sound'}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-[#FBBF24] transition-transform group-hover:scale-110" />
              <span className="text-gray-200">Sound Off</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-[#2DD4BF] animate-pulse transition-transform group-hover:scale-110" />
              <span className="text-gray-200">Sound On</span>
            </>
          )}
        </button>
      </div>

      {/* Subtle decorative background shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#FEF3C7]/40 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-[#E0F2F1]/50 blur-3xl pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Location & category pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FEF3C7] text-[#D97706] rounded-full text-[11px] font-bold uppercase tracking-wider mb-5 border border-[#FDE68A]">
          <span className="flex h-2 w-2 rounded-full bg-[#D97706] animate-ping" />
          <span>Wetaskiwin's Creative Destination</span>
        </div>

        {/* Main Headline */}
        <h1
          id="hero-headline"
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.08] max-w-4xl mx-auto"
        >
          Craft. Create. Discover. <span className="text-[#FBBF24]">Delight.</span>
        </h1>

        {/* Supporting Text */}
        <p
          id="hero-supporting-text"
          className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Wetaskiwin's first craft, gift &amp; hobby dollar store — where creativity meets amazing value at prices that make you smile.
        </p>

        <p className="mt-2.5 text-sm sm:text-base text-gray-500 italic max-w-xl mx-auto">
          “{BUSINESS_INFO.description}”
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            id="hero-explore-btn"
            onClick={() => scrollTo('shop')}
            className="inline-flex items-center gap-2.5 bg-[#1A1A1A] text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:translate-y-[-2px] hover:bg-black transition-all cursor-pointer"
          >
            <span>Explore Our Finds</span>
            <ArrowRight className="w-5 h-5 text-[#FBBF24]" />
          </button>

          <button
            id="hero-contact-btn"
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 border-2 border-[#FBBF24] text-[#D97706] px-8 py-3.5 rounded-full font-bold hover:bg-[#FFFBEB] transition-all cursor-pointer"
          >
            <span>Contact Us</span>
          </button>
        </div>

        {/* Trust / Value Message */}
        <div
          id="hero-trust-badge"
          className="mt-10 pt-6 border-t border-[#F2EFE9] inline-flex flex-col sm:flex-row items-center justify-center gap-3 text-slate-700"
        >
          <div className="flex items-center gap-1.5 text-[#D97706] bg-[#FEF3C7] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
            <span>Our Promise</span>
          </div>
          <p className="text-sm font-semibold text-[#1A1A1A]">
            “{BUSINESS_INFO.trustTag}”
          </p>
        </div>

        {/* Quick feature points */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
            <span>Budget-Friendly DIY</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
            <span>All Ages &amp; Skill Levels</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#2DD4BF] shrink-0" />
            <span>Warm Local Service</span>
          </div>
        </div>
      </div>
    </section>
  );
};
