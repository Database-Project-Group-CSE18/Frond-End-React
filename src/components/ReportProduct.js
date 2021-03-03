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
  Flex,
  Spacer,
  Button,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";

import { AvatarBadge } from "@chakra-ui/react";
// import "./Middle.css";
import { FaDollarSign } from "react-icons/fa";
import { Money, MoneyOff, Search } from "@material-ui/icons";
import { GiCartwheel, GiShoppingBag, GiShoppingCart } from "react-icons/gi";
import { FiUserPlus } from "react-icons/fi";

function ReportProduct() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <>
        <Box
          borderStyle="solid"
          borderColor="gray"
          boarderRadius="200px"
          mt="0px"
          pl="20px"
          pr="20px"
          pt="250px"
          mb="50px"

        >
          <Box
            borderStyle="solid"
            borderColor="gray.300"
            borderWidth="2px"
            p="30px"
            pt="30px"
            mt="-120px"
            mb="50px"
            borderRadius="20px"
            bg={colorMode === "light" ? "white" : "cyan.900"}
          >
            <Center>
              <Heading as="h2" size="2xl">
                Product Popularity Report
              </Heading>
            </Center>

            <FormControl mr="2" mt="20px">
              <SimpleGrid columns={3} spacing={10}>
                <Box height="250px">
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
                  <Box mt="20px" ml="310px">
                    <Button rightIcon={<Search />} colorScheme="teal">
                      Search
                    </Button>
                  </Box>
                </Box>
              </SimpleGrid>
            </FormControl>
            <Table variant="simple" >
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead backgroundColor='cyan.100'>
                <Tr color='white'>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </Box>
        </Box>
    </>
  );
}

export default ReportProduct;

{
  /* <GridItem>
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

</GridItem> */
}
