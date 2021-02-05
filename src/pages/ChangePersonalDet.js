import {
    Box,
    Grid,
    GridItem,
    useColorMode,
    Flex,
    Heading,
    Spacer,
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    ModalCloseButton,
    ModalHeader,
    useDisclosure,
    Center,
    Square
  } from "@chakra-ui/react";

import React, { useState } from "react";
import CustomerDashSideBar from "../components/CustomerDashSideBar";
import ChangePasswordForm from "../components/ChangePasswordForm";
import ChangePersonalDetails from "../components/ChangePersonalDetForm";
import { ImUpload2 } from "react-icons/im";


const ChangePersonalDet = () => { 

    const { colorMode, toggleColorMode } = useColorMode();

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [personaldet,setPersonaldet] = useState(
        {
            id:1,
            firstName:'pasan',
            lastName:'madushan',
            tp:'07704543436',                               
        },)



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
                                <Spacer />
                                <Box p="1">
                                    <Button onClick={onOpen} colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} border='2px' borderColor='cyan.50' size="md">
                                        Change Password
                                    </Button>
                
                                        <Modal onClose={onClose} isOpen={isOpen} isCentered>
                                        <ModalOverlay />
                                            <ModalContent>
                                                <ModalHeader>Change Password</ModalHeader>
                                                <ModalCloseButton />
                                                <ModalBody pb='5'>
                                                    <ChangePasswordForm trigger={onClose} />
                                                 </ModalBody>
                                                
                                            </ModalContent>
                                        </Modal>
                                </Box>                
                             </Flex>
                        </GridItem>

                        <GridItem colSpan={2}>
                              <Box bg={colorMode === "light" ? "cyan.50" : "cyan.900"}  p='10' m='5' border='2px' borderColor='teal.600' borderRadius='15px'>         
                            <ChangePersonalDetails data={personaldet}/>   
                            </Box>
                       </GridItem>

                       <GridItem >
                           
                       <Square bg={colorMode === "light" ? "cyan.50" : "cyan.900"}  p='10' m='5' border='2px dotted' height='50%' borderColor='teal.600' borderRadius='15px'>                              
                        <ImUpload2 /> 
                               <Center>  Upload new profile image</Center>
                        </Square>
                       </GridItem>

                    </Grid>
            </GridItem>

         
        </Grid>

    
            </Box>
        )


}

export default ChangePersonalDet