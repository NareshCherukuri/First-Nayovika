import { useState, useEffect } from 'react';

const MobileBottomNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show bottom nav only when scrolled down significantly
      // and when scrolling DOWN (while top header is hidden)
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'categories',
      label: 'Category',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      id: 'wishlist',
      label: 'Wishlist',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 'login',
      label: 'Login',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  return (
    <div 
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden transition-all duration-500 ease-out pointer-events-none w-[90%] max-w-sm
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[150%] opacity-0'}`}
    >
      <div className="bg-white/40 backdrop-blur-2xl border border-white/50 shadow-[0_8px_32px_0_rgba(128,0,32,0.15)] rounded-full px-6 py-3 flex items-center justify-between pointer-events-auto ring-1 ring-white/60">
        
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (item.id === 'home') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex flex-col items-center justify-center gap-1 relative focus:outline-none group"
            >
              {/* Active Indicator Blob */}
              <div 
                className={`absolute inset-0 bg-brand-maroon/10 rounded-full scale-150 transition-all duration-300 -z-10
                  ${isActive ? 'opacity-100 scale-150' : 'opacity-0 scale-50 group-hover:opacity-50 group-hover:scale-125'}`}
              />
              
              <div className={`transition-colors duration-300 ${isActive ? 'text-brand-maroon' : 'text-gray-600 group-hover:text-brand-maroon/80'}`}>
                {item.icon}
              </div>
              
              <span className={`text-[10px] font-bold tracking-wide transition-colors duration-300
                ${isActive ? 'text-brand-maroon' : 'text-gray-600 group-hover:text-brand-maroon/80'}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}

      </div>
    </div>
  );
};

export default MobileBottomNav;
