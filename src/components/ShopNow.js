import {
  Button,
  ReactRouterLink,
  Link,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { GiShoppingCart } from "react-icons/gi";

import "./ShopNow.css";

function ShopNow() {
  return (
    <div className="hero-container">
      <video src="/videos/shop.mp4" autoPlay loop muted/>
      <Heading as="h1" size="4xl" color="black">
        LOTS OF FANCY ITEMS
      </Heading>

      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Link as={ReactRouterLink} to="/">
          <Button color="">SHOP NOW</Button>
        </Link>
        <GiShoppingCart size="100px"  color='black'/>
      </div>
    </div>
  );
}

export default ShopNow;
