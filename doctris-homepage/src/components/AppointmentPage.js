// src/components/AppointmentPage.js

import React from 'react';
import './AppointmentPage.css';

// Import images
import doctor1 from '../assets/doctor1.jpg';
import doctor2 from '../assets/doctor2.jpg';
import doctor3 from '../assets/doctor3.jpg';
import doctor4 from '../assets/doctor4.jpg';
import doctor5 from '../assets/doctor5.jpg';
import doctor6 from '../assets/doctor6.jpg';
import doctor7 from '../assets/doctor7.jpg';
import doctor8 from '../assets/doctor8.jpg';
import doctor9 from '../assets/doctor9.jpg';
import doctor10 from '../assets/doctor10.jpg';
import patient1 from '../assets/patient1.jpg';
import patient2 from '../assets/patient2.jpg';
import patient3 from '../assets/patient3.jpg';
import patient4 from '../assets/patient4.jpg';
import patient5 from '../assets/patient5.jpg';
import patient6 from '../assets/patient6.jpg';
import patient7 from '../assets/patient7.jpg';
import patient8 from '../assets/patient8.jpg';
import patient9 from '../assets/patient9.jpg';
import patient10 from '../assets/patient10.jpg';

const AppointmentPage = () => {
  const appointments = [
    { id: 1, name: 'Howard Tanner', age: 25, gender: 'Male', department: 'Cardiology', date: '13th Sep 2023', time: '11:00AM', doctor: 'Dr. Calvin Carlo', fees: '$50/Patient', doctorImage: doctor1, patientImage: patient1 },
    { id: 2, name: 'Wendy Filson', age: 28, gender: 'Female', department: 'Gynecology', date: '29th Nov 2023', time: '11:00AM', doctor: 'Dr. Cristino Murphy', fees: '$50/Patient', doctorImage: doctor2, patientImage: patient2 },
    { id: 3, name: 'Faye Bridger', age: 28, gender: 'Female', department: 'Psychotherapy', date: '29th Dec 2023', time: '02:30PM', doctor: 'Dr. Alia Reddy', fees: '$50/Patient', doctorImage: doctor3, patientImage: patient3 },
    { id: 4, name: 'Ronald Curtis', age: 25, gender: 'Male', department: 'Orthopedic', date: '13th March 2023', time: '01:00PM', doctor: 'Dr. Toni Kovar', fees: '$50/Patient', doctorImage: doctor4, patientImage: patient4 },
    { id: 5, name: 'Melissa Hibner', age: 28, gender: 'Female', department: 'Dental', date: '5th May 2023', time: '10:00AM', doctor: 'Dr. Jessica McFarlane', fees: '$50/Patient', doctorImage: doctor5, patientImage: patient5 },
    { id: 6, name: 'Randall Case', age: 25, gender: 'Male', department: 'Orthopedic', date: '19th June 2023', time: '09:00AM', doctor: 'Dr. Toni Kovar', fees: '$50/Patient', doctorImage: doctor6, patientImage: patient6 },
    { id: 7, name: 'Jerry Morena', age: 25, gender: 'Male', department: 'Dentist', date: '20th June 2023', time: '02:00PM', doctor: 'Dr. Jessica McFarlane', fees: '$50/Patient', doctorImage: doctor7, patientImage: patient7 },
    { id: 8, name: 'Lester McNally', age: 25, gender: 'Male', department: 'Gastrology', date: '31st Aug 2023', time: '01:00PM', doctor: 'Dr. Elsie Sherman', fees: '$50/Patient', doctorImage: doctor8, patientImage: patient8 },
    { id: 9, name: 'Christopher Burrell', age: 28, gender: 'Female', department: 'Urology', date: '1st Sep 2023', time: '01:00PM', doctor: 'Dr. Bertha Magers', fees: '$50/Patient', doctorImage: doctor9, patientImage: patient9 },
    { id: 10, name: 'Mary Skeens', age: 28, gender: 'Female', department: 'Neurology', date: '13th Sep 2023', time: '11:00AM', doctor: 'Dr. Louis Batey', fees: '$50/Patient', doctorImage: doctor10, patientImage: patient10 },
  ];

  return (
    <div className="appointment-page">
      <div className="appointment-header">
        <h1>Appointment</h1>
        <div className="appointment-actions">
          <button>Today</button>
          <button className="appointment-button">Appointment</button>
        </div>
      </div>
      <table className="appointment-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
            <th>Fees</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>
                <img src={appointment.patientImage} alt={appointment.name} className="appointment-avatar" />
                {appointment.name}
              </td>
              <td>{appointment.age}</td>
              <td>{appointment.gender}</td>
              <td>{appointment.department}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>
                <img src={appointment.doctorImage} alt={appointment.doctor} className="appointment-avatar" />
                {appointment.doctor}
              </td>
              <td>{appointment.fees}</td>
              <td className="appointment-actions">
                <button className="view-button">👁️</button>
                <button className="edit-button">✎</button>
                <button className="delete-button">✖️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>Showing 1 - 10 out of 50</span>
        <div className="pagination-buttons">
          <button>Prev</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
