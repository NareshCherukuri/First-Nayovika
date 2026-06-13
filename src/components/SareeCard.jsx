import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const SareeCard = ({ product }) => {
  return (
    <div className="group relative flex flex-col bg-white/20 backdrop-blur-xl border border-white/60 rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:bg-white/30 transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-brand-maroon shadow-sm">
          ₹{product.price}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="mt-auto space-y-2 text-sm font-medium text-gray-700 mb-6">
          <div className="flex items-center justify-between bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl border border-white/50 shadow-sm">
            <span className="text-gray-500">Fabric</span>
            <span>{product.fabric}</span>
          </div>
          <div className="flex items-center justify-between bg-white/20 backdrop-blur-md px-3 py-2 rounded-xl border border-white/50 shadow-sm">
            <span className="text-gray-500">Length</span>
            <span>{product.length}</span>
          </div>
        </div>
        
        <WhatsAppButton product={product} />
      </div>
    </div>
  );
};

export default SareeCard;
