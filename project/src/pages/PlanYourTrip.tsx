import React from 'react';

const PlanYourTrip = () => {
  const planningGuides = [
    {
      title: 'Visa Information',
      icon: '🛂',
      description: 'Learn about visa requirements and application process'
    },
    {
      title: 'Best Time to Visit',
      icon: '🌤️',
      description: 'Understand India\'s seasons and plan your visit accordingly'
    },
    {
      title: 'Transportation',
      icon: '🚂',
      description: 'Guide to getting around in India'
    },
    {
      title: 'Accommodation',
      icon: '🏨',
      description: 'Find the perfect place to stay'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Plan Your Trip</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {planningGuides.map((guide, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{guide.icon}</div>
              <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
              <p className="text-gray-600">{guide.description}</p>
              <button className="mt-4 text-orange-600 font-semibold hover:text-orange-700">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Travel Planner</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="Where do you want to go?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="Number of days"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                When
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Travelers
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="Number of travelers"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Plan My Trip
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlanYourTrip;