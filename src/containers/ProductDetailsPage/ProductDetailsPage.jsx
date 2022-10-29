import React from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import RelatedProducts from '../../components/Products/RelatedProducts';

const breadCrumd = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Shop',
    url: '/products',
  },
];

function ProductDetailsPage() {
  return (
    <div className="product-details">
      <Header />
      <BreadCrumb
        title="Product Detail"
        breadCrumd={breadCrumd}
        linkTo={'/productDetails'}
      />
      <ProductDetail />
      <RelatedProducts />
      <Footer />
    </div>
  );
}

export default ProductDetailsPage;
