import React from 'react';
import About from '../../components/About/About';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';

const breadCrumd = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
];
function AboutPage() {
  return (
    <div>
      <Header />
      <BreadCrumb breadCrumd={breadCrumd} title='About' />
      <About />
      <Footer />
    </div>
  );
}

export default AboutPage;
