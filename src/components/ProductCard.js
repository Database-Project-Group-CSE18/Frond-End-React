import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Image,
  Badge,
  Link,
  ReactRouterLink
} from "@chakra-ui/react";
import { arrayBufferToBinaryString } from "blob-util";
import React, { useState } from "react";


function ProductCard(props) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src={arrayBufferToBinaryString(props.imageUrl ? props.imageUrl.data : '')}
        alt="product image"
        w="200px"
        h="200px"
      />
      <Box p="6">
        <Badge
          borderRadius="full"
          px="2"
          colorScheme="yellow"
          variant="outline"
          fontSize="9px"
        >
          {props.category}
        </Badge>
        <Box
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          fontSize="xl"
          isTruncated
        >
          <Link href={`/productpage/${props.item_id}`}>{props.title}</Link>
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
