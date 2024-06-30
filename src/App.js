import React from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Hero from './Hero';
import Footer from './Footer';
import WhatWeDo from './WhatWeDo';
import ContactInfo from './ContactInfo';

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <WhatWeDo />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;