
import heroSaree from '../assets/ABC.png';

const Hero = () => {
  return (
    <section id="home" className="relative pt-0 pb-6 w-full">
      {/* Full-width Glassmorphism Image Banner */}
      <div className="w-full h-[400px] md:h-[600px] overflow-hidden relative group bg-transparent">
        
        {/* Background Saree Image inside the banner */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <img 
            src={heroSaree} 
            alt="New Arrival Saree Background" 
            className="w-full h-full object-cover object-[center_30%] transform group-hover:scale-[101%] transition-transform duration-1000"
          />
          {/* Very soft bottom-up gradient to ensure text readability without hiding the saree */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
        
        {/* Content Over the Banner (aligned bottom-left to keep the saree visual clear) */}
        <div className="absolute inset-0 flex items-end justify-start z-10 p-8 md:p-12 lg:p-16 max-w-7xl mx-auto w-full">
          <div className="max-w-xl animate-fade-in-up text-left">
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg text-white">
              Elegant Sarees for <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#E25C74] via-[#E5A93B] to-[#F6D27E] bg-clip-text text-transparent drop-shadow-sm">Every Occasion</span>
            </h2>
            
            <div>
              <a 
                href="#collection" 
                className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white text-sm font-bold tracking-widest uppercase shadow-lg hover:bg-white/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Shop New Arrivals
              </a>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
