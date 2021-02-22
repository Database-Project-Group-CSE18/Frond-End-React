
import {
    Box,
    Grid,
    GridItem, 
    useColorMode,
    Flex,
    Heading,
    Divider,
    HStack,Spacer, useToast
  } from "@chakra-ui/react";

import React, {useState, useEffect} from "react";
import CustomerDashSideBar from "../components/CustomerDashSideBar";
import OrderTiles from "..//components/OrderTiles";
import Axios from "axios";
  

const AllOrders = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    const toast = useToast();

    const [orderStats, setOrderStats] = ([])

    const [orders,setOrders] = useState([])

    // {
    //     orderID:1,
    //     orderStatus:'preparing',
    //     orderedDate:'21/01',
    //     orderItemTitle:'Purple Rose Jewelry Water Transfer Tattoo',
    //     orderItemImage:'https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    //     quantity:5,
    //     orderAmount:35.47,
    //     trackingNumber:'23232323232323'
              
    // }

    useEffect(() => {
        Axios.get("http://localhost:5000/customer/allorders")
        .then((Response)=>{
            console.log(Response.data.orders);        
            setOrders(Response.data.orders);
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


    useEffect(() => {
        Axios.get("http://localhost:5000/customer/allorders/stats")
        .then((Response)=>{
            // console.log(Response.data.stats);
            var stats = mapStats(Response.data.stats)
            console.log(stats)
            setOrderStats(stats)
            // console.log(orderStats)

        })
        .catch((err) => {
            toast({
                position: "bottom-right",    
                description: "Error loading summary",
                status: "error",
                duration: 5000,
                isClosable: true,
              })
          }); 
    }, [])


    const mapStats = (list)=>{
        var prep = 0
        var shipped = 0
        var cancelled = 0
        var await_cancel  = 0
        var delivered = 0
       
        for (var i=0;i<list.length;i++){
            if(list[i].Order_status==='Preparing'){
                prep= list[i].Count
            }
            else if (list[i].Order_status==='Shipped'){
                shipped= list[i].Count
            }
            else if (list[i].Order_status==='Cancelled'){
                cancelled= list[i].Count
            }
            else if (list[i].Order_status==='Await_cancel'){
                await_cancel= list[i].Count
            }
            else if (list[i].Order_status==='Delivered'){
                delivered= list[i].Count
            }
        }
        return {prep,shipped,cancelled,await_cancel,delivered}
    }

    

    const cancelOrder = (order_id)=>{
        Axios.put("http://localhost:5000/customer/allorders",{Order_ID:order_id, Order_status:'Await_cancel'})
        .then((Response)=>{
            console.log(Response)
            setOrders(orders.map(
                (order)=>order.Order_ID===order_id?{...order,Order_status:'Await_cancel'}:order
              ))
        })
        .catch((err) => {
            toast({
                position: "bottom-right",    
                description: "Error Order Cancellation. Please try again later",
                status: "error",
                duration: 5000,
                isClosable: true,
              })
    })    
            
    }

    const confirmOrder = (order_id)=>{
        Axios.put("http://localhost:5000/customer/allorders",{Order_ID:order_id, Order_status:'Delivered'})
        .then((Response)=>{
            console.log(Response)
            setOrders(orders.map(
                (order)=>order.Order_ID===order_id?{...order,Order_status:'Delivered'}:order
              ))
        })
        .catch((err) => {
            toast({
                position: "bottom-right",    
                description: "Error Order Confirmation. Please try again later",
                status: "error",
                duration: 5000,
                isClosable: true,
              })
    })
    }

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

                        <Grid>

                            <GridItem bg='cyan.900' p='10px'>
                                <Flex> 
                                    <Box  p="3">
                                    <Heading as='h3' size='md' color='white'> All Orders </Heading> 
                                    </Box>
                            
                                 </Flex>
                            </GridItem>

                            <GridItem p='5'>
                              <Grid templateColumns="repeat(5, 1fr)">
                                <GridItem colSpan={4}>

                                    <OrderTiles orders={orders} cancelOrder={cancelOrder} confirmOrder={confirmOrder}/>

                                </GridItem>
                                <GridItem >
                                    <Box bg={colorMode === "light" ? "cyan.900" : "cyan.50"} p='10px' mt='20px' color={colorMode === "light" ? "cyan.50" : "cyan.900"}>
                                        <Heading size='sm' textAlign='center'>Summary</Heading>
                                        <Divider mt='2' mb='2'/>
                                        <HStack>
                                            <Box ml='3'>Preparing </Box>
                                            <Spacer />
                                            <Box mr='3'>{}</Box>
                                        </HStack>
                                        <HStack>
                                            <Box ml='3'>Shipped </Box>
                                            <Spacer />
                                            <Box mr='3'>{}</Box>
                                        </HStack>
                                        <HStack>
                                            <Box ml='3'>Await Cancel </Box>
                                            <Spacer />
                                            <Box mr='3'>{}</Box>
                                        </HStack>
                                        <HStack>
                                            <Box ml='3'>Cancelled </Box>
                                            <Spacer />
                                            <Box mr='3'>{}</Box>
                                        </HStack>
                                        <HStack>
                                            <Box ml='3'>Received </Box>
                                            <Spacer />
                                            <Box mr='3'>{}</Box>
                                        </HStack>
                                    </Box>

                                </GridItem>
                              </Grid>
                            </GridItem>
                       
                             
                        </Grid>
                        

                </GridItem>
            </Grid>


        </Box>
    )
}

export default AllOrders
