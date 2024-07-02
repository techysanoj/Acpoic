import React from 'react';
import PatientAuth from './PatientAuth'; // Import PatientAuth component
import AppointmentBooking from './AppointmentBooking'; // Import AppointmentBooking component

const Patients = () => {
  return (
    <div className="patients-section">
      <h1>Patients Section</h1>
      <PatientAuth />
      <AppointmentBooking />
    </div>
  );
}

export default Patients;
