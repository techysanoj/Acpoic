import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import Pharmacy from './components/Pharmacy';
import Pages from './components/Pages';
import Home from './components/Home';
import AppointmentBooking from './components/AppointmentBooking'; // Import AppointmentBooking component
import PatientLoginSignup from './components/PatientAuth'; // Import PatientLoginSignup component
import './App.css';
import PatientAuth from './components/PatientAuth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage user login status

  // Dummy login function (replace with actual authentication logic)
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Dummy logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/home" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/login" element={<PatientAuth onLogin={handleLogin} />} />
          <Route path="/appointment" element={isLoggedIn ? <AppointmentBooking /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
