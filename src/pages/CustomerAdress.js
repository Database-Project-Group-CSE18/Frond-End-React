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
    useToast
  } from "@chakra-ui/react";

import React, { useState } from "react";
import CustomerDashSideBar from "../components/CustomerDashSideBar";
import ShipAddressses from "../components/ShipAddressses";
import AddAddress from "../components/AddAddress"

const CustomerAddress = () => {

    const [address,setAddress] = useState([
        {
            id:1,
            name:'pasan madushan',
            tp:'07704543436',
            street:'1234',
            city:'abc',
            state:'def',
            zip:'12121'   
                       
        },
        {
            id:2,
            name:'vimukthi madushan',
            tp:'077238404543436',
            street:'sdfsdf',
            city:'sdflndsfldsnfk',
            state:'slfnsdflnsdf',
            zip:'1203948234121'      
                   
        },
        {
            id:3,
            name:'chalindu malshika',
            tp:'077043543436',
            street:'0324284',
            city:'rathnapura',
            state:'hdlfdfs',
            zip:'139202121'     
            
             
        },
        {
            id:4,
            name:'chandima',
            tp:'042342492',
            street:'1234',
            city:'jsdofjsdof',
            state:'sdofjdsf',
            zip:'12121'    
                      
        },
    ])

    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    //delete an addresss
    const deleteAddress  = (id)=>{
        setAddress(address.filter(
            (address)=>address.id!==id
        ))
        toast({
            position: "bottom-right",    
            description: "Shipping address deleted successfully",
            status: "error",
            duration: 5000,
            isClosable: true,
          })
    }

    //add new address
    const addAddress = (Address)=>{
        const id = Math.floor(Math.random()*100)+1
        const newAddress = {id,...Address}
        setAddress([...address,newAddress]);

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
    

    return (
        <Box
        
        pt="200px"
        pl={{ base: "10px", sm: "100px" }}
        pr={{ base: "10px", sm: "100px" }} >
            
            <Grid
            
                templateColumns="repeat(5, 1fr)"
                templateRows="repeat(1, 1fr)"
                gap={4}
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

                        <Grid templateColumns="repeat(3, 1fr)" gap={4}>

                            <GridItem colSpan={3} bg='gray.600' p='10px'>
                                <Flex> 
                                    <Box p="2" >
                                    <Heading as='h4' size='lg' color='gray.100'> My Shipping Address </Heading> 
                                        </Box>
                                    <Spacer />
                                    <Box p="2">
                                        <Button onClick={onOpen} colorScheme="teal" size="md">
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
