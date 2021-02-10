import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Customer/Home";
import SignUp from "./pages/Customer/SignUp";
import SignIn from "./pages/Customer/SignIn";
import SellerHome from "./pages/Seller/SellerHome";

function App() {
  return (
    <Router>
      <ChakraProvider>
        <Navbar heading="ss" />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/sellerHome" component={SellerHome} />
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
