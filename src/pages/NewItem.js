import { AddIcon } from '@chakra-ui/icons';
import { Box, Button,Input, Stack,Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, { Component } from 'react';


class NewItem extends Component {

  state={
      selectedFile: null
  }
    
  fileSelectedHandler =event=>{
      this.setState({
          selectedFile: event.target.files[0]
    })
       // console.log(event.target.files[0]);
  }

  fileUploadHandler=()=>{
      const fd= new FormData();
      fd.append('image',this.state.selectedFile,this.state.selectedFile.name);
      axios.post("gs://front-end-react100.appspot.com",fd)
      .then(res=>{console.log(res)});

  }
    

 render(){
    return(
        <Box
        pt="150px"
        pl={{ base: "10px", sm: "100px" }}
        pr={{ base: "10px", sm: "100px" }}
      >
 <Heading as="h3" size="xl" color="gray.600" mb="10px" bg="gray.300" p="10px">
              List a New Item
            </Heading>
   <Stack spacing={1} >
<>Title :</><Input backgroundColor="blue.50" placeholder="Enter title here" size="md" />

<>Category:</><Input backgroundColor="blue.50" placeholder="Enter Category here" size="md" />

<>Variations:</><Input backgroundColor="blue.50" placeholder="Enter Variations here" size="md" />

<>Discription:</><Input backgroundColor="blue.50" placeholder="Enter Discription here" size="md" />

<>Quantity:</><Input backgroundColor="blue.50" placeholder="Enter Discription here" size="md" />

<>Price:</><Input backgroundColor="blue.50" placeholder="Enter Discription here" size="md" />

<AddIcon>Rahal</AddIcon>
  </Stack>
            

<div >
<>Image:</>
    <input type="file" onChange={this.fileSelectedHandler}/>
    <Button onClick={this.fileUploadHandler}>Upload</Button>
</div>
</Box>
    );    
    }
}
export default NewItem;
