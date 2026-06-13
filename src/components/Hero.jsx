import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        
        {/* Glassmorphism Hero Panel */}
        <div className="w-full max-w-7xl mx-auto bg-white/20 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden animate-fade-in-up">
          
          {/* Subtle internal glows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-gold/20 rounded-full blur-[60px] pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-maroon/10 rounded-full blur-[60px] pointer-events-none"></div>

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/40 border border-white/60 text-brand-maroon text-sm font-bold mb-8 tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-maroon animate-pulse"></span>
              New Arrival Collection
            </span>
            
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight drop-shadow-sm leading-tight text-gray-900">
              Elegant Sarees for <br className="hidden md:block"/> 
              <span className="bg-gradient-to-r from-brand-maroon to-brand-gold bg-clip-text text-transparent">Every Occasion</span>
            </h2>
            
            <p className="text-lg md:text-2xl text-gray-800 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              Discover our handpicked collection of premium silk, organza, and cotton sarees. Crafted with love, designed for you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#collection" className="px-8 py-4 bg-gradient-to-r from-brand-maroon to-[#600018] text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                Explore Collection
              </a>
              <a href="#contact" className="px-8 py-4 bg-white/40 border border-white/60 text-brand-maroon rounded-full font-bold text-lg shadow-sm hover:shadow-md hover:bg-white/60 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                Contact Us
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
