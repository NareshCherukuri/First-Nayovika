import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import { products } from './data/products';

const sareeSubSections = [
  { id: 'semi_banarasi', name: 'Semi Banarasi Silk', matchText: 'semi banarasi' },
  { id: 'mul_cotton', name: 'Mul Cotton Collection', matchText: 'mul cotton' },
  { id: 'organza', name: 'Organza Collection', matchText: 'organza' },
  { id: 'semi_tussar', name: 'Semi Tussar Silk', matchText: 'semi tussar' },
  { id: 'chinon_silk', name: 'Chinon Silk Collection', matchText: 'chinon silk' },
  { id: 'dola_silk', name: 'Dola Silk Collection', matchText: 'dola silk' },
];

function App() {
  const allSarees = products.filter(p => p.category === 'sarees');
  const dresses = products.filter(p => p.category === 'dresses');
  const materials = products.filter(p => p.category === 'dress_materials');
  const lehengas = products.filter(p => p.category === 'lehengas');

  const getSubSarees = (matchText) => {
    return allSarees.filter(p => p.fabric.toLowerCase().includes(matchText.toLowerCase()));
  };

  const [expandedSections, setExpandedSections] = React.useState({});

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen font-sans relative text-brand-dark selection:bg-brand-maroon selection:text-white pb-10">
      {/* Vibrant Background for True Glassmorphism */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
        <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-brand-maroon/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45rem] h-[45rem] bg-brand-gold/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[30%] left-[40%] w-[35rem] h-[35rem] bg-pink-300/30 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <Header />

      <main className="pt-24">
        <Hero />

        {/* Categories Bar right after Banner/Hero */}
        <CategorySection />

        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16 md:space-y-24 mt-8 relative z-10">
          
          {/* ──── SAREES SECTION (ROW-BY-ROW SUB-SECTIONS) ──── */}
          <section 
            id="sarees" 
            className="scroll-mt-36 p-6 md:p-12 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/40 shadow-[0_16px_48px_0_rgba(128,0,32,0.04)] relative overflow-hidden"
          >
            {/* Ambient Background Glow specific to this section */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl -z-10 pointer-events-none" />
            
            {/* Main Section Header */}
            <div className="text-center mb-12 md:mb-16 border-b border-brand-maroon/10 pb-8">
              <span className="text-brand-maroon text-xs font-bold uppercase tracking-widest bg-brand-maroon/5 border border-brand-maroon/10 px-3.5 py-1.5 rounded-full">
                Bespoke Weaves
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-950 mt-3 mb-4 tracking-tight">
                Our Saree Collections
              </h2>
              <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
            </div>

            {/* Vertical Stack of Saree Fabric Sub-sections */}
            <div className="space-y-16">
              {sareeSubSections.map((subSection) => {
                const subSarees = getSubSarees(subSection.matchText);
                if (subSarees.length === 0) return null;

                return (
                  <div key={subSection.id} className="group/row">
                    
                    {/* Sub-section Header */}
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-lg md:text-2xl font-bold text-gray-900 flex items-center gap-2.5">
                        <span className="w-2 h-5 md:w-2.5 md:h-6 bg-brand-gold rounded-full inline-block group-hover/row:bg-brand-maroon transition-colors duration-300"></span>
                        {subSection.name}
                      </h3>
                      
                      {/* Show All Glass Button */}
                      <button 
                        onClick={() => toggleSection(subSection.id)}
                        className="px-4 py-2 rounded-full text-xs font-semibold text-brand-maroon bg-white/40 border border-brand-maroon/15 hover:border-brand-gold hover:bg-brand-gold hover:text-white hover:scale-105 transition-all shadow-xs hover:shadow-sm"
                      >
                        {expandedSections[subSection.id] ? "Show Less" : "Show All"}
                      </button>
                    </div>

                    {/* Saree Row List: Mobile Carousel & Desktop Grid */}
                    <div className={expandedSections[subSection.id] 
                      ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6" 
                      : "flex overflow-x-auto md:grid md:overflow-x-visible md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 pb-4 md:pb-0 scrollbar-none snap-x snap-mandatory scroll-smooth"}>
                      {subSarees.map((product) => (
                        <div 
                          key={product.id} 
                          className={expandedSections[subSection.id] 
                            ? "w-full" 
                            : "snap-center w-40 sm:w-56 md:w-auto flex-shrink-0 md:flex-shrink"}
                        >
                          <ProductCard product={product} />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ──── DRESSES SECTION ──── */}
          <section 
            id="dresses" 
            className="scroll-mt-36 p-8 md:p-12 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/40 shadow-[0_16px_48px_0_rgba(128,0,32,0.04)] relative overflow-hidden"
          >
            {/* Ambient Background Glow specific to this section */}
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="text-center mb-10 md:mb-14">
              <span className="text-brand-maroon text-xs font-bold uppercase tracking-widest bg-brand-maroon/5 border border-brand-maroon/10 px-3.5 py-1.5 rounded-full">
                Boutique Styles
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4 tracking-tight">
                Designer Dresses
              </h2>
              <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full mb-4"></div>
              <p className="text-base text-gray-600 max-w-xl mx-auto font-medium">
                Stunning ready-to-wear Anarkali suits and ethnic gowns for the modern woman.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {dresses.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          {/* ──── DRESS MATERIALS SECTION ──── */}
          <section 
            id="dress_materials" 
            className="scroll-mt-36 p-8 md:p-12 rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/40 shadow-[0_16px_48px_0_rgba(128,0,32,0.04)] relative overflow-hidden"
          >
            {/* Ambient Background Glow specific to this section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="text-center mb-10 md:mb-14">
              <span className="text-brand-maroon text-xs font-bold uppercase tracking-widest bg-brand-maroon/5 border border-brand-maroon/10 px-3.5 py-1.5 rounded-full">
                Custom Tailoring Fabrics
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4 tracking-tight">
                Premium Dress Materials
              </h2>
              <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full mb-4"></div>
              <p className="text-base text-gray-600 max-w-xl mx-auto font-medium">
                High-quality unstitched fabrics in pure handblock cotton and delicate Chanderi silk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {materials.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          {/* ──── LEHENGAS SECTION (SPOTLIGHT DESIGN) ──── */}
          <section 
            id="lehengas" 
            className="scroll-mt-36 p-8 md:p-12 rounded-[2.5rem] bg-white/15 backdrop-blur-xl border border-brand-gold/30 shadow-[0_20px_50px_0_rgba(212,175,55,0.08)] relative overflow-hidden"
          >
            {/* Prominent Gold Glow specific to this Spotlight section */}
            <div className="absolute -bottom-10 right-[-10%] w-[35rem] h-[35rem] bg-brand-gold/15 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute -top-10 left-[-10%] w-[30rem] h-[30rem] bg-brand-maroon/10 rounded-full blur-[90px] -z-10 pointer-events-none" />

            <div className="text-center mb-10 md:mb-14">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest bg-brand-gold/10 border border-brand-gold/25 px-4 py-1.5 rounded-full">
                👑 Premium Bridal Spotlight
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-950 mt-4 mb-4 tracking-tight">
                Grand Lehengas
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-4"></div>
              <p className="text-base md:text-lg text-gray-700 max-w-xl mx-auto font-medium">
                Luxury wedding and bridal lehenga cholis customized to perfection with intricate Zardozi embroidery.
              </p>
            </div>

            {/* Spotlight Grid: Larger cards layout for premium display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {lehengas.map((product) => (
                <div key={product.id} className="relative group">
                  {/* Decorative gold ring highlight around the card on hover */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-gold to-brand-maroon rounded-[2.2rem] opacity-0 group-hover:opacity-100 blur transition duration-500 -z-10" />
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}

export default App;
