// src/components/ProfileCard.js

import React from 'react';
import './ProfileCard.css';
import profileBg from '../assets/profile-bg.jpg';
import profilePic from '../assets/doc-photo-2.png';

const ProfileCard = ({name, department, onAppointmentClick}) => {
  return (
    <div className="profile-card">
      <div className="profile-header" style={{ backgroundImage: `url(${profileBg})` }}>
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
      <div className="profile-info">
        <h2>{name}</h2>
        <p>{department}</p>
      </div>
      <nav className="profile-nav">
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
        </ul>
        <ul>
          <li><a href="#appointment" onClick={onAppointmentClick}>Appointment</a></li>
        </ul>
        <ul>
          <li><a href="#schedule-timing">Schedule Timing</a></li>
        </ul>
        <ul>
          <li><a href="#message">Message</a></li>
        </ul>
        <ul>
          <li><a href="#setting">Setting</a></li>
        </ul>
        <ul>
          <li><a href="#setting">Setting</a></li>
        </ul>
        <ul>
          <li><a href="#setting">Setting</a></li>
        </ul>
        <ul>
          <li><a href="#setting">Setting</a></li>
        </ul>
        
      </nav>
    </div>
  );
};

export default ProfileCard;
