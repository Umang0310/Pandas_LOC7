import React from 'react';

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">Popular Destinations</h2>
          <p className="text-gray-400 text-lg">Discover India's most beautiful locations with real-time crowd insights</p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Taj Mahal Card */}
          <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg animate__animated animate__fadeInUp">
            <div className="relative">
              <div className="h-48 bg-neutral-700 flex items-center justify-center">
                <div className="text-[#FF6D00]">Image Placeholder</div>
              </div>
              <div className="absolute top-4 right-4 bg-[#FF6D00] text-white px-3 py-1 rounded-full text-sm">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Low Crowd
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Taj Mahal, Agra</h3>
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <div className="h-2 bg-neutral-600 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Current Capacity: 30%</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>Best Time: 6AM - 8AM</span>
                <span>Wait Time: ~15 mins</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">♿ Wheelchair Access</span>
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">🚻 Restrooms</span>
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">🅿️ Parking</span>
              </div>
              <button className="w-full bg-[#FF6D00] hover:bg-[#FF8F00] text-white font-bold py-2 px-4 rounded-lg transition-colors">
                View Details
              </button>
            </div>
          </div>

          {/* Varanasi Ghats Card */}
          <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg animate__animated animate__fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="h-48 bg-neutral-700 flex items-center justify-center">
                <div className="text-[#FF6D00]">Image Placeholder</div>
              </div>
              <div className="absolute top-4 right-4 bg-[#FF6D00] text-white px-3 py-1 rounded-full text-sm">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 animate-pulse"></span>
                  Moderate Crowd
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Varanasi Ghats</h3>
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <div className="h-2 bg-neutral-600 rounded-full">
                    <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Current Capacity: 60%</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>Best Time: 5AM - 7AM</span>
                <span>Wait Time: ~30 mins</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">🚶 Guided Tours</span>
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">📸 Photo Spots</span>
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">🛍️ Local Market</span>
              </div>
              <button className="w-full bg-[#FF6D00] hover:bg-[#FF8F00] text-white font-bold py-2 px-4 rounded-lg transition-colors">
                View Details
              </button>
            </div>
          </div>

          {/* Jaipur Fort Card */}
          <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="h-48 bg-neutral-700 flex items-center justify-center">
                <div className="text-[#FF6D00]">Image Placeholder</div>
              </div>
              <div className="absolute top-4 right-4 bg-[#FF6D00] text-white px-3 py-1 rounded-full text-sm">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                  High Crowd
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Amber Fort, Jaipur</h3>
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <div className="h-2 bg-neutral-600 rounded-full">
                    <div className="h-2 bg-red-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Current Capacity: 85%</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>Best Time: 4PM - 6PM</span>
                <span>Wait Time: ~45 mins</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">🎧 Audio Guide</span>
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">♿ Elevator</span>
                <span className="bg-neutral-700 text-xs text-gray-300 px-2 py-1 rounded">🚌 Transport</span>
              </div>
              <button className="w-full bg-[#FF6D00] hover:bg-[#FF8F00] text-white font-bold py-2 px-4 rounded-lg transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border-2 border-[#FF6D00] text-[#FF6D00] hover:bg-[#FF6D00] hover:text-white font-medium rounded-lg transition-colors animate__animated animate__pulse animate__infinite">
            Explore More Destinations
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;