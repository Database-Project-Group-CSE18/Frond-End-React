import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SpecificProductPage from "./pages/SpecficProductPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/productpage/:id" component={SpecificProductPage} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
