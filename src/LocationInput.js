import React, { useEffect, useRef } from 'react';
import './Hero.css';

const LocationInput = ({ label, id, placeholder }) => {
  const autocompleteRef = useRef(null);

  useEffect(() => {
    if (window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        autocompleteRef.current,
        {
          types: ['geocode'], // Restrict to addresses
          componentRestrictions: { country: 'my' } // Restrict to Malaysia
        }
      );

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        console.log(place); // Handle the place details
      });
    }
  }, []);

  return (
    <div className="location-input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        ref={autocompleteRef}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default LocationInput;
