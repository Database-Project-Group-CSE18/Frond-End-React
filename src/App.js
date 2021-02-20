import React, { useEffect, useState } from "react";
import "./App.css";
import SpecificProductPage from "./pages/SpecficProductPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ProtectedRoute from "./ProtectedRoute";
// import checkLogin from "./API_Service/checkLogin"

import CustomerDashboard from "./pages/CustomerDashboard";
import CustomerAddress from "./pages/CustomerAdress";
import ChangePersonalDet from "./pages/ChangePersonalDet";
import CategoryPage from "./pages/CategoryPage";
import Navbar from "./components/Navbar";

import Home from "./pages/Customer/Home";
import SignUp from "./pages/Customer/SignUp";
import SignIn from "./pages/Customer/SignIn";
import SellerHome from "./pages/Seller/SellerHome";

import CardDetails from "./pages/CardDetails";
import TrackOrder from "./pages/TrackOrder";
import AllOrders from "./pages/AllOrders";

import CartPage from "./pages/CartPage";
import FeedbackPage from "./pages/FeedbackPage";
import SellerDashboard from "./pages/SellerDashboard";
import Axios from "axios";




function App() {
  const[isAuth, setIsAuth] = useState(false);
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const userAuthenticated = () => {
    Axios.get("http://localhost:5000/customer/isUserAuth", {
    headers: {
      "x-access-token": localStorage.getItem("token")},
    }).then(response => {
      console.log(response.status);
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:5000/customer/login")
    .then((response) => {
      if(response.data.LoggedIn == true) {
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false)
      }
      });
  })

  return (
    <ChakraProvider>
      <Router>
      <Navbar isLoggedIn={isLoggedIn}/>
        <Switch >
          <Route path="/" exact component={Home} />
          <Route path="/productpage/:id" component={SpecificProductPage} />
          <ProtectedRoute path="/customerdashboard" component={CustomerDashboard} isAuth={isLoggedIn}/>
          <Route path="/shippingaddress"  component={CustomerAddress} />
          <Route path="/changepersonaldet" component={ChangePersonalDet} />
          <Route path="/categorypage" component={CategoryPage} />

          <Route path="/carddetails" component={CardDetails} />
          <Route path="/trackorder/:id" component={TrackOrder} />
          <Route path="/allorders" component={AllOrders} />


          <ProtectedRoute path="/cart/:customer_id" component={CartPage} />
          <Route path="/feedbackpage/:id" component={FeedbackPage} />
          <ProtectedRoute path="/SellerDashboard/:id" component={SellerDashboard} />
          {}
          <Route path="/signUp" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <ProtectedRoute path="/sellerHome" component={SellerHome} />

        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
