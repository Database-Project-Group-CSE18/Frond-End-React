import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SpecificProductPage from "./pages/SpecficProductPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import CategoryPage from "./pages/CategoryPage";
import Navbar from "./components/Navbar";
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
          <Route path="/categorypage" component={CategoryPage} />
          <Route path="/cart/:customer_id" component={CartPage} />
          <Route path="/feedbackpage/:id" component={FeedbackPage} />
          <Route path="/SellerDashboard/:id" component={SellerDashboard} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
