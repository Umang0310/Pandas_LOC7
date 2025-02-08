import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Destinations from './components/Destinations';
import CrowdMonitor from './components/CrowdMonitor';
import Accessibility from './components/Accessibility';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="antialiased text-gray-800 min-h-screen flex flex-col">
      <Navbar />
      <Header />
      <main id="main-content" className="flex-1 relative">
        <Hero />
        <Features />
        <Destinations />
        <CrowdMonitor />
        <Accessibility />
      </main>
    </div>
  );
}

export default App;