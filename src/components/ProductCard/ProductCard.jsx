import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-slideshow-image/dist/styles.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link, useParams } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import './productCard.scss';
import { addItemsToCart } from '../../actions/cartAction';

let newQty = 1;
const ProductCard = ({ index, item, handleOpen, link }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);

  const addToCartHandler = (productId) => {
    const cartItemFilter = cartItems.some((item, index) => {
      return item.product === productId;
    });
    if (cartItemFilter) {
      newQty++;
    } else {
      newQty = 1;
    }
    if (item.amount > 0) {
      dispatch(addItemsToCart(productId, newQty));
      // toast.success("Product Added to cart");
    } else {
      // toast.error("Product stock limited");
    }
  };

  return (
    <div key={index} className='product-card'>
      <div className='product-inner'>
        <div className='product-top'>
          <div className='product-badge'>{item.badge}</div>
          <a className='product-link' href='/#'>
            <div className='cover-image'>
              <img src={item.imageUrl} alt='cover' loading='lazy' />
            </div>
            <div className='hover-image'>
              <img src={item.imageUrl} alt='hover' loading='lazy' />
            </div>
          </a>
          <div className='button-action'>
            <ShoppingCartOutlinedIcon
              className='icon-action'
              onClick={() => addToCartHandler(item._id)}
            />
            <FavoriteBorderOutlinedIcon className='icon-action' />
            <RemoveRedEyeOutlinedIcon
              onClick={() => handleOpen(item._id)}
              className='icon-action'
            />
          </div>
        </div>
        <div className='product-bottom'>
          <div className='product-description'>
            <div className='product-name'>
              <h4>
                <Link to={link + item._id}>{item.name}</Link>
              </h4>
            </div>
            <div className='product-rating'>
              <Stack spacing={1}>
                <Rating
                  name='half-rating'
                  defaultValue={item.ratings || 3.5}
                  precision={0.5}
                />
              </Stack>
            </div>
            <div className='product-price'>
              <div className='old-price'>
                <small>${item.buyPrice}.00</small>
              </div>
              <div className='new-price'>
                <p>${item.promotionPrice}.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
