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
  import React, { useState } from "react";
  import Deliverycard from "../components/Deliverycard";
 

  
  function OrderView() {


    const order_number="233-5145-789e";
    const Shipping_method="Economy International Shipping"
    const Tracking ="Add tracking"
    const Ship_to="Rahal Athukorala"
    const Street="562/B Walgama/Malwana"
    const City= "Biyagama"
    const State_province="Western"
    const Zip_code="11670"
    const Country_region="Sri Lanka"
    const Phone="+94 716565834"
    const Buyer="Rahal Athukorala"
    const E_mail="rahalathukorala@gmail.com"
    const Date_sold="Feb 17, 2021"
    const Date_paid="Feb 17, 2021"
    const image="https://b3h2.scene7.com/is/image/BedBathandBeyond/69055867778_imageset?$690$&wid=690&hei=690"
    const title="Electric Tooth Brush"
    const feedback="Positive"
    const Sold_for=5000
    const Quantity=5

    
    return (
  <Box
        pt="120px"
        pl={{ base: "5px", sm: "100px" }}
        pr={{ base: "5px", sm: "100px" }}>
 <Heading as="h3" size="base" color="gray.600" mb="5px" bg="gray.300" p="5px">
    <HStack><Box>Order Details :</Box><Box size="xs" color="red.600">{order_number}</Box></HStack>
  </Heading>     
      <Box height="80px">
          <HStack><b size="base">Ship by {Date_sold} Sri Lanka Time</b>
              <Box><Button  ml="60px"  _hover={{ bg: "blue.300" ,transform: "scale(1.01)" }}>Print Shipping Lable</Button>
              </Box>
          </HStack>


              <p>Make sure you ship your order within the handling time you specified in the listing.
Estimated delivery date shown to buyer: {Date_sold} - {Date_sold}</p>
      </Box>
               
            
<Box width="100%">
    <HStack>
        
    <Box width="100%">
    <Heading as="h3" size="base" color="gray.600" mb="5px" bg="gray.300" p="5px">
              Purchase Details
            </Heading>
            <Box height="250px">
          <Grid  templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem fontWeight="bold">Buyer</GridItem>
        <GridItem fontWeight="semibold">{Buyer}</GridItem>
        <GridItem fontWeight="bold">E-mail</GridItem>
        <GridItem fontWeight="semibold">{E_mail}</GridItem>
        <GridItem fontWeight="bold">Phone</GridItem>
        <GridItem fontWeight="semibold">{Phone}</GridItem>
        <GridItem fontWeight="bold">Date sold</GridItem>
        <GridItem fontWeight="semibold">{Date_sold}</GridItem>
        <GridItem fontWeight="bold">Date paid</GridItem>
        <GridItem fontWeight="semibold">{Date_paid}</GridItem>
        
          </Grid>  
                
            </Box>


    </Box>


    <Box width="100%"><Heading as="h3" size="base" color="gray.600" mb="5px" bg="gray.300" p="5px">
              Shipping Details
            </Heading>
            
            <Box height="250px">

            <Grid  templateColumns="repeat(2, 1fr)" gap={2}>
        <GridItem fontWeight="bold">Tracking</GridItem>
        <GridItem fontWeight="semibold">{Tracking}</GridItem>
        <GridItem fontWeight="bold">Ship_to</GridItem>
        <GridItem fontWeight="semibold">{Buyer}</GridItem>
        <GridItem fontWeight="bold">Street</GridItem>
        <GridItem fontWeight="semibold">{Street}</GridItem>
        <GridItem fontWeight="bold">City</GridItem>
        <GridItem fontWeight="semibold">{City}</GridItem>
        <GridItem fontWeight="bold">State</GridItem>
        <GridItem fontWeight="semibold">{State_province}</GridItem>
        <GridItem fontWeight="bold">Zip Code</GridItem>
        <GridItem fontWeight="semibold">{Zip_code}</GridItem>
        <GridItem fontWeight="bold">Country</GridItem>
        <GridItem fontWeight="semibold">{Country_region}</GridItem>
        <GridItem fontWeight="bold">Phone</GridItem>
        <GridItem fontWeight="semibold">{Phone}</GridItem>
          </Grid>

            </Box>
            </Box>
        
    </HStack>

    <Box width="100%">
    <Heading as="h3" size="base" color="gray.600" mb="5px" bg="gray.300" p="5px">
              Items
    </Heading>
    <Box height="100px">


      

      <Box w="100%"   _hover={{ bg: "yellow.100" ,transform: "scale(1.01)" }} borderRadius="lg" overflow="hidden" mb="5px" borderWidth="1px">
        < HStack>  
        <Box width="50%" fontWeight="semibold"  height="80px"    > 
        
        <Box><Img src={image} alt={"picture"} w='100px' h='100px' /></Box>
        </Box>

        <Box width="100%" fontWeight="semibold"  height="80px"   > 
        <Box fontWeight="bold"><Text color="red.600"   fontSize="lg">
            {title}
          </Text></Box>
        </Box>
        
        <Box width="80%" fontWeight="semibold"  height="80px"   > 
        <Box><Text color="gray.600" fontSize="lg">
        Quantity: <b>{Quantity}</b>
          </Text></Box>
        
        </Box>
       
        <Box  width="50%" height="80px"  fontWeight="semibold" textAlign="center"  > 
        <Text color="blue.700" fontSize="2lg">
            Rs. {Sold_for}
          </Text>
        </Box>

        <Box width="80%" fontWeight="semibold"   height="80px"   > 
        <Text color="gray.600" fontSize="lg">
            Total: {Sold_for*Quantity}
          </Text>
        </Box>
        </HStack>
    </Box>
      
    </Box>
    </Box>
    </Box>

    </Box>
  
    );
  }
  
  export default OrderView;
  