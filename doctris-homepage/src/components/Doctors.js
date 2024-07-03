import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import AppointmentsSection from "./AppointmentsSection";
import AppointmentPage from "./AppointmentPage";
import "./Doctors.css";

const Doctors = () => {
  const [showAppointmentPage, setShowAppointmentPage] = useState(false);

  const handleAppointmentClick = () => {
    setShowAppointmentPage(true);
  };

  return (
    <div className="doctors-section">
      <div className="main-header">
        <ProfileCard name="Sanoj" department="Orthopedic" onAppointmentClick={handleAppointmentClick} />
        {!showAppointmentPage && <AppointmentsSection />}
        {showAppointmentPage && <AppointmentPage />}
      </div>
    </div>
  );
};

export default Doctors;
