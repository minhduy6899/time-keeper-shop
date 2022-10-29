import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import {
  getAllProductsAction,
  getProductItemAction,
} from '../../actions/getAllProductsAction';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import './relatedProducts.scss';
import { Stack } from '@mui/system';
import { Rating } from '@mui/material';
import ModalProductDetail from '../Modal/ModalProductDetail';
import { addItemsToCart } from '../../actions/cartAction';

var images = [];
function RelatedProducts() {
  const dispatch = useDispatch();
  const { productsList } = useSelector(
    (reduxData) => reduxData.getAllProductsReducer
  );
  const { cartItems } = useSelector((state) => state.cartReducer);

  const [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    dispatch(getAllProductsAction(12));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: width > 900 ? 4 : width > 400 ? 2 : 1,
    slidesToScroll: 2,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { productsFilter, currentProduct } = useSelector(
    (reduxData) => reduxData.getAllProductsReducer
  );

  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState('ALL');

  const handleOpenModal = (paramProductDetail) => {
    dispatch(getProductItemAction(paramProductDetail._id));
    setOpen(true);
  };

  const addToCartHandler = (amount, productId) => {
    if (amount > 0) {
      dispatch(addItemsToCart(productId, 1));
      // toast.success("Product Added to cart");
    } else {
      // toast.error("Product stock limited");
    }
  };

  React.useEffect(() => {
    setProduct(currentProduct);
    if (currentProduct != 'ALL' && productsList.length > 0) {
      createImage();
    }
  }, []);

  const createImage = () => {
    if (currentProduct !== 'ALL' && productsList.length > 0) {
      const thumbnail1 = currentProduct.product.thumbnail[0].img1;
      const thumbnail2 = currentProduct.product.thumbnail[0].img2;
      const mainImg = currentProduct.product.thumbnail[0].img3;
      images = [
        {
          original: mainImg,
          originalClass: 'img-main',
          thumbnail: mainImg,
          originalHeight: '200px',
        },
        {
          original: thumbnail1,
          originalClass: 'img-main',
          thumbnail: thumbnail1,
          originalHeight: '200px',
        },
        {
          original: thumbnail2,
          originalClass: 'img-main',
          thumbnail: thumbnail2,
          originalHeight: '200px',
        },
      ];
    }
  };

  return (
    <>
      {productsList.length > 0 && (
        <div className='slide-brands text-center'>
          <h1 className='slide-brands-title'>RELATED PRODUCTS</h1>
          <p className='slide-brands-discription'>
            LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING
            INDUSTRY
          </p>
          <div className='slide-brands-content desktop'>
            {' '}
            <Slider {...settings}>
              {productsList.length > 0 &&
                productsList.map((item, index) => (
                  <div key={index} className='d-flex justify-content-center'>
                    <div key={index} className='product-card-related'>
                      <div className='product-inner'>
                        <div className='product-top'>
                          <a className='product-link' href='/#'>
                            <div className='cover-image'>
                              <img src={item.imageUrl} alt='' />
                            </div>
                            <div className='hover-image'>
                              <img src={item.imageUrl} alt='' />
                            </div>
                          </a>
                          <div className='button-action'>
                            <ShoppingCartOutlinedIcon
                              className='icon-action'
                              onClick={() =>
                                addToCartHandler(item.amount, item._id)
                              }
                            />
                            <FavoriteBorderOutlinedIcon className='icon-action' />
                            <RemoveRedEyeOutlinedIcon
                              className='icon-action'
                              onClick={() => handleOpenModal(item)}
                            />
                          </div>
                        </div>
                        <div className='product-bottom'>
                          <div className='product-description'>
                            <div className='product-name'>
                              <h4>
                                <a
                                  href={
                                    'http://localhost:3000/products/' + item._id
                                  }
                                >
                                  {item.name}
                                </a>
                              </h4>
                            </div>
                            <div className='product-rating'>
                              <Stack spacing={1}>
                                <Rating
                                  name='half-rating'
                                  defaultValue={2.5}
                                  precision={0.5}
                                />
                              </Stack>
                            </div>
                            <div className='product-price'>
                              <div className='old-price'>
                                <small>${item.buyPrice}</small>
                              </div>
                              <div className='new-price'>
                                <p>${item.promotionPrice}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      )}

      <ModalProductDetail openModal={open} />
    </>
  );
}

export default RelatedProducts;
