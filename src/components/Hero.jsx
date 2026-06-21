
import heroSaree from '../assets/ABC.png';

const Hero = () => {
  return (
    <section id="home" className="relative pt-4 pb-6 w-full flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Contained Glassmorphism Image Banner */}
        <div className="w-full max-w-7xl mx-auto h-[300px] md:h-[500px] rounded-[2.5rem] overflow-hidden border border-white/50 shadow-2xl relative group bg-transparent backdrop-blur-sm">
          
          {/* Background Saree Image inside the banner */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <img 
              src={heroSaree} 
              alt="New Arrival Saree Background" 
              className="w-full h-full object-cover object-[center_30%] transform group-hover:scale-[101%] transition-transform duration-1000"
            />
            {/* Very soft bottom-up gradient to ensure text readability without hiding the saree */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
          
          {/* Content Over the Banner (aligned bottom-left to keep the saree visual clear) */}
          <div className="absolute inset-0 flex items-end justify-start z-10 p-8 md:p-12 lg:p-16">
            <div className="max-w-xl animate-fade-in-up text-left">
              
              <h2 className="text-3xl md:text-4.5xl lg:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-md text-white">
                Elegant Sarees for <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#E25C74] via-[#E5A93B] to-[#F6D27E] bg-clip-text text-transparent">Every Occasion</span>
              </h2>
              
              <div>
                <a 
                  href="#collection" 
                  className="inline-flex items-center justify-center py-2 px-5 rounded-full bg-white/20 border border-white/30 text-white text-xs md:text-sm font-bold tracking-widest uppercase shadow-sm hover:bg-white/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Shop New Arrivals
                </a>
              </div>
              
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
