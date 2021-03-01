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

import { ImUser,ImPhone, ImLocation } from "react-icons/im";


const ShipAddress = ({address,deleteAddress,updateAddress}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { colorMode, toggleColorMode } = useColorMode();

    // const [data, setData] = useState({
    //     id: address.Address_ID,
    //     name: address.First_Name + address.Last_Name,
    //     tp: address.tp,
    //     street: address.Street,
    //     city: address.City,
    //     state: address.State,
    //     zip: address.ZIP,
    // })
    
    // const handleSubmit = (e)=>{
    //     e.preventDefault()
    //     // console.log('---------handlesubmit data--------')
    //     // console.log(data)
    //     updateAddress(data)
        
    //     // updateAddress(address.id)
    // }

    // const handleChange =  (event) => {
    //     var value = event.target.value;
    //     var name = event.target.name;

    //     setData({ ...data, [event.target.name]: value })
    //     // console.log(data)
    // };


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
                {/* <Box d="flex" alignItems="baseline" m='2'>
                
                    <ImPhone color='cyan.600'/>
                    <Box
                        color={colorMode === "light" ? "cyan.900" : "cyan.50"}
                        letterSpacing="wide"
                        fontSize="md"       
                        ml="2"
                    >
                        { address.tp }
                    </Box>
                </Box>  */}

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






                    {/* {/* Edit Address 

                     <Button colorScheme="teal" size="xs" mr='2' onClick={onOpen} >
                        Edit
                    </Button> 
                    {/* Edit modal */}
                    // <Modal onClose={onClose} isOpen={isOpen} isCentered>
                    //     <ModalOverlay />
                    //     <ModalContent>
                    //         <ModalHeader>Edit shipping address</ModalHeader>
                    //             <ModalCloseButton />
                           
                        // <form onSubmit={handleSubmit}>
                        //     <ModalBody>
                            
                        //     <FormControl id="name" > */}
                        //         <FormLabel>Name</FormLabel>
                                
                        //         <Input   
                        //         placeholder='Name'       
                        //         value={data.name}
                        //         name='name'
                        //         onChange={(event) => handleChange(event)}
                        //         />
                        //     </FormControl>

                        //     <FormControl id="tp" >
                        //         <FormLabel>Telephone</FormLabel>
                        //         <Input 
                        //         placeholder="Telephone" 
                            //     value={data.tp}
                            //     name='tp'
                            //     onChange={(event) => handleChange(event)}  />
                            // </FormControl>

                            // <FormControl id="street" >
                            //     <FormLabel>Street</FormLabel>
                            //     <Input 
                            //     placeholder="street" 
                            //     value={data.street}
                            //     name='street'
                            //     onChange={(event) => handleChange(event)} />
                            // </FormControl>
                            // <FormControl id="city" >
                            //     <FormLabel>City</FormLabel>
                            //     <Input placeholder="city" 
                            //     value={data.city}
                            //     name='city'
                            //     onChange={(event) => handleChange(event)} />
                            // </FormControl>
                            // <FormControl id="state" >
                            //     <FormLabel>State</FormLabel>
                    //             <Input placeholder="state" 
                    //             value={data.state}
                    //             name='state'
                    //             onChange={(event) => handleChange(event)}
                    //             />
                    //         </FormControl>
                    //         <FormControl id="zip" >
                    //             <FormLabel>Zip</FormLabel>
                    //             <Input placeholder="zip" 
                    //             value={data.zip}
                    //             name='zip'
                    //             onChange={(event) => handleChange(event)}
                    //             />
                    //         </FormControl>
                           
                               
                    //         </ModalBody>
                    //         <ModalFooter>
                    //         <Input mt='2' mb='2'  type="submit" value='Update' className='btn btn-block' bg="teal.400" color='white' onClick={onClose} />
                    //             {/* <Button colorScheme="green"  onClick={trigger} >Update</Button>                               */}
                    //         </ModalFooter>
                    //     </form>
                    //     </ModalContent>
                    // </Modal> */}

    