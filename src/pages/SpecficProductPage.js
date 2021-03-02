import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  IconButton,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorMode,
  useDisclosure,
  Modal,
  useToast,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";

import {
  AddIcon,
  ChevronDownIcon,
  Icon,
  MinusIcon,
  StarIcon,
} from "@chakra-ui/icons";
import CategorizedReviewPreview from "../components/CategorizedReviewPreview";
import ReviewCountPreview from "../components/ReviewCountPreview";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { arrayBufferToBinaryString } from "blob-util";

function SpecificProductPage() {
  let { id } = useParams();
  let history = useHistory();
  const { colorMode, toggleColorMode } = useColorMode();

  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentUser, setCurrentUser] = useState({
    isLoggedIn: false,
    user: 0,
  });

  const [serverResponse, setServerResponse] = useState({
    success: false,
    message: "",
  });

  const [currentOrder, setCurrentOrder] = useState({ varient: 0, quantity: 0});

  const [isMainCity, setIsMainCity] = useState(0);

  const quantity_inc = () => {
    setCurrentOrder({ ...currentOrder, quantity: currentOrder.quantity + 1 });
  };
  const quantity_dec = () => {
    if (currentOrder.quantity > 0)
      setCurrentOrder({ ...currentOrder, quantity: currentOrder.quantity - 1 });
  };

  const calculateDeliveryTime = () =>{
    let time = 0
    if(data.variants[currentOrder.varient].quantity === 0){time = time + 3}
    if(isMainCity === 1){
      time = time + 5
    }else if (isMainCity === 2){
      time = time + 7
    }
    return time
  }

  var toast_type1 = (success, message) =>
    toast({
      position: "bottom-right",
      title: success ? "Success" : "Failed",
      description: message,
      status: success ? "success" : "error",
      duration: 5000,
      isClosable: true,
    });

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

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get(`http://localhost:5000/customer/login`).then((response) => {
      console.log(response);
      if (response.data.LoggedIn)
        setCurrentUser({ isLoggedIn: true, user: response.data.user.user_id });
    });
    axios
      .get(`http://localhost:5000/items/specificitem/${id}`)
      .then((response) => {
        let data = response.data.items;
        console.log(data);
        setData(data);
        setCurrentOrder({
          ...currentOrder,
          varient_id: data.variants[0].variant_id,
        });
      });
  }, []);

  const validateData = () => {
    if (currentOrder.quantity <= 0) {
      toast_type1(false, "Please Select the Quantity")
      return false;
    } else if (isMainCity === 0) {
      toast_type1(false, "Please select the city");
      return false;
    }else if (!currentUser.isLoggedIn) {
      toast_type1(false, "Please Log in to your account");
      return false;
    }  
    else {
      return true;
    }
  }

  const HandleClickAddtoCart = () => {
    if(validateData()){
      axios
        .post(`http://localhost:5000/items/specificitem/addtocart`, {
          cart_id: currentUser.user,
          varient_id: currentOrder.varient_id,
          quantity: currentOrder.quantity,
          delivery_time:calculateDeliveryTime()
        })
        .then((response) => {
          console.log(response);
          toast_type1(true, "Item Added to the cart successfully");
        })
        .catch((error) => {
          console.log(
            "Add to cart server error : " + error.response.data.message
          );
          setServerResponse({ success: false, message: "Server error" });
          toast_type1(false, "Server error");
        });
    }
  };

  const HandleClickBuyNow = () => {
    if(validateData()){
      axios
        .post(`http://localhost:5000/items/specificitem/addtocart`, {
          cart_id: currentUser.user,
          varient_id: currentOrder.varient_id,
          quantity: currentOrder.quantity,
          delivery_time:calculateDeliveryTime()
        })
        .then((response) => {
          console.log(response);
          history.push("/cart");
        })
        .catch((error) => {
          console.log(
            "Add to cart server error : " + JSON.stringify(error.response.data.message)
          );
          setServerResponse({ success: false, message: "Server error" });
          toast_type1(false, "Server error");
        });
    }
  };

  var imageStack = new Array(data.variants.length)
    .fill(0)
    .map((zero, index) => (
      <Box
        cursor="pointer"
        borderWidth={currentOrder.varient === index ? "3px" : "1px"}
        borderColor="gray.500"
        onClick={() =>
          setCurrentOrder({
            ...currentOrder,
            varient: index,
            varient_id: data.variants[index].variant_id,
          })
        }
      >
        <Image
          src={`data:image/png;base64,${arrayBufferToBinaryString(
            data.variants[index].image ? data.variants[index].image.data : null
          )}`}
          w="100px"
          h="100px"
          alt="image"
        />
      </Box>
    ));

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
            w="400px"
            h="400px"
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
                  color={i < data.rating ? "cyan.500" : "cyan.300"}
                />
              ))}
            <Box as="span" ml="2" fontSize="sm">
              {data.feedbacks.length} reviews &bull; {data.num_of_orders} orders
            </Box>
          </Box>
          <Heading as="h4" size="md" mt="20px">
            Varient
          </Heading>
          <Text mt="10px" color="green.500">
            {data.variants[currentOrder.varient].variant_name}
          </Text>
          <HStack>{imageStack}</HStack>
          <HStack spacing="40px">
            <Box>
              <Heading as="h4" size="md" mt="20px">
                Color
              </Heading>
              <Text mt="5px">{data.variants[currentOrder.varient].color}</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md" mt="20px">
                Size
              </Heading>
              <Text mt="5px">{data.variants[currentOrder.varient].size}</Text>
            </Box>
          </HStack>

          <Heading as="h4" size="md" mt="20px">
            Specific details of the variant
          </Heading>
          <Text mt="5px">
            {data.variants[currentOrder.varient].specific_detail}
          </Text>
          <Heading as="h4" size="md" mt="20px">
            Quantity
          </Heading>
          <HStack mt="10px">
            <IconButton
              size="xs"
              aria-label="Search database"
              icon={<AddIcon />}
              onClick={quantity_inc}
            />
            <Text>{currentOrder.quantity}</Text>
            <IconButton
              size="xs"
              aria-label="Search database"
              icon={<MinusIcon />}
              onClick={quantity_dec}
            />
            <Text pl="20px" color="red.500">
              {data.variants.length === 0
                ? null
                : data.variants[currentOrder.varient].quantity}{" "}
              items are available
            </Text>
          </HStack>
          <Heading as="h4" size="md" mt="20px">
            Delivery to
          </Heading>
          <Menu>
            <MenuButton mt='10px' mb="10px" as={Button} rightIcon={<ChevronDownIcon />}>
              {isMainCity === 0 ? <Text>Select option</Text> : null}
              {isMainCity === 1 ? <Text>Main city</Text> : null}
              {isMainCity === 2 ? <Text>Not a main city</Text> : null}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setIsMainCity(1)}>Main City</MenuItem>
              <MenuItem onClick={() => setIsMainCity(2)}>
                Not a main city
              </MenuItem>
            </MenuList>
          </Menu>
          {isMainCity === 1 ?
          <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.800'} p = '10px'> 
          <Text fontSize="sm">Main cities are : </Text> 
          <Text fontSize='xs'>Colombo, Gampaha, Moratuwa, Kelaniya</Text>
          <Text fontSize='xl'>Estimated delivery time : {data.variants[currentOrder.varient].quantity === 0 ? 8 : 5} days</Text> 
          </Box>
          : null}

          {isMainCity === 2 ?
          <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.800'} p = '10px'> 
          <Text fontSize="sm">Cities excluding : </Text> 
          <Text fontSize='xs'>Colombo, Gampaha, Moratuwa, Kelaniya</Text>
          <Text fontSize='xl'>Estimated delivery time : {data.variants[currentOrder.varient].quantity === 0 ? 10 : 7} days</Text> 
          </Box>
          : null}
          <Heading as="h4" size="xl" mt="20px">
            Price
          </Heading>
          <Text fontSize="4xl">
            Rs. {data.variants[currentOrder.varient].price}
          </Text>
          <HStack mt="20px">
            <Button
              onClick={HandleClickBuyNow}
              colorScheme="cyan"
              color="white"
              size="lg"
            >
              Buy now
            </Button>
            <Button
              onClick={HandleClickAddtoCart}
              colorScheme="orange"
              size="lg"
              variant="outline"
            >
              Add to cart
            </Button>
          </HStack>
        </Box>
      </SimpleGrid>
      <Box
        width="auto"
        h="auto"
        borderWidth="2px"
        borderRadius="lg"
        borderColor="gray.300"
        overflow="hidden"
        p={{ base: "5px", sm: "20px" }}
        mt="20px"
        mb="10px"
      >
        <Heading as="h2" size="2xl" mb="20px">
          Description
        </Heading>
        <Text fontSize="md" ml="3px" mt="5px">
          {data.description}
        </Text>
      </Box>
      <Box
        width="auto"
        h="auto"
        borderWidth="2px"
        borderRadius="lg"
        borderColor="gray.300"
        overflow="hidden"
        p={{ base: "5px", sm: "20px" }}
        mt="20px"
        mb="100px"
      >
        <Heading as="h2" size="2xl" mb="20px">
          Reviews
        </Heading>

        <ReviewCountPreview feedbacks={data.feedbacks} />
        <Tabs>
          <TabList>
            <Tab>
              <StarIcon color="cyan.500" /> All
            </Tab>
            <Tab>
              <StarIcon color="cyan.500" /> 5
            </Tab>
            <Tab>
              <StarIcon color="cyan.500" /> 4
            </Tab>
            <Tab>
              <StarIcon color="cyan.500" /> 3
            </Tab>
            <Tab>
              <StarIcon color="cyan.500" /> 2
            </Tab>
            <Tab>
              <StarIcon color="cyan.500" /> 1
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <CategorizedReviewPreview
                feedbacks={data.feedbacks}
                rating="all"
              />
            </TabPanel>
            <TabPanel>
              <CategorizedReviewPreview feedbacks={data.feedbacks} rating={5} />
            </TabPanel>
            <TabPanel>
              <CategorizedReviewPreview feedbacks={data.feedbacks} rating={4} />
            </TabPanel>
            <TabPanel>
              <CategorizedReviewPreview feedbacks={data.feedbacks} rating={3} />
            </TabPanel>
            <TabPanel>
              <CategorizedReviewPreview feedbacks={data.feedbacks} rating={2} />
            </TabPanel>
            <TabPanel>
              <CategorizedReviewPreview feedbacks={data.feedbacks} rating={1} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent bg={serverResponse.success ? "green.300" : "red.300"}>
          <ModalHeader>
            {serverResponse.success ? (
              <Text color="white">Success</Text>
            ) : (
              <Text color="white">Failed</Text>
            )}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color="white">{serverResponse.message}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default SpecificProductPage;
