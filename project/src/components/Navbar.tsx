import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  return (
    <>
      <nav className="bg-white fixed w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400&h=100&fit=crop&q=80" 
                  alt="Incredible India" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/destinations" className="text-gray-700 hover:text-orange-600">
                Destinations
              </Link>
              <Link to="/experiences" className="text-gray-700 hover:text-orange-600">
                Experiences
              </Link>
              <Link to="/plan-your-trip" className="text-gray-700 hover:text-orange-600">
                Plan Your Trip
              </Link>
              <Link to="/about-india" className="text-gray-700 hover:text-orange-600">
                About India
              </Link>
              <button 
                onClick={() => setShowSearch(true)}
                className="text-gray-700 hover:text-orange-600"
              >
                <Search className="h-5 w-5" />
              </button>
              <Link 
                to="/plan-your-trip" 
                className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700"
              >
                Explore Now
              </Link>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={() => setShowSearch(true)}
                className="text-gray-700"
              >
                <Search className="h-5 w-5" />
              </button>
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/destinations" className="block px-3 py-2 text-gray-700">
                Destinations
              </Link>
              <Link to="/experiences" className="block px-3 py-2 text-gray-700">
                Experiences
              </Link>
              <Link to="/plan-your-trip" className="block px-3 py-2 text-gray-700">
                Plan Your Trip
              </Link>
              <Link to="/about-india" className="block px-3 py-2 text-gray-700">
                About India
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Search overlay */}
      {showSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white w-full max-w-2xl mx-4 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Search</h2>
              <button onClick={() => setShowSearch(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleSearch}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations, experiences..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;