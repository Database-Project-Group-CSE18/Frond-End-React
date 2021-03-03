import {
    HStack,
    Image,
    Heading,
    Divider,
    Box,
    Link,
    Button,
    Img
}
from "@chakra-ui/react";

import { arrayBufferToBinaryString } from "blob-util";
const OrderItemTile = ({Name,Item_ID,Order_ID, Image}) => {
    console.log(Image)
    return (
        <Box>
        <HStack p='2'>
            <Img
                boxSize="80px"
                objectFit="cover"   
                src='./img/svg-2.svg'/>
            <Heading as='h6' size='xs'>{Name.substring(1,Name.length-1)}</Heading>
            <Link href={`http://localhost:3000/feedbackpage/${Item_ID}/${Order_ID}`} ><Button colorScheme='teal' size='xs'>Leave Feedback</Button></Link>
        </HStack>
        <Divider />
        </Box>
         
    )
}
 // src={(Image!==null)?(Image):("https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80")}

export default OrderItemTile
