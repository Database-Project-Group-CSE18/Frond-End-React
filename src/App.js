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
import CardDetails from "./pages/CardDetails";
import TrackOrder from "./pages/TrackOrder";
import AllOrders from "./pages/AllOrders";

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

        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
