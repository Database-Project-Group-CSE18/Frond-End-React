import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  IconButton,
  Tooltip,
  Avatar,
  Center,
  Badge,
  Progress,
  GridItem,
  Heading,
  SimpleGrid,
  useColorMode,
  Grid,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { AvatarBadge } from "@chakra-ui/react";
// import "./Middle.css";
import { FaDollarSign } from "react-icons/fa";
import { Money, MoneyOff } from "@material-ui/icons";
import { GiCartwheel, GiShoppingBag, GiShoppingCart } from "react-icons/gi";
import { FiUserPlus } from "react-icons/fi";

function ReportProduct() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <>
      <div className="dashboard">
        <Box
          borderStyle="solid"
          borderColor="gray.800"
          boarderRadius="200px"
          mt="0px"
          pl="20px"
          pr="20px"
          pt="250px"
          h="460px"
          mb="20px"
        >
          <Box
            borderStyle="solid"
            borderColor="gray.200"
            borderWidth="2px"
            p="10px"
            pt="30px"
            mt="-120px"
            borderRadius="20px"
            bg={colorMode === "light" ? "white" : "cyan.900"}
          >
            <Center>
              <Heading as="h2" size="2xl">
                Product Popularity Report
              </Heading>
            </Center>
            <SimpleGrid columns={2} spacing={10}>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>

</SimpleGrid>
            <FormControl>
            <SimpleGrid columns={2} spacing={10}>
                <FormLabel>Start Date</FormLabel>
                <Input
                  type="date"
                  placeholder="Exp Date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <FormLabel>End Date</FormLabel>
                <Input
                  type="date"
                  placeholder="Exp Date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
</SimpleGrid>

              </FormControl>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default ReportProduct;

{/* <GridItem>
<Box
  bg={colorMode === "light" ? "cyan.900" : "cyan.50"}
  borderRadius="20px"
  color="white"
  m="20px"
  p="50px"
>
  <SimpleGrid columns={5} spacing={5} pt="10px" pb="10px">
    <Box textAlign="center">
      <Heading
        textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
        as="h4"
        size="lg"
      >
        {" "}
        Rs.
      </Heading>
      <Text
        textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
      >
        {" "}
        Total Revenue
      </Text>
    </Box>

    <Box textAlign="center">
      <Heading
        as="h4"
        size="lg"
        textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
      >
        {" "}
        Rs.
      </Heading>

      <Text
        textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
      >
        Today Revenue
      </Text>
    </Box>

    <Box textAlign="center">
      <Heading
        textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
        as="h4"
        size="lg"
      >
        {" "}
      </Heading>
      <Text
        textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
      >
        Awaiting for shipment
      </Text>
    </Box>
    <Box textAlign="center">
      <Heading
        as="h4"
        size="lg"
        textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
      >
        {" "}
      </Heading>
      <Text
        textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
      >
        Awaiting for delivery
      </Text>
    </Box>
    <Box textAlign="center">
      <Heading
        as="h4"
        size="lg"
        textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
      >
        {" "}
      </Heading>

      <Text
        textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}
      >
        Today New Users
      </Text>
    </Box>
  </SimpleGrid>
</Box>

</GridItem> */}