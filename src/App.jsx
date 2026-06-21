import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import ProductDetails from './components/ProductDetails';
import { products } from './data/products';
import sareeBanner from './assets/categories/sarees.png';
import lehengasImg from './assets/categories/lehengas.png';
import dressesImg from './assets/categories/dresses.png';
import materialsImg from './assets/categories/dress_materials.png';


const sareeFabrics = ['All', 'Banarasi', 'Mul Cotton', 'Organza', 'Tussar', 'Chinon Silk', 'Dola Silk'];

const collectionSubSections = [
  { id: 'semi_banarasi', name: 'Banarasi', matchText: 'semi banarasi', category: 'sarees' },
  { id: 'mul_cotton', name: 'Mul Cotton', matchText: 'mul cotton', category: 'sarees' },
  { id: 'organza', name: 'Organza', matchText: 'organza', category: 'sarees' },
  { id: 'semi_tussar', name: 'Tussar', matchText: 'semi tussar', category: 'sarees' },
  { id: 'dress_materials', name: 'Dress Materials', matchText: '', category: 'dress_materials' },
];

function App() {
  const allSarees = products.filter(p => p.category === 'sarees');
  const dresses = products.filter(p => p.category === 'dresses');
  const materials = products.filter(p => p.category === 'dress_materials');
  const lehengas = products.filter(p => p.category === 'lehengas');

  // SPA View State: 'home' | 'category_grid' | 'product_details'
  const [currentView, setCurrentView] = useState('home');
  const [activeCategory, setActiveCategory] = useState('sarees');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter State for "All Sarees" View
  const [sareeFilter, setSareeFilter] = useState('all');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [outOfStockOnly, setOutOfStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  let gridProducts = [];
  let bannerImg = sareeBanner;
  let bannerTitle = 'Sarees';
  let bannerDesc = 'A gentle shimmer woven into everyday comfort';

  if (activeCategory === 'sarees') {
    gridProducts = allSarees.filter(p => {
      const matchesFabric = sareeFilter === 'all' || p.fabric.toLowerCase().includes(sareeFilter.toLowerCase());
      const matchesStock = (!inStockOnly && !outOfStockOnly) || (inStockOnly && p.inStock) || (outOfStockOnly && !p.inStock);
      return matchesFabric && matchesStock;
    });
  } else if (activeCategory === 'lehengas') {
    gridProducts = lehengas;
    bannerImg = lehengasImg;
    bannerTitle = 'Lehengas';
    bannerDesc = 'Premium bridal spotlight';
  } else if (activeCategory === 'dresses') {
    gridProducts = dresses;
    bannerImg = dressesImg;
    bannerTitle = 'Dresses';
    bannerDesc = 'Designer ready-to-wear';
  } else if (activeCategory === 'dress_materials') {
    gridProducts = materials;
    bannerImg = materialsImg;
    bannerTitle = 'Dress Materials';
    bannerDesc = 'Custom Tailoring Fabrics';
  }

  if (activeCategory !== 'sarees') {
    // Apply stock filter to non-sarees as well
    gridProducts = gridProducts.filter(p => {
      return (!inStockOnly && !outOfStockOnly) || (inStockOnly && p.inStock) || (outOfStockOnly && !p.inStock);
    });
  }

  if (sortBy === 'price-low') gridProducts.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-high') gridProducts.sort((a, b) => b.price - a.price);

  // State for Row-by-Row Sub-sections
  const [expandedSections, setExpandedSections] = useState({});
  const toggleSection = (id) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getSubSarees = (matchText) => {
    return allSarees.filter(p => p.fabric.toLowerCase().includes(matchText.toLowerCase()));
  };

  // Handle browser hash changes (for back button or header links)
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#home' || window.location.hash === '') {
        setCurrentView('home');
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Centralized Navigation Handler from CategorySection
  const handleNavigation = (id) => {
    if (['sarees', 'lehengas', 'dresses', 'dress_materials'].includes(id)) {
      setCurrentView('category_grid');
      setActiveCategory(id);
      if (id === 'sarees') setSareeFilter('all');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 10);
    } else if (collectionSubSections.find(s => s.id === id)) {
      const subSection = collectionSubSections.find(s => s.id === id);
      setCurrentView('category_grid');
      setActiveCategory(subSection.category);
      if (subSection.category === 'sarees') {
        const fab = subSection.matchText === 'semi banarasi' ? 'banarasi' : subSection.matchText === 'semi tussar' ? 'tussar' : subSection.matchText;
        setSareeFilter(fab);
      }
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 10);
    } else {
      // Normal scroll on home page
      if (currentView !== 'home') setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setActiveCategory(product.category);
    setCurrentView('product_details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans relative selection:bg-brand-maroon selection:text-white pb-10 text-brand-dark">
      {/* Always-on app background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
        <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-brand-maroon/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45rem] h-[45rem] bg-brand-gold/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[30%] left-[40%] w-[35rem] h-[35rem] bg-pink-300/30 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <Header 
        hideShippingMarquee={currentView === 'product_details'}
        onNavigateHome={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
      />

      <main className={`min-h-screen ${currentView === 'product_details' ? 'pt-[60px]' : 'pt-[104px]'}`}>

        {/* =========================================
            VIEW: HOME PAGE 
        ========================================= */}
        {currentView === 'home' && (
          <div className="animate-fade-in">
            <Hero />
            <CategorySection onNavigate={handleNavigation} onProductClick={handleProductClick} />
          </div>
        )}

        {/* =========================================
            VIEW: UNIFIED CATEGORY GRID (PIXEL PERFECT SNAPSHOT MATCH)
        ========================================= */}
        {currentView === 'category_grid' && (
          <div className="w-full bg-white animate-fade-in pb-20">
            {/* Edge-to-edge Banner using category image */}
            <div className="relative w-full h-[280px] md:h-[380px] bg-gray-900 -mx-0 overflow-hidden">
              <img
                src={bannerImg}
                alt={bannerTitle}
                className="w-full h-full object-cover opacity-80 object-[center_30%]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/20">
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl tracking-[0.15em] font-serif uppercase mb-2 md:mb-4 drop-shadow-md">
                  {bannerTitle}
                </h2>
                <p className="text-white/90 text-xs md:text-sm tracking-widest uppercase max-w-md drop-shadow-md">
                  {bannerDesc}
                </p>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Ultra Minimalist Filter Bar */}
              <div className="flex items-center gap-6 py-4 px-4 border-b border-gray-100">
                <button
                  onClick={() => setIsFilterDrawerOpen(true)}
                  className="flex items-center gap-1.5 text-[13px] text-gray-700 tracking-wider hover:text-black transition-colors"
                >
                  Filter
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="relative">
                  <button
                    onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                    className="flex items-center gap-1.5 text-[13px] text-gray-700 tracking-wider hover:text-black transition-colors"
                  >
                    {sortBy === 'featured' ? 'Featured' : sortBy === 'price-low' ? 'Price: Low to High' : 'Price: High to Low'}
                    <svg className={`w-3 h-3 transition-transform ${isSortDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isSortDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl z-20 py-2">
                      <button onClick={() => { setSortBy('featured'); setIsSortDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-xs tracking-wider text-gray-600 hover:bg-gray-50">Featured</button>
                      <button onClick={() => { setSortBy('price-low'); setIsSortDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-xs tracking-wider text-gray-600 hover:bg-gray-50">Price: Low to High</button>
                      <button onClick={() => { setSortBy('price-high'); setIsSortDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-xs tracking-wider text-gray-600 hover:bg-gray-50">Price: High to Low</button>
                    </div>
                  )}
                </div>
              </div>

              {/* Minimalist 2-Column Product Grid */}
              {gridProducts.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-8">
                  {gridProducts.map(product => (
                    <div key={product.id} className="flex flex-col group cursor-pointer" onClick={() => handleProductClick(product)}>
                      <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden mb-3 bg-gray-50">
                        <img
                          src={product.image}
                          alt={product.name}
                          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${product.inStock === false ? 'opacity-50 grayscale-[0.5]' : ''}`}
                        />
                      </div>
                      <h3 className="text-center text-[11px] sm:text-xs text-gray-800 leading-relaxed px-1 sm:px-2 group-hover:text-black line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-center text-[13px] sm:text-sm font-semibold text-black mt-1.5">
                        ₹ {product.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <p className="text-sm text-gray-500 tracking-wider">No products found.</p>
                  <button onClick={() => { if (activeCategory === 'sarees') setSareeFilter('all'); setInStockOnly(false); setOutOfStockOnly(false); }} className="mt-4 text-xs underline text-gray-800">Clear Filters</button>
                </div>
              )}
            </div>

            {/* Hidden Drawer */}
            {isFilterDrawerOpen && (
              <div className="fixed inset-0 z-[100] flex justify-start">
                <div className="bg-black/20 absolute inset-0 transition-opacity" onClick={() => setIsFilterDrawerOpen(false)} />
                <div className="bg-white w-[85%] max-w-sm h-full relative z-10 flex flex-col shadow-2xl animate-[slideIn_0.3s_ease-out]">
                  <div className="flex items-center justify-between p-5 border-b border-gray-100">
                    <h3 className="text-lg font-serif tracking-widest text-black uppercase">Filter</h3>
                    <button onClick={() => setIsFilterDrawerOpen(false)} className="p-2 text-gray-400 hover:text-black">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    {activeCategory === 'sarees' && (
                      <>
                        <div>
                          <h4 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">Fabric</h4>
                          <div className="space-y-4">
                            {sareeFabrics.map(fab => (
                              <label key={fab} className="flex items-center gap-3 cursor-pointer">
                                <input type="radio" checked={sareeFilter === (fab === 'All' ? 'all' : fab.toLowerCase())} onChange={() => setSareeFilter(fab === 'All' ? 'all' : fab.toLowerCase())} className="w-3.5 h-3.5 text-black accent-black" />
                                <span className="text-[13px] text-gray-700 tracking-wide">{fab}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="h-[1px] w-full bg-gray-100"></div>
                      </>
                    )}
                    <div>
                      <h4 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">Availability</h4>
                      <div className="space-y-4">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} className="w-3.5 h-3.5 rounded text-black accent-black" />
                          <span className="text-[13px] text-gray-700 tracking-wide">In Stock</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" checked={outOfStockOnly} onChange={(e) => setOutOfStockOnly(e.target.checked)} className="w-3.5 h-3.5 rounded text-black accent-black" />
                          <span className="text-[13px] text-gray-700 tracking-wide">Out of Stock</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 border-t border-gray-100 flex gap-4">
                    <button onClick={() => { if (activeCategory === 'sarees') setSareeFilter('all'); setInStockOnly(false); setOutOfStockOnly(false); }} className="flex-1 py-3 text-xs tracking-widest uppercase text-gray-500 border border-gray-200 hover:bg-gray-50 transition-colors">Clear</button>
                    <button onClick={() => setIsFilterDrawerOpen(false)} className="flex-1 py-3 text-xs tracking-widest uppercase text-white bg-black hover:bg-gray-900 transition-colors">Apply</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* =========================================
            VIEW: PRODUCT DETAILS PAGE (PDP)
        ========================================= */}
        {currentView === 'product_details' && selectedProduct && (
          <div className="animate-fade-in w-full bg-white">
            <ProductDetails
              product={selectedProduct}
              onBack={() => {
                setCurrentView('category_grid');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onProductClick={handleProductClick}
            />
          </div>
        )}

      </main>

      <Footer />
      {currentView !== 'product_details' && <MobileBottomNav />}
    </div>
  );
}

export default App;
