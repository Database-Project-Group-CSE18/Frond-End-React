import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  Stack,
  VStack,
  Heading,
  Form,
  Select,
  HStack,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  NumberInput,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";

function NewItem() {
  const [value, setValue] = React.useState(0);

  const handleChangeQuantity = (value) => {
    setValue(value);
    setVariantData({ ...variantData, quantity: value });
  };

  const [data, setData] = useState({
    item_name: "",
    catagory: "",
    description: "",
    status: "Available",
    price: 0,
    image: "",
    variants: [],
  });

  const [variantData, setVariantData] = useState({
    variant_name: "",
    price: "",
    color: "",
    size: "",
    specific_detail: "",
    quantity: "",
    image: "",
  });

  const addVariant = () => {
    var newVariantsList = data.variants;
    newVariantsList.push(variantData);

    setData({ ...data, variants: newVariantsList });
  };

  const handleChangeVariant = (event) => {
    var value = event.target.value;
    var name = event.target.name;
    console.log(name, value);
    setVariantData({ ...variantData, [name]: value });
  };

  const handleChange = (event) => {
    var value = event.target.value;
    var name = event.target.name;
    console.log(name, value);

    setData({ ...data, [name]: value });
  };

  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file);
    });

  const onChangevariant = (file) => {
    if (!file) {
      setVariantData({ ...variantData, image: "" });
      return;
    }

    fileToDataUri(file).then((dataUri) => {
      setVariantData({ ...variantData, image: dataUri });
      console.log(dataUri);
    });
  };

  const onChange = (file) => {
    if (!file) {
      setData({ ...data, image: "" });
      return;
    }

    fileToDataUri(file).then((dataUri) => {
      setData({ ...data, image: dataUri });
      console.log(dataUri);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    axios
      .post(`http://localhost:5000/items/newitem`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      pt="150px"
      pl={{ base: "10px", sm: "100px" }}
      pr={{ base: "10px", sm: "100px" }}
    >
      <form>
        <Heading
          as="h3"
          size="xl"
          color="gray.600"
          mb="10px"
          bg="gray.300"
          p="10px"
        >
          List a New Item
        </Heading>
        <Stack spacing={1}>
          <b>
            <>Title :</>
          </b>
          <Input
            name="item_name"
            backgroundColor="yellow.100"
            placeholder="Enter title here"
            size="md"
            onChange={(event) => handleChange(event)}
          />

          <b>
            <>Category:</>
          </b>

          <Select
            name="catagory"
            borderColor="yellow.300"
            placeholder="Select Category"
            w="40%"
            bg="yellow.100"
            onChange={(event) => handleChange(event)}
          >
            <option w="40%" value="Mobile phones">
              Mobile phones
            </option>
            <option w="40%" value="Other Consumer Electronics">
              Computer Accessories
            </option>
            <option w="40%" value="Portable Audio & Headphones">
              Portable Audio & Headphones
            </option>
            <option w="40%" value="Vintage Electronics">
              Vintage Electronics
            </option>
            <option w="40%" value="Vehicle Electronics & GPS">
              Vehicle Electronics & GPS
            </option>
            <option w="40%" value="Radio Communication">
              Radio Communication
            </option>
            <option w="40%" value="Circuit Items">
              Circuit Items{" "}
            </option>
            <option w="40%" value="Surveillance & Smart Home Electronics & GPS">
              Surveillance & Smart Home Electronics & GPS
            </option>
            <option w="40%" value="Multipurpose Batteries & Power">
              Multipurpose Batteries & Power
            </option>
            <option w="40%" value="Cameras & Photos">
              Cameras & Photos
            </option>
            <option w="40%" value="Other Consumer Electronics">
              Other Consumer Electronics
            </option>
          </Select>

          <b>
            <>Main Image:</>
          </b>
          <img width="200" height="200" src={data.image} alt="MainImage" />
          <input
            type="file"
            onChange={(event) => onChange(event.target.files[0] || null)}
          />

          <b>
            <>Variant :</>
          </b>
          <HStack>
            <Box
              bg="yellow.100"
              w="400px"
              borderRadius="2xl"
              borderColor="yellow.300"
              borderWidth="5px"
            >
              <Box w="96%" ml="2%" borderColor="yellow.300" mr="2%">
                <b>
                  <>Variant Name :</>
                </b>
                <Input
                  name="variant_name"
                  backgroundColor="yellow.100"
                  placeholder="Enter Varient Here"
                  placeholderColor="red"
                  size="md"
                  onChange={handleChangeVariant}
                />
              </Box>
              <Box w="96%" ml="2%" borderColor="yellow.300" mr="2%">
                <b>
                  <>Color :</>
                </b>
                <Input
                  name="color"
                  backgroundColor="yellow.100"
                  placeholder="Enter Varient Here"
                  placeholderColor="red"
                  size="md"
                  onChange={handleChangeVariant}
                />
              </Box>
              <Box w="96%" ml="2%" borderColor="yellow.300" mr="2%">
                <b>
                  <>Size:</>
                </b>
                <Input
                  name="size"
                  backgroundColor="yellow.100"
                  placeholder="Enter Varient Here"
                  placeholderColor="red"
                  size="md"
                  onChange={handleChangeVariant}
                />
              </Box>

              <Box w="96%" ml="2%" borderColor="yellow.300" mr="2%">
                <b>
                  <>Specific details:</>
                </b>
                <Textarea
                  name="specific_detail"
                  backgroundColor="yellow.100"
                  placeholder="Enter Varient Here"
                  placeholderColor="red"
                  size="md"
                  onChange={handleChangeVariant}
                />
              </Box>

              <Box ml="2%" mr="2%">
                <b>
                  <>Quantity :</>
                </b>
                <Flex>
                  <NumberInput
                    name="quantity"
                    maxW="100px"
                    mr="2rem"
                    value={value}
                    onChange={handleChangeQuantity}
                    borderColor="yellow.300"
                  >
                    <NumberInputField borderColor="yellow.300" />
                    <NumberInputStepper borderColor="yellow.300">
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Slider
                    flex="1"
                    focusThumbOnChange={false}
                    onChange={handleChangeQuantity}
                    value={value}
                  >
                    <SliderTrack bg="blue.200">
                      <SliderFilledTrack bg="yellow.400" />
                    </SliderTrack>
                    <SliderThumb
                      borderColor="black"
                      fontSize="sm"
                      boxSize="32px"
                      children={value}
                    />
                  </Slider>
                </Flex>
              </Box>
              <img
                width="200"
                height="200"
                src={variantData.image}
                alt="VariantImage"
              />
              <HStack>
                <Box w="50%" ml="2%" mb="2%">
                  <b>
                    <>Image:</>
                  </b>
                  <input
                    name="image"
                    type="file"
                    onChange={(event) =>
                      onChangevariant(event.target.files[0] || null)
                    }
                  />
                </Box>
                <Box w="100%" borderColor="yellow.300" mr="2%" mb="2%">
                  <b>
                    <>Price:(LKR)</>
                  </b>
                  <Input
                    name="price"
                    backgroundColor="yellow.100"
                    placeholder="Enter Price here"
                    size="md"
                    onChange={handleChangeVariant}
                  />
                </Box>
              </HStack>
            </Box>

            {Array(data.variants.length)
              .fill("")
              .map((_, i) => (
                <Box>
                  <Box
                    bg="yellow.100"
                    w="100%"
                    borderRadius="2xl"
                    borderColor="yellow.300"
                    borderWidth="5px"
                  >
                    <Box w="96%" ml="2%" borderColor="yellow.300" mr="2%">
                      <b>
                        <>Variant Name :</>
                      </b>
                      <Text fontSize="3xl">
                        {data.variants[i].variant_name}
                      </Text>
                    </Box>

                    <Box w="96%" ml="2%" borderColor="yellow.300" mr="2%">
                      <b>
                        <>Color :</>
                      </b>
                      <Text fontSize="3xl">{data.variants[i].color}</Text>
                    </Box>

                    <Box w="96%" ml="2%" borderColor="yellow.300" mr="2%">
                      <b>
                        <>Size :</>
                      </b>
                      <Text fontSize="3xl">{data.variants[i].size}</Text>
                    </Box>
                    <Box w="96%" ml="2%" borderColor="yellow.300" mr="2%">
                      <b>
                        <>Specific details :</>
                      </b>
                      <Text fontSize="3xl">
                        {data.variants[i].specific_detail}
                      </Text>
                    </Box>

                    <Box ml="2%" mr="2%">
                      <b>
                        <>Quantity :</>
                      </b>
                      <Text fontSize="3xl">{data.variants[i].quantity}</Text>
                    </Box>
                    <HStack>
                      <Box w="50%" ml="2%" mb="2%">
                        <b>
                          <>Image:</>
                        </b>
                        <img
                          width="200"
                          height="200"
                          src={data.variants[i].image}
                          alt="MainImage"
                        />
                      </Box>
                      <Box w="100%" borderColor="yellow.300" mr="2%" mb="2%">
                        <b>
                          <>Price:(LKR)</>
                        </b>
                        <Text>{data.variants[i].price}</Text>
                      </Box>
                    </HStack>
                  </Box>
                </Box>
              ))}
          </HStack>

          <Button
            w="33%"
            ml="40%"
            horizontalAlign="true"
            textColor="Black"
            bg="yellow.100"
            _hover={{ bg: "yellow.300", transform: "scale(1.01)" }}
            onClick={addVariant}
          >
            <>
              <b>+</b>
            </>
            Add Varient
          </Button>

          <b>
            <>Discription:</>
          </b>
          <Textarea
            name="description"
            height="200px"
            backgroundColor="yellow.100"
            placeholder="Enter Discription here"
            size="md"
            onChange={(event) => handleChange(event)}
          />
        </Stack>

        <br />

        <Button
          Align="middle"
          ml="40%"
          horizontalAlign="true"
          textColor="Black"
          bg="blue.100"
          _hover={{ bg: "blue.300", transform: "scale(1.01)" }}
          onClick={(e)=>handleSubmit(e)}
        >
          Submit & Create Listing
        </Button>
      </form>
    </Box>
  );
}
export default NewItem;
