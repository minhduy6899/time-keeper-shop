import React from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CloseIcon from '@mui/icons-material/Close';

import './modalCartList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeItemsFromCart } from '../../actions/cartAction';

const ModalCartList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);

  let Price = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    navigate('/login?redirect=shipping');
  };

  console.log('check cartItems: ', cartItems);
  return (
    <div className='sc-layouts-cart-widget'>
      <div className='widget-shopping-cart'>
        {cartItems.length === 0 ? (
          <div className='text-center'>
            <img src='image/noProduct.png' alt='' />
            <h3 className='text-center'>No product in your cart</h3>
          </div>
        ) : (
          <div className='widget-shopping-cart-content'>
            <div className='cart-list-container'>
              <ul className='cart_list-content'>
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    className='mini_cart_item d-flex align-items-center justify-content-between'
                  >
                    <Link
                      to={'/products/' + item.product}
                      data-mouse-helper='hover'
                      data-mouse-helper-icon='icon-right-big'
                      className='d-flex align-items-center'
                    >
                      <img
                        src={item.image}
                        className='img-product'
                        alt='Watch'
                        loading='lazy'
                        sizes='(max-width: 660px) 100vw, 660px'
                      />
                      <div className='description'>
                        <span className='product-name text-start'>
                          {item.name}
                        </span>
                        <br />
                        <span className='quantity'>
                          {item.quantity} ×{' '}
                          <span className='amount'> $ {item.price}</span>
                        </span>
                      </div>
                    </Link>
                    <HighlightOffIcon
                      className='icon-remove'
                      onClick={() => deleteCartItems(item.product)}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className='cart-bottom'>
              <p className='total-price mt-4'>
                <strong>Subtotal:</strong>{' '}
                <span className='amount'>$ {Price}</span>{' '}
              </p>

              <div className='btn-group d-flex align-items-center justify-content-center mt-4 mb-3'>
                <Link
                  to='/cart'
                  className='view-cart  me-3'
                  data-mouse-helper='hover'
                  data-mouse-helper-icon='icon-right-big'
                >
                  <button className='btn btn-light btn-lg'>View cart</button>
                </Link>
                <Link
                  to='/checkout'
                  className='checkout'
                  data-mouse-helper='hover'
                  data-mouse-helper-icon='icon-right-big'
                >
                  <button
                    className='btn btn-dark btn-lg'
                    onClick={() => checkoutHandler()}
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>{' '}
    </div>
  );
};

export default ModalCartList;
