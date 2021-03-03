
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
        if(status==='shipped'){
            return (<Badge colorScheme="green">Shipped</Badge>)
        }
        else if (status==='paid'){
            return (<Badge colorScheme="yellow">Paid</Badge>)
        }
        else if (status==='cancelled'){
            return (<Badge colorScheme="red">Cancelled</Badge>)
        }
        else if (status==='delivered'){
            return (<Badge colorScheme="green">Delivered</Badge>)
        }
        else{
            return <div></div>
        }
    }  
    
    // calculate the total price of the order
    const totPrice = (list) =>{
        console.log("Price",list)
        var price = 0
        var list = list.substring(1,list.length-1)
        list = list.split(",")
        for(var i=0; i<list.length;i++){
            price+=parseFloat(list[i])
        }
        return price.toFixed(2)
    }



    const OrderActions = ({status})=>{
        if(status=='shipped'){
            return (<VStack>
                <Link href={"https://parcelsapp.com/en/tracking/"+order.Track} isExternal><Button colorScheme='teal' size='xs'>Track Order</Button></Link>
                <Button colorScheme='teal' size='xs' onClick={()=>{confirmOrder(order.order_id)}}>Confirm Received</Button>
                
            </VStack>)
        }
        else if (status=='paid'){
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
                                    <Button colorScheme="red" onClick={()=>{cancelOrder(order.order_id)}}>Cancel Order</Button>
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
        // console.log("order",order)
        var itemIDList= order.Item_ID
        // console.log("item ids",itemIDList)
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
                "ID":i,
                "Item_ID":itemIDList[i].replace(/\s/g, ''),    // to get the item id for feedbacks
                "Name":nameList[i].replace(/\s/g, ''),
                "Image":imageList[i].replace(/\s/g, '')
            }
            finalList.push(a);
        }
        // console.log("final",finalList)
        return finalList;
    }



    var orders = mapOrderItems(order);


    const OrderItemTiles = ({orders}) => {
        return (
            <>
               {    
                    
                   orders.map((ord)=>(
                       <OrderItem key={ord.ID} Item_ID={ord.Item_ID}  Name={ord.Name} Image={ord.Image} Order_ID={order.order_id}> </OrderItem>
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
                            <Text>{order.order_id}</Text>
                        </Box>
                        <Box>
                            <Heading as='h6' size='xs'>Order Date</Heading>
                            <Text>{order.ordered_date.substring(0, 10)}</Text>
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
                           <StatusBadge  status={order.order_status}/>
                        </Box>
                        </GridItem>
                        <GridItem>
                        <Box textAlign='center'>
                           
                           <OrderActions status={order.order_status}/> 
                         
                      </Box>
                        </GridItem>
                    </Grid>

                </GridItem>
             

            </Grid>
        </Box>
    )
}

 
export default OrderTile
