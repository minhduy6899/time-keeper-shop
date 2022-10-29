import React from 'react';

import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import Carts from '../../components/Carts/Carts';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const breadCrumb = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Cart',
    url: '/cart',
  },
];

function CartPage() {
  return (
    <div className='card-page'>
      <Header />
      <BreadCrumb title='Card' breadCrumd={breadCrumb} />
      <div className='shopping-cart'>
        <div className='title'></div>
        <Carts />
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
