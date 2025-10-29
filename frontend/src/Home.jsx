import React from 'react';
import Header from './components/Home/Header';
import Hero from './components/Home/Hero';
import FeaturedHomes from './components/Home/FeaturedHomes';
import DreamSection from './components/Home/DreamSection';
import Testimonial from './components/Home/Testimonial';
import ContactSection from './components/Home/ContactSection';
import CitySection from './components/Home/CitySection';
import Footer from './components/Home/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <FeaturedHomes />
      <DreamSection />
      <Testimonial />
      <ContactSection />
      <CitySection />
      <Footer />
    </div>
  );
};

export default Home;