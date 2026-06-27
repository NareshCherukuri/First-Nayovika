import { useState, useCallback, useEffect } from 'react';
import logoIcon from '../assets/NayovikaIcon.png';
import logoText from '../assets/NayovikaText.png';

const Header = ({ 
  onNavigateHome, 
  hideShippingMarquee = false,
  isSearchOpen,
  setIsSearchOpen,
  searchQuery,
  setSearchQuery,
  onNavigate,
  collectionSubSections = []
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCategoryExpanded, setIsMobileCategoryExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = useCallback((e, href) => {
    e.preventDefault();
    setTimeout(() => {
      setIsMobileMenuOpen(false);

      if (href === '#home') {
        if (onNavigateHome) onNavigateHome();
      } else {
        // If not home, ensure we go home first then scroll
        if (onNavigateHome) {
          onNavigateHome();
          setTimeout(() => {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 200);
  }, [onNavigateHome]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigateHome) onNavigateHome();
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#collection' },
    { name: 'Shop by Category', href: '#categories' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-[150%] opacity-0 pointer-events-none'} bg-white/20 backdrop-blur-xl border-b border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]`}
      >
        {/* Main Header Bar - App Colors & Glassmorphism */}
        <header className="w-full transition-all duration-300">
          <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-3 flex items-center justify-between relative">

            {/* Left: Mobile Menu Toggle (Mobile) / Logo (Desktop) */}
            <div className="flex items-center gap-4">
              <button className="md:hidden hover:text-brand-gold transition-colors focus:outline-none text-brand-maroon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
              
              <a href="#home" onClick={handleLogoClick} className="hidden md:flex items-center gap-2 group">
                <img src={logoIcon} alt="Nayovika Icon" className="h-10 w-auto object-contain group-hover:scale-105 transition-transform" />
                <img src={logoText} alt="Nayovika" className="h-6 w-auto object-contain" style={{ filter: 'brightness(0.7)' }} />
              </a>
            </div>

            {/* Center: Logo (Mobile) / Desktop Nav (Desktop) */}
            
            {/* Logo perfectly centered using absolute on mobile */}
            <div className="md:hidden absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
              <a href="#home" onClick={handleLogoClick} className="flex items-center gap-2 group pointer-events-auto">
                <img src={logoIcon} alt="Nayovika Icon" className="h-8 w-auto object-contain group-hover:scale-105 transition-transform" />
                <img src={logoText} alt="Nayovika" className="h-5 w-auto object-contain" style={{ filter: 'brightness(0.7)' }} />
              </a>
            </div>

            {/* Desktop Navigation perfectly centered using absolute */}
            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8 lg:space-x-12 text-gray-800 font-semibold text-sm lg:text-base tracking-wide whitespace-nowrap">
              {navLinks.map((link) => (
                link.name === 'Shop by Category' ? (
                  <div key={link.name} className="relative group py-6">
                    <button className="hover:text-brand-maroon hover:-translate-y-0.5 transition-all flex items-center gap-1 group">
                      Shop by Category
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-[80%] left-1/2 -translate-x-1/2 mt-2 w-64 bg-white shadow-2xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top overflow-hidden">
                      <div className="p-2 space-y-1">
                         <div className="px-3 py-2 text-xs font-bold text-gray-400 tracking-widest uppercase">Collections</div>
                         {['sarees', 'lehengas', 'dresses'].map(mainCat => (
                           <button 
                             key={mainCat}
                             onClick={() => onNavigate?.(mainCat)}
                             className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-maroon hover:bg-brand-maroon/5 rounded-lg transition-colors capitalize"
                           >
                             {mainCat}
                           </button>
                         ))}
                         <div className="h-px bg-gray-100 my-2" />
                         <div className="px-3 py-2 text-xs font-bold text-gray-400 tracking-widest uppercase">Saree Fabrics</div>
                         {collectionSubSections?.map(sub => (
                           <button 
                             key={sub.id}
                             onClick={() => onNavigate?.(sub.id)}
                             className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-maroon hover:bg-brand-maroon/5 rounded-lg transition-colors"
                           >
                             {sub.name}
                           </button>
                         ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { if (link.href === '#home') handleLogoClick(e); }}
                    className="hover:text-brand-maroon hover:-translate-y-0.5 transition-all flex items-center gap-1 group"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </nav>

            {/* Right: Icons */}
            <div className="flex items-center justify-end gap-5 md:gap-6 text-brand-maroon">
              <button 
                onClick={() => setIsSearchOpen?.(!isSearchOpen)}
                className={`hover:text-brand-gold hover:scale-110 transition-transform ${isSearchOpen ? 'text-brand-gold scale-110' : ''}`} 
                aria-label="Search"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="hover:text-brand-gold hover:scale-110 transition-transform relative" aria-label="Cart">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1.5 -right-1.5 bg-brand-maroon text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white/50 shadow-sm">2</span>
              </button>
            </div>
          </div>
        </header>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="w-full bg-white/95 backdrop-blur-3xl border-t border-brand-maroon/10 p-3 md:p-4 shadow-xl">
            <div className="max-w-3xl mx-auto relative flex items-center">
              <input 
                type="text" 
                placeholder="Search sarees, lehengas, materials..." 
                value={searchQuery || ''}
                onChange={(e) => setSearchQuery?.(e.target.value)}
                autoFocus
                className="w-full bg-gray-100/50 border border-brand-maroon/20 text-gray-900 rounded-full py-2.5 md:py-3 px-10 md:px-12 text-sm focus:outline-none focus:border-brand-maroon focus:ring-1 focus:ring-brand-maroon shadow-inner"
              />
              <svg className="w-4 h-4 md:w-5 md:h-5 text-brand-maroon/70 absolute left-3.5 md:left-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              {searchQuery && (
                <button onClick={() => setSearchQuery?.('')} className="absolute right-3.5 md:right-4 text-gray-400 hover:text-brand-maroon bg-white rounded-full p-0.5 shadow-sm">
                   <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Bottom Marquee Bar */}
        {!hideShippingMarquee && (
          <div className="w-full bg-brand-maroon/5 border-b border-white/40 py-2.5 overflow-hidden flex justify-center whitespace-nowrap">
            <div className="w-full max-w-7xl mx-auto overflow-hidden">
              <div className="animate-marquee inline-flex gap-20 md:gap-32 px-4 items-center text-xs md:text-sm font-semibold text-brand-maroon tracking-wider">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="text-brand-gold text-lg">🚚</span>
                    Free express shipping in India for orders above ₹2500
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Mobile Menu Overlay ── */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-brand-maroon/5 backdrop-blur-xs z-[90] md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <div className={`fixed top-0 left-0 h-screen w-[300px] sm:w-[340px] bg-white/40 backdrop-blur-3xl border-r border-white/50 shadow-[8px_0_32px_rgba(31,38,135,0.05)] text-brand-dark z-[100] md:hidden transition-transform duration-300 flex flex-col p-6 overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between pb-3.5 border-b border-brand-maroon/10 mb-3.5">
          <div className="flex items-center gap-2">
            <img src={logoIcon} alt="Nayovika Icon" className="h-8 w-auto object-contain" />
            <img src={logoText} alt="Nayovika" className="h-5 w-auto object-contain" style={{ filter: 'brightness(0.7)' }} />
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-maroon/70 hover:text-brand-maroon bg-white/30 hover:bg-white/50 p-2 rounded-full border border-white/40 focus:outline-none hover:rotate-90 transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <nav className="flex flex-col space-y-1 mb-2">
          {navLinks.map((link) => (
            link.name === 'Shop by Category' ? (
              <div key={link.name} className="flex flex-col">
                <button 
                  onClick={() => setIsMobileCategoryExpanded(!isMobileCategoryExpanded)}
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-800 font-semibold text-base hover:bg-white/50 hover:text-brand-maroon rounded-xl transition-all"
                >
                  {link.name}
                  <svg className={`w-4 h-4 transition-transform ${isMobileCategoryExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {isMobileCategoryExpanded && (
                  <div className="pl-6 pr-2 py-2 flex flex-col space-y-3 animate-[slideDown_0.2s_ease-out]">
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Collections</div>
                      <div className="flex flex-col space-y-2">
                        {['sarees', 'lehengas', 'dresses'].map(mainCat => (
                           <button 
                             key={mainCat}
                             onClick={() => { onNavigate?.(mainCat); setIsMobileMenuOpen(false); }}
                             className="text-left text-sm font-medium text-gray-600 hover:text-brand-maroon capitalize"
                           >
                             {mainCat}
                           </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2">Saree Fabrics</div>
                      <div className="flex flex-col space-y-2">
                        {collectionSubSections?.map(sub => (
                           <button 
                             key={sub.id}
                             onClick={() => { onNavigate?.(sub.id); setIsMobileMenuOpen(false); }}
                             className="text-left text-sm font-medium text-gray-600 hover:text-brand-maroon"
                           >
                             {sub.name}
                           </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center py-2 px-3 text-gray-800 font-semibold text-base hover:bg-white/50 hover:text-brand-maroon rounded-xl transition-all"
              >
                {link.name}
              </a>
            )
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
