// src/ServicesPage.js
import React from 'react';
import ServiceCard from './ServiceCard';
import './Service.css'; // Make sure to create this CSS file


function Services() {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Creating beautiful, responsive websites that cater to your needs.',
      imageUrl: 'https://mamotechnolabs.com/wp-content/uploads/2023/09/4-1024x1024.png',
    },
    
    {
     id: 2,
     title: 'Mobile App Development',
     description: 'Developing seamless mobile applications for iOS and Android platforms.',
     imageUrl: 'https://mamotechnolabs.com/wp-content/uploads/2023/09/10.png',
   },

   {
     id: 2,
     title: 'Python Development',
     description: "Building robust Python scripts that can handle data processing tasks.",
     imageUrl: 'https://mamotechnolabs.com/wp-content/uploads/2023/09/5-1024x1024.png',
   }
    // Add more services as needed
  ];

  return (
    <div className="services-container">
      {services.map(service => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  );
}

export default Services;
