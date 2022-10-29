import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import './productDetail.scss';
import avatar1 from '../../assets/images/avatar1.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar3 from '../../assets/images/avatar3.png';

import {
  getAllProductsAction,
  getProductItemAction,
} from '../../actions/getAllProductsAction';

const dataReview = [
  {
    img: avatar1,
    name: 'John Snow',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in viverra ex, vitae vestibulum arcu. Duis sollicitudin metus sed lorem commodo, eu dapibus libero interdum. Morbi convallis viverra erat, et aliquet orci congue vel. ',
    star: 4.5,
  },
  {
    img: avatar2,
    name: 'The Weekend',
    description:
      'Compared to the latest version, Series 4, Apple Watch Series 5 has not changed much. Still carrying a powerful design, bearing the breath of the times, the appearance of the Series 5 exudes luxury and class.',
    star: 4,
  },
  {
    img: avatar3,
    name: 'Tommy',
    description:
      'In the regular version, the watch band is made of high-quality rubber material, ensuring sweat absorption and comfort for the wearer.',
    star: 3.5,
  },
];

var images = [];

function ProductDetail() {
  const { currentProduct, productsList } = useSelector(
    (reduxData) => reduxData.getAllProductsReducer
  );

  const dispatch = useDispatch();
  const [age, setAge] = React.useState('');
  const [products, setProducts] = React.useState('');

  let { productId } = useParams();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  React.useEffect(() => {
    dispatch(getProductItemAction(productId));
    dispatch(getAllProductsAction(12));
  }, []);

  React.useEffect(() => {
    if (currentProduct !== 'ALL' && productsList.length > 0) {
      const mainImg = currentProduct.product.imageUrl;
      const thumbnail1 = currentProduct.product.thumbnail[0].img1;
      const thumbnail2 = currentProduct.product.thumbnail[0].img2;
      const thumbnail3 = currentProduct.product.thumbnail[0].img3;
      images = [
        {
          original: thumbnail3,
          originalClass: 'img-main',
          thumbnail: thumbnail3,
        },
        {
          original: thumbnail1,
          originalClass: 'img-main',
          thumbnail: thumbnail1,
        },
        {
          original: thumbnail2,
          originalClass: 'img-main',
          thumbnail: thumbnail2,
        },
      ];
    }
  }, [currentProduct, productsList]);
  return (
    <>
      {currentProduct !== 'ALL' && (
        <div className='product-detail'>
          <div className='row product-info d-flex mx-auto'>
            <div className='col-md-6'>
              {/* <div className="product-main-img">
              <img src={watch1} alt="" watch gold />
            </div>
            <div className="product-options-img"></div> */}
              <ImageGallery items={images} />
            </div>
            <div className='col-md-6 d-flex flex-column justify-content-center'>
              <div className='catlinks'>
                <span>
                  <a href='/#'>OUR SHOP,&nbsp;</a>
                </span>
                <span>
                  <a href='/#'>ACCESSORIES,&nbsp;</a>
                </span>
                <span>
                  <a href='/#'>MEN'S WATCHES</a>
                </span>
              </div>
              <div className='product-title'>
                <h1>{currentProduct.product.name}</h1>
              </div>
              <div className='product-rating'>
                <Stack spacing={1}>
                  <Rating
                    name='half-rating'
                    defaultValue={3.5}
                    precision={0.5}
                  />
                </Stack>
              </div>
              <div className='product-discription'>
                <p>{currentProduct.product.description}</p>
              </div>
              <div className='product-price'>
                <h1>${currentProduct.product.promotionPrice}.00</h1>
              </div>
              <div className='inp-group'>
                <div className='product-type d-flex flex-wrap'>
                  <div className='product-size'>
                    <FormControl sx={{ m: 1, minWidth: 100 }}>
                      <InputLabel id='demo-simple-select-helper-label'>
                        Size
                      </InputLabel>
                      <Select
                        labelId='demo-simple-select-helper-label'
                        id='demo-simple-select-helper'
                        value={age}
                        label='Size'
                        onChange={handleChange}
                      >
                        <MenuItem value=''>
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={28}>28 mm</MenuItem>
                        <MenuItem value={30}>30 mm</MenuItem>
                        <MenuItem value={35}>35 mm</MenuItem>
                        <MenuItem value={39}>39 mm</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className='product-color'>
                    <FormControl sx={{ m: 1, minWidth: 100 }}>
                      <InputLabel id='demo-simple-select-helper-label'>
                        Color
                      </InputLabel>
                      <Select
                        labelId='demo-simple-select-helper-label'
                        id='demo-simple-select-helper'
                        value={age}
                        label='Color'
                        onChange={handleChange}
                      >
                        <MenuItem value=''>
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={28}>28 mm</MenuItem>
                        <MenuItem value={32}>32 mm</MenuItem>
                        <MenuItem value={35}>35 mm</MenuItem>
                        <MenuItem value={39}>39 mm</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className='product-color'>
                    <FormControl sx={{ m: 1, minWidth: 100 }}>
                      <TextField
                        id='outlined-number'
                        label='Quantity'
                        type='number'
                      />
                    </FormControl>
                  </div>
                </div>
                <div className='product-qty-btn d-flex'>
                  <div className='product-button'>
                    <button type='button'>ADD TO CART</button>
                  </div>
                </div>
              </div>
              <hr />
              <div className='product-social'>
                <a
                  href='https://www.facebook.com/duy.minh.9693001/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FacebookOutlinedIcon className='icon-social' />
                </a>
                <a
                  href='https://www.instagram.com/ng_uyen_m_inh_d_uy/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <InstagramIcon className='icon-social' />
                </a>
                <a
                  href='https://twitter.com/BaDzyNguyen'
                  target='_blank'
                  rel='noreferrer'
                >
                  <TwitterIcon className='icon-social' />
                </a>
              </div>
            </div>
          </div>
          <div className='row product-description'>
            <div className='tablist container'>
              <Tabs
                defaultActiveKey='DESCRIPTION'
                transition={false}
                id='noanim-tab-example'
                className='mb-3 tab-title'
              >
                <Tab
                  className='tab-content'
                  eventKey='DESCRIPTION'
                  title='DESCRIPTION'
                >
                  <div className='row mt-5'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit lobortis
                      nisl ut aliquip ex ea commodo consequat. Duis autem vel
                      eum iriure dolor in hendrerit in vulputate velit esse
                      molestie consequat, vel illum dolore eu feugiat nulla
                      facilisis at vero eros et accumsan et iusto odio dignissim
                      qui blandit praesent luptatum zzril delenit augue duis
                      dolore te feugait nulla facilisi. Sed ut perspiciatis,
                      unde omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium, totam rem aperiam eaque ipsa, quae
                      ab illo inventore veritatis et quasi architecto beatae
                      vitae dicta sunt, explicabo. nemo enim ipsam voluptatem,
                      quia voluptas sit, aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos, qui ratione voluptatem.
                    </p>
                  </div>
                </Tab>
                <Tab
                  className='tab-content'
                  eventKey='PRODUCT'
                  title='PRODUCT DETAIL'
                >
                  <div className='row mx-auto mt-5'>
                    <div className='col-sm-12 text-center'>
                      <h5>
                        Water Resistance: <i className='text-secondary'>High</i>
                      </h5>
                      <h5>
                        Band Color: <i className='text-secondary'>Silver</i>
                      </h5>
                      <h5>
                        Band Material: <i className='text-secondary'>Steel</i>
                      </h5>
                      <h5>
                        Watch Movement Type:{' '}
                        <i className='text-secondary'>Automatic</i>
                      </h5>
                    </div>
                  </div>
                </Tab>
                <Tab
                  className='tab-content tab-reviews'
                  eventKey='REVIEWS'
                  title='REVIEWS'
                >
                  <div className='row mt-5'>
                    <div className='col-sm-6 mb-5'>
                      {dataReview.map((item, index) => (
                        <div key={index} className='review_item'>
                          <div className='media d-flex'>
                            <div className='media-img'>
                              <img src={item.img} alt='' />
                            </div>
                            <div className='media-body'>
                              <h4>{item.name}</h4>
                              <Rating
                                name='read-only'
                                value={item.star}
                                readOnly
                              />
                            </div>
                          </div>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className='col-sm-6'>
                      <div className='review_box'>
                        <h4 className='mb-1'>Add a Review</h4>
                        <p>
                          Your email address will not be published. Required
                          fields are marked *
                        </p>
                        <div className='d-flex align-items-center mt-4 mb-3'>
                          <h5 className='mb-0'>
                            <b>Your rating</b> &nbsp;{' '}
                          </h5>
                          <Rating name='read-only' value={0} />
                        </div>
                        <form
                          className='row contact_form'
                          action='contact_process.php'
                          method='post'
                          noValidate='novalidate'
                        >
                          <TextField
                            id='standard-basic'
                            label='Name'
                            variant='standard'
                            className='input-review'
                          />
                          <TextField
                            id='standard-basic'
                            label='Email'
                            variant='standard'
                            className='input-review'
                          />
                          <TextField
                            id='standard-basic'
                            label='Phonenumber'
                            variant='standard'
                            className='input-review'
                          />
                          <TextField
                            id='standard-basic'
                            label='Review'
                            variant='standard'
                            className='input-review'
                          />
                          <div className='col-md-12 text-right mt-3'>
                            <button
                              type='submit'
                              value='submit'
                              className='btn_3'
                            >
                              SUBMIT NOW
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
