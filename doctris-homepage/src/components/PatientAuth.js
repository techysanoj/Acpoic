import React, { useState } from 'react';
import './PatientAuth.css'; // Import CSS for styling

const PatientAuth = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and signup forms
  };

  return (
    <div className="auth-form">
      {isLogin ? (
        <div>
          <h2>Patient Login</h2>
          <form>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" placeholder=" " required />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" name="password" placeholder=" " required />
            </div>
            <button type="submit" className="auth-button">Login</button>
          </form>
          <p>Don't have an account? <button onClick={toggleForm}>Sign Up</button></p>
        </div>
      ) : (
        <div>
          <h2>Patient Sign Up</h2>
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" placeholder=" " required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" placeholder=" " required />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" name="password" placeholder=" " required />
            </div>
            <button type="submit" className="auth-button">Sign Up</button>
          </form>
          <p>Already have an account? <button onClick={toggleForm}>Login</button></p>
        </div>
      )}
    </div>
  );
}

export default PatientAuth;
