import React from 'react';

const states = [
  {
    name: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80',
    description: 'Land of Kings, featuring majestic forts and palaces'
  },
  {
    name: 'Kerala',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    description: 'God\'s Own Country with serene backwaters and lush greenery'
  },
  {
    name: 'Gujarat',
    image: 'https://images.unsplash.com/photo-1593096193931-2c4c1d651162?auto=format&fit=crop&w=800&q=80',
    description: 'Rich cultural heritage and vibrant traditions'
  }
];

const StateUts = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">States & Union Territories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {states.map((state, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={state.image} 
                alt={state.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{state.name}</h3>
                <p className="text-gray-600 mb-4">{state.description}</p>
                <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StateUts;