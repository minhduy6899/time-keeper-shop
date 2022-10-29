import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

import logoWhite from '../../../assets/images/logo2.png';
import payment from '../../../assets/images/payment-1.png';
import './footer.scss';

function Footer() {
  return (
    <footer id='footer'>
      <div className='footer-container px-3'>
        <div className='footer-content text-center d-flex flex-column align-items-center'>
          <div className='moduletable d-flex justify-content-center'>
            <div className='logo-bottom d-flex flex-column align-items-center justify-content-center'>
              <a href='/#'>
                <img
                  src='image/logo/logoWhite.png'
                  srcSet={logoWhite}
                  alt='logo'
                />
              </a>
              <div className='logo-description d-flex flex-column align-items-center justify-content-center'>
                <p>
                  Time business concept is to offer watches and quality at the
                  best price. Time has since it was
                </p>
                <p>
                  founded in 1987 grown into one of the world's leading fashion
                  companies.
                </p>
              </div>
            </div>
          </div>

          <div className='socials-wrap'>
            <div className='footer-social'>
              <a
                href='https://www.facebook.com/duy.minh.9693001/'
                className='facebook'
                target='_blank'
                rel='noreferrer'
              >
                <FacebookOutlinedIcon className='icon-social icon-facebook' />
              </a>{' '}
              <a
                href='https://twitter.com/BaDzyNguyen'
                className='twitter'
                target='_blank'
                rel='noreferrer'
              >
                <TwitterIcon className='icon-social icon-twitter1' />
              </a>{' '}
              <a
                href='https://www.instagram.com/ng_uyen_m_inh_d_uy/'
                className='instagram'
                target='_blank'
                rel='noreferrer'
              >
                <InstagramIcon className='icon-social icon-instagram' />
              </a>{' '}
              <a
                href='https://www.skype.com/'
                className='skype'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon className='icon-social icon-skype' />
              </a>{' '}
              <a
                href='https://www.youtube.com/'
                className='youtube'
                target='_blank'
                rel='noreferrer'
              >
                <YouTubeIcon className='icon-social icon-youtube' />
              </a>
            </div>
          </div>
          <div className='contactinfo'>
            <div className='contact-item address'>
              <label>
                <PlaceIcon className='icon-contact icon-location' />
              </label>
              <h6>561 Wellington Road, Street 32, San Francisco</h6>
            </div>
            <div className='contact-item email'>
              <label>
                <EmailIcon className='icon-contact icon-envelope' />
              </label>
              <h6>
                <a href='mailto:contact@magentech.com'>contact@magentech.com</a>
              </h6>
            </div>
            <div className='contact-item phone'>
              <label>
                <PhoneIphoneIcon className='icon-contact icon-phone' />
              </label>
              <h6>Phone : (800) 0123-456-789</h6>
            </div>
          </div>

          <div className='menu-bottom'>
            <ul>
              <li>
                <a href='/#'>About Us</a>
              </li>
              <li>
                <a href='/#'>Contact Us</a>
              </li>
              <li>
                <a href='/#'>Information</a>
              </li>
              <li>
                <a href='/#'>Extras</a>
              </li>
              <li>
                <a href='/#'>Latest Post</a>
              </li>
              <li>
                <a href='/#'>Privacy Policy </a>
              </li>
            </ul>
          </div>

          <div className='backtop'>
            <a
              id='sp-totop'
              className='backtotop'
              href='/#'
              title='Back to top'
            >
              <i className='fa fa-arrow-up'></i>
            </a>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 text-center mb-5'>
              <div className='footer-bottom '>
                <div className='copyright'>
                  SP Time© 2021 Demo Store. All Rights Reserved. Designed by{' '}
                  <a href='https://www.magentech.com/'>MagenTech.Com</a>
                </div>
                <div className='footer-payment'>
                  <img src={payment} alt='payment logos' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
