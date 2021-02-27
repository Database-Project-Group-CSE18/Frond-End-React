import React, { useEffect, useState } from "react";
import "./App.css";
import SpecificProductPage from "./pages/SpecficProductPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ProtectedRoute from "./ProtectedRoute";
import checkLogin from "./API_Service/checkLogin"

import CustomerDashboard from "./pages/CustomerDashboard";
import CustomerAddress from "./pages/CustomerAdress";
import ChangePersonalDet from "./pages/ChangePersonalDet";
import CategoryPage from "./pages/CategoryPage";
import Navbar from "./components/Navbar";
import AwaitingDelivery from "./pages/AwaitingDelivery";
import AwaitingShipment from "./pages/AwaitingShipment";
import NewItem from "./pages/NewItem";
import OrderView from "./pages/OrderView";

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
import Cookies from "js-cookie"



function App() {
  const[auth, setAuth] = useState({isLoggedIn:false, userID: 0});
  const[signInClicked, setSignInClicked] = useState(false);
  Axios.defaults.withCredentials = true;
  
  console.log("App js")
  useEffect(() => {
    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:5000/customer/login")
  .then((response) => {
    if(response.data.LoggedIn == true) {
      setAuth({isLoggedIn: true, userID : response.data.user.user_id});
    }else{
      setAuth({isLoggedIn: false, userID: 0});
    }
    });
  }, [signInClicked])

  return (
    <ChakraProvider>
      <Router>
      <Navbar isLoggedIn={isLoggedIn} />
        <Switch >
          {/* Common Routes */}
          <Route path="/" component={Home} />
          <Route path="/newitem" component={NewItem} />
          <Route path="/categorypage" component={CategoryPage} />
          <Route path="/productpage/:id" component={SpecificProductPage} />
          <Route path="/signUp" component={SignUp} Auth={auth} />
          <Route path="/signin" component={ () => {return <SignIn setSignInClicked={setSignInClicked}/>}} />

          {/* Customer Routes */}
          <ProtectedRoute path="/cart/:customer_id" component={CartPage} Auth={auth} Seller={false}/>
          <ProtectedRoute path="/customerdashboard" component={CustomerDashboard}  Auth={auth} Seller={false}/>
          <ProtectedRoute path="/shippingaddress"  component={CustomerAddress} Auth={auth} Seller={false}/>
          <ProtectedRoute path="/changepersonaldet" component={ChangePersonalDet} Auth={auth} Seller={false}/>
          <ProtectedRoute path="/orderview" component={OrderView} Auth={auth} Seller={false}/>
          <ProtectedRoute path="/feedbackpage/:id" component={FeedbackPage} Auth={auth} Seller={false}/>
          <ProtectedRoute path="/carddetails" component={CardDetails} Auth={auth} Seller={false}/>
          <ProtectedRoute path="/trackorder/:id" component={TrackOrder} Auth={auth} Seller={false}/>
          <ProtectedRoute path="/allorders" component={AllOrders} Auth={auth} Seller={false}/>

          {/* Seller Routes */}
          <ProtectedRoute path="/SellerDashboard/:id" component={SellerDashboard} Auth={auth} Seller={true}/>
          <ProtectedRoute path="/sellerHome" component={SellerHome} Auth={auth} Seller={true}/>
          <ProtectedRoute path="/awaitingshipment" component={AwaitingShipment} Auth={auth} Seller={true}/>
          <ProtectedRoute path="/awaitingdelivery" component={AwaitingDelivery} Auth={auth} Seller={true}/>

        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
