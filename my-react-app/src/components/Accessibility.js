import React from 'react';

const Accessibility = () => {
  return (
    <section id="accessibility" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">Accessible Tourism For All</h2>
          <p className="text-gray-400 text-lg">Making India's heritage accessible to every traveler</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate__animated animate__fadeInLeft">
            <div className="bg-neutral-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Accessibility Features</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#FF6D00] p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Wheelchair Accessibility</h4>
                    <p className="text-gray-400">Detailed information about ramps, elevators, and wheelchair-friendly paths at every destination</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#2E7D32] p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Visual Assistance</h4>
                    <p className="text-gray-400">Audio descriptions, braille guides, and high-contrast navigation assistance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#1565C0] p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Smart Navigation</h4>
                    <p className="text-gray-400">AI-powered route suggestions optimized for accessibility needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__fadeInRight">
            <div className="bg-neutral-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Real-time Assistance</h3>
              
              <div className="bg-neutral-700 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-semibold">Available Support Staff</span>
                  <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">Online</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Sign Language Interpreter</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Mobility Assistant</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Medical Support</span>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-700 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-4">Quick Request Assistance</h4>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-[#FF6D00] hover:bg-[#FF8F00] text-white p-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                    Video Call
                  </button>
                  <button className="border border-[#FF6D00] text-[#FF6D00] hover:bg-[#FF6D00] hover:text-white p-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    Chat Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accessibility;