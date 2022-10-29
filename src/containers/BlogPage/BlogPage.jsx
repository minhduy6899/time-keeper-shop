import React from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const breadCrumd = [
  {
    title: 'Home',
    url: '/',
  },
];

function BlogPage() {
  return (
    <div>
      <Header />
      <BreadCrumb title='Blog' breadCrumd={breadCrumd} linkTo={'/blog'} />
      <Footer />
    </div>
  );
}

export default BlogPage;
