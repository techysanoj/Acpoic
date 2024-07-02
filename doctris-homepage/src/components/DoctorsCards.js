import React from 'react';
import CardTwo from './CardTwo';
import './Services.css';

export default function OurServices() {
  return (
    <div className="os-main">
      <div className="os-header">
        <h1 className="os-ht">Prestigious Doctors</h1>
        <p className="os-pt">
          Great doctor if you need your family member to get effective immediate
          assistance, emergency treatment, or a simple consultation.
        </p>
      </div>
      <div className="d-services">
        <CardTwo name="SANOJ" description="M.B.B.S - Psychotherapist" src="src/assets/doc-photo-1.png" />
        <CardTwo name="SANOJ" description="M.B.B.S - Orthopedic" src="/doc-photo-2.png" />
        <CardTwo name="SANOJ" description="M.D. - Eyesonic" src="/doc-photo-1.png" />
      </div>
    </div>
  );
}