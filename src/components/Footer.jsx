const Footer = () => {
  return (
    <footer id="contact" className="mt-20 relative z-10 w-full bg-white/20 backdrop-blur-xl border-t border-white/60 shadow-[0_-8px_32px_0_rgba(31,38,135,0.05)] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 relative">
        {/* Subtle gold/maroon accent blur inside the glass footer */}
        <div className="absolute top-[-20%] right-[-5%] w-64 h-64 bg-brand-gold/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-5%] w-64 h-64 bg-brand-maroon/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-brand-maroon mb-3 drop-shadow-sm tracking-tight">Nayovika Collection</h2>
            <p className="text-gray-700 max-w-md font-medium text-lg leading-relaxed">
              Elegant Sarees for Every Occasion. Handpicked, premium quality, delivered with love.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center font-semibold tracking-wide w-full md:w-auto">
            <a href="https://wa.me/918317425857" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3 bg-white/40 hover:bg-white/60 border border-white/60 rounded-xl text-brand-maroon transition-all shadow-sm hover:shadow-md hover:-translate-y-1 flex justify-center items-center gap-2">
              WhatsApp
            </a>
            <a href="https://instagram.com/nayovikacollections" className="w-full sm:w-auto px-6 py-3 bg-white/40 hover:bg-white/60 border border-white/60 rounded-xl text-brand-maroon transition-all shadow-sm hover:shadow-md hover:-translate-y-1 flex justify-center items-center gap-2">
              Instagram
            </a>
            <a href="mailto:contact@nayovika.com" className="w-full sm:w-auto px-6 py-3 bg-white/40 hover:bg-white/60 border border-white/60 rounded-xl text-brand-maroon transition-all shadow-sm hover:shadow-md hover:-translate-y-1 flex justify-center items-center gap-2">
              Email Us
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-maroon/10 text-center text-gray-500 font-medium text-sm relative z-10">
          <p>&copy; {new Date().getFullYear()} Nayovika Collection. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
