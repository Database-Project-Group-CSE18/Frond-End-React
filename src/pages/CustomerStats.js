import {
    Box,
    Grid,
    GridItem, 
    Heading,
    Flex,
    Spacer,
    useColorMode,
    useToast,
    FormControl,
    Input,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,

  } from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import CustomerDashSideBar from "../components/CustomerDashSideBar";
import Axios from "axios";


const ReportItems  = ({stats})=>{
    return (
        <>
           {    
               stats.map((stat)=>(
                   <ReportItem key={stat.order_id} stat={stat}>  </ReportItem>
                   )
            )}
        </>
    )
}


const ReportItem = ({stat}) =>{
    return(
        <Tbody>                            
            <Tr>
                <Td>{stat.order_id}</Td>
                <Td>{stat.description.substring(1,stat.description.length-1)}</Td>
                <Td>{stat.ordered_date}</Td>
                <Td>{stat.nb_of_items}</Td>
                <Td>{stat.price}</Td>
            </Tr>                             
        </Tbody>   
    )
}


const CustomerStats = () => {
    const toast = useToast()
  
    const { colorMode, toggleColorMode } = useColorMode();
    const [startDate, setStartDate] = useState([]);
    const [endDate,setEndDate]  = useState([]);
    const [stats, setStats] = useState([]);
    const [total,setTotal] = useState([]);

    const onSubmit = (e)=>{
        e.preventDefault()

        if(startDate.length===0 || endDate.length ===0){
            alert('Enter time period')
            return
        }


        Axios.post("http://localhost:5000/customer/generatereport",{start_date:startDate, end_date:endDate})
        .then((Response)=>{
            
            // console.log("came",Response.data.stats)
           setStats(Response.data.stats)

           var sum = 0
           for(var i=0;i<Response.data.stats.length;i++){
               sum=sum+parseFloat(Response.data.stats[i].price)
           }
           
           setTotal(sum)


           if(Response.data.stats.length===0){
            toast({
                position: "bottom-right",    
                description: "No any orders in this time period",
                status: "error",
                duration: 5000,
                isClosable: true,
              })
           }
           else{
            toast({
                position: "bottom-right",    
                description: "Customer Report Generated Successfully",
                status: "success",
                duration: 5000,
                isClosable: true,
              })
            }
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



  return (
    <Box
      pt="100px"
      // pl={{ base: "10px", sm: "100px" }}
      // pr={{ base: "10px", sm: "100px" }}
    >
      <Grid templateColumns="repeat(5, 1fr)" templateRows="repeat(2, 1fr)">
        <GridItem colSpan={1} rowSpan={2}>
          <CustomerDashSideBar page="dashboard" />
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
                                    <Heading as='h3' size='md' color='white'> Customer Order Report </Heading> 
                                    </Box>
                                    <Spacer />
                                    <form onSubmit={onSubmit}>  
                                    <Flex>  
                                    
                                    <FormControl mr='2' >
                                        <Input type="date" color='white' placeholder="starting date"  value={startDate} onChange={(e)=>setStartDate(e.target.value)} />
                                    </FormControl>
                                    <FormControl mr='2' >
                                        <Input type="date" color='white' placeholder="end date" value={endDate}  onChange={(e)=>setEndDate(e.target.value)} />
                                    </FormControl>
                                    <Input  type="submit" value='Search'  className='btn btn-block' bg="teal" color='white' />
                                   
                                    </Flex>
                                    </form>
                                 </Flex>
                            </GridItem>

                            <GridItem colSpan={3} m='5'>

                            <Table variant="simple">
                                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                                    <Thead backgroundColor='cyan.100'>
                                        <Tr color='white'>
                                            <Th>Order ID</Th>
                                            <Th>Description</Th>
                                            <Th>Order Date</Th>
                                            <Th>No of Items</Th>
                                            <Th >Price</Th>
                                        </Tr>
                                    </Thead>
                                    
                                    <ReportItems stats={stats} />

                                    <Tfoot backgroundColor='cyan.100'>
                                        <Tr>
                                            <Th></Th>
                                            <Th></Th>
                                            <Th></Th>
                                            <Th> Total Spent </Th>
                                            <Th>{total}</Th>
                                            
                                        </Tr>
                                    </Tfoot>
                            </Table>                     
                            </GridItem>              
                        </Grid>
                        

                </GridItem>
      </Grid>
    </Box>
  );
};

export default withRouter(CustomerStats);
