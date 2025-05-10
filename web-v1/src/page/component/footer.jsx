export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">LocalHarvest</h3>
              <p className="text-sm">Connecting you with the freshest local produce and products from farms in your community.</p>
            </div>
            <div>
              <h4 className="text-white text-base font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Vegetables</a></li>
                <li><a href="#" className="hover:text-white">Fruits</a></li>
                <li><a href="#" className="hover:text-white">Eggs & Dairy</a></li>
                <li><a href="#" className="hover:text-white">Meat</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-base font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Our Farmers</a></li>
                <li><a href="#" className="hover:text-white">Sustainability</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-base font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>support@localharvest.com</li>
                <li>(555) 123-4567</li>
                <li>123 Farm Road, Greenville</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>&copy; 2025 LocalHarvest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }