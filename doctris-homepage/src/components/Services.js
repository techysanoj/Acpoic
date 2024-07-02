import React from 'react';
import CardOne from './CardOne';
import './Services.css';

export default function OurServices() {
  return (
    <div className="os-main">
      <div className="os-header">
        <h1 className="os-ht">Our Services</h1>
        <p className="os-pt">
          Great doctor if you need your family member to get effective immediate
          assistance, emergency treatment, or a simple consultation.
        </p>
      </div>
      <div className="d-services">
        <CardOne name="Ultrasound" description="There is now an abundance of readable dummy texts required purely to fill a space." />
        <CardOne name="Eye Care" description="There is now an abundance of readable dummy texts required purely to fill a space." />
        <CardOne name="Stomach Pain" description="There is now an abundance of readable dummy texts required purely to fill a space." />
      </div>
      <div className="d-services">
        <CardOne name="Ultrasound" description="There is now an abundance of readable dummy texts required purely to fill a space." />
        <CardOne name="Eye Care" description="There is now an abundance of readable dummy texts required purely to fill a space." />
        <CardOne name="Stomach Pain" description="There is now an abundance of readable dummy texts required purely to fill a space." />
      </div>
    </div>
  );
}