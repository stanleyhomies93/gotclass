import React from 'react';
import './Hero.css'; // Import the CSS file for styling
import LocationInput from './LocationInput';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://cqyykwiqzujnqhnatuue.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxeXlrd2lxenVqbnFobmF0dXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3NjQ4NDEsImV4cCI6MjAzNTM0MDg0MX0.7lAYeY8eqp7dQM5tq3ZmnCwJjtW2sPAPSkm0CgwgYZk'; // Replace with your Supabase key
const supabase = createClient(supabaseUrl, supabaseKey);

function Hero() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      pickUpDate: e.target["pick-up-date"].value,
      dropOffDate: e.target["drop-off-date"].value,
      pickUpLocation: e.target["pick-up-location"].value,
      dropOffLocation: e.target["drop-off-location"].value,
      transferType: e.target["transfer"].value,
    };

    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from('bookings')
        .insert([formData]);

      if (error) {
        throw error;
      }

      console.log('Booking submitted:', data);
      // Optionally, you can handle success and error messages here
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <form className="hero-form" onSubmit={handleSubmit}>
           
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
