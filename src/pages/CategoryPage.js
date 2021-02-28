import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import axios from "axios";

function CategoryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/items/categories").then((response) => {
      let data = response.data.items;
      data.push("All Categories");
      setCategories(data);
    });

    axios
    .get(`http://localhost:5000/items`)
    .then((response) => {
      let data = response.data.items;
      setActiveCategoryProducts(data);

    });
  }, []);

  const { colorMode, toggleColorMode } = useColorMode();
  const [activeCategory, setActiveCategory] = useState();
  const [activeCategoryProducts, setActiveCategoryProducts] = useState([]);


  var searchBarText = `Search in ${activeCategory}`;

  const HandleClick = (category) => {
    setActiveCategory(category);
    if(category!=="All Categories"){
      var url = `http://localhost:5000/items/search/${category}`;
    }else{
      var url = `http://localhost:5000/items`;
    }

    axios
    .get(url)
    .then((response) => {
      let data = response.data.items;
      setActiveCategoryProducts(data);

    });
  
  };
  const HandleChange = (event) => {
    var value = event.target.value;
    axios
    .post("http://localhost:5000/items",{
      "category":`${activeCategory}`,
      "item_name":`${value}`
    })
    .then((response) => {
      let data = response.data.items;
      setActiveCategoryProducts(data);
    });
  
  };



  return (
    <Box
      pt="150px"
      pl={{ base: "10px", md: "100px" }}
      pr={{ base: "10px", md: "100px" }}
    >
      <Center mb="10px">
        <SearchBar text={searchBarText} onChange={HandleChange}/>
      </Center>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={0}
        pb="200px"
      >
        <GridItem
          rowSpan={1}
          colSpan={1}
          bg={colorMode === "light" ? "gray.200" : "gray.600"}
          p="10px"
        >
          <Heading as="h3" size="lg" mb="20px">
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
                    colorScheme="cyan"
                    isActive
                    onClick={() => HandleClick(categories[i])}
                  >
                    {categories[i]}
                  </Button>
                ) : (
                  <Button
                    w="100%"
                    variant="ghost"
                    colorScheme="cyan"
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
          <Heading as="h2" size="2xl" mb="20px">
            {activeCategory}
          </Heading>
          <Grid
            h="auto"
            templateColumns={{
              md: "repeat(1, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={2}
          >
            {Array(activeCategoryProducts.length)
              .fill("")
              .map((_, i) => (
                <ProductCard
                  item_id = {activeCategoryProducts[i].item_id} 
                  title={activeCategoryProducts[i].item_name}
                  imageUrl={activeCategoryProducts[i].image}
                  itemName={activeCategoryProducts[i].item_name}
                  category={activeCategoryProducts[i].category_name}
                  price={activeCategoryProducts[i].price}
                  orders={activeCategoryProducts[i].num_of_orders}
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
