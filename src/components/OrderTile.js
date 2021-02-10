
import {
    Box,
    Grid,
    GridItem,
    useColorMode,
    SimpleGrid,
    Heading,
    Text,
    Image,
    HStack,
    Badge,
    Button,
    VStack,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverFooter,
    ButtonGroup
  } from "@chakra-ui/react";

const OrderTile = ({order,cancelOrder,confirmOrder}) => {

    const { colorMode, toggleColorMode } = useColorMode();
// try with normal functions
    const StatusBadge = ({status})=>{
        if(status==='shipped'){
            return (<Badge colorScheme="green">Shipped</Badge>)
        }
        else if (status==='preparing'){
            return (<Badge colorScheme="yellow">Preparing</Badge>)
        }
        else if (status==='cancelled'){
            return (<Badge colorScheme="red">Cancelled</Badge>)
        }
        else if (status==='received'){
            return (<Badge colorScheme="gray.100">received</Badge>)
        }
        else if (status==='await_cancel'){
            return  (<Badge colorScheme="yellow">Await Cancel</Badge>)
        }
        else{
            return <div></div>
        }
    }    

    const OrderActions = ({status})=>{
        if(status=='shipped'){
            return (<VStack>
                <Link href={"https://parcelsapp.com/en/tracking/"+order.trackingNumber} isExternal><Button colorScheme='teal' size='xs'>Track Order</Button></Link>
                <Button colorScheme='teal' size='xs' onClick={()=>{confirmOrder(order.orderID)}}>Confirm Received</Button>
            </VStack>)
        }
        else if (status=='preparing'){
            return (
            <Box>
                
                <Popover>
                        <PopoverTrigger>
                        <Button colorScheme='teal' size='xs'  >Cancel Order</Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverHeader textAlign='left' fontWeight="semibold">Cancel the order</PopoverHeader>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody textAlign='center'>
                            Are you really want to cancel the order
                            </PopoverBody>
                            <PopoverFooter d="flex" justifyContent="flex-end">
                                <ButtonGroup size="sm">
                                    <Button colorScheme="red" onClick={()=>{cancelOrder(order.orderID)}}>Cancel Order</Button>
                                </ButtonGroup>
                            </PopoverFooter>
                            </PopoverContent>
                            </Popover>                  
                </Box>
            )
        }
        else{
            return <div></div>
        }
    }

    return (
        <Box bg={colorMode === "light" ? "cyan.50" : "cyan.900"}  m='5' color={colorMode === "light" ? "cyan.900" : "cyan.50"}>
            <Grid>
                <GridItem p='2' bg={colorMode === "light" ? "teal.500" : "teal.50"} color={colorMode === "light" ? "teal.50" : "teal.500"} >
                    <SimpleGrid columns={3} textAlign='center'>
                        <Box>
                            <Heading as='h6' size='xs'>Order ID</Heading>
                            <Text>{order.orderID}</Text>
                        </Box>
                        <Box>
                            <Heading as='h6' size='xs'>Order Date</Heading>
                            <Text>{order.orderedDate}</Text>
                        </Box>
                        <Box>
                            <Heading as='h6' size='xs'>Order Amount</Heading>
                            <Text>{order.orderAmount}</Text>
                        </Box>
                    </SimpleGrid>

                </GridItem>
                <GridItem p='2'  color={colorMode === "light" ? "teal.800" : "teal.50"} >

                    <SimpleGrid columns={3} p='2'>
                        <HStack>
                            <Image
                                boxSize="80px"
                                objectFit="cover"
                                src={order.orderItemImage}
                                alt={order.orderItemImage}
                            />
                            <Heading as='h6' size='xs'>{order.orderItemTitle}</Heading>
                        </HStack>
                        <Box textAlign='center'>
                           <StatusBadge  status={order.orderStatus}/>
                        </Box>
                        <Box textAlign='center'>
                            {/* {order.status==='shipped'?(
                       <Box>    {console.log("shipped")}
             <Button colorScheme='teal' size='xs'>Track Order</Button>
                <Button colorScheme='teal' size='xs'>Confirm Received</Button>
                                </Box>
            ):(<Box><Button colorScheme='teal' size='xs'  onClick={()=>{cancelOrder(order.orderID)}}>Cancel Order</Button></Box>)} */}
                             <OrderActions status={order.orderStatus}/> 
                           
                        </Box>
                    </SimpleGrid>

                </GridItem>
             

            </Grid>
        </Box>
    )
}

export default OrderTile
