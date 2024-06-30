import React from 'react';
import logo from './logo.png'; // Import the logo image

function Navigation() {
  return (
    <nav>
        <div className="nav-container"> {/* Add a container */}
            <ul>
                <li className="logo">
                <img src={logo} alt="Logo" />
                </li>
                <div className="menu-items">
                <li><a href="#booking">Make a booking</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#contact">Contact us</a></li>
                <li><button className="nav-button">Sign Up</button></li>
                </div>
            </ul>
        </div>
    </nav>
  );
}

export default Navigation;
