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

/*                  Order_ID={orderlist[i].Order_ID}
                    Varient_ID= {orderlist[i].Varient_ID}
                    imageUrl={orderlist[i].image}
                    item_name= {orderlist[i].item_name}
                    payment= {orderlist[i].payment}
                    Date_paid={orderlist[i].Date_paid}
                    Quantity={orderlist[i].Quantity}
                    F_name= {orderlist[i].F_name}
                    L_name= {orderlist[i].L_name}*/

function Deliverycard(props) {
  return (
 
    <Box maxW="parent"  _hover={{ bg: "yellow.100" ,transform: "scale(1.01)" }}  borderRadius="lg" overflow="hidden" mb="5px" borderWidth="1px">
        < HStack>  
        <Box width="50%" fontWeight="semibold"  height="110px"    > 
        
        <Box><Img src={props.imageUrl} alt={props.imageAlt} w='100px' h='100px' /></Box>
        </Box>

        <Box width="100%" fontWeight="semibold"  height="110px"   > 
        <Box fontWeight="bold"><Text color="red.600"   fontSize="xl">
            {props.Order_ID}
          </Text></Box>
        <Box><Text color="black.600" fontSize="2xl">
            {props.F_name} {props.L_name}
          </Text></Box>
        <Box><Text color="blue.600"   fontSize="xl">
            {props.item_name} 
          </Text></Box>
        </Box>
        
        <Box width="80%" fontWeight="semibold"  height="110px"   > 
        <Box><Text color="gray.600" fontSize="xl">
        Quantity: <b>{props.Quantity}</b>
          </Text></Box>
        <Box><Text color="gray.600" fontSize="xl" >
        Varient: <b>{props.Varient_ID} </b>
          </Text></Box>
        </Box>
       
        <Box  width="50%" height="110px"  fontWeight="semibold" textAlign="center"  > 
        <Text color="blue.700" fontSize="2xl">
            Rs. {props.payment}
          </Text>
        </Box>

        <Box width="80%" fontWeight="semibold"   height="110px"   >
            <Box>
        <Text color="gray.600" fontSize="xl">
           Paid On: {props.Date_paid}
          </Text></Box> 
          <Box> <Text color="gray.600" fontSize="xl">
           Shipped On: {props.Date_shipped}
          </Text></Box> 
        </Box>
        </HStack>
    </Box>
  );
}

export default Deliverycard;
