import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SpecificProductPage from "./pages/SpecficProductPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
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


function App() {
  return (
    <ChakraProvider>
      <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/productpage/:id" component={SpecificProductPage} />
          <Route path="/customerdashboard" component={CustomerDashboard} />
          <Route path="/shippingaddress" component={CustomerAddress} />
          <Route path="/changepersonaldet" component={ChangePersonalDet} />
          <Route path="/categorypage" component={CategoryPage} />

          <Route path="/carddetails" component={CardDetails} />
          <Route path="/trackorder/:id" component={TrackOrder} />
          <Route path="/allorders" component={AllOrders} />


          <Route path="/cart/:customer_id" component={CartPage} />
          <Route path="/feedbackpage/:id" component={FeedbackPage} />
          <Route path="/SellerDashboard/:id" component={SellerDashboard} />

          <Route path="/" exact component={Home} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/sellerHome" component={SellerHome} />

        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
