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
import SellerAllOrders from "./pages/SellerAllOrders";
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
import ProductPopularityReport from "./pages/ProductPopularityReport";
import Axios from "axios";

import ChartForSpecificProduct from "./pages/ChartForSpecificProduct";

function App() {
  const [auth, setAuth] = useState({ isLoggedIn: false, userID: 0 });
  const [signInClicked, setSignInClicked] = useState(false);
  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.defaults.withCredentials = true;
    Axios.get("http://localhost:5000/customer/login").then((response) => {
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
          <Navbar Auth={auth} />
            <Switch >
              {/* Common Routes */}
              
              <Route path="/newitem" exact component={NewItem} />
              <Route path="/categorypage" exact component={CategoryPage} />
              <Route path="/productpage/:id" exact component={SpecificProductPage} />


              {/* Seller Routes */}
              <Route path="/SellerDashboard/:user_id" exact component={SellerDashboard} />
              <Route path="/sellerHome" exact component={SellerHome} />
              <Route path="/awaitingshipment" exact component={AwaitingShipment} />
              <Route path="/awaitingdelivery" exact component={AwaitingDelivery} />
              <Route path="/sellerallorders" exact component={SellerAllOrders} />
              <Route path="/orderview/:id" exact component={OrderView} />
              {/* chart*/}
              <Route path="/chartforspecificproduct" exact component={ChartForSpecificProduct} />

              <Route path="/allorders" exact component={AllOrders} />
              <Route path="/orderview" exact component={OrderView} />
              <Route path="/reportproductspopularity" exact component={ProductPopularityReport} />

              <Route path="/"  component={Home} />
            </Switch>
          </Router>
        </ChakraProvider>
      );
    }else{
      return(
        <ChakraProvider>
          <Router>
            <Navbar Auth={auth} />
            <Switch >
              {/* Customer Routes */}
              <Route path="/newitem" exact component={NewItem} />
              <Route path="/categorypage" exact component={CategoryPage} />
              <Route path="/productpage/:id" exact component={SpecificProductPage} />
              <Route path="/cart" exact component={CartPage} />
              <Route path="/customerdashboard" exact component={CustomerDashboard}  />
              <Route path="/shippingaddress" exact  component={CustomerAddress} />
              <Route path="/changepersonaldet" exact component={ChangePersonalDet} />
              <Route path="/orderview" exact component={OrderView} />
              <Route path="/feedbackpage/:item_id/:order_id" exact component={FeedbackPage} />
              <Route path="/carddetails" exact component={CardDetails} />
              <Route path="/trackorder/:id" exact component={TrackOrder} />
              <Route path="/allorders" exact component={AllOrders} />
              <Route path="/"  component={Home} />
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
      <Navbar Auth={auth} />
        <Switch >
          {/* Common Routes */}
          <Route path="/newitem" exact component={NewItem} />
          <Route path="/categorypage" exact component={CategoryPage} />
          <Route path="/productpage/:id" exact component={SpecificProductPage} />
          <Route path="/signUp" exact component={SignUp}/>
          <Route path="/signin" exact component={ () => {return <SignIn setSignInClicked={setSignInClicked}/>}} />
          <Route path="/"  component={Home} />
          </Switch>
      </Router>
    </ChakraProvider>
    );
  }
}

export default App;
