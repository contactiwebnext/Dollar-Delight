import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data';
import { Category } from '../types';

interface CategoryGridProps {
  onSelectCategory?: (categoryName: string) => void;
}

const CATEGORY_THEMES: Record<string, { cardBg: string; hoverBg: string; accentColor: string; emojiBg: string }> = {
  'Yarn & Crafts': {
    cardBg: 'bg-[#FEF3C7]/40',
    hoverBg: 'group-hover:bg-[#FEF3C7]',
    accentColor: 'text-[#D97706]',
    emojiBg: 'bg-[#FEF3C7] group-hover:bg-[#FDE68A]',
  },
  'DIY Kits': {
    cardBg: 'bg-[#E0F2F1]/40',
    hoverBg: 'group-hover:bg-[#E0F2F1]',
    accentColor: 'text-[#0D9488]',
    emojiBg: 'bg-[#E0F2F1] group-hover:bg-[#B2DFDB]',
  },
  'Stationery & Notebooks': {
    cardBg: 'bg-[#FCE7F3]/40',
    hoverBg: 'group-hover:bg-[#FCE7F3]',
    accentColor: 'text-[#DB2777]',
    emojiBg: 'bg-[#FCE7F3] group-hover:bg-[#FBCFE8]',
  },
  'Gifts & Goodies': {
    cardBg: 'bg-[#FFF7ED]/40',
    hoverBg: 'group-hover:bg-[#FFF7ED]',
    accentColor: 'text-[#EA580C]',
    emojiBg: 'bg-[#FFF7ED] group-hover:bg-[#FFEDD5]',
  },
  'Seasonal Decor': {
    cardBg: 'bg-[#ECFDF5]/40',
    hoverBg: 'group-hover:bg-[#ECFDF5]',
    accentColor: 'text-[#059669]',
    emojiBg: 'bg-[#ECFDF5] group-hover:bg-[#D1FAE5]',
  },
  'Hobby & Fun': {
    cardBg: 'bg-[#EEF2FF]/40',
    hoverBg: 'group-hover:bg-[#EEF2FF]',
    accentColor: 'text-[#4F46E5]',
    emojiBg: 'bg-[#EEF2FF] group-hover:bg-[#E0E7FF]',
  },
};

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (categoryName: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryName);
    }
    const featuredEl = document.getElementById('featured');
    if (featuredEl) {
      featuredEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="shop" className="py-16 sm:py-20 bg-white border-b border-[#F2EFE9] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Warm Organic Accent bar */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#D97706] text-xs font-extrabold uppercase tracking-wider mb-3 border border-[#FDE68A]">
            <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
            <span>Shop Our Aisles</span>
          </div>

          <h2
            id="categories-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1A1A] flex items-center justify-center gap-3"
          >
            <span className="w-8 h-[2px] bg-[#FBBF24] inline-block shrink-0"></span>
            <span>Something for Every Creative Corner</span>
            <span className="w-8 h-[2px] bg-[#FBBF24] inline-block shrink-0"></span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            Whether you are picking up a crochet hook for the first time, shopping for a birthday gift,
            or stocking up on family craft supplies — discover aisles full of delightful options in Wetaskiwin.
          </p>
        </div>

        {/* 6 Warm Organic Category Cards Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10">
          <div onClick={() => handleCategoryClick('Yarn & Crafts')} className="group cursor-pointer p-3 rounded-2xl bg-[#FDFBF7] border border-[#F2EFE9] hover:border-[#FBBF24] hover:shadow-md transition-all text-center">
            <div className="h-20 sm:h-24 bg-[#FEF3C7] rounded-xl mb-2 flex items-center justify-center text-3xl group-hover:bg-[#FDE68A] transition-colors">🧶</div>
            <h3 className="text-xs sm:text-sm font-bold text-[#1A1A1A]">Yarn &amp; Crafts</h3>
          </div>
          <div onClick={() => handleCategoryClick('DIY Kits')} className="group cursor-pointer p-3 rounded-2xl bg-[#FDFBF7] border border-[#F2EFE9] hover:border-[#2DD4BF] hover:shadow-md transition-all text-center">
            <div className="h-20 sm:h-24 bg-[#E0F2F1] rounded-xl mb-2 flex items-center justify-center text-3xl group-hover:bg-[#B2DFDB] transition-colors">🎨</div>
            <h3 className="text-xs sm:text-sm font-bold text-[#1A1A1A]">DIY Kits</h3>
          </div>
          <div onClick={() => handleCategoryClick('Stationery & Notebooks')} className="group cursor-pointer p-3 rounded-2xl bg-[#FDFBF7] border border-[#F2EFE9] hover:border-pink-300 hover:shadow-md transition-all text-center">
            <div className="h-20 sm:h-24 bg-[#FCE7F3] rounded-xl mb-2 flex items-center justify-center text-3xl group-hover:bg-[#FBCFE8] transition-colors">📓</div>
            <h3 className="text-xs sm:text-sm font-bold text-[#1A1A1A]">Stationery</h3>
          </div>
          <div onClick={() => handleCategoryClick('Gifts & Goodies')} className="group cursor-pointer p-3 rounded-2xl bg-[#FDFBF7] border border-[#F2EFE9] hover:border-orange-300 hover:shadow-md transition-all text-center">
            <div className="h-20 sm:h-24 bg-[#FFF7ED] rounded-xl mb-2 flex items-center justify-center text-3xl group-hover:bg-[#FFEDD5] transition-colors">🎁</div>
            <h3 className="text-xs sm:text-sm font-bold text-[#1A1A1A]">Gifts</h3>
          </div>
          <div onClick={() => handleCategoryClick('Seasonal Decor')} className="group cursor-pointer p-3 rounded-2xl bg-[#FDFBF7] border border-[#F2EFE9] hover:border-emerald-300 hover:shadow-md transition-all text-center">
            <div className="h-20 sm:h-24 bg-[#ECFDF5] rounded-xl mb-2 flex items-center justify-center text-3xl group-hover:bg-[#D1FAE5] transition-colors">🍂</div>
            <h3 className="text-xs sm:text-sm font-bold text-[#1A1A1A]">Seasonal</h3>
          </div>
          <div onClick={() => handleCategoryClick('Hobby & Fun')} className="group cursor-pointer p-3 rounded-2xl bg-[#FDFBF7] border border-[#F2EFE9] hover:border-indigo-300 hover:shadow-md transition-all text-center">
            <div className="h-20 sm:h-24 bg-[#EEF2FF] rounded-xl mb-2 flex items-center justify-center text-3xl group-hover:bg-[#E0E7FF] transition-colors">🧸</div>
            <h3 className="text-xs sm:text-sm font-bold text-[#1A1A1A]">Hobby &amp; Fun</h3>
          </div>
        </div>

        {/* Detailed 6 Category Cards Grid with Photos & Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat: Category) => {
            const theme = CATEGORY_THEMES[cat.name] || {
              cardBg: 'bg-[#FEF3C7]/40',
              hoverBg: 'group-hover:bg-[#FEF3C7]',
              accentColor: 'text-[#D97706]',
              emojiBg: 'bg-[#FEF3C7]',
            };

            return (
              <div
                key={cat.id}
                id={`category-card-${cat.id}`}
                className="group relative bg-[#FDFBF7] rounded-3xl overflow-hidden border border-[#F2EFE9] shadow-xs hover:shadow-xl hover:border-[#FBBF24]/60 transition-all duration-300 flex flex-col transform hover:-translate-y-1"
              >
                {/* Image Container with tag badge */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-amber-50/50">
                  <img
                    src={cat.image}
                    alt={`${cat.name} supplies at Dollar Delight LTD in Wetaskiwin`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Category Icon & Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className={`w-10 h-10 rounded-2xl ${theme.emojiBg} flex items-center justify-center text-xl shadow-md border-2 border-white transition-colors`}>
                      {cat.icon}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[#1A1A1A] shadow-xs border border-white/40">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Overlay Title */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="font-display text-xl font-bold tracking-tight text-white drop-shadow-xs">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {cat.description}
                    </p>

                    {/* Popular items mini tags */}
                    <div className="mb-4">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
                        Popular Finds:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.popularItems.map((item, index) => (
                          <span
                            key={index}
                            className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[#FDFBF7] text-[#1A1A1A] border border-[#F2EFE9]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action button matching theme */}
                  <button
                    type="button"
                    onClick={() => handleCategoryClick(cat.name)}
                    className="mt-3 w-full py-2.5 px-4 rounded-xl bg-[#FDFBF7] hover:bg-[#FEF3C7] text-[#1A1A1A] hover:text-[#D97706] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-[#F2EFE9] hover:border-[#FDE68A] transition-colors cursor-pointer"
                    aria-label={`Browse sample finds for ${cat.name}`}
                  >
                    <span>Explore Sample Finds</span>
                    <ArrowRight className="w-4 h-4 text-[#D97706] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Callout below Grid */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FFF9EA] via-[#FDFBF7] to-[#E0F2F1]/50 border border-[#F2EFE9] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-[#1A1A1A]">
              Looking for a specific craft tool or seasonal treasure?
            </h4>
            <p className="text-sm text-gray-600 mt-1 max-w-2xl">
              Our inventory changes regularly with new seasonal goods and craft arrivals! Call us or visit in-store in Wetaskiwin to see what's on the shelves today.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-full bg-[#1A1A1A] hover:bg-black text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
          >
            Visit Our Store
          </a>
        </div>

      </div>
    </section>
  );
};
