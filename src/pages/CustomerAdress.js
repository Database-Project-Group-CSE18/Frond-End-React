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
import CustomerDashSideBar from "../components/CustomerDashSideBar";
import ShipAddressses from "../components/ShipAddressses";
import AddAddress from "../components/AddAddress"
import Axios from "axios";

const CustomerAddress = () => {

    const [address,setAddress] = useState([])

    // {
    //     id:4,
    //     name:'chandima',
    //     tp:'042342492',
    //     street:'1234',
    //     city:'jsdofjsdof',
    //     state:'sdofjdsf',
    //     zip:'12121'    
                  
    // },

    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    useEffect(() => {
        Axios.get("http://localhost:5000/customer/addresses")
        .then((Response)=>{
            // console.log(Response.data.addresses);
            setAddress(Response.data.addresses);
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

    

    //delete an addresss
    const deleteAddress  = (id)=>{
        // console.log(id);
        Axios.delete("http://localhost:5000/customer/addresses",{data:{id:id}})
        .then((Response)=>{
            // console.log(Response);
            setAddress(address.filter(
                (address)=>address.Address_ID!==id
            ))
            toast({
                position: "bottom-right",    
                description: "Shipping address deleted successfully",
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

    //add new address
    const addAddress = (Address)=>{
        console.log(Address);
        Axios.post("http://localhost:5000/customer/addresses",{Address:Address})
        .then((Response)=>{
            var Address_ID = Response.data.insertId;
            // console.log(Response.json());
            var newAddress = {Address_ID,...Address}
            // console.log(newAddress);
            setAddress([...address,newAddress]);
           
            toast({
                position: "bottom-right",    
                description: "New shipping address added successfully",
                status: "success",
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

    //update address
    const updateAddress  = async(data)=>{
        console.log('update address data ----------------')
        console.log(data);
        // setTasks(tasks.map(
        //     (task)=>task.id===id?{...task,reminder:data.reminder}:task
        //   ))
        // await setAddress(address.map(
        //     (address1)=>address1.id==data.id?{...address1,name:data.name}:address1
        // ))
        // // console.log(address[0])
          setAddress(address.map(
            (address1)=>(address1.id==data.id)?{...address1,data}:address1
        ))
          }



    const { colorMode, toggleColorMode } = useColorMode();

    

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

                        <Grid templateColumns="repeat(3, 1fr)" >

                            <GridItem colSpan={3} bg='cyan.900' p='10px'>
                                <Flex> 
                                    <Box  p="3">
                                    <Heading as='h3' size='md' color='white'> My Shipping Address </Heading> 
                                    </Box>
                                    <Spacer />
                                    <Box p="1">
                                        <Button onClick={onOpen} colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} border='2px' borderColor='cyan.50' size="md">
                                            Add Shipping Address
                                        </Button>
                    
                                            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                                            <ModalOverlay />
                                                <ModalContent>
                                                    <ModalHeader>Add New Shipping Address</ModalHeader>
                                                    <ModalCloseButton />
                                                    <ModalBody pb='5'>
                                                    <AddAddress addAddress={addAddress} trigger={onClose}/>
                                                     </ModalBody>
                                                    
                                                </ModalContent>
                                            </Modal>

                                    </Box>
                                 
                                 </Flex>
                            </GridItem>

                       
                                <ShipAddressses addresses={address} deleteAddress={deleteAddress}  updateAddress={updateAddress}  />
  
                        </Grid>
                        

                </GridItem>
            </Grid>


        </Box>
    )
}

export default CustomerAddress
