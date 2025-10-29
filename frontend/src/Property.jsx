import React from 'react';
import Header from './components/Home/Header';
import Hero from './components/Home/Hero';
import Places from './components/Property/Places';
import Footer from './components/Home/Footer';
import './Property.css';

const Property = ({ properties }) => {
  return (
    <div className="property-page">
      <Header />
      {/* <Hero /> */}
      <Places />
      <Footer />
    </div>
  );
};

export default Property;
