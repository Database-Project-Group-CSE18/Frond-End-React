import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Icon,
  Img,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      item_ID: "213d",
      item_name: "Electric tooth brush",
      price: 2000.0,
      quantity: 2,
      varient: "pink",
      image: "../images/pink.jpg",
    },
    {
      item_ID: "235",
      item_name: "IPhone 8",
      price: 50000.0,
      quantity: 1,
      varient: "64GB",
      image: "../images/iphone.jpg",
    },
    {
      item_ID: "234d",
      item_name: "Electric tooth brush",
      price: 2000.0,
      quantity: 5,
      varient: "white",
      image: "../images/White.jpg",
    },
    {
      item_ID: "233d",
      item_name: "Electric tooth brush",
      price: 300.0,
      quantity: 5,
      varient: "blue",
      image: "../images/blue.jpg",
    },
  ]);

  var TotalPrice = 0;
  cartItems.forEach(element => {
      TotalPrice = TotalPrice + (element.quantity * element.price)
  });


  return (
    <Box
      pt="150px"
      pl={{ base: "10px", sm: "100px" }}
      pr={{ base: "10px", sm: "100px" }}
    >
      <Box borderWidth="1px" borderColor="gray.300" p="20px" mb='200px'>
        <Heading as="h2" size="2xl" mb="20px">
          <Icon as={FiShoppingCart} w={12} h={12} /> Cart
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Product name</Th>
              <Th>Varient</Th>
              <Th isNumeric>Quantity</Th>
              <Th isNumeric>Price(each)</Th>
              <Th isNumeric>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array(cartItems.length)
              .fill("")
              .map((_, i) => (
                <Tr>
                  <Td>
                    <Img src={cartItems[i].image} w="50px" h="50px" />
                  </Td>
                  <Td>{cartItems[i].item_name}</Td>
                  <Td>{cartItems[i].varient}</Td>
                  <Td isNumeric>{cartItems[i].quantity}</Td>
                  <Td isNumeric>{cartItems[i].price}</Td>
                  <Td isNumeric>
                    {cartItems[i].price * cartItems[i].quantity}
                  </Td>
                </Tr>
              ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th fontSize='3xl'>Total</Th>
              <Th>-</Th>
              <Th>-</Th>
              <Th isNumeric>-</Th>
              <Th isNumeric>-</Th>
              <Th isNumeric fontSize='3xl'>Rs. {TotalPrice}</Th>
            </Tr>
          </Tfoot>
        </Table>
      </Box>
    </Box>
  );
}

export default CartPage;
