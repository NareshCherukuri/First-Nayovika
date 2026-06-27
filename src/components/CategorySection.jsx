import { useState, useEffect } from 'react';
import { products } from '../data/products';
import sareesImg from '../assets/categories/sarees.png';
import dressesImg from '../assets/categories/dresses.png';
import materialsImg from '../assets/categories/dress_materials.png';
import lehengasImg from '../assets/categories/lehengas.png';
import saree1 from '../assets/sarees/saree1.png';
import saree2 from '../assets/sarees/saree2.png';
import saree3 from '../assets/sarees/saree3.png';
import saree4 from '../assets/sarees/saree4.png';

const mainFeatured = { id: 'sarees', name: 'Sarees', image: sareesImg, desc: 'Bespoke elegance, traditional weaves', badge: 'BEST SELLER' };
const topFeatured = { id: 'lehengas', name: 'Lehengas', image: lehengasImg, desc: 'Premium bridal spotlight', badge: 'POPULAR' };
const bottomFeatured = { id: 'dresses', name: 'Dresses', image: dressesImg, desc: 'Designer ready-to-wear', badge: 'NEW ARRIVAL' };

const moreCollections = [
  { id: 'semi_silk', name: 'Semi Silk', image: saree1 },
  { id: 'semi_banarasi', name: 'Banarasi', image: saree1 },
  { id: 'mul_cotton', name: 'Mul Cotton', image: saree2 },
  { id: 'organza', name: 'Organza', image: saree3 },
  { id: 'semi_tussar', name: 'Tussar', image: saree4 },
  { id: 'dress_materials', name: 'Materials', image: materialsImg },
];

