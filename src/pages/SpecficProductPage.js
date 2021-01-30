import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import ImageLoader from "react-image-file";
import { StarIcon } from "@chakra-ui/icons";

function SpecificProductPage() {
  let { id } = useParams();
  const { colorMode, toggleColorMode } = useColorMode();

  const [data, setData] = useState({
    item_ID: "233d",
    item_name: "Electric tooth brush",
    category: "electronic",
    price: 200.0,
    description:
      "dqdasd a sadasd asdasdafsfrgs gsgsg sd gsgsgsdg sdgsdgsdg sdg",
    status: "Available",
    feedbacks: [
      {
        customer_name: "jof hagi",
        comment: "asdasds asdasd sad",
        rating: 5,
        reply: ["sfsdfsd", "adasdasd asdasdasfasc sadasdas"],
      },
      {
        customer_name: "den kali",
        comment: "axasxas asdasd sad",
        rating: 2,
        reply: ["sfsdsddfsd", "asdassadasd sadssadasd sadasad"],
      },
    ],
    variants: [
      {
        varient_name: "white 2 brushes",
        image: "./images/White.jpg",
        color: "green",
        details: "",
        Quantity: 450,
      },
      {
        varient_name: "pink 2 brushes with bateries",
        image: "./images/pink.jpg",
        color: "pink",
        details: "",
        Quantity: 230,
      },
      {
        varient_name: "two heads only",
        image: "./images/blue.jpg",
        color: "blue",
        details: "",
        Quantity: 500,
      },
    ],
  });

  return (
    <Box pt="200px" pl="100px" pr="100px">
      <SimpleGrid columns={2} spacing={5} minChildWidth="500px">
        <Box
          width="auto"
          h="80vh"
          borderWidth="2px"
          borderRadius="lg"
          borderColor="black"
          overflow="hidden"
          p="5px"
        ></Box>
        <Box
          width="auto"
          h="80vh"
          borderWidth="2px"
          borderRadius="lg"
          borderColor="gray.300"
          overflow="hidden"
          p="20px"
        >
          <Heading as="h2" size="2xl">
            {data.item_name}
          </Heading>

          <Text fontSize="xl" ml="3px" mt="5px">
            {data.category}
          </Text>

          <Box d="flex" mt="2" ml="2px" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < data.feedbacks[0].rating ? "cyan.500" : "cyan.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {data.feedbacks.length} reviews
            </Box>
          </Box>
          <HStack mt="20px">
            <Button colorScheme="cyan" color="white" size="lg">
              Buy now
            </Button>
            <Button colorScheme="orange" size="lg" variant="outline">
              Add to cart
            </Button>
          </HStack>
          <Center>
            <Image src={data.variants[0].image} alt="image" />
          </Center>

          <Heading as="h4" size="md" mt="20px">
            Description
          </Heading>
          <Text fontSize="md" ml="3px" mt="5px">
            {data.description}
          </Text>
        </Box>
      </SimpleGrid>
      <Box
        width="auto"
        h="50vh"
        borderWidth="2px"
        borderRadius="lg"
        borderColor="black"
        overflow="hidden"
        p="5px"
        mt="20px"
      ></Box>
    </Box>
  );
}

export default SpecificProductPage;
