import { ChevronDown } from 'lucide-react';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const featuredProducts = [
    { id: 1, name: 'Farm Fresh Eggs', price: 4.99, image: '/api/placeholder/300/200', category: 'Dairy' },
    { id: 2, name: 'Organic Apples', price: 3.49, image: '/api/placeholder/300/200', category: 'Fruits' },
    { id: 3, name: 'Fresh Spinach', price: 2.99, image: '/api/placeholder/300/200', category: 'Vegetables' },
    { id: 4, name: 'Grass-Fed Beef', price: 12.99, image: '/api/placeholder/300/200', category: 'Meat' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <a href="#" className="text-green-700 hover:text-green-800 font-medium flex items-center">
            View all <ChevronDown size={16} className="ml-1 transform rotate-270" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}