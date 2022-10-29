import React from 'react';

import BannerBottom from '../../components/Banner/BannerBottom';
import BannerService from '../../components/Banner/BannerService';
import SlideBrands from '../../components/Brands/SlideBrands';
import MenCollection from '../../components/Collections/MenCollection/MenCollection';
import WomenCollection from '../../components/Collections/WomenCollection/WomenCollection';
import Comments from '../../components/Comments/Comments';
import HeaderSlide from '../../components/HeaderSlide/HeaderSlide';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/Header';
import Newsletter from '../../components/Newsletter/Newsletter';
import Products from '../../components/Products/Products';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import SpotLight from '../../components/SpotLight/SpotLight';

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <HeaderSlide />
      <ScrollTop />
      <SpotLight />
      <Products />
      <MenCollection />
      <BannerService />
      <WomenCollection />
      <BannerBottom />
      <SlideBrands />
      <Newsletter />
      <Comments />
      <Footer />
    </div>
  );
}

export default HomePage;
