import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SpecificProductPage from "./pages/SpecficProductPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import CustomerDashboard from "./pages/CustomerDashboard";
import CustomerAddress from "./pages/CustomerAdress";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/productpage/:id" component={SpecificProductPage} />
          <Route path="/customerdashboard" component={CustomerDashboard} />
          <Route path="/shippingaddress" component={CustomerAddress} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
