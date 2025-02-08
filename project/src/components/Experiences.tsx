import React from 'react';

const experiences = [
  {
    title: 'Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1545350028-a08aa473452b?auto=format&fit=crop&w=800&q=80',
    description: 'Immerse yourself in India\'s rich traditions and festivals'
  },
  {
    title: 'Adventure Tourism',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    description: 'From Himalayan treks to desert safaris'
  },
  {
    title: 'Wellness & Yoga',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
    description: 'Experience ancient healing traditions and meditation'
  }
];

const Experiences = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Incredible Experiences</h2>
          <p className="text-xl text-gray-600">Discover unique adventures that await you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <img 
                src={exp.image} 
                alt={exp.title}
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <p className="text-gray-200 mb-4">{exp.description}</p>
                <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;