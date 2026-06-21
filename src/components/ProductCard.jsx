
import WhatsAppButton from './WhatsAppButton';

const categoryLabels = {
  sarees: 'Saree',
  dresses: 'Dress',
  dress_materials: 'Dress Material',
  lehengas: 'Lehenga'
};

const ProductCard = ({ product }) => {
  const displayCategory = categoryLabels[product.category] || 'Boutique';

  return (
    <div className="group relative flex flex-col bg-white/20 backdrop-blur-xl border border-white/60 rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:bg-white/30 transition-all duration-500 transform hover:-translate-y-2">

      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Category Tag (Top-Left) */}
        <div className="absolute top-4 left-4 bg-brand-maroon/80 backdrop-blur-sm px-3.5 py-1 rounded-full text-xs font-semibold text-white tracking-wider uppercase shadow-sm">
          {displayCategory}
        </div>

        {/* Price Tag (Top-Right) */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3.5 py-1 rounded-full text-sm font-bold text-brand-maroon shadow-sm border border-brand-maroon/10">
          ₹{product.price.toLocaleString('en-IN')}
        </div>
      </div>

      {/* Product Information */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-maroon transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[40px] leading-relaxed">
          {product.description}
        </p>

        {/* Specifications */}
        <div className="mt-auto space-y-2.5 text-sm font-medium text-gray-700 mb-6">
          <div className="flex items-center justify-between bg-white/25 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/50 shadow-xs">
            <span className="text-gray-500 font-medium">Fabric</span>
            <span className="font-semibold text-gray-800">{product.fabric}</span>
          </div>
          <div className="flex items-center justify-between bg-white/25 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/50 shadow-xs">
            <span className="text-gray-500 font-medium">{product.detailLabel}</span>
            <span className="font-semibold text-gray-800">{product.detailValue}</span>
          </div>
        </div>

        {/* Order CTA */}
        <WhatsAppButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
