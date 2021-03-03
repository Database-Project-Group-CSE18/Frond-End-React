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
    TableCaption,
    Select

  } from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Axios from "axios";


const TableItems  = ({tableDetails})=>{
    return (
        <>
           {    

               tableDetails.map((detail)=>(
                   <TableItem key={detail.item_id} detail={detail} > </TableItem>
                   )
            )}
        </>
    )
}


const TableItem = ({detail}) =>{
    return(
        <Tbody>                            
            <Tr>
                <Td>{detail.item_id}</Td>
                <Td>{detail.item_name}</Td>
                <Td>{detail.firstQT}</Td>
                <Td>{detail.secondQT}</Td>
                <Td>{detail.thirdQT}</Td>
                <Td>{detail.fourthQT}</Td>
            </Tr>                             
        </Tbody>   
    )
}



const QuarterReport = () => {
    const toast = useToast()
  
    const { colorMode, toggleColorMode } = useColorMode();
    const [year, setYear] = useState([]);
    const [tableDetails, setTableDetails] = useState([]);
    const [tableTotal,setTableTotal] = useState([]); 

    const onSubmit  = (e)=>{
        e.preventDefault()

        if(year.length===0){
            alert('Select an year')
            return
        }

        Axios.post("http://localhost:5000/orders/generatequaterreport",{year:year})
        .then((Response)=>{
            console.log(Response.data)
            refractorResponse(Response.data) 
            calculateTotal(Response.data)
        })

    }

    const calculateTotal = (data)=>{
        let q1=0
        let q2=0
        let q3=0
        let q4=0
        for (var b=0;b<data.first_quart_det.length;b++){
            q1+=parseFloat(data.first_quart_det[b].sales)
        }
        for (var b=0;b<data.second_quart_det.length;b++){
            q2+=parseFloat(data.second_quart_det[b].sales)
        }
        for (var b=0;b<data.third_quart_det.length;b++){
            q3+=parseFloat(data.third_quart_det[b].sales)
        }
        for (var b=0;b<data.fourth_quart_det.length;b++){
            q4+=parseFloat(data.fourth_quart_det[b].sales)
        }

        q1 = parseFloat(q1.toFixed(2))
        q2 = parseFloat(q2.toFixed(2))
        q3 = parseFloat(q3.toFixed(2))
        q4 = parseFloat(q4.toFixed(2))

        setTableTotal({q1,q2,q3,q4})
        console.log({q1,q2,q3,q4})
    }

    const refractorResponse= (data)=>{
        let final = []
        let all = data.all_items
        for (var i=0;i<data.all_items.length;i++){
            let obj={
                item_id:data.all_items[i].item_id,
                item_name:data.all_items[i].item_name,
                firstQT:0,
                secondQT:0,
                thirdQT:0,
                fourthQT:0
            }

            for (var a=0;a<data.first_quart_det.length;a++){
                if(data.all_items[i].item_id===data.first_quart_det[a].item_id){
                    obj.firstQT=parseFloat(data.first_quart_det[a].sales).toFixed(2)
                }
            }
            for (var a=0;a<data.second_quart_det.length;a++){
                if(data.all_items[i].item_id===data.second_quart_det[a].item_id){
                    obj.secondQT=parseFloat(data.second_quart_det[a].sales).toFixed(2)
                }
            }
            for (var a=0;a<data.third_quart_det.length;a++){
                if(data.all_items[i].item_id===data.third_quart_det[a].item_id){
                    obj.thirdQT=parseFloat(data.third_quart_det[a].sales).toFixed(2)
                }
            }
            for (var a=0;a<data.fourth_quart_det.length;a++){
                if(data.all_items[i].item_id===data.fourth_quart_det[a].item_id){
                    obj.fourthQT=parseFloat(data.fourth_quart_det[a].sales).toFixed(2)
                }
            }

            final.push(obj)
        }
        setTableDetails(final)
        // console.log("final",final)
    }


  return (
    <Box
      pt="100px"
    >
      <Grid templateColumns="repeat(2, 1fr)">
      <Box 
        width="auto"
        h="auto"                   
        overflow="hidden"                    
        pb="5px"                      
        >        
    </Box>

      <GridItem colSpan={2} bg='cyan.900' p='10px'>
                                <Flex> 
                                    <Box  p="3">
                                    <Heading as='h3' size='md' color='white'>  Quarterly Sales Report </Heading> 
                                    </Box>
                                    <Spacer />
                                    <form onSubmit={onSubmit}>  
                                    <Flex>  
                                    
                                    <FormControl>
                                            <Select color='white' placeholder="Select Year" onChange={(e)=>setYear(e.target.value)}>
                                                <option value='2018'>2018</option>
                                                <option value='2019'>2019</option>
                                                <option value='2020'>2020</option>
                                                <option value='2021'>2021</option>
                                            </Select>
                                        </FormControl>
                    
                                    <Input ml='2' type="submit" value='Generate'  className='btn btn-block' bg="teal" color='white' />
                                   
                                    </Flex>
                                    </form>
                                 </Flex>
                            </GridItem>



        {/* stats view */}
        <GridItem>
            
        
        </GridItem>  


        {/* Table by product sales */}
        <GridItem colSpan={2} m='5'>
        

        <Table variant="simple">
            <TableCaption>Sales reports of specific products of {year} Business Year {year+'/01/01-'+year+"/12/31"}</TableCaption>
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

            <TableItems  tableDetails={tableDetails} />
                                    
            <Tfoot backgroundColor='cyan.100'>
                    <Tr>
                        <Th>Total</Th>
                        <Th></Th>
                        <Th> {tableTotal.q1}</Th>
                        <Th>{tableTotal.q2} </Th> 
                        <Th>{tableTotal.q3} </Th> 
                        <Th> {tableTotal.q4} </Th> 
                       
                                            
                    </Tr>
            </Tfoot>
        </Table>                     
        
        </GridItem>                  

                            
                         

            
      </Grid>
    </Box>
  );
};

export default withRouter(QuarterReport);
