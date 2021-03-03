import {React, useState} from 'react'
import {
    Box,
    Button,
    GridItem,
    useColorMode,
    useDisclosure,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    ButtonGroup,
  } from "@chakra-ui/react";

import { ImUser, ImLocation } from "react-icons/im";


const ShipAddress = ({address,deleteAddress,updateAddress}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { colorMode, toggleColorMode } = useColorMode();

    return(
        <GridItem>
        <Box  
            bg={colorMode === "light" ? "cyan.50" : "cyan.900"}
            borderRadius='md'
            border='1px'
            borderColor='cyan.600'
            p='6'
            m='4'
            pb='3'
           
            >

                <Box d="flex" alignItems="baseline" m='2'>
                    <ImUser />
                    <Box
                        color={colorMode === "light" ? "cyan.900" : "cyan.50"}
                        letterSpacing="wide"
                        fontSize="lg"       
                        ml="2"
                    >
                        { address.first_Name +" " +  address.last_Name }
                    </Box>
                </Box> 
                
                <Box d="flex" alignItems="baseline" mt='2' mb='5'>
                
                    <ImLocation m='3'/>
                    <Box
                        color={colorMode === "light" ? "cyan.900" : "cyan.50"}
                        letterSpacing="wide"
                        fontSize="md"       
                        ml="2"
                    >
                        <Box>{ address.street }</Box>
                        <Box>{ address.city }</Box>
                        <Box>{ address.state }</Box>
                        <Box>{ address.zip }</Box>
                    </Box>
                </Box> 
               
                <Box d="flex" alignItems="baseline" m='2'>

                    {/* Delete Address */}
                
                    <Popover>
                        <PopoverTrigger>
                        <Button colorScheme="red" size="xs"  > Delete</Button> 
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverHeader fontWeight="semibold">Delete Shipping Address</PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                            Are you sure you want to delete the shipping address?
                            </PopoverBody>
                            <PopoverFooter d="flex" justifyContent="flex-end">
                                <ButtonGroup size="sm">
                                    <Button colorScheme="red" onClick={()=>{deleteAddress(address.address_id)}}>Delete</Button>
                                </ButtonGroup>
                            </PopoverFooter>
                            </PopoverContent>
                            </Popover>                   
                </Box>

        </Box>
        </GridItem>
    )
}

export default ShipAddress

