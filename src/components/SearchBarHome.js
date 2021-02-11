import { SearchIcon } from "@chakra-ui/icons";
import React from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Box,
  Flex,
  Center,
} from "@chakra-ui/react";

function SearchBarHome(props) {
  return (
    <Flex
      marginTop="110px"

      borderBottom='5px solid #E8E8E8'
      bg="#E8E8E8"
    >
      <Box w="500px" padding="15px" marginLeft="30%" >
        <InputGroup bg='white' rounded='50px' border='blue'>
          <InputRightElement >
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
            />
          </InputRightElement>

          <Input
            placeholder={props.text}
            name="search"
            value={props.value}
            onChange={props.onChange}
          />
        </InputGroup>
      </Box>
    </Flex>
  );
}

export default SearchBarHome;
