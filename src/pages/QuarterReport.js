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
    TableCaption

  } from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Axios from "axios";


// const ReportItems  = ({stats})=>{
//     return (
//         <>
//            {    
//                stats.map((stat)=>(
//                    <ReportItem key={stat.order_id} stat={stat}>  </ReportItem>
//                    )
//             )}
//         </>
//     )
// }


// const ReportItem = ({stat}) =>{
//     return(
//         <Tbody>                            
//             <Tr>
//                 <Td>{stat.order_id}</Td>
//                 <Td>{stat.description.substring(1,stat.description.length-1)}</Td>
//                 <Td>{stat.ordered_date}</Td>
//                 <Td>{stat.nb_of_items}</Td>
//                 <Td>{stat.price}</Td>
//             </Tr>                             
//         </Tbody>   
//     )
// }



const QuarterReport = () => {
    const toast = useToast()
  
    const { colorMode, toggleColorMode } = useColorMode();
    // const [startDate, setStartDate] = useState([]);
    


  return (
    <Box
      pt="100px"
    >
      <Grid templateColumns="repeat(2, 1fr)">
       
      <GridItem colSpan={2} background='cyan.900' height='60px'>
            <Flex textAlign='center'> 
                <Box  p="5">
                    <Heading as='h3' size='md' color='white'> Quarterly Sales Report for the Business Year 2020 (2020/01/01 - 2020/12/31) </Heading> 
                </Box>         
            </Flex>  
         
        </GridItem>                 

        {/* stats view */}
        <GridItem>
            
        
        </GridItem>  


        {/* Table by product sales */}
        <GridItem colSpan={2} m='5'>
        

        <Table variant="simple">
            <TableCaption>Sales reports of specific products of 2020 Business Year (2020/01/01-2020/12/31)</TableCaption>
                <Thead backgroundColor='cyan.100'>
                    <Tr color='white'>
                            <Th>Item ID</Th>
                            <Th>Item Name</Th>
                            <Th>Q1</Th>
                            <Th>Q2</Th>
                            <Th>Q3</Th>
                            <Th>Q4</Th>
                    </Tr>
                </Thead>
                                    
            <Tfoot backgroundColor='cyan.100'>
                    <Tr>
                        <Th>Total</Th>
                        <Th></Th>
                        <Th> Q1 total</Th>
                        <Th> Q2 total </Th> 
                        <Th> Q3 total </Th> 
                        <Th> Q4 total </Th> 
                       
                                            
                    </Tr>
            </Tfoot>
        </Table>                     
        
        </GridItem>                  

                            
                         

            
      </Grid>
    </Box>
  );
};

export default withRouter(QuarterReport);
