import React from 'react';
import './Hero.css'; // Import the CSS file for styling
import LocationInput from './LocationInput';
import supabase from './supabaseClient'; // Ensure correct path to your Supabase client

function loadGoogleMapsAPI() {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
  script.async = true;
  document.body.appendChild(script);
}

function Hero() {
  useEffect(() => {
    const loadGoogleMapsAPI = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      document.body.appendChild(script);
    };

    loadGoogleMapsAPI();
  }, []);

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
              <label htmlFor="transfer">Transfer type</label>
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