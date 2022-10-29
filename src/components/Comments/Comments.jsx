import React from 'react';
import Slider from 'react-slick';

import './comments.scss';
import avatar1 from '../../assets/images/avatar1.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';

const dataComments = [
  {
    comment:
      'It is a wonderful watch. I did not make the mistake of spending a sum of money to own it.',
    ps: 'Thank you New Century for the best.',
    person: 'JOHN WICK',
    location: 'Los Angeles',
    avatar: avatar1,
  },
  {
    comment: 'These will hold value over time. A good investment.',
    ps: 'I will buy a new one.',
    person: 'TOMMY SHELBY',
    location: 'HOLLYWOOD',
    avatar: avatar2,
  },
  {
    comment:
      'There is nothing luxury about crap service and tacky, pretentious people.',
    ps: 'Thank you New Century for the best.',
    person: 'ZAYN',
    location: 'LONDON',
    avatar: avatar3,
  },
];

const settings = {
  dots: false,
  // fade: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 6000,
  cssEase: 'linear',
};

function Comments() {
  return (
    <div className="slide-comments">
      <Slider {...settings}>
        {dataComments.map((item, index) => (
          <div key={index} className="slide-comments-item text-center">
            <p>,,</p>
            <div className="item-client">
              <div className="client-say">
                <h6>
                  {item.comment}
                  <br />
                  <span>{item.ps}</span>
                </h6>
              </div>
              <div className="client-info">
                <div className="client-image text-center">
                  <img
                    className="mark-lazy lazyload rounded-circle text-center mx-auto"
                    src={item.avatar}
                    alt="avatar"
                  />
                </div>
                <div className="client-title">
                  <h5>{item.person}</h5>
                </div>
                <div className="client-desc">
                  <p>{item.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Comments;
