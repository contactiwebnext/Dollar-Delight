import React, { useState } from 'react';
import { Sparkles, Eye, Info, MapPin, Check, ArrowRight, Tag } from 'lucide-react';
import { FEATURED_PRODUCTS, BUSINESS_INFO } from '../data';
import { Product } from '../types';

interface FeaturedProductsProps {
  selectedCategoryFilter?: string;
  onOpenProductModal: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  selectedCategoryFilter,
  onOpenProductModal,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Sample Finds' },
    { id: 'Yarn & Crafts', label: 'Yarn & Crafts' },
    { id: 'DIY Kits', label: 'DIY Kits' },
    { id: 'Stationery & Notebooks', label: 'Stationery' },
    { id: 'Seasonal Decor', label: 'Seasonal Decor' },
    { id: 'Gifts & Goodies', label: 'Gifts' },
    { id: 'Hobby & Fun', label: 'Hobby & Fun' },
  ];

  // If a parent requested category filter is set, prioritize it unless user selected tab
  const currentCategory = selectedCategoryFilter || activeTab;

  const filteredProducts = FEATURED_PRODUCTS.filter((product) => {
    if (activeTab === 'all') return true;
    return product.category.toLowerCase().includes(activeTab.toLowerCase());
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="featured" className="py-16 sm:py-20 bg-[#FDFBF7] scroll-mt-20 border-b border-[#F2EFE9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2F1] text-[#0D9488] text-xs font-extrabold uppercase tracking-wider mb-3 border border-[#B2DFDB]">
            <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>Curated Sample Showcase</span>
          </div>

          <h2
            id="featured-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1A1A] flex items-center justify-center gap-3"
          >
            <span className="w-8 h-[2px] bg-[#FBBF24] inline-block shrink-0"></span>
            <span>Today's Delightful Finds</span>
            <span className="w-8 h-[2px] bg-[#FBBF24] inline-block shrink-0"></span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-gray-600 font-normal">
            A small taste of the creative crafts, stationery, and seasonal treasures waiting on our shelves.
          </p>

          {/* Explicit sample inventory notice badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9EA] border border-[#F2EFE9] text-[#1A1A1A] text-xs font-medium shadow-2xs">
            <Info className="w-4 h-4 text-[#D97706] shrink-0" />
            <span>
              Sample in-store representation. Inventory, shades, and exact styles rotate regularly. Ask in store for current availability.
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center overflow-x-auto pb-3 mb-8 gap-2 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                id={`filter-tab-${cat.id}`}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#FBBF24] text-white shadow-md shadow-[#FBBF24]/30'
                    : 'bg-white text-[#1A1A1A] hover:bg-[#FFF9EA] border border-[#F2EFE9]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="group bg-white rounded-3xl overflow-hidden border border-[#F2EFE9] shadow-xs hover:shadow-xl hover:border-[#FBBF24]/60 transition-all duration-300 flex flex-col transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-52 bg-[#FDFBF7] overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} - ${product.shortDescription}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-[#1A1A1A] shadow-xs border border-[#F2EFE9] flex items-center gap-1">
                    <Tag className="w-3 h-3 text-[#D97706]" />
                    {product.tag}
                  </span>
                </div>

                {/* Example Price Tag */}
                <div className="absolute bottom-3 right-3 bg-[#1A1A1A]/90 backdrop-blur-xs text-white px-3 py-1 rounded-xl text-xs font-extrabold shadow-md flex items-center gap-1">
                  <span>{product.examplePrice}</span>
                  <span className="text-[10px] font-normal text-[#FBBF24]">(Example)</span>
                </div>

                {/* Quick view hover action button */}
                <button
                  type="button"
                  onClick={() => onOpenProductModal(product)}
                  className="absolute inset-0 bg-[#1A1A1A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs sm:text-sm cursor-pointer"
                  aria-label={`Quick view details for ${product.name}`}
                >
                  <span className="px-4 py-2 rounded-full bg-white text-[#1A1A1A] shadow-md flex items-center gap-1.5 font-bold hover:bg-[#FFF9EA]">
                    <Eye className="w-4 h-4 text-[#D97706]" />
                    <span>Quick Preview</span>
                  </span>
                </button>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-[#0D9488] uppercase tracking-wider mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#1A1A1A] group-hover:text-[#D97706] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F2EFE9] flex items-center justify-between">
                  <span className="text-[11px] text-gray-400 font-medium italic">
                    Sample in-store find
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenProductModal(product)}
                    className="text-xs font-bold text-[#2DD4BF] hover:text-[#0D9488] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner: "Visit Us to Discover More" */}
        <div className="mt-14 text-center">
          <div className="inline-block p-1 rounded-3xl bg-gradient-to-r from-[#FBBF24] via-[#2DD4BF] to-[#F472B6] shadow-xl">
            <div className="bg-[#FDFBF7] rounded-[22px] px-8 py-8 sm:py-10 max-w-2xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-[#FBBF24]" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1A1A1A]">
                Visit Us to Discover More
              </h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-md mx-auto">
                Our shelves are always changing with new craft discoveries, holiday finds, and hobby surprises. Drop in today in Wetaskiwin!
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="px-6 py-3 rounded-full bg-[#2DD4BF] hover:bg-[#1FB19F] text-white font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Find Dollar Delight in Wetaskiwin</span>
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="px-5 py-3 rounded-full bg-white hover:bg-[#FFF9EA] text-[#1A1A1A] font-bold text-sm border border-[#F2EFE9] transition-all"
                >
                  Call Store: {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
