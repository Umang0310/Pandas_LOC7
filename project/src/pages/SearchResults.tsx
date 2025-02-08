import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';

const searchCategories = [
  'Destinations',
  'Experiences',
  'Hotels',
  'Restaurants',
  'Events',
  'Articles'
];

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Simulate search results
  const results = [
    {
      title: 'Taj Mahal',
      category: 'Destinations',
      description: 'An ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, India.',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=300&q=80'
    },
    {
      title: 'Yoga Retreat in Rishikesh',
      category: 'Experiences',
      description: 'Experience traditional yoga and meditation in the yoga capital of the world.',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=300&q=80'
    },
    // Add more mock results as needed
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-2 mb-8">
          <Search className="h-6 w-6 text-gray-400" />
          <h1 className="text-3xl font-bold text-gray-900">
            Search Results for "{query}"
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <div className="space-y-2">
                {searchCategories.map((category) => (
                  <label key={category} className="flex items-center">
                    <input type="checkbox" className="rounded text-orange-600" />
                    <span className="ml-2">{category}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {results.map((result, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex gap-6">
                  <img
                    src={result.image}
                    alt={result.title}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div>
                    <span className="text-sm text-orange-600 font-medium">
                      {result.category}
                    </span>
                    <h3 className="text-xl font-semibold mt-1 mb-2">
                      {result.title}
                    </h3>
                    <p className="text-gray-600">
                      {result.description}
                    </p>
                    <button className="mt-4 text-orange-600 font-semibold hover:text-orange-700">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;