import {
    Box,
    Button,
    Center,
    Grid,
    GridItem,
    Heading,
    VStack,
    HStack,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import Deliverycard from "../components/Deliverycard";
 

  
  function OrderView() {
    
    return (
        <Box
        pt="150px"
        pl={{ base: "10px", sm: "100px" }}
        pr={{ base: "10px", sm: "100px" }}
      >
 <Heading as="h3" size="xl" color="gray.600" mb="10px" bg="gray.300" p="10px">
              Order Details
            </Heading>
<Box width="100%">
    <HStack>
        <Box>
    <Box>
    <Heading as="h3" size="lg" color="gray.600" mb="10px" bg="gray.300" p="10px">
              Purchase Details
            </Heading>
            <Box>
                
            </Box>


    </Box>


    <Box width="100%"><Heading as="h3" size="lg" color="gray.600" mb="10px" bg="gray.300" p="10px">
              Shipping Details
            </Heading></Box>
        </Box>
    </HStack>

    <Box width="100%">
    <Heading as="h3" size="lg" color="gray.600" mb="10px" bg="gray.300" p="10px">
              Items
            </Heading></Box>
    </Box>

    </Box>

    
  
    );
  }
  
  export default OrderView;
  