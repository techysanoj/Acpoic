import React, { useState } from 'react';
import './AppointmentBooking.css'; // Import CSS for styling

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send booking request to server
    console.log(`Appointment booked for ${selectedDate} at ${selectedTime} with ${selectedDoctor}`);
    // You can redirect user or show a confirmation message here
  };

  return (
    <div className="appointment-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Date:</label>
          <input type="date" value={selectedDate} onChange={handleDateChange} required />
        </div>
        <div className="form-group">
          <label>Select Time:</label>
          <input type="time" value={selectedTime} onChange={handleTimeChange} required />
        </div>
        <div className="form-group">
          <label>Select Doctor:</label>
          <select value={selectedDoctor} onChange={handleDoctorChange} required>
            <option value="">Select Doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Brown">Dr. Brown</option>
          </select>
        </div>
        <button type="submit" className="book-appointment-button">Book Appointment</button>
      </form>
    </div>
  );
}

export default AppointmentBooking;
