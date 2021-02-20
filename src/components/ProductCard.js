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
  Tr,
  Td,
} from "@chakra-ui/react";
import React, { useState } from "react";

function ProductCard(props) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Img src={props.imageUrl} alt={props.imageAlt} w='230px' h='250px' />

      <Box p="6">
      <Badge
            borderRadius="full"
            px="2"
            colorScheme='yellow'
            variant="outline" 
            fontSize='9px'
          >
            {props.category}
          </Badge>
        <Box fontWeight="semibold" as="h4" lineHeight="tight" fontSize='xl' isTruncated>
          {props.title}
        </Box>
       
        <Box>
          <Text color="gray.600" fontSize="3xl">
            Rs. {props.price}
          </Text>
        </Box>

        <Box d="flex" alignItems="baseline" mt="1">
          <Badge
            borderRadius="full"
            px="2"
            colorScheme={props.status === "Available" ? "green" : "red"}
          >
            {props.status}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {props.orders} Orders
          </Box>
        </Box>

       
        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < props.rating ? "cyan.800" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {props.reviews} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductCard;
