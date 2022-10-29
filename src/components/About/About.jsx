import React from 'react';

import './about.scss';

const About = () => {
  return (
    <>
      <div>
        <div
          style={{
            width: '90%',
            margin: '0px auto',
          }}
        >
          <div className='about__page'>
            {/* 1st verse */}
            <div className='row-about row flex'>
              <div className='col__2'>
                <img src='image/model.jfif' alt='model' />
              </div>
              <div className='col__2'>
                <div className='meta'>
                  <h1
                    style={{
                      fontSize: '40px',
                      fontWeight: '700',
                      lineHeight: '1.2',
                    }}
                  >
                    Welcome to TIME
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate id est
                    laborum.
                  </p>
                  <p>
                    lus ferri velit sanctus cu, sed at soleat accusata. Dictas
                    prompta et Ut placerat legendos interpre.Donec vitae sapien
                    ut libero venenatis faucibus. Nullam quis ante Etiam sit
                    amet orci eget. Quis commodo odio aenean sed adipiscing.
                    Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed
                    vulputate mi sit amet. Commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate id est laborum.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd verse */}
            <div className='second'>
              <div className='heading'>
                <h2>What We Provide?</h2>
              </div>
              <div className='row-about row flex'>
                <div className='col__3'>
                  <div
                    style={{
                      padding: '10px',
                      border: '1px solid rgb(0 0 0 / 14%)',
                      minHeight: '230px',
                    }}
                  >
                    <div className='flex align__items__center justify__content__center image'>
                      <img src='image/bestPrice.png' alt='price' />
                    </div>
                    <span>Best Prices & Offers</span>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form
                    </p>
                  </div>
                </div>
                <div className='col__3'>
                  <div
                    style={{
                      padding: '10px',
                      border: '1px solid rgb(0 0 0 / 14%)',
                      minHeight: '230px',
                    }}
                  >
                    <div className='flex align__items__center justify__content__center image'>
                      <img src='image/bestQuality.png' alt='quality' />
                    </div>
                    <span>Best For Trust & Quality</span>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form
                    </p>
                  </div>
                </div>
                <div className='col__3'>
                  <div
                    style={{
                      padding: '15px',
                      border: '1px solid rgb(0 0 0 / 14%)',
                      minHeight: '230px',
                    }}
                  >
                    <div className='flex align__items__center justify__content__center image'>
                      <img src='image/fastDelivery.jpg' alt='delivery' />
                    </div>
                    <span>Fast Delivery System</span>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form
                    </p>
                  </div>
                </div>

                <div className='col__3'>
                  <div
                    style={{
                      padding: '15px',
                      border: '1px solid rgb(0 0 0 / 14%)',
                      minHeight: '230px',
                    }}
                  >
                    <div className='flex align__items__center justify__content__center image'>
                      <img src='image/return.png' alt='return' />
                    </div>
                    <span>Easy Returns Service</span>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form
                    </p>
                  </div>
                </div>

                <div className='col__3'>
                  <div
                    style={{
                      padding: '15px',
                      border: '1px solid rgb(0 0 0 / 14%)',
                      minHeight: '230px',
                    }}
                  >
                    <div className='flex align__items__center justify__content__center image'>
                      <img src='image/satisfy.png' alt='satisfy' />
                    </div>
                    <span>100% satisfication</span>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form
                    </p>
                  </div>
                </div>

                <div className='col__3'>
                  <div
                    style={{
                      padding: '15px',
                      border: '1px solid rgb(0 0 0 / 14%)',
                      minHeight: '230px',
                    }}
                  >
                    <div className='flex align__items__center justify__content__center image'>
                      <img src='image/deal.png' alt='deal' />
                    </div>
                    <span>Great Daily Deal</span>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
