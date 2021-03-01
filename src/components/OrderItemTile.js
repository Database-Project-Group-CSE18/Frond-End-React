import {
    HStack,
    Image,
    Heading,
    Divider,
    Box
}
from "@chakra-ui/react";


const OrderItemTile = ({Name}) => {
    return (
        <Box>
        <HStack p='2'>
            <Image
                boxSize="80px"
                objectFit="cover"   
                src={"https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=959&q=80"}
            />
            <Heading as='h6' size='xs'>{Name.substring(1,Name.length-1)}</Heading>
           
        </HStack>
        <Divider />
        </Box>
         
    )
}
 // src={(Image!==null)?(Image):("https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80")}

export default OrderItemTile
