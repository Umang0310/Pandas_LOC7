import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-neutral-900 min-h-[70vh] pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Smart & Sustainable <span className="text-[#FF6D00]">Travel Experience</span> in India
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Experience India's rich heritage while preserving its natural beauty. Join us in promoting responsible tourism through innovative technology solutions.
            </p>
            <div className="flex gap-4">
              <a href="#features" className="bg-[#FF6D00] hover:bg-[#FF8F00] text-white font-bold py-3 px-6 rounded-lg transition-colors animate__animated animate__pulse animate__infinite">
                Explore Features
              </a>
              <a href="#booking" className="border-2 border-[#FF6D00] text-[#FF6D00] hover:bg-[#FF6D00] hover:text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Book Now
              </a>
            </div>
          </div>
          <div className="relative animate__animated animate__fadeInRight">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6D00] to-[#2E7D32] rounded-lg opacity-20 blur-xl"></div>
            <div className="relative bg-neutral-800 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-700 p-4 rounded-lg text-center">
                  <span className="text-[#FF6D00] text-4xl font-bold">500+</span>
                  <p className="text-gray-300 mt-2">Destinations</p>
                </div>
                <div className="bg-neutral-700 p-4 rounded-lg text-center">
                  <span className="text-[#FF6D00] text-4xl font-bold">24/7</span>
                  <p className="text-gray-300 mt-2">Support</p>
                </div>
                <div className="bg-neutral-700 p-4 rounded-lg text-center">
                  <span className="text-[#FF6D00] text-4xl font-bold">100%</span>
                  <p className="text-gray-300 mt-2">Eco-Friendly</p>
                </div>
                <div className="bg-neutral-700 p-4 rounded-lg text-center">
                  <span className="text-[#FF6D00] text-4xl font-bold">50K+</span>
                  <p className="text-gray-300 mt-2">Happy Travelers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;