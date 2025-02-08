import React from 'react';

const Experiences = () => {
  const experiences = [
    {
      category: 'Cultural',
      items: [
        {
          title: 'Traditional Dance Performance',
          image: 'https://images.unsplash.com/photo-1545350028-a08aa473452b?auto=format&fit=crop&w=800&q=80',
          description: 'Experience the vibrant classical dance forms of India'
        },
        {
          title: 'Cooking Classes',
          image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
          description: 'Learn to cook authentic Indian cuisine'
        }
      ]
    },
    {
      category: 'Adventure',
      items: [
        {
          title: 'Himalayan Trekking',
          image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
          description: 'Trek through the mighty Himalayas'
        },
        {
          title: 'Desert Safari',
          image: 'https://images.unsplash.com/photo-1569838741522-0a8b1c4c42f1?auto=format&fit=crop&w=800&q=80',
          description: 'Experience the Thar Desert on camelback'
        }
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Unique Experiences</h1>
        
        {experiences.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{category.category} Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((exp, expIndex) => (
                <div key={expIndex} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
                      Book Experience
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

export default Experiences;