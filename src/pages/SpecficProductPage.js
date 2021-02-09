import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { AddIcon, MinusIcon, StarIcon } from "@chakra-ui/icons";
import CategorizedReviewPreview from "../components/CategorizedReviewPreview";
import ReviewCountPreview from "../components/ReviewCountPreview";
import SearchBar from "../components/SearchBar";

function SpecificProductPage() {
  let { id } = useParams();
  const { colorMode, toggleColorMode } = useColorMode();

  const [currentOrder, setCurrentOrder] = useState({ varient: 0, quantity: 0 });

  const quantity_inc = () => {
    setCurrentOrder({ ...currentOrder, quantity: currentOrder.quantity + 1 });
  };
  const quantity_dec = () => {
    if (currentOrder.quantity > 0)
      setCurrentOrder({ ...currentOrder, quantity: currentOrder.quantity - 1 });
  };

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
          "https://b3h2.scene7.com/is/image/BedBathandBeyond/69055867778_imageset?$690$&wid=690&hei=690",
        color: "green",
        details: "",
        Quantity: 450,
      },
      {
        varient_name: "pink 2 brushes with bateries",
        image:
          "https://www.powerplanetonline.com/cdnassets/xiaomi_soocas_x3u_sonic_electric_toothbrush_01_rosa_l.jpg",
        color: "pink",
        details: "",
        Quantity: 230,
      },
      {
        varient_name: "two heads only",
        image:
          "https://dam.which.co.uk/3b117c36-ca30-49bb-853c-9d31b220a90d.jpg",
        color: "blue",
        details: "",
        Quantity: 500,
      },
    ],
  });

  var imageStack = new Array(data.variants.length)
    .fill(0)
    .map((zero, index) => (
      <Box
        cursor="pointer"
        borderWidth={currentOrder.varient === index ? "3px" : "1px"}
        borderColor="gray.500"
        onClick={() => setCurrentOrder({ ...currentOrder, varient: index })}
      >
        <Image
          src={data.variants[index].image}
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
            src={data.variants[currentOrder.varient].image}
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
            <Box as="span" ml="2" fontSize="sm">
              {data.feedbacks.length} reviews &bull; {data.orders} orders
            </Box>
          </Box>
          <Heading as="h4" size="md" mt="20px">
            Varient
          </Heading>
          <HStack mt="20px">{imageStack}</HStack>
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
          </HStack>

          <HStack mt="20px">
            <Button colorScheme="cyan" color="white" size="lg">
              Buy now
            </Button>
            <Button colorScheme="orange" size="lg" variant="outline">
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
    </Box>
  );
}

export default SpecificProductPage;
