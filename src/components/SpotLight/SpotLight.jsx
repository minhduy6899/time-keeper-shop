import React from 'react';

import icon1 from '../../assets/images/icon-1.png';
import icon2 from '../../assets/images/icon-2.png';
import icon3 from '../../assets/images/icon-3.png';
import icon4 from '../../assets/images/icon-4.png';

const dataSpotLight = [
  {
    title: 'Free Shipping On All Orders',
    image: icon1,
  },
  {
    title: 'Free Return And Exchange',
    image: icon2,
  },
  {
    title: '100% Genuine Commitment',
    image: icon3,
  },
  {
    title: '24/7 Customer Support',
    image: icon4,
  },
];

function SpotLight() {
  return (
    <div className="spotlight-2-2">
      <div className="container py-3">
        <div className="row d-flex justify-content-center">
          {dataSpotLight.map((item, index) => (
            <div
              key={index}
              className="item item-1 col-lg-3 col-md-6 col-xs-12 text-center py-2 px-5"
            >
              <div className="icon">
                <img className="mark-lazy" src={item.image} alt="" />
              </div>
              <div className="text mt-3">
                <h5>
                  <a className="name" href="/#">
                    {item.title}
                  </a>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpotLight;
