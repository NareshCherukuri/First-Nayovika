import { useState, useEffect, useRef } from 'react';

const MobileBottomNav = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Production standard: Only trigger state changes when needed
      // Show bottom nav when scrolled down significantly
      if (currentScrollY > 150 && currentScrollY > lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY <= 150 || currentScrollY < lastScrollY.current) {
        setIsVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemsLeft = [
    {
      id: 'categories',
      label: 'Categories',
      icon: (
        <svg className="w-[22px] h-[22px] mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      id: 'search',
      label: 'Search',
      icon: (
        <svg className="w-[22px] h-[22px] mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    }
  ];

  const navItemsRight = [
    {
      id: 'cart',
      label: 'Cart',
      icon: (
        <svg className="w-[22px] h-[22px] mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'login',
      label: 'Login',
      icon: (
        <svg className="w-[22px] h-[22px] mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  const renderNavItem = (item) => {
    const isActive = activeTab === item.id;
    return (
      <button
        key={item.id}
        onClick={() => setActiveTab(item.id)}
        className="flex flex-col items-center justify-center focus:outline-none flex-1 w-full h-full"
      >
        <div className={`transition-colors duration-200 ${isActive ? 'text-brand-maroon' : 'text-gray-500'}`}>
          {item.icon}
        </div>
        <span className={`text-[10px] font-bold tracking-wide transition-colors duration-200 ${isActive ? 'text-brand-maroon' : 'text-gray-500'}`}>
          {item.label}
        </span>
      </button>
    );
  };

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-50 md:hidden pointer-events-none transition-transform duration-500 ease-in-out
        ${isVisible ? 'translate-y-0' : 'translate-y-[150%]'}`}
    >
      
      {/* Overflow wrapper to prevent horizontal scrolling */}
      <div className="absolute bottom-0 left-0 w-full h-[110px] overflow-hidden pointer-events-none">
        
        {/* True Glassmorphism implementation using clip-path */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-auto filter drop-shadow-[0_-4px_10px_rgba(128,0,32,0.15)]"
        >
          <div 
            className="w-[800px] h-[80px] bg-white/80 backdrop-blur-2xl border-t border-brand-maroon/10"
            style={{ clipPath: "path('M0 24 H340 C370 24, 370 0, 400 0 C430 0, 430 24, 460 24 H800 V80 H0 Z')" }}
          />
        </div>
      </div>

      {/* Content wrapper */}
      <div className="relative w-full h-[80px] pointer-events-auto pb-[env(safe-area-inset-bottom)]">
        <div className="absolute inset-0 flex justify-between items-end pb-0.5 px-1">
          
          {/* Left Items */}
          <div className="w-[40%] h-[56px] flex">
            {navItemsLeft.map(renderNavItem)}
          </div>

          {/* Center Prominent Button (Home) */}
          <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
            <button 
               onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
               className="w-[56px] h-[56px] bg-brand-maroon rounded-full flex flex-col items-center justify-center shadow-[0_8px_16px_rgba(128,0,32,0.3)] transform transition-transform active:scale-95 border border-white/20 backdrop-blur-md"
            >
               <svg className="w-[24px] h-[24px] text-white mb-0.5 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
               </svg>
               <span className="text-[9px] text-white font-bold tracking-wide drop-shadow-sm">Home</span>
            </button>
          </div>

          {/* Right Items */}
          <div className="w-[40%] h-[56px] flex">
            {navItemsRight.map(renderNavItem)}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MobileBottomNav;
