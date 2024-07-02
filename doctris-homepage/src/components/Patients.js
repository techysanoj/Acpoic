import React from 'react';
import PatientAuth from './PatientAuth'; // Import PatientAuth component

const Patients = () => {
  return (
    <div className="patients-section">
      <h1>Patients Section</h1>
      <PatientAuth />
    </div>
  );
}

export default Patients;
