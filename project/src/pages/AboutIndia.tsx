import React from 'react';

const AboutIndia = () => {
  const sections = [
    {
      title: 'History & Heritage',
      content: 'India\'s history spans thousands of years, encompassing ancient civilizations, medieval dynasties, colonial periods, and a vibrant democracy.',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Culture & Traditions',
      content: 'Experience the rich tapestry of Indian culture through its festivals, art forms, music, dance, and traditional practices.',
      image: 'https://images.unsplash.com/photo-1545350028-a08aa473452b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Food & Cuisine',
      content: 'Discover the diverse flavors of Indian cuisine, from street food to royal delicacies, each region offering unique tastes and traditions.',
      image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About India</h1>
        
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-gray-600">
            India, a land of ancient wisdom and modern aspirations, offers visitors an
            unparalleled blend of cultural experiences, historical wonders, and natural beauty.
          </p>
        </div>

        {sections.map((section, index) => (
          <div key={index} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className={index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2'}>
                <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                <p className="text-gray-600 text-lg mb-6">{section.content}</p>
                <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
                  Learn More
                </button>
              </div>
              <div className={index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'}>
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Fast Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold mb-2">Geography</h3>
              <p className="text-gray-600">
                Diverse landscape from the Himalayas to tropical beaches
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Languages</h3>
              <p className="text-gray-600">
                22 official languages and numerous dialects
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Climate</h3>
              <p className="text-gray-600">
                Varies from tropical to alpine across regions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIndia;