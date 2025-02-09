import React from 'react';

const CrowdMonitor = () => {
  return (
    <section id="crowdMonitor" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">Real-Time Crowd Monitoring</h2>
          <p className="text-gray-400 text-lg">Make informed decisions with live crowd density data</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-neutral-900 p-6 rounded-xl animate__animated animate__fadeInLeft">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Live Crowd Monitor</h3>
              <span className="bg-green-500 px-3 py-1 rounded-full text-sm text-white animate-pulse">Live Updates</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-neutral-800 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Taj Mahal</span>
                  <span className="text-green-500">Low</span>
                </div>
                <div className="h-2 bg-neutral-700 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>

              <div className="bg-neutral-800 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Qutub Minar</span>
                  <span className="text-yellow-500">Moderate</span>
                </div>
                <div className="h-2 bg-neutral-700 rounded-full">
                  <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>

              <div className="bg-neutral-800 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Gateway of India</span>
                  <span className="text-red-500">High</span>
                </div>
                <div className="h-2 bg-neutral-700 rounded-full">
                  <div className="h-2 bg-red-500 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="bg-neutral-800 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Mysore Palace</span>
                  <span className="text-yellow-500">Moderate</span>
                </div>
                <div className="h-2 bg-neutral-700 rounded-full">
                  <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button className="flex-1 bg-[#FF6D00] hover:bg-[#FF8F00] text-white py-2 rounded-lg transition-colors">
                Set Alerts
              </button>
              <button className="flex-1 border border-[#FF6D00] text-[#FF6D00] hover:bg-[#FF6D00] hover:text-white py-2 rounded-lg transition-colors">
                View All Locations
              </button>
            </div>
          </div>

          <div className="space-y-6 animate__animated animate__fadeInRight">
            <div className="bg-neutral-900 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#FF6D00] p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Wait Time Prediction</h4>
                  <p className="text-gray-400">AI-powered waiting time estimates</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#2E7D32] p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Smart Notifications</h4>
                  <p className="text-gray-400">Get alerts when crowd levels change</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1565C0] p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Route Optimization</h4>
                  <p className="text-gray-400">Smart suggestions for less crowded times</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrowdMonitor;