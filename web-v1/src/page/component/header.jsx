import { Search, ShoppingCart, Menu, User } from 'lucide-react';

export default function Header({ setMobileMenuOpen }) {
  return (
    <header className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">LocalHarvest</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-green-200">Home</a>
            <a href="#" className="hover:text-green-200">Shop</a>
            <a href="#" className="hover:text-green-200">Farmers</a>
            <a href="#" className="hover:text-green-200">About</a>
            <a href="#" className="hover:text-green-200">Contact</a>
          </nav>
          
          {/* Search, Cart, Account */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-green-800 rounded-full px-3 py-1">
              <input className="bg-transparent outline-none placeholder-green-200 text-sm w-32" placeholder="Search..." />
              <Search size={18} className="text-green-200" />
            </div>
            <a href="#" className="p-1 rounded-full hover:bg-green-600">
              <ShoppingCart size={22} />
            </a>
            <a href="#" className="p-1 rounded-full hover:bg-green-600">
              <User size={22} />
            </a>
            <button 
              className="md:hidden p-1"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}