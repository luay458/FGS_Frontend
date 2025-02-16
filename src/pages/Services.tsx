// src/pages/Services.tsx
import React from 'react';

const Services: React.FC = () => (
  <>
    <h2 className="title-container">Consultation and Compliance Services</h2>
    <p className="smaller">
      FGS provides on-demand expertise to address technical and regulatory compliance challenges, offering:
    </p>
    <ul className="bullet-container">
      <li className="bullets">
        Regulatory Roadmaps: Assistance in charting global market compliance (Required vs. Recommended, Mandatory vs. Voluntary) by region, state, or country.
      </li>
      <li className="bullets">
        Product Regulatory Compliance Execution: End-to-end support for product certifications and market approvals.
      </li>
      <li className="bullets">
        Compliance Areas Covered:
        <ul className="areas-covered-container">
          <li>Regulatory Roadmaps: Assistance in charting global market compliance.</li>
          <li>Product Regulatory Compliance Execution: End-to-end support for product certifications and market approvals.</li>
          <li>Compliance Areas Covered: Ensuring adherence to safety and regulatory standards.</li>
        </ul>
      </li>
    </ul>
  </>
);

export default Services;
