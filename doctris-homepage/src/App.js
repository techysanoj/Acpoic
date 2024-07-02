import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg'; // Updated import path
import CardOne from './components/CardOne';
import Services from './components/Services';
import DoctorsCards from './components/DoctorsCards';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Doctors from './components/Doctors';
import Patients from './components/Patients';
import Pharmacy from './components/Pharmacy';
import Pages from './components/Pages';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/home" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/pages" element={<Pages />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
