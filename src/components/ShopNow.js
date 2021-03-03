import {
  Button,
  ReactRouterLink,
  Link,
  Box,
  Text,
  Heading,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { GiShoppingCart } from "react-icons/gi";

import "./ShopNow.css";

function ShopNow() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="hero-container">
      <Flex>
        <video src="/videos/shop.mp4" autoPlay loop muted />
      </Flex>
      <Heading as="h1" size="4xl">
        LOTS OF FANCY ITEMS
      </Heading>

      <p>What are you waiting for?</p>
      <div>
        <a href="/categorypage">
          <Box
            as="button"
            p={4}
            color={colorMode === "light" ? "white" : "black"}
            fontWeight="bold"
            borderRadius="15px"
            bgGradient={
              colorMode === "light"
                ? "linear(to-r, black, blue.600)"
                : "linear(to-r, white, blue.600)"
            }
            _hover={{
              bgGradient: "linear(to-r, red, white)",
            }}
          >
            SHOP NOW
          </Box>
        </a>
          
        

        <GiShoppingCart
          className="cart-icon"
          size="100px"
          color={colorMode === "light" ? "white" : "black"}
        />
      </div>
    </div>
  );
}

export default ShopNow;
