import React from 'react';

const categories = ['Heritage', 'Nature', 'Culture', 'Festivals', 'Wildlife'];

const images = [
  {
    url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    title: 'Taj Mahal',
    category: 'Heritage'
  },
  {
    url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    title: 'Kerala Backwaters',
    category: 'Nature'
  },
  {
    url: 'https://images.unsplash.com/photo-1545350028-a08aa473452b?auto=format&fit=crop&w=800&q=80',
    title: 'Classical Dance',
    category: 'Culture'
  }
];

const Gallery = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Photo Gallery</h1>
        
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full bg-white shadow hover:shadow-md transition-shadow"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                <p className="text-sm">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;