const CategorySection = ({ onNavigate, onProductClick }) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrollPosition = window.scrollY + 150;
        let currentActive = null;
        ['sarees', 'dresses', 'dress_materials', 'lehengas'].forEach((catId) => {
          const el = document.getElementById(catId);
          if (el) {
            const elementTop = el.offsetTop;
            const elementBottom = elementTop + el.offsetHeight;
            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
              currentActive = catId;
            }
          }
        });
        if (currentActive) {
          setActiveSection(currentActive);
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleCategoryClick = (id) => {
    setActiveSection(id);
    if (onNavigate) {
      // Use the centralized SPA navigation handler from App.jsx
      onNavigate(id);
    } else {
      // Fallback: scroll to the section on the page
      const el = document.getElementById(id);
      if (el) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="w-full py-12 md:py-16 relative z-10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight font-serif">
            Shop by Collection
          </h2>
          <p className="text-gray-500 font-medium mt-3 text-sm md:text-base">
            Handpicked premium selections
          </p>
        </div>

        {/* Top Featured Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-2 sm:gap-4 md:gap-6 mb-10 md:mb-12">

          {/* Main Left Card (Tall) */}
          <div
            onClick={() => handleCategoryClick(mainFeatured.id)}
            className={`col-span-1 lg:col-span-5 h-[320px] sm:h-[400px] lg:h-[500px] relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group shadow-[0_8px_32px_0_rgba(128,0,32,0.1)] transition-all duration-500
              ${activeSection === mainFeatured.id ? 'ring-2 sm:ring-4 ring-brand-gold/50' : 'hover:shadow-2xl hover:-translate-y-1'}`}
          >
            <img src={mainFeatured.image} alt={mainFeatured.name} className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Badge */}
            <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-[#7D8851] text-white text-[9px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full uppercase tracking-wider shadow-md">
              {mainFeatured.badge}
            </div>

            {/* Text Overlay */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 text-white pointer-events-none">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif mb-0.5 md:mb-1">{mainFeatured.name}</h3>
              <p className="text-white/80 text-[10px] sm:text-xs md:text-sm line-clamp-1 md:line-clamp-none">{mainFeatured.desc}</p>
            </div>
          </div>

          {/* Right Column (Two Stacked Cards) — same total height as Sarees card */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-2 sm:gap-4 md:gap-6 h-[320px] sm:h-[400px] lg:h-[500px]">

            {/* Top Right Card */}
            <div
              onClick={() => handleCategoryClick(topFeatured.id)}
              className={`flex-1 relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group shadow-[0_8px_32px_0_rgba(128,0,32,0.1)] transition-all duration-500
                ${activeSection === topFeatured.id ? 'ring-2 sm:ring-4 ring-brand-gold/50' : 'hover:shadow-2xl hover:-translate-y-1'}`}
            >
              <img src={topFeatured.image} alt={topFeatured.name} className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#7D8851] text-white text-[8px] md:text-xs font-bold px-1.5 py-0.5 md:px-3 md:py-1 rounded-full uppercase tracking-wider shadow-md">
                {topFeatured.badge}
              </div>

              <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6 text-white pointer-events-none">
                <h3 className="text-sm sm:text-xl md:text-2xl font-bold font-serif mb-0.5 md:mb-1">{topFeatured.name}</h3>
                <p className="text-white/80 text-[9px] sm:text-xs md:text-sm line-clamp-1 md:line-clamp-none">{topFeatured.desc}</p>
              </div>
            </div>

            {/* Bottom Right Card */}
            <div
              onClick={() => handleCategoryClick(bottomFeatured.id)}
              className={`flex-1 relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group shadow-[0_8px_32px_0_rgba(128,0,32,0.1)] transition-all duration-500
                ${activeSection === bottomFeatured.id ? 'ring-2 sm:ring-4 ring-brand-gold/50' : 'hover:shadow-2xl hover:-translate-y-1'}`}
            >
              <img src={bottomFeatured.image} alt={bottomFeatured.name} className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#7D8851] text-white text-[8px] md:text-xs font-bold px-1.5 py-0.5 md:px-3 md:py-1 rounded-full uppercase tracking-wider shadow-md">
                {bottomFeatured.badge}
              </div>

              <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6 text-white pointer-events-none">
                <h3 className="text-sm sm:text-xl md:text-2xl font-bold font-serif mb-0.5 md:mb-1">{bottomFeatured.name}</h3>
                <p className="text-white/80 text-[9px] sm:text-xs md:text-sm line-clamp-1 md:line-clamp-none">{bottomFeatured.desc}</p>
              </div>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-8 relative">
          <div className="absolute w-full h-[1px] bg-brand-maroon/20"></div>
          <span className="relative bg-rose-50 px-4 text-xs font-bold text-brand-maroon/60 tracking-widest uppercase z-10 backdrop-blur-3xl">
            More Collections
          </span>
        </div>

        {/* Leaf-Shaped Smaller Cards Row */}
        <div className="flex items-center justify-start md:justify-center gap-4 md:gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory">
          {moreCollections.map((cat, index) => {
            return (
              <button
                key={index}
                onClick={() => handleCategoryClick(cat.id)}
                className="flex flex-col items-center group snap-center focus:outline-none flex-shrink-0"
              >
                <div
                  className="w-[100px] h-[130px] md:w-[120px] md:h-[150px] overflow-hidden relative flex items-center justify-center p-0.5 bg-white/40 backdrop-blur-xl shadow-md border border-white/60 hover:border-brand-gold transition-all duration-300 rounded-tl-[30px] rounded-br-[30px] rounded-tr-md rounded-bl-md hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover rounded-tl-[28px] rounded-br-[28px] rounded-tr-[4px] rounded-bl-[4px] transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Glass overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none rounded-tl-[28px] rounded-br-[28px] rounded-tr-[4px] rounded-bl-[4px]" />

                  {/* Text Overlay inside the card */}
                  <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 text-left pointer-events-none">
                    <h3 className="text-white font-bold text-[10px] md:text-xs tracking-wide drop-shadow-sm group-hover:text-brand-gold transition-colors duration-300">
                      {cat.name}
                    </h3>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Main Category Product Rows ── */}
        <div className="mt-14 md:mt-20 space-y-14 md:space-y-20">

          {/* ─── ALL SAREES ROW ─── */}
          {(() => {
            const allSarees = products.filter(p => p.category === 'sarees');
            return (
              <div id="sarees-row" className="scroll-mt-28">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-brand-maroon rounded-full inline-block"></span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-serif tracking-tight">Sarees</h3>
                      <p className="text-xs text-gray-400 mt-0.5 tracking-wide">Bespoke elegance, traditional weaves</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onNavigate && onNavigate('sarees')}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-maroon border border-brand-maroon/30 px-4 py-1.5 rounded-full hover:bg-brand-maroon hover:text-white transition-all duration-200"
                  >
                    Shop All
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
                <div className="flex gap-3 md:gap-4 overflow-x-auto pb-3 scrollbar-none snap-x snap-mandatory -mx-4 px-4">
                  {allSarees.map((product) => (
                    <div key={product.id} className="flex-shrink-0 w-[130px] sm:w-[155px] md:w-[175px] snap-start group cursor-pointer" onClick={() => onProductClick && onProductClick(product)}>
                      <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-2 bg-gray-50 shadow-sm">
                        <img src={product.image} alt={product.name} className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      <p className="text-[11px] text-gray-700 text-center leading-tight line-clamp-2 px-1 group-hover:text-brand-maroon transition-colors">{product.name}</p>
                      <p className="text-[12px] font-semibold text-gray-900 text-center mt-1">₹ {product.price.toLocaleString('en-IN')}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* ─── LEHENGAS ROW ─── */}
          {(() => {
            const allLehengas = products.filter(p => p.category === 'lehengas');
            return (
              <div id="lehengas-row" className="scroll-mt-28">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-brand-gold rounded-full inline-block"></span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-serif tracking-tight">Lehengas</h3>
                      <p className="text-xs text-gray-400 mt-0.5 tracking-wide">Premium bridal spotlight</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onNavigate && onNavigate('lehengas')}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-maroon border border-brand-maroon/30 px-4 py-1.5 rounded-full hover:bg-brand-maroon hover:text-white transition-all duration-200"
                  >
                    Shop All
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
                <div className="flex gap-3 md:gap-4 overflow-x-auto pb-3 scrollbar-none snap-x snap-mandatory -mx-4 px-4">
                  {allLehengas.map((product) => (
                    <div key={product.id} className="flex-shrink-0 w-[130px] sm:w-[155px] md:w-[175px] snap-start group cursor-pointer" onClick={() => onProductClick && onProductClick(product)}>
                      <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-2 bg-gray-50 shadow-sm">
                        <img src={product.image} alt={product.name} className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      <p className="text-[11px] text-gray-700 text-center leading-tight line-clamp-2 px-1 group-hover:text-brand-gold transition-colors">{product.name}</p>
                      <p className="text-[12px] font-semibold text-gray-900 text-center mt-1">₹ {product.price.toLocaleString('en-IN')}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* ─── DRESSES ROW ─── */}
          {(() => {
            const allDresses = products.filter(p => p.category === 'dresses');
            return (
              <div id="dresses-row" className="scroll-mt-28">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-rose-400 rounded-full inline-block"></span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-serif tracking-tight">Dresses</h3>
                      <p className="text-xs text-gray-400 mt-0.5 tracking-wide">Designer ready-to-wear</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onNavigate && onNavigate('dresses')}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-maroon border border-brand-maroon/30 px-4 py-1.5 rounded-full hover:bg-brand-maroon hover:text-white transition-all duration-200"
                  >
                    Shop All
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
                <div className="flex gap-3 md:gap-4 overflow-x-auto pb-3 scrollbar-none snap-x snap-mandatory -mx-4 px-4">
                  {allDresses.map((product) => (
                    <div key={product.id} className="flex-shrink-0 w-[130px] sm:w-[155px] md:w-[175px] snap-start group cursor-pointer" onClick={() => onProductClick && onProductClick(product)}>
                      <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-2 bg-gray-50 shadow-sm">
                        <img src={product.image} alt={product.name} className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      <p className="text-[11px] text-gray-700 text-center leading-tight line-clamp-2 px-1 group-hover:text-brand-maroon transition-colors">{product.name}</p>
                      <p className="text-[12px] font-semibold text-gray-900 text-center mt-1">₹ {product.price.toLocaleString('en-IN')}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

        </div>

      </div>
    </section>
  );
};

export default CategorySection;
