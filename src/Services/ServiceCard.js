// src/ServiceCard.js
import React from 'react';
import './Service.css'; 
function ServiceCard({ title, description, imageUrl }) {
  return (
    <div className="service-card">
      <img src={imageUrl} alt={title} className="service-image" />
      <div className="service-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
