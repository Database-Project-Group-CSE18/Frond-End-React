import {
    Box,
    Button,
    Center,
    Grid,
    GridItem,
    Heading,
    VStack,
  } from "@chakra-ui/react";
  import React, { useState,useEffect } from "react";
  import axios from "axios";
  import Deliverycard from "../components/AllOrdersCard";
  import SearchBar from "../components/SearchBar";

  
  function AwaitingDelivery() {
    
    var [orderlist, setorderlist] = useState([{}])
  


  
    useEffect(() => {
      axios
        .get(`http://localhost:5000/orders/`)
        .then((response) => {
          console.log(response.data.orders)
          setorderlist(response.data.orders)
        });
  
    }, []);
   
  
    const searchBarText = `Search in All Orders`;
    const HandleChange = (event) => {
        var value = event.target.value;
        axios
        .post("http://localhost:5000/orders",{
          "order_id":`${value}`
        })
        .then((response) => {
          let data = response.data.orders;
          setorderlist(data);
        });
      
      };

  
    return (
      <Box
        pt="150px"
        pl={{ base: "10px", sm: "100px" }}
        pr={{ base: "10px", sm: "100px" }}
      >
        <Center mb='10px'>
          <SearchBar onChange={HandleChange} text={searchBarText} />
        </Center>
        <Grid
          templateColumns="repeat(1, 1fr)" gap={6}
        >
          <GridItem  bg="gray.300" p="10px">
            <Heading as="h3" size="xl" color="gray.600" mb="10px">
              All Orders
            </Heading>
          </GridItem>

          <GridItem 
          
          h="auto" templateColumns="repeat(1, 1fr)" gap={2} >
            
            
              {Array(orderlist.length)
                .fill("")
                .map((_, i) => (
                  <Deliverycard 
                    

                  order_id={orderlist[i].order_id}
                  payment_method={orderlist[i].payment_method}
                  customer_id={orderlist[i].customer_id}
                  date_paid={orderlist[i].ordered_date}
                  first_name= {orderlist[i].first_name}
                  last_name= {orderlist[i].last_name}
                  order_status={orderlist[i].order_status}
                  shipped_date={orderlist[i].shipped_date}

                    
                  />
                ))}
           
          </GridItem>
          
        </Grid>
      </Box>
    );
  }
  
  export default AwaitingDelivery;
  