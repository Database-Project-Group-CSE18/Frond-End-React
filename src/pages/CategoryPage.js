import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

function CategoryPage() {
  const [categories, setCategories] = useState([
    "All categories",
    "Phones",
    "Smart Watches",
    "Tabs",
    "Headphones",
    "Chargers",
  ]);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeCategoryProducts, setActiveCategoryProducts] = useState([
    {
      item_ID: "233d",
      item_name: "Electric tooth brush",
      category: "electronic",
      price: 200.0,
      orders: 345,
      reviews:100,
      rating:3,
      description:
        "dqdasd a sadasd asdasdafsfrgs gsgsg sd gsgsgsdg sdgsdgsdg sdg",
      status: "Available",
      image:
        "https://b3h2.scene7.com/is/image/BedBathandBeyond/69055867778_imageset?$690$&wid=690&hei=690",
    },
    {
      item_ID: "34cd",
      item_name: "Iphone 8",
      category: "electronic",
      price: 200.0,
      orders: 345,
      reviews:100,
      rating:3,
      description:
        "dqdasd a sadasd asdasdafsfrgs gsgsg sd gsgsgsdg sdgsdgsdg sdg",
      status: "Available",
      image:
        "../images/iphone.jpg",
    },
    {
      item_ID: "34cd",
      item_name: "Iphone 8",
      category: "electronic",
      price: 200.0,
      orders: 345,
      reviews:250,
      rating:4,
      description:
        "dqdasd a sadasd asdasdafsfrgs gsgsg sd gsgsgsdg sdgsdgsdg sdg",
      status: "Out of stock",
      image:
        "https://b3h2.scene7.com/is/image/BedBathandBeyond/69055867778_imageset?$690$&wid=690&hei=690",
    },
    {
      item_ID: "34cd",
      item_name: "Iphone 8",
      category: "electronic",
      price: 200.0,
      orders: 345,
      reviews:150,
      rating:2,
      description:
        "dqdasd a sadasd asdasdafsfrgs gsgsg sd gsgsgsdg sdgsdgsdg sdg",
      status: "Available",
      image:
        "https://b3h2.scene7.com/is/image/BedBathandBeyond/69055867778_imageset?$690$&wid=690&hei=690",
    },
    {
      item_ID: "34cd",
      item_name: "Iphone 8",
      category: "electronic",
      price: 200.0,
      orders: 345,
      reviews:50,
      rating:5,
      description:
        "dqdasd a sadasd asdasdafsfrgs gsgsg sd gsgsgsdg sdgsdgsdg sdg",
      status: "Available",
      image:
        "https://b3h2.scene7.com/is/image/BedBathandBeyond/69055867778_imageset?$690$&wid=690&hei=690",
    },
  ]);

  var searchBarText = `Search in ${activeCategory}`;

  const HandleClick = (category) => {
    setActiveCategory(category);

  };

  return (
    <Box
      pt="150px"
      pl={{ base: "10px", sm: "100px" }}
      pr={{ base: "10px", sm: "100px" }}
    >
      <Center mb='10px'>
        <SearchBar text={searchBarText} />
      </Center>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={0}
        pb='200px'
      >
        <GridItem rowSpan={1} colSpan={1} bg="gray.300" p="10px">
          <Heading as="h3" size="lg" color="gray.600" mb="20px">
            Categories
          </Heading>
          <VStack>
            {Array(categories.length)
              .fill("")
              .map((_, i) =>
                categories[i] === activeCategory ? (
                  <Button
                    w="100%"
                    variant="ghost"
                    colorScheme="gray"
                    isActive
                    onClick={() => HandleClick(categories[i])}
                  >
                    {categories[i]}
                  </Button>
                ) : (
                  <Button
                    w="100%"
                    variant="ghost"
                    colorScheme="gray"
                    onClick={() => HandleClick(categories[i])}
                  >
                    {categories[i]}
                  </Button>
                )
              )}
          </VStack>
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={4}
          borderWidth="1px"
          borderColor="gray.300"
          p="20px"
        >
          <Heading as="h2" size="2xl" color="gray.600" mb="20px">
            {activeCategory}
          </Heading>
          <Grid h="auto" templateColumns="repeat(4, 1fr)" gap={2}>
            {Array(activeCategoryProducts.length)
              .fill("")
              .map((_, i) => (
                <ProductCard
                  title={activeCategoryProducts[i].item_name}
                  imageUrl={activeCategoryProducts[i].image}
                  itemName= {activeCategoryProducts[i].item_name}
                  category= {activeCategoryProducts[i].category}
                  price= {activeCategoryProducts[i].price}
                  orders= {activeCategoryProducts[i].orders}
                  status={activeCategoryProducts[i].status}
                  rating={activeCategoryProducts[i].rating}
                  reviews={activeCategoryProducts[i].reviews}
                  
                />
              ))}
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default CategoryPage;
