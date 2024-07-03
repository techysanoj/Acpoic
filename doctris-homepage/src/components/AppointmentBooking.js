import React, { useState } from 'react';
import './AppointmentBooking.css';

const AppointmentBooking = () => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails({ ...appointmentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle appointment booking logic here
    console.log('Appointment Details:', appointmentDetails);
    alert('Appointment booked successfully!');
  };

  return (
    <div className="appointment-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={appointmentDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={appointmentDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={appointmentDetails.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={appointmentDetails.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={appointmentDetails.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Doctor:</label>
          <select
            name="doctor"
            value={appointmentDetails.doctor}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a Doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Brown">Dr. Brown</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentBooking;
