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
} from "@chakra-ui/react";
import React, { useState } from "react";



function ShipmentCard(props) {
  return (
 
    <Box w="100%"   _hover={{ bg: "yellow.100" ,transform: "scale(1.01)" }} borderRadius="lg" overflow="hidden" mb="5px" borderWidth="1px">
        < HStack>  
        <Box width="50%" fontWeight="semibold"  height="80px"    > 
        
        <Box><Img src={props.imageUrl} alt={props.imageAlt} w='80px' h='80px' /></Box>
        </Box>

        <Box width="100%" fontWeight="semibold"  height="80px"   > 
        <Box  fontWeight="bold"><Text  color="red.600"   fontSize="lg">
            <a href={`/orderview/${props.Order_ID}`}>{props.Order_ID}</a>
          </Text></Box>
        <Box><Text color="black.600" fontSize="2lg">
            {props.F_name} {props.L_name}
          </Text></Box>
        <Box><Text color="blue.600"   fontSize="lg">
            {props.item_name} 
          </Text></Box>
        </Box>
        
        <Box width="80%" fontWeight="semibold"  height="80px"   > 
        <Box><Text color="gray.600" fontSize="lg">
        Quantity: <b>{props.Quantity}</b>
          </Text></Box>
        <Box><Text color="gray.600" fontSize="lg" >
        Variant: <b>{props.Variant_Name} </b>
          </Text></Box>
        </Box>
       
        <Box  width="50%" height="80px"  fontWeight="semibold" textAlign="center"  > 
        <Text color="blue.700" fontSize="2lg">
            Rs. {props.payment}
          </Text>

        </Box>

        <Box width="80%" fontWeight="semibold"   height="80px"   > 
        <Text color="gray.600" fontSize="lg">
            Paid On: {props.Date_paid}
          </Text>
        <Box> <Text color="gray.600" fontSize="lg">
        {props.Order_status==="shipped" ?'Shipped On :' + props.Date_shipped: 'Not Yet Shipped'+" | Status :" +props.Order_status}
        </Text></Box> 
        </Box>
        </HStack>
    </Box>
  );
}

export default ShipmentCard;
