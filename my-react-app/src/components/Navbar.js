import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-neutral-900 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#FF6D00]">EcoTravel</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-300 hover:text-[#FF6D00] px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#features" className="text-gray-300 hover:text-[#FF6D00] px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
              <a href="#destinations" className="text-gray-300 hover:text-[#FF6D00] px-3 py-2 rounded-md text-sm font-medium transition-colors">Destinations</a>
              <a href="#crowdMonitor" className="text-gray-300 hover:text-[#FF6D00] px-3 py-2 rounded-md text-sm font-medium transition-colors">Crowd Monitor</a>
              <a href="#accessibility" className="text-gray-300 hover:text-[#FF6D00] px-3 py-2 rounded-md text-sm font-medium transition-colors">Accessibility</a>
              <a href="#ecoInitiatives" className="text-gray-300 hover:text-[#FF6D00] px-3 py-2 rounded-md text-sm font-medium transition-colors">Eco Initiatives</a>
              <a href="#localExperiences" className="text-gray-300 hover:text-[#FF6D00] px-3 py-2 rounded-md text-sm font-medium transition-colors">Local Experiences</a>
              <a href="#booking" className="text-gray-300 hover:text-[#FF6D00] px-3 py-2 rounded-md text-sm font-medium transition-colors">Book Now</a>
              <a href="#contact" className="text-gray-300 hover:text-[#FF6D00] px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-400 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-300 hover:text-[#FF6D00] block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#features" className="text-gray-300 hover:text-[#FF6D00] block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#destinations" className="text-gray-300 hover:text-[#FF6D00] block px-3 py-2 rounded-md text-base font-medium">Destinations</a>
            <a href="#crowdMonitor" className="text-gray-300 hover:text-[#FF6D00] block px-3 py-2 rounded-md text-base font-medium">Crowd Monitor</a>
            <a href="#accessibility" className="text-gray-300 hover:text-[#FF6D00] block px-3 py-2 rounded-md text-base font-medium">Accessibility</a>
            <a href="#ecoInitiatives" className="text-gray-300 hover:text-[#FF6D00] block px-3 py-2 rounded-md text-base font-medium">Eco Initiatives</a>
            <a href="#localExperiences" className="text-gray-300 hover:text-[#FF6D00] block px-3 py-2 rounded-md text-base font-medium">Local Experiences</a>
            <a href="#booking" className="text-gray-300 hover:text-[#FF6D00] block px-3 py-2 rounded-md text-base font-medium">Book Now</a>
            <a href="#contact" className="text-gray-300 hover:text-[#FF6D00] block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;