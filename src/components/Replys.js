import {
  Box,
  Text,
  useColorMode,
  Avatar,
  AvatarBadge,
  HStack,
  VStack,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Replys(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const dp = "";

  var replys = [];
  for (var i = 0; i < props.replys.length; i++) {
    replys.push(
      <HStack spacing="10px" w="100%">
        <Avatar name="Electrica" src={dp} size="sm" />
        <Box
          w="100%"
          borderWidth="1px"
          borderRadius="lg"
          p="10px"
          mt="20px"
          bg={colorMode === "light" ? "gray.50" : "gray.500"}
        >
        <Heading  as="h5" size="sm">Electrica</Heading>
          <Text>{props.replys[i]}</Text>
        </Box>
      </HStack>
    );
  }

  return (
    <Box ml="100px" mt='10px'>
      <VStack w="100%">{replys}</VStack>
    </Box>
  );
}

export default Replys;
