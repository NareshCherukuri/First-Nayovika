import React, { useState, useRef } from 'react';
import { products } from '../data/products';

const ProductDetails = ({ product, onBack, onProductClick }) => {
  // Use product specific gallery if available, otherwise simulate multiple images
  const gallery = product.gallery || [product.image, product.image, product.image];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reference to the scroll container for programmatic scrolling
  const scrollContainerRef = useRef(null);

  // Wishlist state
  const [isWishlisted, setIsWishlisted] = useState(false);

  const scrollToImage = (index) => {
    setActiveImageIndex(index);
    if (scrollContainerRef.current) {
      const width = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    if (newIndex !== activeImageIndex) {
      setActiveImageIndex(newIndex);
    }
  };

  // Get related products from the same category (excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 6);

  return (
    <div className="relative min-h-screen pb-24">

      {/* Image Gallery (Native Scroll Snap) */}
      <div className="relative w-full h-[60vh] md:h-[70vh]">

        <div
          ref={scrollContainerRef}
          className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-none"
          onScroll={handleScroll}
        >
          {gallery.map((img, idx) => (
            <div key={idx} className="w-full h-full flex-shrink-0 snap-center relative">
              <img
                src={img}
                alt={`${product.name} view ${idx + 1}`}
                className="w-full h-full object-contain p-4"
              />
            </div>
          ))}
        </div>

        {/* Desktop Navigation Arrows (hidden on small screens, shown on md and up) */}
        <button
          onClick={() => scrollToImage(Math.max(activeImageIndex - 1, 0))}
          className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 hover:bg-white/80 rounded-full backdrop-blur-sm hidden md:block transition-opacity ${activeImageIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={() => scrollToImage(Math.min(activeImageIndex + 1, gallery.length - 1))}
          className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 hover:bg-white/80 rounded-full backdrop-blur-sm hidden md:block transition-opacity ${activeImageIndex === gallery.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-16 w-full flex justify-center gap-2 pointer-events-none">
          {gallery.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.preventDefault(); scrollToImage(idx); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 pointer-events-auto ${activeImageIndex === idx ? 'w-6 bg-white shadow-sm' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      {/* Glassmorphism Title Card - overlapping the image */}
      <div className="relative z-10 -mt-10 px-4">
        <div className="bg-white/80 backdrop-blur-2xl rounded-2xl p-6 shadow-xl border border-white">

          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-brand-maroon font-bold mb-1">{product.category}</p>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold text-black mb-4">₹ {product.price.toLocaleString('en-IN')}</p>
            </div>

            {/* Wishlist Button inside the card */}
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="p-3 bg-white rounded-full shadow-sm border border-gray-100 text-gray-400 hover:text-brand-maroon hover:shadow-md transition-all shrink-0 mt-1"
            >
              <svg className={`w-6 h-6 transition-colors duration-300 ${isWishlisted ? 'text-brand-maroon fill-brand-maroon' : ''}`} fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-gray-500 tracking-wider">Color</span>
              <span className="text-sm font-medium text-gray-800">{product.color}</span>
            </div>
            <div className="w-[1px] bg-gray-200" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-gray-500 tracking-wider">Fabric</span>
              <span className="text-sm font-medium text-gray-800">{product.fabric}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Unified Modern Details Section */}
      <div className="mt-6 px-4 space-y-6 pb-6">

        {/* Description */}
        <div className="px-2">
          <p className="text-sm text-gray-600 leading-relaxed font-medium">
            {product.description}
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white shadow-sm flex flex-col gap-1">
            <svg className="w-5 h-5 text-brand-maroon mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Fabric</span>
            <span className="text-sm font-semibold text-gray-900">{product.fabric}</span>
          </div>

          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white shadow-sm flex flex-col gap-1">
            <svg className="w-5 h-5 text-brand-maroon mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{product.detailLabel}</span>
            <span className="text-sm font-semibold text-gray-900">{product.detailValue}</span>
          </div>

          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white shadow-sm flex flex-col gap-1">
            <svg className="w-5 h-5 text-brand-maroon mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Care</span>
            <span className="text-sm font-semibold text-gray-900">Dry Clean Only</span>
          </div>

          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white shadow-sm flex flex-col gap-1">
            <svg className="w-5 h-5 text-brand-maroon mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Guarantee</span>
            <span className="text-sm font-semibold text-gray-900">Authentic Weave</span>
          </div>
        </div>

        {/* Minimal Delivery Banner */}
        <div className="bg-brand-maroon/5 rounded-2xl p-4 flex items-center gap-4 border border-brand-maroon/10">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
            <svg className="w-5 h-5 text-brand-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900 mb-0.5">Free standard shipping</p>
            <p className="text-xs text-gray-500">7-day easy returns & exchange</p>
          </div>
        </div>
      </div>

      {/* You May Also Like Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-2 mb-10 px-4 pb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-6 bg-brand-gold rounded-full inline-block"></span>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 font-serif tracking-tight">You may also like</h3>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory -mx-4 px-4">
            {relatedProducts.map((relProduct) => (
              <div
                key={relProduct.id}
                onClick={() => onProductClick && onProductClick(relProduct)}
                className="flex-shrink-0 w-[140px] sm:w-[160px] snap-start group cursor-pointer bg-white/40 backdrop-blur-xl border border-white/60 p-2 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-2 shadow-sm">
                  <img src={relProduct.image} alt={relProduct.name} className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-110" />
                </div>
                <p className="text-[11px] text-gray-700 text-center leading-tight line-clamp-2 px-1 font-medium group-hover:text-brand-maroon transition-colors">{relProduct.name}</p>
                <p className="text-[12px] font-bold text-gray-900 text-center mt-1">₹ {relProduct.price.toLocaleString('en-IN')}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sticky Bottom Action Bar (WhatsApp Ordering) */}
      <div className="fixed bottom-0 left-0 w-full z-50 p-4 bg-white/90 backdrop-blur-xl border-t border-gray-200 pb-[calc(1rem+env(safe-area-inset-bottom))]">
        <div className="max-w-xl mx-auto">
          <button
            onClick={() => window.open(`https://wa.me/918317425857?text=Hi, I'm interested in buying the ${product.name} (₹${product.price.toLocaleString('en-IN')}).`, '_blank')}
            className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-[#25D366] text-white font-bold tracking-wider uppercase text-sm shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:-translate-y-0.5 transition-all duration-300"
          >
            {/* WhatsApp Logo SVG */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 0C5.385 0 0 5.388 0 12.038c0 2.127.553 4.2 1.603 6.03L.144 24l6.13-1.607c1.768.966 3.766 1.474 5.753 1.474h.004c6.645 0 12.03-5.388 12.03-12.039C24 5.84 18.636 0 12.031 0zm0 21.861h-.003c-1.803 0-3.568-.484-5.116-1.403l-.367-.217-3.8.995.996-3.705-.238-.378C2.518 15.518 2.016 13.805 2.016 12.038 2.016 6.51 6.51 2.014 12.03 2.014c5.523 0 10.016 4.498 10.016 10.024 0 5.525-4.494 10.023-10.015 10.023zm5.498-7.502c-.302-.151-1.785-.882-2.062-.983-.277-.101-.478-.151-.68.151-.201.302-.78 1.006-.957 1.208-.176.201-.353.226-.655.075-1.503-.761-2.607-1.391-3.64-3.176-.176-.302-.019-.465.132-.616.136-.136.302-.352.453-.528.151-.176.201-.302.302-.503.1-.201.05-.378-.025-.528-.075-.151-.68-1.635-.931-2.239-.245-.589-.494-.509-.68-.518-.176-.008-.378-.008-.578-.008s-.528.075-.805.378c-.277.302-1.056 1.032-1.056 2.516s1.082 2.919 1.233 3.12c.151.201 2.126 3.245 5.148 4.547 2.096.903 2.825.805 3.328.68.58-.144 1.785-.73 2.036-1.434.252-.704.252-1.308.176-1.434-.076-.126-.277-.201-.579-.352z" />
            </svg>
            Buy on WhatsApp
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;
