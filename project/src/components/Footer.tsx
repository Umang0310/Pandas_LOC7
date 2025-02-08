import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About India</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">History & Culture</a></li>
              <li><a href="#" className="hover:text-orange-500">Fair & Festivals</a></li>
              <li><a href="#" className="hover:text-orange-500">Arts & Crafts</a></li>
              <li><a href="#" className="hover:text-orange-500">Cuisines</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Travel</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">Plan Your Trip</a></li>
              <li><a href="#" className="hover:text-orange-500">Visa Information</a></li>
              <li><a href="#" className="hover:text-orange-500">Travel Tips</a></li>
              <li><a href="#" className="hover:text-orange-500">Weather</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Discover</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">Destinations</a></li>
              <li><a href="#" className="hover:text-orange-500">Experiences</a></li>
              <li><a href="#" className="hover:text-orange-500">UNESCO Sites</a></li>
              <li><a href="#" className="hover:text-orange-500">Wildlife</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-orange-500"><Facebook /></a>
              <a href="#" className="hover:text-orange-500"><Twitter /></a>
              <a href="#" className="hover:text-orange-500"><Instagram /></a>
              <a href="#" className="hover:text-orange-500"><Youtube /></a>
            </div>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter for latest updates and travel inspiration.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 Incredible India. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-orange-500">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500">Terms of Use</a>
            <a href="#" className="hover:text-orange-500">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;