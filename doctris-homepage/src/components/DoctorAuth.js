import React, { useState } from 'react';
import './DoctorAuth.css'; // Import CSS for styling login and signup

const DoctorAuth = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and signup forms
  };

  return (
    <div className="auth-form">
      {isLogin ? (
        <div>
          <h2>Doctor Login</h2>
          <form>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" name="password" required />
            </div>
            <button type="submit" className="auth-button">Login</button>
          </form>
          <p>Don't have an account? <button onClick={toggleForm}>Sign Up</button></p>
        </div>
      ) : (
        <div>
          <h2>Doctor Sign Up</h2>
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" required />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" name="password" required />
            </div>
            <button type="submit" className="auth-button">Sign Up</button>
          </form>
          <p>Already have an account? <button onClick={toggleForm}>Login</button></p>
        </div>
      )}
    </div>
  );
}

export default DoctorAuth;
