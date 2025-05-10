import FarmerCard from "./FarmersCard";

FarmerCard
export default function FarmersSection() {
    const farmers = [
      { name: "Johnson Family Farm", distance: "5 miles away", image: '/api/placeholder/150/150' },
      { name: "Green Valley Organics", distance: "8 miles away", image: '/api/placeholder/150/150' },
      { name: "Sunrise Poultry", distance: "12 miles away", image: '/api/placeholder/150/150' }
    ];
  
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Local Farmers</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {farmers.map((farmer, index) => (
              <FarmerCard key={index} farmer={farmer} />
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#" className="inline-block bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-2 px-6 rounded-lg">
              See All Farmers
            </a>
          </div>
        </div>
      </section>
    );
  }