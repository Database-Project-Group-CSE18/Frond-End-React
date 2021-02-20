import {
    Box,
    Grid,
    GridItem, 
    Avatar,
    Divider,
    Heading,
    SimpleGrid,
    Text,
    useColorMode
  } from "@chakra-ui/react";

import React, { useState } from "react";
import { useParams, withRouter } from "react-router-dom";
import Navbar from '../components/Navbar';
import CustomerDashSideBar from "../components/CustomerDashSideBar";


const CustomerDashboard = () => {

    const [userdata, setUserdata] = useState(
        {
            user_id:'12345',
            user_name:'Pasan Madushan',
            image:'https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            orders:{
                all:12,
                await_pay:15,
                await_ship:35,
                await_del:45,
                delivered:56
            }
        }
    )
    
    const { colorMode, toggleColorMode } = useColorMode();


    return (
        <Box
        
        pt="100px"
        // pl={{ base: "10px", sm: "100px" }}
        // pr={{ base: "10px", sm: "100px" }} 
        >
            
            <Grid
            
                templateColumns="repeat(5, 1fr)"
                templateRows="repeat(2, 1fr)"
                
                
            >        
                <GridItem  colSpan={1} rowSpan={2} >
                    <CustomerDashSideBar page="dashboard" />
                </GridItem>
            
                <GridItem colSpan={4} m={5} mt={8}>
                    <Box 
                        width="auto"
                        h="auto"
                        
                        overflow="hidden"
                        p="10px"
                        pb="5px"
                        bg={colorMode === "light" ? "cyan.50" : "cyan.900"}
                        borderRadius='10px'
                        >
                        
                        <Grid 
                            templateRows="repeat(2, 1fr)"
                            gap={4}
                            
                        >
                            <GridItem p="10px"  >
                                  <SimpleGrid columns={2} spacing={5}>
                                        <Box >
                                            <Avatar
                                                size="xl"
                                                name={userdata.user_name}
                                                src={userdata.image}
                                            />
                                        </Box>
                                        <Box >
                                        <Heading size='lg'> Hello, {userdata.user_name} </Heading>
                                        </Box>
                                    </SimpleGrid>
    
                            </GridItem >
                            
                            <GridItem >
                                       <Box 
                                        bg={colorMode === "light" ? "cyan.900" : "cyan.50"}
                                        borderRadius='md'
                                       
                                        color='white'
                                       >
                                           <SimpleGrid columns={5} spacing={5} pt='10px' pb='10px'>

                                                <Box textAlign='center' >
                                                    
                                                    <Heading as='h4' size='lg' textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}> {userdata.orders.all} </Heading>
                                                    
                                                    <Text  textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}>All orders</Text>
                                                </Box> 
                                                <Box textAlign='center'>
                                                    <Heading textColor={colorMode === "light" ? "cyan.50" : "cyan.900"} as='h4' size='lg'> {userdata.orders.await_pay} </Heading>
                                                    <Text textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}>Awaiting Payment</Text>
                                                </Box>
                                                <Box textAlign='center'>
                                                    <Heading as='h4' size='lg' textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}> {userdata.orders.await_ship} </Heading>
                                                    <Text textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}>Awaiting Shipment</Text>
                                                </Box>
                                                <Box textAlign='center'>
                                                   <Heading as='h4' size='lg' textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}> {userdata.orders.await_del} </Heading>
                                                    
                                                    <Text textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}>Awaiting Delivery</Text>
                                                </Box>
                                                <Box textAlign='center'>
                                                    <Heading textColor={colorMode === "light" ? "cyan.50" : "cyan.900"} as='h4' size='lg'> {userdata.orders.delivered} </Heading>
                                                    <Text textColor={colorMode === "light" ? "cyan.50" : "cyan.900"}>  Delivered</Text>
                                                </Box>
                                            </SimpleGrid> 

                                       </Box>
                            </GridItem>
                            
                        </Grid>

                    </Box>

                        

                </GridItem>
            </Grid>


        </Box>
    )
}

export default withRouter(CustomerDashboard)
