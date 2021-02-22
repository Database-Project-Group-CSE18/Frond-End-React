
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

  import OrderItem from "./OrderItemTile";

const OrderTile = ({order,cancelOrder,confirmOrder}) => {

    const { colorMode, toggleColorMode } = useColorMode();
// try with normal functions
    const StatusBadge = ({status})=>{
        if(status==='Shipped'){
            return (<Badge colorScheme="green">Shipped</Badge>)
        }
        else if (status==='Preparing'){
            return (<Badge colorScheme="yellow">Preparing</Badge>)
        }
        else if (status==='Cancelled'){
            return (<Badge colorScheme="red">Cancelled</Badge>)
        }
        else if (status==='Delivered'){
            return (<Badge colorScheme="gray.100">Delivered</Badge>)
        }
        else if (status==='Await_cancel'){
            return  (<Badge colorScheme="yellow">Await Cancel</Badge>)
        }
        else{
            return <div></div>
        }
    }  
    
    // calculate the total price of the order
    const totPrice = (list) =>{
        var price = 0
        var list = list.substring(1,list.length-1)
        list = list.split(",")
        for(var i=0; i<list.length;i++){
            price+=parseFloat(list[i])
        }
        return price.toFixed(2)
    }



    const OrderActions = ({status})=>{
        if(status=='Shipped'){
            return (<VStack>
                <Link href={"https://parcelsapp.com/en/tracking/"+order.Track} isExternal><Button colorScheme='teal' size='xs'>Track Order</Button></Link>
                <Button colorScheme='teal' size='xs' onClick={()=>{confirmOrder(order.Order_ID)}}>Confirm Received</Button>
            </VStack>)
        }
        else if (status=='Preparing'){
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
                                    <Button colorScheme="red" onClick={()=>{cancelOrder(order.Order_ID)}}>Cancel Order</Button>
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


    const mapOrderItems = (order)=>{
        var finalList = []
        var itemIDList= order.Item_ID
        itemIDList = itemIDList.substring(1,itemIDList.length-1)
        itemIDList = itemIDList.split(",")

        var nameList = order.Name
        nameList = nameList.substring(1,nameList.length-1)
        nameList = nameList.split(",") 

        var imageList = order.Image
        imageList = imageList.substring(1,imageList.length-1)
        imageList = imageList.split(",")

        for(var i=0;i<nameList.length;i++){
            var a = {
                "ID":itemIDList[i].replace(/\s/g, ''),
                "Name":nameList[i].replace(/\s/g, ''),
                "Image":imageList[i].replace(/\s/g, '')
            }
            finalList.push(a);
        }
        console.log(finalList)
        return finalList;
    }



    var orders = mapOrderItems(order);


    const OrderItemTiles = ({orders}) => {
        return (
            <>
               {    
                    
                   orders.map((ord)=>(
                       <OrderItem key={ord.ID}   Name={ord.Name} > </OrderItem>
                       )
                )}
            </>
        )
    }


    return (
        <Box bg={colorMode === "light" ? "cyan.50" : "cyan.900"}  m='5' color={colorMode === "light" ? "cyan.900" : "cyan.50"}>
            <Grid>
                <GridItem p='2' bg={colorMode === "light" ? "teal.500" : "teal.50"} color={colorMode === "light" ? "teal.50" : "teal.500"} >
                    <SimpleGrid columns={3} textAlign='center'>
                        <Box>
                            <Heading as='h6' size='xs'>Order ID</Heading>
                            <Text>{order.Order_ID}</Text>
                        </Box>
                        <Box>
                            <Heading as='h6' size='xs'>Order Date</Heading>
                            <Text>{order.Ordered_date.substring(0, 10)}</Text>
                        </Box>
                        <Box>
                            <Heading as='h6' size='xs'>Order Amount</Heading>
                            <Text>{totPrice(order.Price)}</Text>
                        </Box>
                    </SimpleGrid>

                </GridItem>
                <GridItem p='2'  color={colorMode === "light" ? "teal.800" : "teal.50"} >

                
                    <Grid templateColumns="repeat(3, 1fr)">
                        <GridItem>
                            <SimpleGrid>

                            <OrderItemTiles  orders={orders} />
                            
                            </SimpleGrid>
                        </GridItem>
                        <GridItem>
                        <Box textAlign='center'>
                           <StatusBadge  status={order.Order_status}/>
                        </Box>
                        </GridItem>
                        <GridItem>
                        <Box textAlign='center'>
                           
                           <OrderActions status={order.Order_status}/> 
                         
                      </Box>
                        </GridItem>
                    </Grid>

                </GridItem>
             

            </Grid>
        </Box>
    )
}

 
export default OrderTile
