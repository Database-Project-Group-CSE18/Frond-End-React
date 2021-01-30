import { StarIcon } from "@chakra-ui/icons";
import {
  HStack,
  Text,
  Avatar,
  Box,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import Replys from "./Replys";

function CategorizedReviewPreview(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  var reviews = [];

  var stars = (rating) => {
    return Array(5)
      .fill("")
      .map((_, j) => (
        <StarIcon key={j} color={j < rating ? "cyan.500" : "cyan.300"} />
      ));
  };

  for (var i = 0; i < props.feedbacks.length; i++) {
    if (props.feedbacks[i].rating === props.rating || props.rating === 'all') {
      reviews.push(
        <Box mb='10px'>
          <HStack>
            <Avatar
              name={props.feedbacks[i].customer_name}
              src={props.feedbacks[i].customer_dp}
            />
            <Box
              w="100%"
              borderWidth="2px"
              borderRadius="lg"
              p="10px"
              bg={colorMode === "light" ? "cyan.50" : "cyan.500"}
            >
              <Heading as="h5" size="sm">
                {props.feedbacks[i].customer_name}
              </Heading>
              <Text>{props.feedbacks[i].comment}</Text>
              <Box d="flex" mt="2" ml="2px" alignItems="center">
                {stars(props.feedbacks[i].rating)}
                <Box as="span" ml="2" fontSize="sm">
                  {props.feedbacks[i].rating}/5
                </Box>
              </Box>
            </Box>
          </HStack>
          <Replys replys={props.feedbacks[i].reply} />
        </Box>
      );
    }
  }

  if (reviews.length === 0) {
    reviews.push(<Text>No reviews</Text>);
  }

  return <>{reviews}</>;
}

export default CategorizedReviewPreview;
