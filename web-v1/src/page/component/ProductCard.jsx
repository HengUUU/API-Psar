import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <span className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
          {product.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-green-700">${product.price.toFixed(2)}</span>
          <button className="bg-green-700 hover:bg-green-800 text-white rounded-full p-2">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}