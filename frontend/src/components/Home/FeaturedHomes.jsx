import React from 'react';
import './FeaturedHomes.css';

const FeaturedHomes = () => {
  const properties = [
    {
      id: 1,
      image: './src/assets/id1.jpg',
      price: 'LKR 72,000,000',
      title: 'Anderson House',
      address: 'No. 12, Anderson Road, Dehiwala',
      beds: 3,
      baths: 2,
      sqft: 1200,
      garages: 1,
      type: 'For sale'
    },
    {
      id: 2,
      image: './src/assets/id2.jpg',
      price: 'LKR 60,000,000',
      title: 'Joseph Street House',
      address: 'No. 56, St. Joseph Street, Negombo',
      beds: 3,
      baths: 2,
      sqft: 1200,
      garages: 1,
      type: 'For sale'
    },
    {
      id: 3,
      image: './src/assets/id3.webp',
      price: 'LKR 90,000 / month',
      title: 'Station Road House',
      address: 'No. 88, Station Road, Wattala',
      beds: 4,
      baths: 2,
      sqft: 650,
      garages: 2,
      type: 'For rent'
    },
    {
      id: 4,
      image: './src/assets/id4.jpg',
      price: 'LKR 62,000,000',
      title: 'Independence House',
      address: 'No. 33, Independence Avenue, Colombo 07',
      beds: 3,
      baths: 1,
      sqft: 1200,
      garages: 2,
      type: 'For sale'
    },
    {
      id: 5,
      image: './src/assets/id5.jpg',
      price: 'LKR 85,000 / month',
      title: 'Lady Gordon House',
      address: 'No. 77, Lady Gordon\'s Drive, Kandy',
      beds: 5,
      baths: 2,
      sqft: 800,
      garages: 1,
      type: 'For rent'
    },
    {
      id: 6,
      image: './src/assets/id6.webp',
      price: 'LKR 65,000,000',
      title: 'Galle Road House',
      address: 'No. 105, Galle Road, Colombo 03',
      beds: 4,
      baths: 1,
      sqft: 850,
      garages: 1,
      type: 'For sale'
    }
  ];

  return (
    <section className="featured-homes">
      <div className="container">
        <div className="section-header">
          <h2>Featured Homes Just for You</h2>
          <p>Browse our handpicked selection of top-rated homes</p>
        </div>

        <div className="properties-container">
          {properties.map(property => (
            <div key={property.id} className="property-card">
              <div className="property-image">
                <img src={property.image} alt={property.title} />
                <div className="property-type" data-type={property.type}>{property.type}</div>
              </div>
              <div className="property-info">
                <div className="property-price">{property.price}</div>
                <h3>{property.title}</h3>
                <p className="property-address">{property.address}</p>
                <div className="property-details">
                  <span>{property.beds} Bedrooms</span>
                  <span>{property.baths} Bathrooms</span>
                  <span>{property.sqft.toLocaleString()} sqft</span>
                  <span>{property.garages} Garage</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHomes;