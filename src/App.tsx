import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { FeaturedProducts } from './components/FeaturedProducts';
import { WhyChooseUs } from './components/WhyChooseUs';
import { About } from './components/About';
import { SeasonalBanner } from './components/SeasonalBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { ScrollToTop } from './components/ScrollToTop';
import { ChatWidget } from './components/ChatWidget';
import { Product } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  const handleSelectCategory = (catName: string) => {
    setSelectedCategoryFilter(catName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1A1A1A] relative selection:bg-[#FEF3C7] selection:text-[#D97706]">
      {/* Sticky Top Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Product Categories */}
        <CategoryGrid onSelectCategory={handleSelectCategory} />

        {/* 3. Featured Finds */}
        <FeaturedProducts
          selectedCategoryFilter={selectedCategoryFilter}
          onOpenProductModal={(product) => setSelectedProduct(product)}
        />

        {/* 4. Why Dollar Delight */}
        <WhyChooseUs />

        {/* 5. About Us */}
        <About />

        {/* 6. Seasonal Promotional Banner */}
        <SeasonalBanner />

        {/* 7. Contact & Location Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick View Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Floating Scroll-to-Top Button */}
      <ScrollToTop />

      {/* Floating AI Chatbot Concierge */}
      <ChatWidget />
    </div>
  );
}
