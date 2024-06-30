// src/WhatWeDo.js
import React from 'react';
import './WhatWeDo.css'; // Import CSS for WhatWeDo section

import serviceImage1 from './images/serviceImage1.png';
import serviceImage2 from './images/serviceImage2.png';
import serviceImage3 from './images/serviceImage3.png';

const services = [
  {
    title: "CORPORATE & PREMIUM TRAVEL",
    description: "We provide premium cars with experienced drivers. Pre-book your service from one (1) hour to two (2) months in advance so you can reach your destination safely, in comfort and on time.",
    image: serviceImage1,
  },
  {
    title: "AIRPORT TRANSFER",
    description: "Premium airport transfers to and from Kuala Lumpur International Airport (KLIA1&2) and Sultan Abdul Aziz Shah Airport (Subang), the perfect option for business or pleasure",
    image: serviceImage2,
  },
  {
    title: "PRIVATE EVENT SERVICE",
    description: "Whether it is a short shopping trip or a long-distance journey, hire up to 8 cars at once and we will get you there in comfort plus we will handle the entire event efficiently",
    image: serviceImage3,
  },
];

function WhatWeDo() {
  return (
    <section className="what-we-do">
      <h4>WHAT WE DO</h4>
      <h2 className="section-title">Malaysia's #1 Toyota Vellfire Chauffeur Service</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatWeDo;
