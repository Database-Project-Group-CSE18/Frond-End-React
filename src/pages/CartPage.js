import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaMoneyBillAlt, FaRegCreditCard } from "react-icons/fa";
import { SiPaypal } from "react-icons/si";

import { useParams } from "react-router-dom";

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

  const [shippingAddress, setShippingAddress] = useState([
    {
      customer_name: "Chandima Amarasena",
      street: "No.231, Dutugamunu mv",
      city: "Peliyagoda",
      state: "western",
      zip: "11830",
    },
    {
      customer_name: "Rahal Athukorala",
      street: "No.345, Parakrma Mv",
      city: "Kelaniya",
      state: "western",
      zip: "11810",
    },
  ]);

  const [currentShippingAddress, setCurrentShippingAddress] = useState(0);

  const [paymentMethod, setPaymentMethod] = useState(0);

  var TotalPrice = 0;
  cartItems.forEach((element) => {
    TotalPrice = TotalPrice + element.quantity * element.price;
  });

  let { customer_id } = useParams();

  return (
    <Box
      pt="150px"
      pl={{ base: "10px", sm: "100px" }}
      pr={{ base: "10px", sm: "100px" }}
    >
      <Box borderWidth="1px" borderColor="gray.300" p="50px" mb="200px">
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
              <Th fontSize="3xl">Total</Th>
              <Th>-</Th>
              <Th>-</Th>
              <Th isNumeric>-</Th>
              <Th isNumeric>-</Th>
              <Th isNumeric fontSize="3xl">
                Rs. {TotalPrice}
              </Th>
            </Tr>
          </Tfoot>
        </Table>
        <Divider />
        <SimpleGrid columns={2} spacing={5} mb="20px" mt="50px">
          <Box>
            <Heading as="h2" size="xl" mb="20px">
              Shipping address
            </Heading>

            <Box pl="10px">
              <Heading as="h5" size="sm">
                {shippingAddress[currentShippingAddress].customer_name}
              </Heading>

              <Text>{shippingAddress[currentShippingAddress].street}</Text>
              <Text>{shippingAddress[currentShippingAddress].city}</Text>
              <Text>{shippingAddress[currentShippingAddress].zip}</Text>
            </Box>
            <Box ml="10px" pt="10px">
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Address No. {currentShippingAddress + 1}
                </MenuButton>
                <MenuList>
                  {Array(shippingAddress.length)
                    .fill("")
                    .map((_, i) => (
                      <MenuItem onClick={() => setCurrentShippingAddress(i)}>
                        {shippingAddress[i].customer_name +
                          ", " +
                          shippingAddress[i].street +
                          ", " +
                          shippingAddress[i].state +
                          ", " +
                          shippingAddress[i].zip}
                      </MenuItem>
                    ))}
                </MenuList>
              </Menu>
            </Box>
            <Heading as="h2" size="xl" mb="20px" mt="50px">
              Payment method
            </Heading>
            <HStack>
              <Box pl="10px">
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {paymentMethod === 0 ? <Text>Select method</Text> : null}
                    {paymentMethod === 1 ? <Text>Cash on delivery</Text> : null}
                    {paymentMethod === 2 ? <Text>Card</Text> : null}
                    {paymentMethod === 3 ? <Text>Paypal</Text> : null}
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      icon={<FaMoneyBillAlt />}
                      onClick={() => setPaymentMethod(1)}
                    >
                      Cash on delivery
                    </MenuItem>
                    <MenuItem
                      icon={<FaRegCreditCard />}
                      onClick={() => setPaymentMethod(2)}
                    >
                      Card
                    </MenuItem>
                    <MenuItem
                      icon={<SiPaypal />}
                      onClick={() => setPaymentMethod(3)}
                    >
                      paypal
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box pl="10px">
                {paymentMethod === 1 ? (
                  <Icon as={FaMoneyBillAlt} w={8} h={8} />
                ) : null}
                {paymentMethod === 2 ? (
                  <Icon as={FaRegCreditCard} w={8} h={8} />
                ) : null}
                {paymentMethod === 3 ? (
                  <Icon as={SiPaypal} w={8} h={8} />
                ) : null}
              </Box>
            </HStack>
          </Box>
          <Box mr="0px" ml="auto">
            <Box w="400px" borderWidth="1px" p="10px">
              <Heading as="h3" size="lg" mb="20px">
                Order Total
              </Heading>
              <Table>
                <Tbody variant="simple" size="md">
                  <Tr>
                    <Td>Subtotal</Td>
                    <Td isNumeric>{TotalPrice}</Td>
                  </Tr>
                  <Tr>
                    <Td>Shipping</Td>
                    <Td isNumeric>Free</Td>
                  </Tr>
                  <Tr>
                    <Td fontSize="2xl">Total</Td>
                    <Td isNumeric fontSize="2xl">
                      Rs. {TotalPrice}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
              <Button mt="20px" colorScheme="cyan" w="100%">
                Checkout
              </Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default CartPage;
