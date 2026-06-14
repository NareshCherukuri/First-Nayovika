import React, { useState, useCallback } from 'react';
import logoIcon from '../assets/NayovikaIcon.png';
import logoText from '../assets/NayovikaText.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const handleLinkClick = useCallback((e, href) => {
    e.preventDefault();
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setActiveId(null);
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  }, []);

  // Works for mouse, touch, pen — W3C Pointer Events
  const onEnter = useCallback((id) => () => setActiveId(id), []);
  const onLeave = useCallback(() => setActiveId(null), []);

  // Glass hover: frosted white bg + maroon text
  const gs = (id) => activeId === id
    ? { backgroundColor: 'rgba(255,255,255,0.55)', color: '#800020' }
    : {};

  const bs = (id) => ({
    backgroundColor: activeId === id ? '#D4AF37' : '#800020',
  });

  const as_ = (id) => activeId === id
    ? { color: '#800020', transform: 'translateX(4px)' }
    : {};

  const primaryLinks = [
    { name: 'Home', href: '#home', id: 'h' },
    { name: 'Collection', href: '#collection', id: 'c' },
    { name: 'New Arrivals', href: '#home', id: 'n' },
  ];

  const categories = [
    'Cotton Sarees', 'Soft Silk Sarees', 'Banarasi Sarees',
    'Organza Sarees', 'Wedding Sarees',
  ];

  return (
    <>
      {/* ── Floating Header ── */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 md:px-8 transition-all duration-300">
        <header className="w-full max-w-7xl bg-white/20 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-300 relative">
          <a href="#home" className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 flex items-center gap-2 md:gap-3">
            <img src={logoIcon} alt="Nayovika Icon" className="h-8 md:h-10 w-auto object-contain" />
            <img src={logoText} alt="Nayovika" className="h-5 md:h-6 w-auto object-contain" />
          </a>

          <nav className="hidden md:flex space-x-8 text-gray-800 font-semibold tracking-wide items-center">
            <a href="#home" className="hover:text-brand-maroon hover:scale-105 transition-all">Home</a>
            <div className="relative group py-2">
              <button className="hover:text-brand-maroon hover:scale-105 transition-all flex items-center gap-1 cursor-pointer">
                <span>Sarees</span>
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <div className="bg-white/80 backdrop-blur-3xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-2xl p-3 flex flex-col space-y-1">
                  {categories.map((item) => (
                    <a key={item} href="#collection" className="px-4 py-2.5 rounded-xl text-sm text-gray-800 hover:text-white hover:bg-brand-maroon transition-colors font-semibold text-left flex justify-between items-center group/item">
                      <span>{item}</span>
                      <span className="opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transform -translate-x-1 transition-all duration-200 text-brand-gold text-xs font-bold">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a href="#collection" className="hover:text-brand-maroon hover:scale-105 transition-all">Collection</a>
            <a href="#contact" className="hover:text-brand-maroon hover:scale-105 transition-all">Contact</a>
          </nav>

          <div className="hidden md:block">
            <a href="#collection" className="bg-brand-maroon text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg hover:bg-[#600018] transition-all hover:-translate-y-0.5">Shop Now</a>
          </div>

          <div className="md:hidden flex items-center ml-2">
            <button className="text-brand-maroon focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
              <svg className="w-7 h-7 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </header>
      </div>

      {/* ── Backdrop ── */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-brand-maroon/5 backdrop-blur-xs z-[90] md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* ── Mobile Drawer ── */}
      <div className={`fixed top-0 left-0 h-screen w-[300px] sm:w-[340px] bg-white/40 backdrop-blur-3xl border-r border-white/50 shadow-[8px_0_32px_rgba(31,38,135,0.05)] z-[100] md:hidden transition-transform duration-300 flex flex-col p-6 overflow-y-auto text-brand-dark ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-brand-maroon/10 mb-3.5">
          <div className="flex items-center gap-2">
            <img src={logoIcon} alt="Nayovika Icon" className="h-8 w-auto object-contain" />
            <img src={logoText} alt="Nayovika" className="h-5 w-auto object-contain" />
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-maroon/70 hover:text-brand-maroon bg-white/30 hover:bg-white/50 p-2 rounded-full border border-white/40 focus:outline-none hover:rotate-90 transition-all duration-300" aria-label="Close menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Primary Links */}
        <nav className="flex flex-col space-y-1 mb-2">
          {primaryLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              onPointerEnter={onEnter(link.id)}
              onPointerLeave={onLeave}
              onTouchStart={onEnter(link.id)}
              onTouchEnd={onLeave}
              style={{ ...gs(link.id), transition: 'all 0.2s ease', borderRadius: '0.75rem', cursor: 'pointer' }}
              className="flex items-center py-2 px-3 text-gray-800 font-semibold text-base select-none"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-maroon/20 to-transparent my-2.5" />

        <div className="mb-2 px-1">
          <span className="text-xs font-bold text-brand-maroon/80 tracking-widest uppercase">Shop Sarees</span>
        </div>

        {/* Category Links */}
        <div className="relative flex flex-col space-y-1 mb-6 pl-4">
          <div className="absolute left-0 top-1 bottom-1 w-[2px] bg-gradient-to-b from-brand-maroon via-brand-gold to-brand-maroon/10 rounded-full" />
          {categories.map((item) => {
            const id = `s-${item}`;
            return (
              <a
                key={item}
                href="#collection"
                onClick={(e) => handleLinkClick(e, '#collection')}
                onPointerEnter={onEnter(id)}
                onPointerLeave={onLeave}
                onTouchStart={onEnter(id)}
                onTouchEnd={onLeave}
                style={{ ...gs(id), transition: 'all 0.2s ease', borderRadius: '0.75rem', cursor: 'pointer' }}
                className="flex items-center justify-between py-2 px-3 text-gray-700 font-medium select-none"
              >
                <span className="text-sm tracking-wide">{item}</span>
                <span className="text-brand-maroon/60 text-xs font-bold" style={{ ...as_(id), transition: 'all 0.2s ease' }}>→</span>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-3.5 border-t border-brand-maroon/10">
          <div className="grid grid-cols-2 gap-2.5">
            {[{ l: 'About Nayovika', h: '#home', id: 'ab' }, { l: 'Contact Us', h: '#contact', id: 'ct' }].map((b) => (
              <a
                key={b.id}
                href={b.h}
                onClick={(e) => handleLinkClick(e, b.h)}
                onPointerEnter={onEnter(b.id)}
                onPointerLeave={onLeave}
                onTouchStart={onEnter(b.id)}
                onTouchEnd={onLeave}
                style={{ ...gs(b.id), transition: 'all 0.2s ease', borderRadius: '0.75rem', cursor: 'pointer' }}
                className="flex items-center justify-center py-2.5 px-3 bg-white/20 border border-white/30 text-xs font-semibold text-gray-700 select-none"
              >
                {b.l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
