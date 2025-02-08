import React from 'react';

const Destinations = () => {
  const destinations = [
    {
      name: 'North India',
      places: [
        {
          name: 'Taj Mahal, Agra',
          image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
          description: 'Symbol of eternal love and one of the World\'s Wonders'
        },
        {
          name: 'Golden Temple, Amritsar',
          image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=800&q=80',
          description: 'Most important spiritual site of Sikhism'
        }
      ]
    },
    {
      name: 'South India',
      places: [
        {
          name: 'Mysore Palace',
          image: 'https://images.unsplash.com/photo-1600689128666-10198aceb4bb?auto=format&fit=crop&w=800&q=80',
          description: 'Historical palace and the seat of the Kingdom of Mysore'
        },
        {
          name: 'Kerala Backwaters',
          image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
          description: 'Serene waterways and houseboat experiences'
        }
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Explore Destinations</h1>
        
        {destinations.map((region, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{region.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {region.places.map((place, placeIndex) => (
                <div key={placeIndex} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{place.name}</h3>
                    <p className="text-gray-600 mb-4">{place.description}</p>
                    <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;