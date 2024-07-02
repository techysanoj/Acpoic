import React from 'react';
import './CardOne.css'; // Import the CSS file

export default function CardOne({ name, description }) {
  return (
    <div className="card-main">
      <img className="c-img" src="/public/vite.svg" alt="Icon" />
      <a><h2 className="c-h2">{name}</h2></a>
      <p className="c-p">
        {description}
      </p>
      <a><p className="c-p-a">Read More</p></a>
    </div>
  );
}
