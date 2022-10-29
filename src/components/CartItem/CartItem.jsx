import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import React from 'react';

import './cartItem.scss';
import watch24 from '../../assets/images/watches/watch24.png';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart, removeItemsFromCart } from '../../actions/cartAction';
import { Link } from 'react-router-dom';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function CartItem({ deleteCartItems }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);

  const increaseQuantity = (id, quantity, amount) => {
    const newQty = quantity + 1;
    if (amount <= quantity) {
      // return toast.error('Product amount Limited');
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Image watches</TableCell>
            <TableCell align='center'>Infomation</TableCell>
            <TableCell align='center'>Quantity</TableCell>
            <TableCell align='center'>Price</TableCell>
            <TableCell align='center'>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems &&
            cartItems.map((item, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell sx={{ width: { md: '250px' } }}>
                  <div
                    className='product-line-grid-left'
                    style={{ width: '100px' }}
                  >
                    <span className='product-image media-middle'>
                      <img
                        src={item.image}
                        alt='Vestibulum vehicula accumsan velit et euismod aptent'
                      />
                    </span>
                  </div>
                </TableCell>
                <TableCell align='left' sx={{ width: { md: '200px' } }}>
                  <div className='product-line-grid-body'>
                    <div className='product-line-info'>
                      <Link to={`/products/${item.product}`}>
                        <h5>{item.name}</h5>
                      </Link>
                    </div>

                    <div className='product-line-info product-price h5 '>
                      <div className='current-price'>
                        <span className='price'>$ {item.price}</span>
                      </div>
                    </div>

                    <div className='product-line-info'>
                      <span className='label'>Size:&nbsp;</span>
                      <span className='value'>{item.size} </span>
                    </div>
                    <div className='product-line-info'>
                      <span className='label'>Color:&nbsp;</span>
                      <span className='value'>{item.color}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell align='center' sx={{ width: { md: '200px' } }}>
                  <div className='cartInput'>
                    <button
                      onClick={() =>
                        decreaseQuantity(item.product, item.quantity)
                      }
                    >
                      -
                    </button>
                    <input type='number' readOnly value={item.quantity} />
                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.amount
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </TableCell>
                <TableCell align='center'>
                  <span className='product-price'>
                    <strong>$ {`${item.price * item.quantity}`}</strong>
                  </span>
                </TableCell>
                <TableCell align='center'>
                  <div className='cart-line-product-actions'>
                    <i
                      className='material-icons float-xs-left'
                      onClick={() => deleteCartItems(item.product)}
                      style={{ cursor: 'pointer' }}
                    >
                      delete
                    </i>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartItem;
