import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  useColorMode,
  Avatar,
  AvatarBadge,
  HStack,
  VStack,
  Heading,
  Image,
  Badge,
  Img,
  Button,
  useToast
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

import { arrayBufferToBinaryString } from "blob-util";

function ShipmentCard(props) {
 
  
 
 
  return (
 
    <Box w="100%"   _hover={{ bg: "yellow.100" ,transform: "scale(1.01)" }} borderRadius="lg" overflow="hidden" mb="5px" borderWidth="1px">
        <HStack>  
        <Box width="50%" fontWeight="semibold"  height="80px"    > 
        
        <Box><Img src={props.imageUrl ? arrayBufferToBinaryString(props.imageUrl.data):null} alt={props.imageAlt} w='80px' h='80px' /></Box>
        <Box  fontWeight="bold">
          <Text  mt="20px" ml="20px" color="red.600"   fontSize="lg">
            <a href={`/orderview/${props.order_id}`}>{props.order_id}</a>
          </Text></Box>
        </Box>

        <Box width="100%" fontWeight="semibold"  height="80px"> 
        <Box mt="2px"><Text color="black.600" fontSize="2lg">
            {props.first_name} {props.last_name}
          </Text></Box>
        <Box><Text color="blue.600"   fontSize="lg">
          User ID : {props.customer_id} 
          </Text></Box>
        </Box>

        
        
        <Box width="80%" fontWeight="semibold"  height="80px"   > 
        <Badge mt="2%" width="70%" height="80%" textAlign="Center"
            borderRadius="full"
            px="2"
            colorScheme= "blue">
            <Text fontSize="lg" mt="20px">Paid</Text>
          </Badge>
        </Box>
       
        <Box  width="50%" height="80px"  fontWeight="semibold" textAlign="center"  > 
        <Text color="blue.700" fontSize="2lg">
           Paid Via {props.payment_method}
          </Text>
          
          <Button  mt="5px" padding="5px" horizontalAlign="true" textColor="Black" bg="blue.100"  _hover={{ bg: "yellow.300" }} onClick={()=>props.MarkasShipped(props.order_id)} >Dispatch</Button>

        </Box>

        <Box width="80%" fontWeight="semibold"   height="80px"   > 
        <Text color="gray.600" fontSize="lg">
            Paid On: {props.date_paid}
          </Text>
        </Box>
        </HStack>
    </Box>
  );
}

export default ShipmentCard;
