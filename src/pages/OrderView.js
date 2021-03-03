import {
  Box,
  Text,
  Img,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  VStack,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Deliverycard from "../components/Deliverycard";
import { arrayBufferToBinaryString } from "blob-util";
import { useParams } from "react-router-dom";

function OrderView() {
  let { id } = useParams();

  const [data, setData] = useState({ orderitems: [] });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders/orderdetails/${id}`)
      .then((response) => {
        setData(response.data.order[0]);
      });
  }, []);

  console.log(data);

  const arrMax = (arr) => Math.max(...arr);

  var delivery_times = [];

  data.orderitems.forEach((item) => {
    delivery_times.push(item.delivery_time);
  });

  var maximum_delivery_time = arrMax(delivery_times);

  return (
    <Box
      pt="120px"
      pl={{ base: "5px", sm: "100px" }}
      pr={{ base: "5px", sm: "100px" }}
    >
      <Heading
        as="h3"
        size="base"
        color="gray.600"
        mb="5px"
        bg="gray.300"
        p="5px"
      >
        <HStack>
          <Box>Order Details :</Box>
          <Box size="xs" color="red.600">
            {data.order_id}
          </Box>
        </HStack>
      </Heading>
      <Box height="80px">
        <HStack>
          <b size="base">
            Deliver within {maximum_delivery_time} days from ordered date{" "}
            {data.order_date}
          </b>
          <Box>
            <Button
              ml="60px"
              _hover={{ bg: "blue.300", transform: "scale(1.01)" }}
            >
              Print Shipping Lable
            </Button>
          </Box>
        </HStack>

        <p>
          Make sure you ship your order within the handling time you specified
          in the listing. Estimated delivery date shown to buyer:{" "}
          {maximum_delivery_time} days from ordered date
        </p>
      </Box>

      <Box width="100%">
        <HStack>
          <Box width="100%">
            <Heading
              as="h3"
              size="base"
              color="gray.600"
              mb="5px"
              bg="gray.300"
              p="5px"
            >
              Purchase Details
            </Heading>
            <Box height="250px">
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <GridItem fontWeight="bold">Buyer</GridItem>
                <GridItem fontWeight="semibold">
                  {data.firstname} {data.lastname}
                </GridItem>
                <GridItem fontWeight="bold">E-mail</GridItem>
                <GridItem fontWeight="semibold">{data.email}</GridItem>
                <GridItem fontWeight="bold">Phone</GridItem>
                <GridItem fontWeight="semibold">{data.phone_number}</GridItem>
                <GridItem fontWeight="bold">Date sold</GridItem>
                <GridItem fontWeight="semibold">{data.order_date}</GridItem>
                <GridItem fontWeight="bold">Date paid</GridItem>
                <GridItem fontWeight="semibold">{data.order_date}</GridItem>
              </Grid>
            </Box>
          </Box>

          <Box width="100%">
            <Heading
              as="h3"
              size="base"
              color="gray.600"
              mb="5px"
              bg="gray.300"
              p="5px"
            >
              Shipping Details
            </Heading>

            <Box height="250px">
              <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                <GridItem fontWeight="bold">Tracking</GridItem>
                <GridItem fontWeight="semibold">
                  {data.tracking_number}
                </GridItem>
                <GridItem fontWeight="bold">Ship_to</GridItem>
                <GridItem fontWeight="semibold">
                  {data.address_firstname} {data.address_lastname}
                </GridItem>
                <GridItem fontWeight="bold">Street</GridItem>
                <GridItem fontWeight="semibold">{data.street}</GridItem>
                <GridItem fontWeight="bold">City</GridItem>
                <GridItem fontWeight="semibold">{data.city}</GridItem>
                <GridItem fontWeight="bold">State</GridItem>
                <GridItem fontWeight="semibold">{data.state}</GridItem>
                <GridItem fontWeight="bold">Zip Code</GridItem>
                <GridItem fontWeight="semibold">{data.zip}</GridItem>
                <GridItem fontWeight="bold">Country of origin</GridItem>
                <GridItem fontWeight="semibold">Sri Lanka</GridItem>
                <GridItem fontWeight="bold">Phone</GridItem>
                <GridItem fontWeight="semibold">{data.phone_number}</GridItem>
              </Grid>
            </Box>
          </Box>
        </HStack>

        <Box width="100%">
          <Heading
            as="h3"
            size="base"
            color="gray.600"
            mb="5px"
            bg="gray.300"
            p="5px"
          >
            Items
          </Heading>
          <Box height="auto" pb="100px">
            {Array(data.orderitems.length)
              .fill("")
              .map((_, i) => (
                <Box
                  w="100%"
                  _hover={{ bg: "yellow.100", transform: "scale(1.01)" }}
                  borderRadius="lg"
                  overflow="hidden"
                  mb="5px"
                  borderWidth="1px"
                >
                  <HStack>
                    <Box width="50%" fontWeight="semibold" height="80px">
                      <Box>
                        <Img
                          src={`data:image/png;base64,${arrayBufferToBinaryString(
                            data.orderitems[i].image.data
                          )}`}
                          alt={"picture"}
                          w="100px"
                          h="100px"
                        />
                      </Box>
                    </Box>

                    <Box width="100%" fontWeight="semibold" height="80px">
                      <Box fontWeight="bold">
                        <Text color="red.600" fontSize="lg">
                          {data.orderitems[i].item_name}
                        </Text>
                      </Box>
                    </Box>
                    <VStack>
                      <Box width="200px" fontWeight="semibold" height="40px">
                        <Box>
                          <Text color="gray.600" fontSize="lg">
                            Variant: <b>{data.orderitems[i].variant_name}</b>
                          </Text>
                        </Box>
                      </Box>
                      <Box width="200px" fontWeight="semibold" height="40px">
                        <Box>
                          <Text color="gray.600" fontSize="lg">
                            Quantity:{" "}
                            <b>{data.orderitems[i].ordered_quantity}</b>
                          </Text>
                        </Box>
                      </Box>
                    </VStack>

                    <Box
                      width="50%"
                      height="80px"
                      fontWeight="semibold"
                      textAlign="center"
                    >
                      <Text color="blue.700" fontSize="2lg">
                        Rs. {data.orderitems[i].price}
                      </Text>
                    </Box>

                    <Box width="80%" fontWeight="semibold" height="80px">
                      <Text color="gray.600" fontSize="lg">
                        Total:{" "}
                        {data.orderitems[i].price *
                          data.orderitems[i].ordered_quantity}
                      </Text>
                    </Box>
                  </HStack>
                </Box>
              ))}
            <Box
              borderRadius="lg"
              overflow="hidden"
              mb="5px"
              borderWidth="1px"
              p="50px"
            >
              <HStack spacing='50px'>
                <Text fontSize="2xl">
                  Order Total: 
                </Text>
                <Heading fontSize="4xl">
                  Rs. {data.order_total}
                </Heading>
              </HStack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default OrderView;
