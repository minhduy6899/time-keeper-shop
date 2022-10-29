import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import './newsletter.scss';

function Newsletter() {
  return (
    <div className="newsletter-section d-flex align-items-center justify-content-center">
      <div className="info-service d-flex flex-column align-items-center justify-content-center">
        <div className="info-service-title text-center">
          <h1>SIGN UP NEWSLETTER</h1>
        </div>
        <div className="info-service-description text-center">
          <p> GET IN NOW WITH A 30% FINANCE DEAL FROM BIONIC ELECTRONICS.</p>
        </div>
        <div className="input-email">
          <input type="text" placeholder="ENTER YOUR EMAIL ADDRESS" />
        </div>
        <div className="info-service-button">
          <button className="service-button btn btn-light btn-lg">
            <a href="/#">SUBSCRIBE</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
