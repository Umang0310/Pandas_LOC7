import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Experiences from './pages/Experiences';
import PlanYourTrip from './pages/PlanYourTrip';
import AboutIndia from './pages/AboutIndia';
import SearchResults from './pages/SearchResults';
import StateUts from './pages/StateUts';
import Tourism from './pages/Tourism';
import EVisas from './pages/EVisas';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import TravelTrade from './pages/TravelTrade';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/plan-your-trip" element={<PlanYourTrip />} />
          <Route path="/about-india" element={<AboutIndia />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/states" element={<StateUts />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/e-visa" element={<EVisas />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/travel-trade" element={<TravelTrade />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App