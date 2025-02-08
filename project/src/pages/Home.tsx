import React from 'react';
import Hero from '../components/Hero';
import DestinationsSection from '../components/DestinationsSection';
import ExperiencesSection from '../components/ExperiencesSection';
import NewsletterSection from '../components/NewsletterSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <DestinationsSection />
      <ExperiencesSection />
      <NewsletterSection />
    </div>
  );
};

export default Home;