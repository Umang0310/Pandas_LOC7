import React from 'react';

const tourismTypes = [
  {
    title: 'Heritage Tourism',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
    description: 'Explore India\'s rich historical monuments and UNESCO sites'
  },
  {
    title: 'Wildlife Tourism',
    image: 'https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&w=800&q=80',
    description: 'Discover India\'s diverse wildlife in national parks and sanctuaries'
  },
  {
    title: 'Medical Tourism',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80',
    description: 'World-class healthcare facilities with traditional wellness'
  }
];

const Tourism = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Tourism in India</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tourismTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={type.image} 
                alt={type.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tourism;