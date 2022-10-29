import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

import { addItemsToCart, removeItemsFromCart } from '../../actions/cartAction';
import CartItem from '../CartItem/CartItem';
import FormLogin from '../Form/FormLogin/FormLogin';

function Carts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);
  const [ship, setShip] = useState(30);
  const [userLogin, setUserLogin] = useState(null);
  const [openFormLogin, setOpenFormLogin] = React.useState(false);

  const handleOpenFormLogin = () => setOpenFormLogin(true);
  const handleCloseFormLogin = () => setOpenFormLogin(false);

  let Price = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const deleteCartItems = (id) => {
    console.log('check id: ', id);
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    let userToken = localStorage.getItem('@token');
    console.log('check user login: ', userLogin);
    if (userToken) {
      navigate('/shipping');
    }
    handleOpenFormLogin();
  };

  console.log('check cartitem after delete: ', cartItems);
  return (
    <div className='carts'>
      <div className='row mt-5'>
        <div className='col-lg-8'>
          {cartItems.length === 0 ? (
            <div className='emptyCart text-center'>
              {/* <RemoveShoppingCartIcon /> */}

              <Typography component='h3' variant='h3'>
                No Product in Your Cart
              </Typography>
              <Link to='/products'>
                <h3>Return to Shop</h3>
              </Link>
            </div>
          ) : (
            <div>
              <CartItem
                deleteCartItems={deleteCartItems}
                cartItems={cartItems}
              />
            </div>
          )}
        </div>
        <div className='col-lg-4'>
          <div className='row'>
            <table className='table table-responsive'>
              <thead>
                <tr>
                  <th
                    colSpan='2'
                    style={{
                      borderTopWidth: '0.1px',
                      borderTopColor: '#3b3b3b',
                    }}
                  >
                    CARTS TOTAL
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className='bg-dark text-light'
                    style={{
                      borderBottomWidth: '0.1px',
                      borderBottomColor: '#3b3b3b',
                    }}
                  >
                    <p>Item</p>
                  </td>
                  <td>
                    <p>$ {Price}</p>
                  </td>
                </tr>
                <tr>
                  <td
                    className='bg-dark text-light'
                    style={{
                      borderBottomWidth: '0.1px',
                      borderBottomColor: '#3b3b3b',
                    }}
                  >
                    <p className='text-center'> Shipping</p>
                  </td>
                  <td>
                    <p>Shipping to Nguyen Huu Kien Street, Cao Lanh</p>
                    <p>$ {ship}</p>
                    <Link to='/address' className='d-flex align-items-center'>
                      <HomeIcon />
                      &nbsp;Change Address
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td
                    className='bg-dark text-light'
                    style={{
                      borderBottomWidth: '0.1px',
                      borderBottomColor: '#3b3b3b',
                    }}
                  >
                    <p>Total</p>
                  </td>
                  <td>
                    <p>$ {Price + ship}</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className='btn btn-dark' onClick={() => checkoutHandler()}>
              Check out
            </button>
          </div>
        </div>
      </div>

      <FormLogin
        handleOpenFormLogin={handleOpenFormLogin}
        handleCloseFormLogin={handleCloseFormLogin}
        openFormLogin={openFormLogin}
        setOpenFormLogin={setOpenFormLogin}
        display='none'
      />
    </div>
  );
}

export default Carts;
