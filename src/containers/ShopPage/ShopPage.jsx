import React from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import Shop from '../../components/Shop/Shop';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const breadCrumb = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Shop',
    url: '/products',
  },
];
function ShopPage() {
  return (
    <div>
      <Header />
      <BreadCrumb title={'Shop'} breadCrumd={breadCrumb} linkTo={'/products'} />
      <Shop />
      <Footer />
    </div>
  );
}

export default ShopPage;
