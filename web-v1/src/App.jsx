// App.jsx - Main component
import { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';
import page from './test/page.jsx';

import Store from './page/home/store.jsx';
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set the logged-in state to true on successful login
  };
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* <ExplorePage/> */}
      <Store/>
    </div>

  );
}