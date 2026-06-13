import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SareeCard from './components/SareeCard';
import Footer from './components/Footer';
import { products } from './data/products';

function App() {
  return (
    <div className="min-h-screen font-sans relative text-brand-dark selection:bg-brand-maroon selection:text-white">
      {/* Vibrant Background for True Glassmorphism */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
        <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-brand-maroon/20 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{animationDuration: '8s'}} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45rem] h-[45rem] bg-brand-gold/30 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{animationDuration: '10s'}} />
        <div className="absolute top-[30%] left-[40%] w-[35rem] h-[35rem] bg-pink-300/30 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <Header />
      
      <main>
        <Hero />
        
        <section id="collection" className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight drop-shadow-sm">Our Collection</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">Handpicked sarees for your most special moments.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <SareeCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
