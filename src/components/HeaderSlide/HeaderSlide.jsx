import React from 'react';
import Slider from 'react-slick';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

import './headerSlide.scss';

const dataSlideHeader = [
  {
    titleTop: 'REVOLUTION',
    titleBottom: 'WATCHES',
    discription: 'what are your expectations...?',
    price: '9999.00',
    image: 'image/slideWatch/slideWatch5.jfif',
  },
  {
    titleTop: "GENTLEMEN'S",
    titleBottom: 'WATCHES',
    discription: 'Performance is temporary - Class is forever',
    price: '26.999.00',
    image: 'image/slideWatch/slideWatch8.webp',
  },
  {
    titleTop: "WOMEN'S LUXURY",
    titleBottom: 'WATCHES',
    discription: 'It was created for you',
    price: '123.456.00',
    image: 'image/slideWatch/slideWatch10.png',
  },
  {
    titleTop: "THAT'S A CUSTOME",
    titleBottom: 'WATCHES',
    discription: 'Everything was made by hand',
    price: '999.999.00',
    image: 'image/slideWatch/slideWatch7.jpg',
  },
];

function HeaderSlide() {
  const settings = {
    fade: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };
  return (
    <div className='header-slide'>
      <Slider {...settings}>
        {dataSlideHeader.map((item, index) => (
          <div key={index} className='slide-item'>
            <div className='row'>
              <div className='col-sm-6 slide-item-left text-center d-flex flex-column align-item-center justify-content-center'>
                <h5 className='description'>{item.discription}</h5>
                <h1 className='revolution'>{item.titleTop}</h1>
                <h1 className='watches'>{item.titleBottom}</h1>
                <p>
                  Price Only:{' '}
                  <span>
                    <CurrencyPoundIcon />
                    {item.price}
                  </span>
                </p>
                <div className='slide-item-button'>
                  <button>
                    <a href='/#'>SHOP NOW</a>
                  </button>
                </div>
              </div>
              <div className='col-sm-6 slide-item-right'>
                <img className='responsive' src={item.image} alt='#' />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeaderSlide;
