import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SpecificProductPage from "./pages/SpecficProductPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import CategoryPage from "./pages/CategoryPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ChakraProvider>
      <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/productpage/:id" component={SpecificProductPage} />
          <Route path="/categorypage" component={CategoryPage} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
