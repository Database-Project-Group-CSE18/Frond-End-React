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
                    

                    Order_ID={orderlist[i].order_id}
                    Variant_Name= {orderlist[i].variant_name}
                    imageUrl={orderlist[i].image}
                    item_name= {orderlist[i].item_name}
                    payment= {orderlist[i].price*orderlist[i].quantity}
                    Date_paid={orderlist[i].ordered_date}
                    Date_shipped={orderlist[i].ordered_date}
                    Quantity={orderlist[i].quantity}
                    F_name= {orderlist[i].first_name}
                    L_name= {orderlist[i].last_name}
                    Order_status={orderlist[i].order_status}
                    
                  />
                ))}
           
          </GridItem>
          
        </Grid>
      </Box>
    );
  }
  
  export default AwaitingDelivery;
  