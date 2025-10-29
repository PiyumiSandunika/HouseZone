import React from 'react';
import Header from './components/Home/Header';
import HeroSection from './components/AboutUs/HeroSection';
import SuccessSection from './components/AboutUs/SuccessSection';
import AgentsSection from './components/AboutUs/AgentsSection';
import PersonalizedSection from './components/AboutUs/PersonalizedSection';
import Footer from './components/Home/Footer';
import './AboutUs.css';


const AboutUs = () => {
  return (
    <div className="about-us">
      <Header />
      <HeroSection />
      <SuccessSection />
      <AgentsSection />
      <PersonalizedSection />
      <Footer />
    </div>
  )
};

export default AboutUs;