// src/components/AppointmentList.js

import React from 'react';
import AppointmentItem from './AppointmentItem';
import './AppointmentList.css';

const AppointmentList = ({ title, patients, appointments }) => {
  return (
    <div className="appointment-list">
      <div className="appointment-list-header">
        <h2>{title}</h2>
        <span>{patients} Patients</span>
      </div>
      <div className="appointment-list-body">
        {appointments.map((appointment, index) => (
          <AppointmentItem
            key={index}
            name={appointment.name}
            date={appointment.date}
            image={appointment.image}
          />
        ))}
      </div>
    </div>
  );
};

export default AppointmentList;
