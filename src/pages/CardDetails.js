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

import React, { useState, useEffect } from "react";
import AddBankCard from "../components/AddBankCard";
import BankCards from "../components/BankCards";
import CustomerDashSideBar from "../components/CustomerDashSideBar";
import Axios from "axios";

const CardDetails = () => {

    const [bankCards,setBankCards] = useState([])

    // {
    //     Card_Number:323446453434,
    //     Owner:'pasan madushan',
    //     cvv:'123',
    //     Exp_Date:'10/12',
              
    // },
    // {
    //     Card_Number:323446453435,
    //     Owner:'vimukthi madushan',
    //     cvv:'123',
    //     Exp_Date:'10/12',
              
    // },

    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    useEffect(() => {
        Axios.get("http://localhost:5000/customer/bankCards")
        .then((Response)=>{
            // console.log(Response.data.addresses);
            setBankCards(Response.data.bankCards);
        })
        .catch((err) => {
            toast({
                position: "bottom-right",    
                description: "Error loading data",
                status: "error",
                duration: 5000,
                isClosable: true,
              })
          }); 
    }, [])


    //delete a card
    const deleteBankCard  = (card_id)=>{

        Axios.delete("http://localhost:5000/customer/bankCards",{data:{card_id:card_id}})
        .then((Response)=>{
            // console.log(Response);
            setBankCards(bankCards.filter(
                (bankCard)=>bankCard.card_id!==card_id
            ))
            toast({
                position: "bottom-right",    
                description: "Bank Card deleted successfully",
                status: "error",
                duration: 5000,
                isClosable: true,
              })
        })
        .catch((err) => {
            toast({
                position: "bottom-right",    
                description: "Internal Server Error. Try again later",
                status: "error",
                duration: 5000,
                isClosable: true,
              })
          }); 
    }

    //add new card
    const addBankCard = (CardDetails)=>{

        Axios.post("http://localhost:5000/customer/bankCards",{CardDetails:CardDetails})
        .then((Response)=>{
            console.log("response",Response);
            // console.log(newAddress);
            if (Response.data.success===true){
                setBankCards([...bankCards,CardDetails]);
           
                toast({
                    position: "bottom-right",    
                    description: "New payment method added successfully",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                })
            }
            else{

                toast({
                    position: "bottom-right",    
                    description: "Card Number Already Exists",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                })

            }
            
        })
        .catch((err) => {
            toast({
                position: "bottom-right",    
                description: "Internal Server Error. Try again later",
                status: "error",
                duration: 5000,
                isClosable: true,
              })
          });       

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
