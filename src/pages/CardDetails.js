import {
    Box,
    Grid,
    GridItem, 
    Heading,  
    Flex,
    Spacer ,
    Button,
    useDisclosure,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    ModalCloseButton,
    ModalHeader,
    useToast,
    useColorMode
  } from "@chakra-ui/react";

import React, { useState } from "react";
import AddBankCard from "../components/AddBankCard";
import BankCards from "../components/BankCards";
import CustomerDashSideBar from "../components/CustomerDashSideBar";

const CardDetails = () => {

    const [bankCards,setBankCards] = useState([
        {
            cardNumber:323446453434,
            owner:'pasan madushan',
            cvv:'123',
            expDate:'10/12',
                  
        },
        {
            cardNumber:634545345,
            owner:'vimukthi madushan',
            cvv:'123',
            expDate:'10/12',
                  
        },
        {
            cardNumber:342443564,
            owner:'chalindu malshika',
            cvv:'123',
            expDate:'10/12',
                  
        },
        {
            cardNumber:67867564,
            owner:'chandima prabath',
            cvv:'123',
            expDate:'10/12',
                  
        },
    ])

    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    //delete a card
    const deleteBankCard  = (cardNumber)=>{
        setBankCards(bankCards.filter(
            (bankCard)=>bankCard.cardNumber!==cardNumber
        ))
        toast({
            position: "bottom-right",    
            description: "Bank Card deleted successfully",
            status: "error",
            duration: 5000,
            isClosable: true,
          })
    }

    //add new card
    const addBankCard = (CardDetails)=>{
        setBankCards([...bankCards,CardDetails]);

    }

   
    const { colorMode, toggleColorMode } = useColorMode();

    

    return (
        <Box   pt="100px">
            
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

                        <Grid templateColumns="repeat(3, 1fr)" >

                            <GridItem colSpan={3} bg='cyan.900' p='10px'>
                                <Flex> 
                                    <Box  p="3">
                                    <Heading as='h3' size='md' color='white'> Card & Bank Details </Heading> 
                                    </Box>
                                    <Spacer />
                                    <Box p="1">
                                        <Button onClick={onOpen} colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} border='2px' borderColor='cyan.50' size="md">
                                            Add New Payment Method
                                        </Button>
                    
                                            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                                            <ModalOverlay />
                                                <ModalContent>
                                                    <ModalHeader>Add New Payment Method</ModalHeader>
                                                    <ModalCloseButton />
                                                    <ModalBody pb='5'>
                                                    <AddBankCard addBankCard={addBankCard} trigger={onClose}/>
                                                     </ModalBody>
                                                    
                                                </ModalContent>
                                            </Modal>

                                    </Box>
                                 
                                 </Flex>
                            </GridItem>

                                <BankCards bankcards={bankCards} deleteBankCard={deleteBankCard} />
                                
                        </Grid>
                        

                </GridItem>
            </Grid>


        </Box>
    )
}

export default CardDetails
