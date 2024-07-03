// src/components/AppointmentItem.js

import React from 'react';
import './AppointmentItem.css';

const AppointmentItem = ({ name, date, image }) => {
  return (
    <div className="appointment-item">
      <img src={image} alt={name} className="appointment-image" />
      <div className="appointment-details">
        <h3>{name}</h3>
        <p>{date}</p>
      </div>
      <span className="appointment-arrow">→</span>
    </div>
  );
};

export default AppointmentItem;
