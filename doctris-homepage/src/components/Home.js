import React from 'react';
import './Home.css'; // Import your CSS file for styling
import doctorImage from '../assets/doctorimage.png'; // Adjust the path according to your project structure
import OurServices from './Services'; // Importing OurServices component
import DoctorsCards from './DoctorsCards'; // Importing DoctorsCards component

const Home = () => {
  return (
    <div className="home-section">
      <div className="home-content">
        <div className="image-section">
          <img src={doctorImage} alt="Doctor" className="main-image" />
          <img src={doctorImage} alt="Family Doctor" className="overlay-image" />
          <img src={doctorImage} alt="Medicine" className="small-image" />
          <button className="play-button">
            <i className="play-icon">▶️</i>
          </button>
        </div>
        <div className="text-section">
          <h2>About Our Treatments</h2>
          <p>
            Great doctor if you need your family member to get effective immediate assistance,
            examination, emergency treatment or a simple consultation. Thank you.
          </p>
          <p>
            The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated
            in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less
            corresponds to 'proper' Latin. It contains a series of real Latin words.
          </p>
          <button className="read-more-button">Read More →</button>
        </div>
      </div>
      <div className="below-content">
        <OurServices />
        <DoctorsCards />
      </div>
    </div>
  );
}

export default Home;
