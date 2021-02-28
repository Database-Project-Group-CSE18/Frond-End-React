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
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaMoneyBillAlt, FaRegCreditCard } from "react-icons/fa";
import { SiPaypal } from "react-icons/si";
import { RiVisaLine } from "react-icons/ri";

import visa from "payment-icons/min/flat/visa.svg";
import mastercard from "payment-icons/min/flat/mastercard-old.svg";

import { useParams } from "react-router-dom";
import axios from "axios";

function CartPage() {
  const { colorMode, toggleColorMode } = useColorMode();

  const [cartItems, setCartItems] = useState([
    {
      item_ID: "",
      item_name: "",
      price: 0,
      quantity: 0,
      varient: "",
      image: "",
    },
  ]);

  const [shippingAddress, setShippingAddress] = useState([
    {
      first_Name: "",
      last_Name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    },
  ]);

  const [card, setCard] = useState([
    {
      owner: "",
      card_number: "",
      bank_name: "",
    },
  ]);

  const [currentCard, setCurrentCard] = useState("none");

  const [currentShippingAddress, setCurrentShippingAddress] = useState(0);

  const [paymentMethod, setPaymentMethod] = useState(0);

  var TotalPrice = 0;

  var cardIcon = (type) => {
    if (type === "visa") {
      return <Img src={visa} w={12} h={12} />;
    } else if (type === "mastercard") {
      return <Img src={mastercard} w={12} h={12} />;
    }
  };

  cartItems.forEach((element) => {
    TotalPrice = TotalPrice + element.quantity * element.price;
  });

  let { customer_id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/items/cart`)
      .then((response) => {
        let data = response.data.items;
        console.log(data);
        setCartItems(data);
      });
    axios.get(`http://localhost:5000/customer/addresses`).then((response) => {
      let data = response.data.addresses;
      console.log(data);
      setShippingAddress(data);
    });
    axios.get(`http://localhost:5000/customer/bankCards`).then((response) => {
      let data = response.data.bankCards;
      console.log(data);
      setCard(data);
    });
  }, []);

  const HandleRemove = (id) => {
    axios.delete(`http://localhost:5000/items/cart/${id}`).then((response) => {
      console.log(id);
    });
    axios.get(`http://localhost:5000/items/cart`).then((response) => {
      let data = response.data.items;
      console.log(data);
      setCartItems(data);
    });
  };

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
              <Th></Th>
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
                  <Td>{cartItems[i].variant}</Td>
                  <Td isNumeric>{cartItems[i].quantity}</Td>
                  <Td isNumeric>{cartItems[i].price}</Td>
                  <Td isNumeric>
                    {cartItems[i].price * cartItems[i].quantity}
                  </Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      variant="outline"
                      size="xs"
                      onClick={() => HandleRemove(cartItems[i].variant_id)}
                    >
                      Remove
                    </Button>
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

            <Box
              p="10px"
              borderWidth="1px"
              bg={colorMode === "light" ? "gray.50" : "gray.700"}
            >
              <Heading as="h5" size="sm">
                {shippingAddress[currentShippingAddress].first_Name}{" "}
                {shippingAddress[currentShippingAddress].last_Name}
              </Heading>

              <Text>{shippingAddress[currentShippingAddress].street}</Text>
              <Text>{shippingAddress[currentShippingAddress].city}</Text>
              <Text>{shippingAddress[currentShippingAddress].state}</Text>
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
                        {"Address No. " +
                          (i + 1) +
                          " - " +
                          shippingAddress[i].first_Name +
                          " " +
                          shippingAddress[i].last_Name +
                          ", " +
                          shippingAddress[i].street +
                          ", " +
                          shippingAddress[i].city +
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

            {currentCard !== "none" && paymentMethod === 2 ? (
              <Box
                p="10px"
                borderWidth="1px"
                bg={colorMode === "light" ? "gray.50" : "gray.700"}
              >
                <HStack>
                  {card.length !==0 ? cardIcon(card[currentCard].card_type):"No cards added"}
                  <Box>
                    <Text>{card.length !==0 ? card[currentCard].owner:null}</Text>
                    <Text>
                      XXXX XXXX XXXX{" "}
                      {card.length !==0 ? card[currentCard].card_number.substr(12, 15):null}
                    </Text>
                  </Box>
                </HStack>
              </Box>
            ) : null}

            <HStack pt="10px">
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
                      icon={
                        <Icon
                          as={FaMoneyBillAlt}
                          w={6}
                          h={6}
                          color="green.500"
                        />
                      }
                      onClick={() => setPaymentMethod(1)}
                    >
                      Cash on delivery
                    </MenuItem>
                    <MenuItem
                      icon={
                        <Icon
                          as={FaRegCreditCard}
                          w={6}
                          h={6}
                          color="cyan.500"
                        />
                      }
                      onClick={() => setPaymentMethod(2)}
                    >
                      Card
                    </MenuItem>
                    <MenuItem
                      icon={<Icon as={SiPaypal} w={6} h={6} color="blue.500" />}
                      onClick={() => setPaymentMethod(3)}
                    >
                      paypal
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box pl="10px">
                {paymentMethod === 1 ? (
                  <Icon as={FaMoneyBillAlt} w={8} h={8} color="green.500" />
                ) : null}
                {paymentMethod === 2 ? (
                  <Icon as={FaRegCreditCard} w={8} h={8} color="cyan.500" />
                ) : null}
                {paymentMethod === 3 ? (
                  <Icon as={SiPaypal} w={8} h={8} color="blue.500" />
                ) : null}
              </Box>
            </HStack>

            {paymentMethod === 2 ? (
              <Box pl="10px" pt="10px">
                {card.length !== 0 ? (
                  <Box>
                    <Menu>
                      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Select a card
                      </MenuButton>
                      <MenuList>
                        {Array(card.length)
                          .fill("")
                          .map((_, i) => (
                            <MenuItem
                              icon={cardIcon("visa")}
                              onClick={() => setCurrentCard(i)}
                            >
                              <Text>{card[i].owner}</Text>
                              <Text>
                                XXXX XXXX XXXX{" "}
                                {card[i].card_number.substr(12, 15)}
                              </Text>
                            </MenuItem>
                          ))}
                      </MenuList>
                    </Menu>
                  </Box>
                ) : (
                  <Text>Please Add a card</Text>
                )}
              </Box>
            ) : null}
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
