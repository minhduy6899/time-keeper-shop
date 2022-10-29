import React from 'react';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

import './womenCollection.scss';
import manPic from '../../../assets/images/model1.jpg';

const dataProducts = [
  {
    tag: 'HOT',
    title: 'OMEGA DIAMOND',
    discription:
      'This is a wider card with supporting text below as a natural lead-in to additional content. ',
    oldPrice: '$960.0',
    newPrice: '$666.0',
    catagory: 'luxury',
    className: 'container-card mb-3 container-card1',
  },
  {
    tag: '',
    title: 'TISSOT OTD800',
    discription:
      'This is a wider card with supporting text below as a natural lead-in to additional content. ',
    oldPrice: '$709.0',
    newPrice: '$639.0',
    catagory: 'optimus',
    className: 'container-card mb-3 container-card2',
  },
  {
    tag: 'NEW',
    title: 'VERSACE SPORTY',
    discription:
      'This is a wider card with supporting text below as a natural lead-in to additional content. ',
    oldPrice: '$786.0',
    newPrice: '$690.0',
    catagory: 'prime',
    className: 'container-card mb-3 container-card3',
  },
  {
    tag: 'HOT',
    title: 'ROLEX AUTOMATIC',
    discription:
      'This is a wider card with supporting text below as a natural lead-in to additional content. ',
    oldPrice: '$933.0',
    newPrice: '$805.0',
    catagory: 'luxury',
    className: 'container-card mb-3 container-card4',
  },
];

function WomenCollection() {
  return (
    <div className='women-collection px-3'>
      <div className='row women-collection-title'>
        <div className='col-sm-12 text-center'>
          <h1>WOMEN COLLECTION</h1>
          <p>
            LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
            INDUSTRY
          </p>
        </div>
      </div>
      <div className='row women-collection-content'>
        <div className='col-sm-6 collection-content-right'>
          <div className='row mb-3 content-right-item content-right-top'>
            {dataProducts.map((item, index) => (
              <div key={index} className={item.className}>
                <div className='overlay'>
                  <div className='items'>{item.catagory}</div>
                  <div className='items head'>
                    <p>{item.title}</p>
                    <hr />
                  </div>
                  <div className='items price'>
                    <p className='old'>{item.oldPrice}</p>
                    <p className='new'>{item.newPrice}</p>
                  </div>
                  <div className='items cart'>
                    <a href='/#'>
                      <LocalMallOutlinedIcon className='icon-cart' />
                      <span>ADD TO CART</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='col-sm-6 collection-content-left'>
          <img src={manPic} alt='' />
        </div>
      </div>
    </div>
  );
}

export default WomenCollection;
