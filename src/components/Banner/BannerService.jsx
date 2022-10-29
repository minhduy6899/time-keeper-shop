import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import './bannerService.scss';

function BannerService() {
  return (
    <div className="banner-service d-flex align-items-center">
      <div className="info-service">
        <div className="info-service-title">
          <h1>Obtaining information on the history of a timepiece</h1>
        </div>
        <div className="info-service-rate">
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={4} precision={0.5} />
          </Stack>
        </div>
        <div className="info-service-price">
          <h1>Since 1991</h1>
        </div>
        <div className="info-service-description">
          <p>
            {' '}
            In the case of a hand-wound watch, wind it until resistance is felt.
            The watch will then be fully wound. Be careful not to force the
            crown as it could damage the gear train of the movement.
          </p>
        </div>
        <div className="info-service-button">
          <button className="service-button btn btn-light btn-lg">
            <a href="/#">LOCATION</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerService;
