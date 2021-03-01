import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Textarea,
  Text,
  useColorMode,
  Badge,
  useToast
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

import {
  AddIcon,
  MinusIcon,
  ArrowForwardIcon,
  StarIcon,
  
} from "@chakra-ui/icons";
import CategorizedReviewPreview from "../components/CategorizedReviewPreview";
import ReviewCountPreview from "../components/ReviewCountPreview";
import SearchBar from "../components/SearchBar";

function FeedbackPage(props) {
  let { id } = useParams();

  const toast = useToast()

  var Order_ID = 1;
  var Item_ID = 1;

  const [data, setData] = useState({
    item_ID: "233d",
    item_name: "Electric tooth brush",
    category: "electronic",
    price: 200.0,
    orders: 345,
    description:
      "dqdasd a sadasd asdasdafsfrgs gsgsg sd gsgsgsdg sdgsdgsdg sdg",
    status: "Available",
    feedbacks: [
      {
        customer_name: "jof hagi",
        customer_dp: "jof hagi",
        comment: "asdasds asdasd sad",
        rating: 4,
        reply: ["sfsdfsd", "Thank you"],
      },
      {
        customer_name: "den kali",
        customer_dp: "jof hagi",
        comment: "axasxas asdasd sad",
        rating: 5,
        reply: ["sfsdsddfsd", "asdassadasd sadssadasd sadasad"],
      },
      {
        customer_name: "gendi gahnadi",
        customer_dp: "jof hagi",
        comment: "hgfhf dghhdgf dfgshssdd",
        rating: 2,
        reply: ["sfsdsddfsd", "asdassadasd sadssadasd sadasad"],
      },
      {
        customer_name: "den kali",
        customer_dp: "jof hagi",
        comment: "axasxas asdasd sad",
        rating: 2,
        reply: ["sfsdsddfsd", "asdassadasd sadssadasd sadasad"],
      },
    ],
    variants: [
      {
        varient_name: "white 2 brushes",
        image:
          "../images/White.jpg",
        color: "green",
        details: "",
        Quantity: 450,
      },
      {
        varient_name: "pink 2 brushes with bateries",
        image:
          "../images/Pink.jpg",
        color: "pink",
        details: "",
        Quantity: 230,
      },
      {
        varient_name: "two heads only",
        image:
          "../images/blue.jpg",
        color: "blue",
        details: "",
        Quantity: 500,
      },
    ],
  });

  const [Rating, setRating] = useState('')
  const [Comment, setComment] = useState('')

  //add feedback
  const addFeedback = (Order_ID, Item_ID, Rating, Comment) => {
    console.log(Rating);
    Axios.post("http://localhost:5000/orders/feedback", {Order_ID: Order_ID, Item_ID: Item_ID, Rating: Rating, Comment: Comment })
      .then((Response) => {
        toast({
          position: "bottom-right",
          description: "Feedback Submitted Successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
      })
      .catch((err) => {
        toast({
          position: "bottom-right",
          description: "Internal Server Error. Try again later",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      });

  }

  const onSubmit = (e)=>{
    e.preventDefault()

    if(!Rating || !Comment){
        alert('Empty Field')
        return
    }
    
    addFeedback(Order_ID, Item_ID, Rating, Comment)

    
}



  return (
    <Box
      pt="150px"
      pl={{ base: "10px", sm: "100px" }}
      pr={{ base: "10px", sm: "100px" }}
    >
      <Center mb="20px">
        <SearchBar text="I'm shopping for" />
      </Center>
      <SimpleGrid
        columns={2}
        spacing={5}
        minChildWidth="400px"
        borderWidth="2px"
        borderRadius="lg"
        borderColor="gray.300"
      >
        <Box width="auto" h="auto" overflow="hidden" p="5px">
          <Image
            src={data.variants[0].image}
            w="auto"
            h="auto"
            alt="image"
            fit
          />
        </Box>
        <Box
          width="auto"
          h="auto"
          overflow="hidden"
          p={{ base: "5px", sm: "20px" }}
        >
          <Heading as="h2" size="2xl">
            Submit your feedback...
          </Heading>

          <Text fontSize="6xl">{data.item_name}</Text>

          <Badge variant="outline" colorScheme="yellow" fontSize='lg'>
            {data.category}
          </Badge>
          <form onSubmit={onSubmit}>
            <Box d="flex" mt="10" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < Rating ? "cyan.500" : "cyan.100"}
                    onClick={() => setRating(i + 1)}
                    boxSize="50px"
                    cursor="pointer"
                  />
                ))}
            </Box>

            <Textarea mt="30px" placeholder="Type your comment here..." value={Comment} onChange={(e)=>setComment(e.target.value)}/>
            <Stack direction="row" spacing={4} mt="20px">
              <Button
                loadingText="Submitting"
                type="submit"
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                variant="outline"
              >
                Leave Feedback
              </Button>
            </Stack>
          </form>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default FeedbackPage;
