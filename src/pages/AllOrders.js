
import {
    Box,
    Grid,
    GridItem, 
    useColorMode,
    Flex,
    Heading,
    Divider,
    HStack,Spacer
  } from "@chakra-ui/react";

import React, {useState} from "react";
import CustomerDashSideBar from "../components/CustomerDashSideBar";
import OrderTiles from "..//components/OrderTiles";

  

const AllOrders = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    const [orders,setOrders] = useState([
        {
            orderID:1,
            orderStatus:'preparing',
            orderedDate:'21/01',
            orderItemTitle:'Purple Rose Jewelry Water Transfer Tattoo',
            orderItemImage:'https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            quantity:5,
            orderAmount:35.47,
            trackingNumber:'23232323232323'
                  
        },
        {
            orderID:2,
            orderStatus:'shipped',
            orderedDate:'13/01',
            
            orderItemTitle:'Marvel batman',
            orderItemImage:'https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            quantity:2,
            orderAmount:37.24,
            trackingNumber:'23232323232323'
                  
        },
        {
            orderID:3,
            
            orderStatus:'preparing',
            orderedDate:'15/01',
            
            orderItemTitle:'sonic toy',
            orderItemImage:'https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            quantity:3,
            orderAmount:24.56,
            trackingNumber:'23232323232323'
                  
        },
        {
            orderID:4,
            
            orderStatus:'preparing',
            orderedDate:'15/01',
            
            orderItemTitle:'sonic toy',
            orderItemImage:'https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            quantity:3,
            orderAmount:24.56,
            trackingNumber:'23232323232323'
                  
        },
        {
            orderID:5,
            
            orderStatus:'preparing',
            orderedDate:'15/01',
            
            orderItemTitle:'sonic toy',
            orderItemImage:'https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            quantity:3,
            orderAmount:24.56,
            trackingNumber:'23232323232323'
                  
        },
    ])


    const countOrders = ()=>{
        var prep = 0
        var ship = 0
        var canc = 0
        var await_can = 0
        var received = 0
        for (var i=0;i<orders.length;i++){
            if(orders[i].orderStatus==='preparing'){
                prep+=1
            }
            else if (orders[i].orderStatus==='shipped'){
                ship+=1
            }
            else if (orders[i].orderStatus==='cancelled'){
                canc+=1
            }
            else if (orders[i].orderStatus==='await_cancel'){
                await_can+=1
            }
            else if (orders[i].orderStatus==='received'){
                received+=1
            }
        }
        return {prep,ship,canc,await_can,received}
    }

    const getacount = countOrders()

    const cancelOrder = (order_id)=>{
            // console.log(order_id)
            setOrders(orders.map(
              (order)=>order.orderID===order_id?{...order,orderStatus:'await_cancel'}:order
            ))
            
    }

    const confirmOrder = (order_id)=>{
        setOrders(orders.map(
            (order)=>order.orderID===order_id?{...order,orderStatus:'received'}:order
          ))
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
                                            <Box mr='3'>{getacount.prep}</Box>
                                        </HStack>
                                        <HStack>
                                            <Box ml='3'>Shipped </Box>
                                            <Spacer />
                                            <Box mr='3'>{getacount.ship}</Box>
                                        </HStack>
                                        <HStack>
                                            <Box ml='3'>Await Cancel </Box>
                                            <Spacer />
                                            <Box mr='3'>{getacount.await_can}</Box>
                                        </HStack>
                                        <HStack>
                                            <Box ml='3'>Cancelled </Box>
                                            <Spacer />
                                            <Box mr='3'>{getacount.canc}</Box>
                                        </HStack>
                                        <HStack>
                                            <Box ml='3'>Received </Box>
                                            <Spacer />
                                            <Box mr='3'>{getacount.received}</Box>
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
