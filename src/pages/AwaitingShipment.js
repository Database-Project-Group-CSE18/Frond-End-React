import {
    Box,
    Button,
    Center,
    Grid,
    GridItem,
    Heading,
    useToast,
    VStack,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import SearchBar from "../components/SearchBar";
  import ShipmentCard from "../components/ShipmentCard";
  
  function AwaitingShipment() {

  var [orderlist, setorderlist] = useState([{}])
  const toast = useToast();
  var toast_type1 = (success, message) =>
  toast({
    position: "bottom-right",
    title: success ? "Success" : "Failed",
    description: message,
    status: success ? "success" : "error",
    duration: 5000,
    isClosable: true,

  });


  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders/awaitingshipments`)
      .then((response) => {
        console.log(response.data.orders)
        setorderlist(response.data.orders)
      });

  }, []);
    
  const MarkasShipped=(id)=>{
    axios
      .post(`http://localhost:5000/orders/markasshipped`,{order_id:id})
      .then((response) => {
        toast_type1(true,"order dispatched")
        setorderlist(orderlist.filter(
          (order)=>order.order_id!==id
        ))
        console.log("Dsfsdgfnfjbn",orderlist)
      }
      ).catch((err)=>{
        toast_type1(false,"server error")
      });
  } 
    
  

  
    return (
      <Box
      pt="150px"
      pl={{ base: "10px", sm: "100px" }}
      pr={{ base: "10px", sm: "100px" }}
      >
        
        <Grid
          templateColumns="repeat(1, 1fr)" gap={6}
        >
          <GridItem  bg="gray.300" p="10px">
            <Heading as="h3" size="xl" color="gray.600" mb="10px">
              Awaiting Shipment
            </Heading>
          </GridItem>

          <GridItem 
          
          h="auto" templateColumns="repeat(1, 1fr)" gap={2} >
            
            
              {Array(orderlist.length)
                .fill("")
                .map((_, i) => (
            <ShipmentCard 
                    Order_ID={orderlist[i].order_id}
                    Variant_Name= {orderlist[i].variant_name}
                    imageUrl={orderlist[i].image}
                    item_name= {orderlist[i].item_name}
                    payment= {orderlist[i].price*orderlist[i].quantity}
                    Date_paid={orderlist[i].ordered_date}
                    Quantity={orderlist[i].quantity}
                    F_name= {orderlist[i].first_name}
                    L_name= {orderlist[i].last_name}
                    Order_status={orderlist[i].order_status}
                    MarkasShipped={MarkasShipped}
                  />
                ))}
           
          </GridItem>
          
        </Grid>
      </Box>
    );
  }
  
  export default AwaitingShipment;