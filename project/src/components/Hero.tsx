import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1920&q=80',
    title: 'Taj Mahal',
    subtitle: 'A testament to eternal love'
  },
  {
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1920&q=80',
    title: 'Varanasi',
    subtitle: 'The spiritual heart of India'
  },
  {
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1920&q=80',
    title: 'Rajasthan',
    subtitle: 'Land of Kings and Palaces'
  }
];

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-white max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/destinations"
              className="bg-white bg-opacity-90 p-6 rounded-lg hover:bg-opacity-100 transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Explore Destinations
              </h3>
              <p className="text-gray-600">
                Discover India's most iconic locations
              </p>
            </Link>
            <Link
              to="/experiences"
              className="bg-white bg-opacity-90 p-6 rounded-lg hover:bg-opacity-100 transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Unique Experiences
              </h3>
              <p className="text-gray-600">
                Immerse yourself in Indian culture
              </p>
            </Link>
            <Link
              to="/plan-your-trip"
              className="bg-white bg-opacity-90 p-6 rounded-lg hover:bg-opacity-100 transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Plan Your Trip
              </h3>
              <p className="text-gray-600">
                Everything you need to visit India
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;