import CategoryCard from "./category";

export default function CategorySection() {
    const categories = [
      { name: 'Vegetables', image: '/api/placeholder/400/250' },
      { name: 'Fruits', image: '/api/placeholder/400/250' },
      { name: 'Dairy & Eggs', image: '/api/placeholder/400/250' },
      { name: 'Meat', image: '/api/placeholder/400/250' },
    ];
  
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </div>
      </section>
    );
  }