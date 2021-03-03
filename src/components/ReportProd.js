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
  useToast,
} from "@chakra-ui/react";

import { Money, MoneyOff, Search } from "@material-ui/icons";
import Axios from "axios";
function ReportProduct() {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const [formStartDate, setFormStartDate] = useState("");
  const [formEndDate, setFormEndDate] = useState("");
  const [orderTotal, setOrderTotal] = useState(0)
  const [productReports, setProductReports] = useState([{
    item_name: "-",
    category_name: "-",
    price: "-",
    orders: "-"
  }])
  const handleProductReport = (e) => {
    e.preventDefault();

    if (formStartDate.length === 0 || formEndDate.length === 0) {
      alert("Enter time period to generate results");
      return;
    }
    Axios.post("http://localhost:5000/seller/productstatistics", {
      startDate: formStartDate,
      endDate: formEndDate,
    }).then((response) => {
      // console.log(response.data.result.length);
      var total = 0;
      for (var i = 0; i < response.data.result.length; i++) {
        total = total + parseInt(response.data.result[i].orders);
      }
      setOrderTotal(total);
      setProductReports(response.data.result)
      if(response.data.result.length===0){
        toast({
            title: "Error",
            position: "bottom",
            description: "No any product orders within the given time period",
            status: "error",
            duration: 5000,
            isClosable: true,
          })
       }
       else{
        toast({
            title: "Success",
            position: "bottom",
            description: "Product report has successfully generated",
            status: "success",
            duration: 5000,
            isClosable: true,
          })
        }
    });
  };
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
              Product Statistics Report
            </Heading>
          </Center>
          <Center>
          
            <FormControl
              mt="10px"
              borderStyle="solid"
              borderColor="gray.300"
              borderWidth="2px"
              borderRadius="20px"
              pt="40px"
              pl="30px"
              pb="10px"
              mb="40px"
            >
              <SimpleGrid columns={3} spacing={10}>
                <Box>
                  <FormLabel>Start Date</FormLabel>
                  <Input
                    type="date"
                    placeholder="Start Date"
                    value={formStartDate}
                    onChange={(e) => setFormStartDate(e.target.value)}
                  />
                  <FormLabel>End Date</FormLabel>
                  <Input
                    type="date"
                    placeholder="End date"
                    value={formEndDate}
                    onChange={(e) => setFormEndDate(e.target.value)}
                  />
                  <Box mt="20px" ml="310px">
                    <Button
                      rightIcon={<Search />}
                      colorScheme="teal"
                      onClick={handleProductReport}
                    >
                      Search
                    </Button>
                  </Box>
                </Box>
              </SimpleGrid>
            </FormControl>
          </Center>
          <Table variant="simple" mt="-20px" colorScheme="blue">
            <TableCaption>Products with most number of sales in a given period</TableCaption>
            <Thead bg="cyan.200">
              <Tr bg="cyan.200">
                <Th>Number</Th>
                <Th>Product Name</Th>
                <Th>Category Name</Th>
                <Th>Price</Th>
                <Th>Number of Orders</Th>
                {/* <Th>View product</Th> */}
              </Tr>
            </Thead>
            <Tbody>
            {Array(productReports.length)
              .fill("")
              .map((_, i) => (
                // <Tr>
                //   <Td>
                //     <Img src={arrayBufferToBinaryString(cartItems[i].image.data)} w="50px" h="50px" />
                //   </Td>
                //   <Td>{cartItems[i].item_name}</Td>
                //   <Td>{cartItems[i].variant}</Td>
                //   <Td isNumeric>{cartItems[i].quantity}</Td>
                //   <Td isNumeric>{cartItems[i].price}</Td>
                //   <Td isNumeric>
                //     {cartItems[i].price * cartItems[i].quantity}
                //   </Td>
                //   <Td>
                    
                //   </Td>
                // </Tr>
                <Tr>
                <Td>{i+1}</Td>
                <Td>{productReports[i].item_name}</Td>
                <Td>{productReports[i].category_name}</Td>
                <Td>{productReports[i].price}</Td>
                <Td>{productReports[i].orders}</Td>
                {/* <Td>Check</Td> */}
              </Tr>
              ))}
              {/* <Tr>
                <Td>1</Td>
                <Td>1</Td>
                <Td>1</Td>
                <Td>1</Td>
                <Td>1</Td>
                <Td>Check</Td>
              </Tr> */}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <Th>Total Orders of Products = </Th>
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

export default ReportProduct;
