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
import React, { useEffect, useState } from "react";import { useParams } from "react-router-dom";
import axios from "axios";
import { arrayBufferToBinaryString } from "blob-util";


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
  let { item_id } = useParams();
  let { order_id } = useParams();

  const toast = useToast()

  // var Order_ID = 1;
  // var Item_ID = 1;

  const [data, setData] = useState({
    item_ID: "",
    item_name: "",
    category_name: "",
    price: 0,
    num_of_orders: 0,
    description: "",
    status: "",
    image: "",
    feedbacks: [
      {
        feedback_ID: "",
        user_ID: "",
      },
    ],
    variants: [
      {
        variant_ID: "",
        variant_name: "",
        image: "",
        color: "",
        size: "",
        specificDetail: "",
        quantity: "",
      },
    ],
  });

  //get item details from DB
  useEffect(() => {
    axios.get(`http://localhost:5000/items/specificitem/${item_id}`)
      .then((response) => {
        let data = response.data.items;
        console.log(data);
        setData(data);
      });
  }, []);

  const [Rating, setRating] = useState('')
  const [Comment, setComment] = useState('')

  //add feedback
  const addFeedback = (Order_ID, Item_ID, Rating, Comment) => {
    console.log(Item_ID, Order_ID);
    axios.post("http://localhost:5000/orders/feedback", {Order_ID: Order_ID, Item_ID: Item_ID, Rating: Rating, Comment: Comment })
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
    
    addFeedback(order_id, item_id, Rating, Comment)

    
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
            src={`data:image/png;base64,${arrayBufferToBinaryString(
              data.image ? data.image.data : null
            )}`}
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
