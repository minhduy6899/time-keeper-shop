import React, { Fragment, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import { useAlert } from 'react-alert';
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import './payment.scss';
import CheckoutSteps from './CheckoutSteps';
import { createOrder, clearErrors } from '../../actions/orderAction';
const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_API_KEY);

const Payment = ({ history }) => {
  const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));

  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cartReducer);
  const { user } = useSelector((state) => state.userReducer);
  const { error } = useSelector((state) => state.newOrderReducer);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        '/payment/process',
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;

        alert(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          dispatch(createOrder(order));

          history.push('/success');
        } else {
          alert.error("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <div>
        <CheckoutSteps activeStep={2} />
        <div className='paymentContainer'>
          <form className='paymentForm' onSubmit={(e) => submitHandler(e)}>
            <Typography>Card Info</Typography>
            <div>
              <CreditCardIcon />
              <CardNumberElement className='paymentInput' />
            </div>
            <div>
              <EventIcon />
              <CardExpiryElement className='paymentInput' />
            </div>
            <div>
              <VpnKeyIcon />
              <CardCvcElement className='paymentInput' />
            </div>

            <input
              type='submit'
              value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
              ref={payBtn}
              className='paymentFormBtn'
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Payment;
