import React from 'react';

const EVisas = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">e-Visa Information</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">e-Visa Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold mb-2">e-Tourist Visa</h3>
              <p className="text-gray-600">For recreational/sightseeing purposes</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold mb-2">e-Business Visa</h3>
              <p className="text-gray-600">For business meetings and conferences</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-bold mb-2">e-Medical Visa</h3>
              <p className="text-gray-600">For medical treatment in India</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Application Process</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                1
              </div>
              <div className="ml-4">
                <h3 className="font-bold mb-2">Fill Online Application</h3>
                <p className="text-gray-600">Complete the online application form with required information</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                2
              </div>
              <div className="ml-4">
                <h3 className="font-bold mb-2">Pay Visa Fee</h3>
                <p className="text-gray-600">Make payment using available payment methods</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                3
              </div>
              <div className="ml-4">
                <h3 className="font-bold mb-2">Receive e-Visa</h3>
                <p className="text-gray-600">Get your e-Visa via email within processing time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVisas;