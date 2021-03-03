import { AddIcon } from '@chakra-ui/icons';
import { Box, Button,Input,Stack, VStack,Heading,Form,
    Select, HStack,NumberInputField ,NumberInputStepper,
    NumberDecrementStepper,NumberIncrementStepper,
    Flex,Slider,SliderTrack,SliderFilledTrack,SliderThumb,NumberInput} from '@chakra-ui/react';
import axios from 'axios';
import React, { Component } from 'react';


function NewItem(){
   const  [value, setValue] = React.useState(0);
   const  handleChange = (value) => setValue(value);
   const state={
      selectedFile: null
  }
    
  const fileSelectedHandler =event=>{
      this.setState({
          selectedFile: event.target.files[0]
    })
       // console.log(event.target.files[0]);
  }

  const fileUploadHandler=()=>{
      const fd= new FormData();
      fd.append('image',this.state.selectedFile,this.state.selectedFile.name);
      axios.post("gs://front-end-react100.appspot.com",fd)
      .then(res=>{console.log(res)});

  }
  const Varientmaker=()=>{


  }
    
  
 
    return(

      
        
<Box
        pt="150px"
        pl={{ base: "10px", sm: "100px" }}
        pr={{ base: "10px", sm: "100px" }}
        
      >
<form>
 <Heading as="h3" size="xl" color="gray.600" mb="10px" bg="gray.300" p="10px">
              List a New Item
</Heading>
   <Stack spacing={1} >
    <b><>Title :</></b><Input name="title"  backgroundColor="yellow.100" placeholder="Enter title here" size="md" />

    <b><>Category:</></b>
            <Select name="category" borderColor="yellow.300" placeholder="Select Category" w="40%" bg="yellow.100">
  <option w="40%"value="Portable Audio & Headphones">Portable Audio & Headphones</option>
  <option w="40%"value="Vintage Electronics">Vintage Electronics</option>
  <option w="40%"value="Vehicle Electronics & GPS">Vehicle Electronics & GPS</option>
  <option w="40%"value="Radio Communication">Radio Communication</option>
  <option w="40%"value="Circuit Items">Circuit Items </option>
  <option w="40%"value="Surveillance & Smart Home Electronics & GPS">Surveillance & Smart Home Electronics & GPS</option>
  <option w="40%"value="Multipurpose Batteries & Power">Multipurpose Batteries & Power</option>
  <option w="40%"value="Cameras & Photos">Cameras & Photos</option>
  <option w="40%"value="Other Consumer Electronics">Other Consumer Electronics</option>
            </Select>
<b><>Variant :</></b>

<Box bg="yellow.100" w="33%" borderRadius="2xl" borderColor="yellow.300" borderWidth="5px">
    <Box w="96%" ml="2%" borderColor="yellow.300" mr="2%"> 
    <b><>Variant Name :</></b>
  <Input name="varientname" backgroundColor="yellow.100" placeholder="Enter Varient Here" placeholderColor="red" size="md" />
           
    </Box>

    <Box ml="2%" mr="2%">
    <b><>Quantity :</></b>
    <Flex>
      <NumberInput name="quantity"  maxW="100px" mr="2rem" value={value} onChange={handleChange} borderColor="yellow.300">
        <NumberInputField  borderColor="yellow.300"/>
        <NumberInputStepper borderColor="yellow.300">
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Slider  flex="1" focusThumbOnChange={false} value={value} onChange={handleChange}>
        <SliderTrack bg="blue.200">
          <SliderFilledTrack bg="yellow.400" />
        </SliderTrack>
        <SliderThumb borderColor="black" fontSize="sm" boxSize="32px" children={value} />
      </Slider>
    </Flex>
      
    </Box>
    <HStack>
    <Box w="50%" ml="2%" mb="2%" >
    <b><>Image:</></b>
    <input name="image" type="file" onChange={fileSelectedHandler}/>

    </Box> 
    <Box w="100%" borderColor="yellow.300" mr="2%" mb="2%">
    <b><>Price:(LKR)</></b><Input name="price" backgroundColor="yellow.100" placeholder="Enter Price here" size="md" />
    </Box>
    </HStack>
</Box>


<Button w="33%" ml="40%" horizontalAlign="true" textColor="Black" bg="yellow.100"  _hover={{ bg: "yellow.300" ,transform: "scale(1.01)" }} onClick={Varientmaker}><><b>+</b></>Add Varient</Button>



    <b><>Discription:</></b><textarea width="100%" height="400px" backgroundColor="yellow.100" placeholder="Enter Discription here" size="md" />

  </Stack>


            
<br/>

    <Button Align="middle" ml="40%" horizontalAlign="true" textColor="Black" bg="blue.100"  _hover={{ bg: "blue.300" ,transform: "scale(1.01)" }} onClick={fileUploadHandler}>Submit & Create Listing</Button>

</form>
</Box>
    );    
    
}
export default NewItem;
