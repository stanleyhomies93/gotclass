// src/ContactInfo.js
import React from 'react';
import './ContactInfo.css'; // Import CSS for ContactInfo section

import phoneIcon from './icons/phone.svg'; // Example icon import
import mapIcon from './icons/map.svg'; // Example icon import
import clockIcon from './icons/clock.svg'; // Example icon import

function ContactInfo() {
  return (
    <section className="contact-info">
      <h2 className="contact-info-title">Get In Touch With Us</h2>
      <p className="contact-info-description">
        For inquiries or more information about our services, feel free to contact us through the details below.
      </p>
      <div className="contact-info-details">
        <div className="contact-info-item">
          <img src={mapIcon} alt="Map Icon" className="contact-info-icon" />
          <div className="contact-info-text">
            <h3 className="contact-info-heading">ADDRESS</h3>
            <p className="contact-info-content">UG 5, The Scott Garden, Old Klang Road, 58200, Kuala Lumpur, Malaysia</p>
          </div>
        </div>
        <div className="contact-info-item">
          <img src={phoneIcon} alt="Phone Icon" className="contact-info-icon" />
          <div className="contact-info-text">
            <h3 className="contact-info-heading">PHONES</h3>
            <p className="contact-info-content">Bookings: (018) 972 2688<br />Office: (03) 7890 1149</p>
          </div>
        </div>
        <div className="contact-info-item">
          <img src={clockIcon} alt="Clock Icon" className="contact-info-icon" />
          <div className="contact-info-text">
            <h3 className="contact-info-heading">WORKING HOURS</h3>
            <p className="contact-info-content">Monday - Sunday: <br />0400 - 0100</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;