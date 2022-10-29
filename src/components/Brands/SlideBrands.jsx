import React from 'react';
import Slider from 'react-slick';

import './slideBrand.scss';
import brand1 from '../../assets/images/brand3.jpg';
import brand2 from '../../assets/images/brand4.jpg';
import brand3 from '../../assets/images/brand5.jpg';
import brand4 from '../../assets/images/brand6.jpg';
import brand5 from '../../assets/images/brand7.jpg';
import brand6 from '../../assets/images/brand8.jpg';
import brand7 from '../../assets/images/brand4.jpg';
import brand8 from '../../assets/images/brand5.jpg';
import brand9 from '../../assets/images/brand9.jpg';
import brand10 from '../../assets/images/brand10.jpg';
import brand11 from '../../assets/images/brand11.jpg';
import brand12 from '../../assets/images/brand12.jpg';

const dataBrands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
];

function SlideBrands() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };
  return (
    <div className="slide-brands text-center">
      <h1 className="slide-brands-title">SHOP BY BRANDS</h1>
      <p className="slide-brands-discription">
        LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
        INDUSTRY
      </p>
      <div className="slide-brands-content">
        {' '}
        <Slider {...settings}>
          {dataBrands.map((item, index) => (
            <div key={index} className="brand-item">
              <img src={item} alt="brand" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SlideBrands;
