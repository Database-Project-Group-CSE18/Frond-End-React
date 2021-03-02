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
    Heading,
    HStack,
    Spacer,
    Image
  } from "@chakra-ui/react";

import { ImUser,ImPhone, ImLocation } from "react-icons/im";


const BankCard = ({bankcard,deleteBankCard}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { colorMode, toggleColorMode } = useColorMode();

    

    // const [data, setData] = useState({
    //     cardNumber:bankcard.card_number,
    //     owner:bankcard.owner,
    //     cvv:bankcard.cvv,
    //     expDate:bankcard.expDate
    // })
    

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
                    
                    <Box
                        color={colorMode === "light" ? "cyan.900" : "cyan.50"}
                        letterSpacing="wide"
                        fontSize="lg"       
                        ml="2"
                    >
                       <Heading size='lg'> x x x x  x x x x {bankcard.card_number.toString().substr(8,13)} </Heading>
                    </Box>
                </Box> 
                <Box d="flex" alignItems="baseline" m='2'>
                
                   
                    <Box
                        color={colorMode === "light" ? "cyan.900" : "cyan.50"}
                        letterSpacing="wide"
                        fontSize="md"       
                        ml="2"
                       
                    >
                        { bankcard.owner }
                    </Box>
                </Box> 
               
               <HStack mb='4'>
                <Box d="flex" alignItems="baseline" m='2'>
                
                    <Box
                        color={colorMode === "light" ? "cyan.900" : "cyan.50"}
                        letterSpacing="wide"
                        fontSize="md"       
                        ml="2"
                    >
                        {bankcard.exp_date}
                    </Box>
                </Box> 
                <Spacer />
                <Box d="flex" alignItems="baseline" m='2'>
                <Image
                    width='70px'
                    src={`../${bankcard.card_type}.png`}
                    />
                </Box> 
                </HStack>

                <Box d="flex" alignItems="baseline" m='2'>

                 
                    {/* Delete Address */}
                
                    <Popover>
                        <PopoverTrigger>
                        <Button colorScheme="red" size="xs"  > Delete</Button> 
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverHeader fontWeight="semibold">Delete Card Details</PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>
                            Are you sure you want to delete card details?
                            </PopoverBody>
                            <PopoverFooter d="flex" justifyContent="flex-end">
                                <ButtonGroup size="sm">
                                    <Button colorScheme="red" onClick={()=>{deleteBankCard(bankcard.card_number)}}>Delete</Button>
                                </ButtonGroup>
                            </PopoverFooter>
                            </PopoverContent>
                            </Popover>                   
                </Box>

        </Box>
        </GridItem>
    )
}

export default BankCard



    