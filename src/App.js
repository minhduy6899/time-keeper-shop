import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import './App.scss';
import BlogPage from "./containers/BlogPage/BlogPage";
import HomePage from './containers/HomePage/HomePage';
import ProductDetailsPage from './containers/ProductDetailsPage/ProductDetailsPage';
import CartPage from './containers/CartPage/CartPage';
import ShopPage from "./containers/ShopPage/ShopPage";
import FormSignin from "./components/Form/FormLogin/FormLogin";
import AboutPage from "./containers/AboutPage/AboutPage";
import Shipping from "./components/Carts/Shipping";
import ConfirmOrder from "./components/Carts/ConfirmOrder";
import Payment from "./components/Carts/Payment";
import { useSelector } from "react-redux";




function App() {
  // const { isAuthenticated, user } = useSelector((state) => state.userReducer);

  // const [stripeApiKey, setStripeApiKey] = useState("");

  // async function getStripeApiKey() {
  //   const { data } = await axios.get("/stripeapikey");

  //   setStripeApiKey(data.stripeApiKey);
  // }

  // useEffect(() => {
  //   getStripeApiKey();
  // }, []);


  return (
    <Router>

      {/* {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Route exact path="/process/payment" element={<Payment />} />
        </Elements>
      )} */}


      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route exact path="/login" element={<FormSignin />} /> */}
        <Route exact path="/products" element={<ShopPage />} />
        <Route exact path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contactus" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route exact path="/shipping" element={<Shipping />} />
        <Route exact path="/order/confirm" element={<ConfirmOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
