import React from 'react'
import { 
    Box,
    Grid,
    GridItem,
    Heading,
    Center,
    useColorMode,
    Badge,
    Text
        } from "@chakra-ui/react";

const TrackOrder = () => {

    const { colorMode, toggleColorMode } = useColorMode();


    return (
        <Box 
            pt="110px"
            pl={{ base: "10px", sm: "100px" }}
            pr={{ base: "10px", sm: "100px" }}
        >
            <Box mt='20px' mb='20px' p='3' bg={colorMode === "light" ? "cyan.900" : "cyan.50"}>
                <Center><Heading textColor={colorMode === "light" ? "cyan.50" : "cyan.900"} as='h3' size='md'>Track Your Order</Heading></Center>        
            </Box>
            <Grid
                h="600px"
                templateRows="repeat(3, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={4}
            >
                <GridItem colSpan={2}  bg={colorMode === "light" ? "cyan.50" : "cyan.900"} >

                <Box p='5'>
                    <Badge mr='3' variant="outline" fontSize='md' colorScheme="teal">
                    Estimated Delivery 
                    </Badge>
                   dsdsd
     
                </Box>

                </GridItem>

                <GridItem bg={colorMode === "light" ? "cyan.50" : "cyan.900"} >

                    <Box p='8'>
                        xdsd
                    </Box>

                </GridItem>
                <GridItem  rowSpan={2} colSpan={2} bg={colorMode === "light" ? "cyan.50" : "cyan.900"} />
                <GridItem  bg={colorMode === "light" ? "cyan.50" : "cyan.900"}/>
            </Grid>

        </Box>
    )
}

export default TrackOrder
