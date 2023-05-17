import React from 'react';
import Services from '../components/Services';
import Workers from '../components/Workers';
import Contact from '../components/Contact';

const Home = ({ services, workers }) => {
  return (
    <div>
      <div className="banner">
        <div className="banner-content">
          <h3>We have talented engineers & mechanics</h3>
          <h2>AUTO MAINTENANCE & REPAIR SERVICE</h2>
          <p>Come and get your cars maintained. Worth every penny</p>
        </div>
      </div>
      <Services services={services} />
      <Workers workers={workers} />
      <Contact />
      <footer className="footer">
        <p>Built and designed by Eyad Salman.</p>
        <p>All rights reserved. ©</p>
      </footer>
    </div>
  );
};

export default Home;
