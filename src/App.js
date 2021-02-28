import React, { useEffect, useState } from "react";
import "./App.css";
import SpecificProductPage from "./pages/SpecficProductPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

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

function App() {
  const [auth, setAuth] = useState({ isLoggedIn: false, userID: 0 });
  const [signInClicked, setSignInClicked] = useState(false);
  Axios.defaults.withCredentials = true;

  console.log("App js");
  useEffect(() => {
    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:5000/customer/login").then((response) => {
      console.log(response.data)
      if (response.data.LoggedIn === true) {
        setAuth({ isLoggedIn: true, userID: response.data.user.user_id });
      } else {
        setAuth({ isLoggedIn: false, userID: 0 });
      }
    });
  }, [signInClicked]);


  if(auth.isLoggedIn){
    if(auth.userID === 1){
      return (
        <ChakraProvider>
          <Router>
          <Navbar isLoggedIn={auth.isLoggedIn} />
            <Switch >
              {/* Common Routes */}
              <Route path="/" exact component={Home} />
              <Route path="/newitem" component={NewItem} />
              <Route path="/categorypage" component={CategoryPage} />
              <Route path="/productpage/:id" component={SpecificProductPage} />

              {/* Customer Routes */}

              {/* Seller Routes */}
              <Route path="/SellerDashboard/:id" component={SellerDashboard} />
              <Route path="/sellerHome" component={SellerHome} />
              <Route path="/awaitingshipment" component={AwaitingShipment} />
              <Route path="/awaitingdelivery" component={AwaitingDelivery} />

            </Switch>
          </Router>
        </ChakraProvider>
      );
    }else{
      return(
        <ChakraProvider>
          <Router>
            <Navbar isLoggedIn={auth.isLoggedIn} />
            <Switch >
              <Route path="/" exact component={Home} />
              <Route path="/newitem" component={NewItem} />
              <Route path="/categorypage" component={CategoryPage} />
              <Route path="/productpage/:id" component={SpecificProductPage} />

              <Route path="/cart/:customer_id" component={CartPage} />
              <Route path="/customerdashboard" component={CustomerDashboard}  />
              <Route path="/shippingaddress"  component={CustomerAddress} />
              <Route path="/changepersonaldet" component={ChangePersonalDet} />
              <Route path="/orderview" component={OrderView} />
              <Route path="/feedbackpage/:id" component={FeedbackPage} />
              <Route path="/carddetails" component={CardDetails} />
              <Route path="/trackorder/:id" component={TrackOrder} />
              <Route path="/allorders" component={AllOrders} />
            </Switch>
          </Router>
        </ChakraProvider>
      )
    }
    }

  else{
    return(
      <ChakraProvider>
      <Router>
      <Navbar isLoggedIn={auth.isLoggedIn} />
        <Switch >
          {/* Common Routes */}
          <Route path="/" exact component={Home} />
          <Route path="/newitem" component={NewItem} />
          <Route path="/categorypage" component={CategoryPage} />
          <Route path="/productpage/:id" component={SpecificProductPage} />
          <Route path="/signUp" component={SignUp}/>
          <Route path="/signin" component={ () => {return <SignIn setSignInClicked={setSignInClicked}/>}} />
          </Switch>
      </Router>
    </ChakraProvider>
    );
  }
}

export default App;
