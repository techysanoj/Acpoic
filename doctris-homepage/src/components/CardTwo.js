import React from 'react';
import './CardTwo.css'; // Import the CSS file

export default function CardTwo({ name, description, src }) {
  return (
    <div className="card2-main">
      <img className="c2-img" src={src} alt="Profile" />
      <div className="card-footer">
        <h2 className="c2-h2">{name}</h2>
        <p className="c2-p">{description}</p>
        <div className="social-icons">
          <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  );
}
