import React from 'react';
import './Hero.css'; // Import the CSS file for styling
import LocationInput from './LocationInput';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <form className="hero-form">
           
            <div className="date-picker-group">
              <div className="date-picker">
                <label htmlFor="pick-up-date">Select pick up date:</label>
                <input type="date" id="pick-up-date" name="pick-up-date" />
              </div>
              <div className="date-picker">
                <label htmlFor="drop-off-date">Select drop off date:</label>
                <input type="date" id="drop-off-date" name="drop-off-date" />
              </div>
            </div>

            <LocationInput
              label="Pick up location"
              id="pick-up-location"
              placeholder="Type to search for pick up location..."
            />

            <LocationInput
              label="Drop off location"
              id="drop-off-location"
              placeholder="Type to search for drop off location..."
            />

              <div className="select-group">
                <label htmlFor="transfer-type">Transfer type</label>
                <select id="transfer" name="transfer">
                  <option value="one-way">One way</option>
                  <option value="return">Return</option>
                  <option value="return-new">Return (new ride)</option>
                </select>
            </div>

            <button type="submit" className="primary-button">Submit</button>
          </form>
        </div>
        <div className="hero-right">
          <p>Travel in comfort and style</p>
          <h1>Book with Malaysia's most trusted premium chauffeur service</h1>
        </div>
      </div>
    </section>
  );
}


export default Hero;
