import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/doctorlogo.png'; // Ensure this path is correct

const Header = () => {
  const publicUrl = process.env.REACT_APP_PUBLIC_URL || '';

  return (
    <header className="header">
      <div className="logo-container">
        <img src={`${publicUrl}/path/to/logo.png`} alt="Doctris Logo" className="logo-image" />
        <div className="logo-text">Acopic</div>
      </div>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/patients">Patients</Link></li>
          <li><Link to="/pharmacy">Pharmacy</Link></li>
          <li><Link to="/pages">Pages</Link></li>
        </ul>
      </nav>
      <div className="user-actions">
        <Link to="/login" className="login">Login</Link>
        <Link to="/signup" className="signup">Signup</Link>
        <button className="settings">⚙️</button>
        <button className="profile">👤</button>
      </div>
    </header>
  );
}

export default Header;