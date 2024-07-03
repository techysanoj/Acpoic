// src/components/AppointmentsSection.js

import React from 'react';
import AppointmentList from './AppointmentList';
import './AppointmentsSection.css';

// Import images
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
import user4 from '../assets/user4.jpg';
import user5 from '../assets/user5.jpg';
import user6 from '../assets/user6.jpg';
import user7 from '../assets/user7.jpg';
import user8 from '../assets/user8.jpg';
import user9 from '../assets/user9.jpg';
import user10 from '../assets/user10.jpg';

const AppointmentsSection = () => {
  const latestAppointments = [
    { name: 'Calvin Carlo', date: 'Booking on 13th Sep, 2023', image: user1 },
    { name: 'Joya Khan', date: 'Booking on 29th Nov, 2023', image: user2 },
    { name: 'Amelia Muli', date: 'Booking on 29th Dec, 2023', image: user3 },
    { name: 'Nik Ronaldo', date: 'Booking on 13th March, 2023', image: user4 },
    { name: 'Crista Joseph', date: 'Booking on 5th May, 2023', image: user5 },
  ];

  const upcomingAppointments = [
    { name: 'Cristino Murphy', date: 'Booking on 19th June, 2023', image: user6 },
    { name: 'Cristino Murphy', date: 'Booking on 20th June, 2023', image: user7 },
    { name: 'Alex Dirio', date: 'Booking on 31st Aug, 2023', image: user8 },
    { name: 'Vrunda Koli', date: 'Booking on 1st Sep, 2023', image: user9 },
    { name: 'Aisha Low', date: 'Booking on 5th May, 2023', image: user10 },
  ];

  return (
    <div className="appointments-section">
      <AppointmentList title="Latest Appointment" patients={55} appointments={latestAppointments} />
      <AppointmentList title="Upcoming Appointment" patients={55} appointments={upcomingAppointments} />
    </div>
  );
};

export default AppointmentsSection;
