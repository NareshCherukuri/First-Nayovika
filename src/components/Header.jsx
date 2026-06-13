import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 md:px-8">
      <header className="w-full max-w-7xl bg-white/20 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-300">
        <h1 className="text-2xl font-extrabold text-brand-maroon tracking-tight drop-shadow-sm ml-2">
          Nayovika
        </h1>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-semibold tracking-wide">
          <a href="#home" className="hover:text-brand-maroon hover:scale-105 transition-all">Home</a>
          <a href="#collection" className="hover:text-brand-maroon hover:scale-105 transition-all">Collection</a>
          <a href="#contact" className="hover:text-brand-maroon hover:scale-105 transition-all">Contact</a>
        </nav>
        
        <div className="hidden md:block">
          <a href="#collection" className="bg-brand-maroon text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg hover:bg-[#600018] transition-all hover:-translate-y-0.5">
            Shop Now
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center mr-2">
          <button 
            className="text-brand-maroon focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-7 h-7 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Nav Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl rounded-3xl p-6 flex flex-col space-y-4 md:hidden animate-fade-in-up">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-bold text-lg hover:text-brand-maroon border-b border-white/40 pb-2">Home</a>
          <a href="#collection" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-bold text-lg hover:text-brand-maroon border-b border-white/40 pb-2">Collection</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-bold text-lg hover:text-brand-maroon pb-2">Contact</a>
          <a href="#collection" onClick={() => setIsMobileMenuOpen(false)} className="bg-brand-maroon text-white text-center px-6 py-3 rounded-full font-bold shadow-md mt-2">
            Shop Now
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
