import React from 'react';

const TravelTrade = () => {
  const resources = [
    {
      title: 'Tour Operators',
      description: 'Find approved tour operators and travel agencies',
      icon: '🏢'
    },
    {
      title: 'Travel Guides',
      description: 'Licensed tourist guides and information',
      icon: '👥'
    },
    {
      title: 'Hotels & Resorts',
      description: 'Approved accommodation providers',
      icon: '🏨'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Travel Trade</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <button className="text-orange-600 font-semibold hover:text-orange-700">
                View Directory →
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Travel Trade Registration</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Type
              </label>
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent">
                <option>Tour Operator</option>
                <option>Travel Agency</option>
                <option>Hotel/Resort</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TravelTrade;