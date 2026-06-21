import { useState, useEffect } from 'react';
import sareesImg from '../assets/categories/sarees.png';
import dressesImg from '../assets/categories/dresses.png';
import materialsImg from '../assets/categories/dress_materials.png';
import lehengasImg from '../assets/categories/lehengas.png';

const categories = [
  { id: 'sarees', name: 'Sarees', image: sareesImg },
  { id: 'dresses', name: 'Dresses', image: dressesImg },
  { id: 'dress_materials', name: 'Dress Materials', image: materialsImg },
  { id: 'lehengas', name: 'Lehengas', image: lehengasImg },
];

const CategorySection = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const scrollPosition = window.scrollY + 150; // Offset for header + padding
        let currentActive = null;

        categories.forEach((cat) => {
          const el = document.getElementById(cat.id);
          if (el) {
            const elementTop = el.offsetTop;
            const elementBottom = elementTop + el.offsetHeight;
            
            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
              currentActive = cat.id;
            }
          }
        });

        if (currentActive) {
          setActiveSection(currentActive);
        }
      }, 50); // Small debounce for smooth scrolling
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleCategoryClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      // Calculate top position offset for floating header if needed
      const offset = 100; // floating header height + spacing
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <section className="w-full py-6 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Horizontal scroll track on mobile, centered flex container on desktop */}
        {/* Added py-6 to give vertical room for hover scaling (scale-105) and rings to avoid clipping */}
        <div className="flex items-center justify-start md:justify-center gap-8 md:gap-12 overflow-x-auto py-6 scrollbar-none snap-x snap-mandatory">
          {categories.map((cat) => {
            const isActive = activeSection === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="flex flex-col items-center gap-3 cursor-pointer group snap-center focus:outline-none min-w-[100px]"
              >
                {/* Rounded Circle container with glass border & zoom */}
                <div 
                  className={`w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden transition-all duration-500 relative flex items-center justify-center p-1 bg-white/40 backdrop-blur-md shadow-lg border
                    ${isActive 
                      ? 'border-brand-maroon ring-4 ring-brand-gold/50 scale-105 shadow-brand-maroon/20' 
                      : 'border-white/60 hover:border-brand-gold hover:scale-105 hover:shadow-xl'
                    }`}
                >
                  {/* Inside circle - category image */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Frosted overlay on inactive category hover or active state overlay */}
                  <div 
                    className={`absolute inset-0 rounded-full transition-opacity duration-300 pointer-events-none bg-gradient-to-t from-brand-maroon/20 via-transparent to-transparent opacity-0 group-hover:opacity-100
                      ${isActive ? 'opacity-40' : ''}`} 
                  />
                </div>
                
                {/* Category Label */}
                <span 
                  className={`text-xs md:text-sm font-semibold tracking-wide transition-colors duration-300
                    ${isActive 
                      ? 'text-brand-maroon font-bold underline decoration-brand-gold decoration-2 underline-offset-4' 
                      : 'text-gray-700 group-hover:text-brand-maroon'
                    }`}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
