import {
<<<<<<< HEAD
    Box,
    Grid,
    GridItem, 
    Avatar,
    Divider,
    Heading,
    SimpleGrid,
    Text,
    useColorMode,
    useToast
  } from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
=======
  Box,
  Grid,
  GridItem,
  Avatar,
  Divider,
  Heading,
  SimpleGrid,
  Text,
  useColorMode,
  useToast,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
>>>>>>> master
import { useParams, withRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import CustomerDashSideBar from "../components/CustomerDashSideBar";
import Axios from "axios";

const CustomerDashboard = () => {
  const toast = useToast();

  const [userdata, setUserdata] = useState([]);
  const [orderNum, setOrderNum] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/customer/user")
      .then((Response) => {
        console.log(Response.data.user[0]);
        // console.log(Response.data.det);
        setUserdata(Response.data.user[0]);
        const det = arrangeData(Response.data.det);
        setOrderNum(det);
      })
      .catch((err) => {
        toast({
          position: "bottom-right",
          description: "Loading Error",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  }, []);

  const arrangeData = (data) => {
    var newdata = {
      Shipped: 0,
      Preparing: 0,
      Awaiting_Cancel: 0,
      Cancelled: 0,
      Delivered: 0,
    };
    for (var i = 0; i < data.length; i++) {
      if (data[i].Order_status === "Shipped") {
        newdata.Shipped += 1;
      } else if (data[i].Order_status === "Preparing") {
        newdata.Preparing += 1;
      } else if (data[i].Order_status === "Awaiting_Cancel") {
        newdata.Awaiting_Cancel += 1;
      } else if (data[i].Order_status === "Cancelled") {
        newdata.Cancelled += 1;
      } else if (data[i].Order_status === "Delivered") {
        newdata.Delivered += 1;
      }
    }
    // console.log(newdata);
    return newdata;
  };

  // console.log(orderNum);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      pt="100px"
      // pl={{ base: "10px", sm: "100px" }}
      // pr={{ base: "10px", sm: "100px" }}
    >
      <Grid templateColumns="repeat(5, 1fr)" templateRows="repeat(2, 1fr)">
        <GridItem colSpan={1} rowSpan={2}>
          <CustomerDashSideBar page="dashboard" />
        </GridItem>

        <GridItem colSpan={4} m={5} mt={8}>
          <Box
            width="auto"
            h="auto"
            overflow="hidden"
            p="10px"
            pb="5px"
            bg={colorMode === "light" ? "cyan.50" : "cyan.900"}
            borderRadius="10px"
          >
            <Grid templateRows="repeat(2, 1fr)" gap={4}>
              <GridItem p="10px">
                <SimpleGrid columns={2} spacing={5}>
                  <Box>
                    <Avatar
                      size="xl"
                      // name={userdata[0].First_Name + " " + userdata[0].Last_Name}
                      src="https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                    />
                  </Box>
                  <Box>
                    <Heading size="lg">
                      {" "}
                      Hello, {userdata.First_name +
                        " " +
                        userdata.Last_name}{" "}
                    </Heading>
                  </Box>
                </SimpleGrid>
              </GridItem>

              <GridItem>
                <Box
                  bg={colorMode === "light" ? "cyan.900" : "cyan.50"}
                  borderRadius="md"
                  color="white"
                >
                  <SimpleGrid columns={5} spacing={5} pt="10px" pb="10px">
                    <Box textAlign="center">
                      <Heading
                        textColor={
                          colorMode === "light" ? "cyan.50" : "cyan.900"
                        }
                        as="h4"
                        size="lg"
                      >
                        {" "}
                        {orderNum.Preparing}{" "}
                      </Heading>
                      <Text
                        textColor={
                          colorMode === "light" ? "cyan.50" : "cyan.900"
                        }
                      >
                        {" "}
                        Awaiting Shipment
                      </Text>
                    </Box>

                    <Box textAlign="center">
                      <Heading
                        as="h4"
                        size="lg"
                        textColor={
                          colorMode === "light" ? "cyan.50" : "cyan.900"
                        }
                      >
                        {" "}
                        {orderNum.Shipped}{" "}
                      </Heading>

                      <Text
                        textColor={
                          colorMode === "light" ? "cyan.50" : "cyan.900"
                        }
                      >
                        Shipped
                      </Text>
                    </Box>

                    <Box textAlign="center">
                      <Heading
                        textColor={
                          colorMode === "light" ? "cyan.50" : "cyan.900"
                        }
                        as="h4"
                        size="lg"
                      >
                        {" "}
                        {orderNum.Awaiting_Cancel}{" "}
                      </Heading>
                      <Text
                        textColor={
                          colorMode === "light" ? "cyan.50" : "cyan.900"
                        }
                      >
                        Awaiting Cancel
                      </Text>
                    </Box>
                    <Box textAlign="center">
                      <Heading
                        as="h4"
                        size="lg"
                        textColor={
                          colorMode === "light" ? "cyan.50" : "cyan.900"
                        }
                      >
                        {" "}
                        {orderNum.Cancelled}{" "}
                      </Heading>
                      <Text
                        textColor={
                          colorMode === "light" ? "cyan.50" : "cyan.900"
                        }
                      >
                        Cancelled
                      </Text>
                    </Box>
                    <Box textAlign="center">
                      <Heading
                        as="h4"
                        size="lg"
                        textColor={
                          colorMode === "light" ? "cyan.50" : "cyan.900"
                        }
                      >
                        {" "}
                        {orderNum.Delivered}{" "}
                      </Heading>

                      <Text
                        textColor={
                          colorMode === "light" ? "cyan.50" : "cyan.900"
                        }
                      >
                        Delivered
                      </Text>
                    </Box>
                  </SimpleGrid>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default withRouter(CustomerDashboard);
