import React from 'react';
import { X, Sparkles, Phone, MapPin, Tag, ArrowRight, Info } from 'lucide-react';
import { Product } from '../types';
import { BUSINESS_INFO } from '../data';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div
      id="product-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        id="product-modal-card"
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#F2EFE9] animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative h-64 bg-[#FDFBF7]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 text-[#1A1A1A] hover:bg-white flex items-center justify-center shadow-md cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="absolute top-4 left-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FBBF24] text-white shadow-xs">
              {product.category}
            </span>
          </div>

          <div className="absolute bottom-3 right-3 bg-[#1A1A1A]/90 text-white px-3.5 py-1.5 rounded-full text-sm font-extrabold shadow-md flex items-center gap-1.5">
            <span>{product.examplePrice}</span>
            <span className="text-[10px] font-normal text-[#FBBF24]">(Sample Price)</span>
          </div>
        </div>

        {/* Modal body */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-[#D97706]" />
              {product.tag}
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold text-[#1A1A1A]">
            {product.name}
          </h3>

          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            {product.fullDescription}
          </p>

          <div className="mt-5 p-3.5 rounded-2xl bg-[#FFF9EA] border border-[#F2EFE9] text-xs text-[#1A1A1A] flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">In-Store Discovery:</span> This is a sample representation of our craft and hobby aisles. Real inventory and styles rotate frequently to keep every trip fresh!
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-6 pt-4 border-t border-[#F2EFE9] flex flex-col sm:flex-row gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex-1 py-3 px-4 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#FBBF24]" />
              <span>Call to Ask About Stock</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="py-3 px-5 rounded-full bg-[#FDFBF7] hover:bg-[#F2EFE9] text-[#1A1A1A] border border-[#F2EFE9] font-bold text-xs sm:text-sm cursor-pointer transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
