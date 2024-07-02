// src/components/HeroSection.js
// src/components/HeroSection.js

import React from 'react';
import './HeroSection.css';
import doctorLogo from '../assets/doctorlogo.png';// Adjust the path as necessary

const HeroSection = () => (
  <div className="hero-section">
    <div className="hero-content">
      <img src={doctorLogo} alt="Doctor Logo" className="doctor-logo" />
      <h1>Meet The Best Doctor</h1>
      <p>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
      <button className="appointment-button">Make Appointment</button>
      <p className="terms">T&C apply. Please read Terms and Conditions</p>
    </div>
  </div>
);

export default HeroSection;
