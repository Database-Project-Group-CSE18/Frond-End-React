import { StarIcon } from "@chakra-ui/icons";
import {
  HStack,
  Text,
  Avatar,
  Box,
  useColorMode,
  Heading,
  VStack,
  Progress,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import Replys from "./Replys";

function ReviewCountPreview(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  var reviews = [];

  const total_reviews = props.feedbacks.length;

  var s5 = 0;
  var s4 = 0;
  var s3 = 0;
  var s2 = 0;
  var s1 = 0;

  for (var i = 0; i < props.feedbacks.length; i++) {
    if (props.feedbacks[i].rate === 5) {
      s5 = s5 + 1;
    } else if (props.feedbacks[i].rate === 4) {
      s4 = s4 + 1;
    } else if (props.feedbacks[i].rate === 3) {
      s3 = s3 + 1;
    } else if (props.feedbacks[i].rate === 2) {
      s2 = s2 + 1;
    } else if (props.feedbacks[i].rate === 1) {
      s1 = s1 + 1;
    }
  }

  return (
    <Stack w="50vh" h="50vh" spacing="1px" ml='20px'>
      <Box w="300px" pb='5px'>
        <Text fontSize='lg'>
          5 <StarIcon color="cyan.500" />
        </Text>
        <Text fontSize='xs'>
            {s5} reviews
        </Text>
        <Progress value={(s5 / total_reviews) * 100} />
      </Box>

      <Box w="300px" pb='5px'>
        <Text fontSize='lg'>
          4 <StarIcon color="cyan.500" />
        </Text>
        <Text fontSize='xs'>
            {s4} reviews
        </Text>
        <Progress value={(s4 / total_reviews) * 100} />
      </Box>

      <Box w="300px" pb='5px'>
        <Text fontSize='lg'>
          3 <StarIcon color="cyan.500" />
        </Text>
        <Text fontSize='xs'>
            {s3} reviews
        </Text>
        <Progress value={(s3 / total_reviews) * 100} />
      </Box>
      <Box w="300px" pb='5px'>
        <Text fontSize='lg'>
          2 <StarIcon color="cyan.500" />
        </Text>
        <Text fontSize='xs'>
            {s2} reviews
        </Text>
        <Progress value={(s2 / total_reviews) * 100} />
      </Box>
      <Box w="300px" pb='5px'>
        <Text fontSize='lg'>
          1 <StarIcon color="cyan.500" />
        </Text>
        <Text fontSize='xs'>
            {s1} reviews
        </Text>
        <Progress value={(s1 / total_reviews) * 100} />
      </Box>
    </Stack>
  );
}

export default ReviewCountPreview;
