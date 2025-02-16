// src/pages/Home.tsx
import React from 'react';

const Home: React.FC = () => (
  <>
    <h2 className="title-container">Welcome to Fortis Global Systems</h2>
    <p className="smaller">
      Fortis Global Systems LTD (FGS) is a distinguished provider of integrated safety and security solutions, specializing in Life Safety, Physical & IT Security Systems, and cutting-edge AI-driven innovations. We offer expert consultation, compliance support, and innovative technology to help businesses navigate complex regulatory landscapes while operating securely and efficiently.
    </p>
    <p className="smaller">To ensure long-term success, we follow a structured business model based on:</p>
    <ul className="bullet-container">
      <li className="bullets">Client-Centric Approach: Customized solutions for unique business needs</li>
      <li className="bullets">Strategic Partnerships: Collaborations with leading technology providers</li>
      <li className="bullets">Investment in R&D: Continuous innovation to stay ahead in the industry</li>
      <li className="bullets">Scalability: Expanding into new markets and sectors</li>
    </ul>
  </>
);

export default Home;
