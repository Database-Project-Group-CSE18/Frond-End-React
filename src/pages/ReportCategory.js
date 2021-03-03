import React, { useEffect, useState } from "react";
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
  toast,
} from "@chakra-ui/react";

import { Money, MoneyOff, Search } from "@material-ui/icons";
import Axios from "axios";
function ReportCategory() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [orderTotal, setOrderTotal] = useState(0);
  const [productReports, setProductReports] = useState([
    {
      category_name: "-",
      orders: "-",
    },
  ]);
  useEffect(() => {
    Axios.get("http://localhost:5000/seller/categorystatistics").then(
      (response) => {
        console.log(response.data.result);
        var total = 0;
        for (var i = 0; i < response.data.result.length; i++) {
          total = total + parseInt(response.data.result[i].orders);
        }
        setOrderTotal(total);
        setProductReports(response.data.result);
      }
    );
  }, []);

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
              Product Category Report
            </Heading>
          </Center>
          <Center>
            <FormControl
              mt="30px"
              borderStyle="solid"
              borderColor="gray.300"
              borderWidth="2px"
              borderRadius="20px"
              pt="40px"
              pl="30px"
              pb="10px"
              mb="40px"
            ></FormControl>
          </Center>
          <Table variant="simple" mt="-20px" colorScheme="blue">
            <TableCaption>Product category with most orders</TableCaption>
            <Thead bg="cyan.200">
              <Tr bg="cyan.200">
                <Th>Number</Th>
                <Th>Category Name</Th>
                <Th>Number of Orders</Th>
                {/* <Th>View product</Th> */}
              </Tr>
            </Thead>
            <Tbody>
              {Array(productReports.length)
                .fill("")
                .map((_, i) => (
                  <Tr>
                    <Td>{i + 1}</Td>
                    <Td>{productReports[i].category_name}</Td>
                    <Td>{productReports[i].orders}</Td>
                    {/* <Td>Check</Td> */}
                  </Tr>
                ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th>Total Orders of Categories = </Th>
                <Th>{orderTotal}</Th>
                {/* <Th></Th> */}
              </Tr>
            </Tfoot>
          </Table>
        </Box>
      </Box>
    </>
  );
}

export default ReportCategory;
