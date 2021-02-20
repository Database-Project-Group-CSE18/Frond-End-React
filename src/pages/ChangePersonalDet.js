import {
    Box,
    Grid,
    GridItem,
    useColorMode,
    Flex,
    Heading,
    useDisclosure,
    useToast,
  } from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import CustomerDashSideBar from "../components/CustomerDashSideBar";
import ChangePasswordForm from "../components/ChangePasswordForm";
import ChangePersonalDetails from "../components/ChangePersonalDetForm";

const ChangePersonalDet = () => { 

    const { colorMode, toggleColorMode } = useColorMode();

    const toast = useToast();

        return (
            <Box
            
            pt="100px"
            // pl={{ base: "10px", sm: "100px" }}
            // pr={{ base: "10px", sm: "100px" }} 
            >
                
                <Grid
            
            templateColumns="repeat(5, 1fr)"
            templateRows="repeat(1, 1fr)"
            
        >        
            <GridItem  colSpan={1} rowSpan={2} >
                <CustomerDashSideBar page="customeraddress" />
            </GridItem>
        
            <GridItem colSpan={4} >
                <Box 
                    width="auto"
                    h="auto"                   
                    overflow="hidden"                    
                    pb="5px"                      
                    >
                    
                  </Box>

                    <Grid templateColumns="repeat(3)">

                        <GridItem bg='cyan.900' p='10px' colSpan={3}>
                            <Flex> 
                                <Box  p="3">
                                <Heading as='h3' size='md' color='white'> Change Account Details </Heading> 
                                </Box>
                                                   
                             </Flex>
                        </GridItem>

                        <GridItem colSpan={2}>
                              <Box bg={colorMode === "light" ? "cyan.50" : "cyan.900"}  p='10' m='5' border='2px' borderColor='teal.600' borderRadius='15px'>         
                            <ChangePersonalDetails />  
                            {/* data={ personaldet } updateDetails={updateDetails}  */}
                            </Box>
                       </GridItem>

                       <GridItem >
                       <Box bg={colorMode === "light" ? "cyan.50" : "cyan.900"}  p='10' m='5' border='2px' borderColor='teal.600' borderRadius='15px'> 
                       <ChangePasswordForm />
                       
                       </Box>
                       </GridItem>

                    </Grid>
            </GridItem>

         
        </Grid>

    
            </Box>
        )


}

export default ChangePersonalDet