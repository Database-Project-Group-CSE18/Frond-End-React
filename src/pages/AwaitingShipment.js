import {
    Box,
    Button,
    Center,
    Grid,
    GridItem,
    Heading,
    VStack,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  
  import SearchBar from "../components/SearchBar";
  import ShipmentCard from "../components/ShipmentCard";
  
  function AwaitingShipment() {
    
    const [orderlist, setActiveCategoryProducts] = useState([ 
      {
        Order_ID: "233-5145-789a",
        Varient_ID: "1111",
        item_name: "Electric tooth brush",
        payment: 200.0,
        Date_paid: "2021/2/8",
        Quantity :"2",
        F_name: "Rahal",
        L_name: "Athukorala",
        image:
          "https://b3h2.scene7.com/is/image/BedBathandBeyond/69055867778_imageset?$690$&wid=690&hei=690",
      },
      {
        Order_ID: "233-5145-789b",
        Varient_ID: "2222",
        item_name: "Electric Toilet brush",
        payment: 100.0,
        Date_paid: "2021/2/6",
        Quantity :"1",
        F_name: "Ganesh",
        L_name: "Sirisena",
        image:
          "https://b3h2.scene7.com/is/image/BedBathandBeyond/69055867778_imageset?$690$&wid=690&hei=690",
      },
      {
        Order_ID: "233-5145-789c",
        Varient_ID: "3333",
        item_name: "Electric pen",
        payment: 1500.0,
        Date_paid: "2021/2/7",
        Quantity :"3",
        F_name: "Sirimali",
        L_name: "Godahewa",
        image:
          "https://b3h2.scene7.com/is/image/BedBathandBeyond/69055867778_imageset?$690$&wid=690&hei=690",
      },
      {
        Order_ID: "233-5145-789d",
        Varient_ID: "4444",
        item_name: "Electric grass cutter",
        payment: 200.0,
        Date_paid: "2021/1/28",
        Quantity :"2",
        F_name: "James",
        L_name: "Vince",
        image:
          "https://b3h2.scene7.com/is/image/BedBathandBeyond/69055867778_imageset?$690$&wid=690&hei=690",
      },
      {
        Order_ID: "233-5145-789e",
        Varient_ID: "5555",
        item_name: "Electric machine gun",
        payment: 20000.0,
        Date_paid: "2021/2/8",
        Quantity :"1",
        F_name: "Xavier",
        L_name: "Dhorty",
        image:
          "https://b3h2.scene7.com/is/image/BedBathandBeyond/69055867778_imageset?$690$&wid=690&hei=690",
      }
    ]);
  
    const searchBarText = `Search in Awaiting Deliveries`;
  

  
    return (
      <Box
        pt="150px"
        pl={{ base: "10px", sm: "100px" }}
        pr={{ base: "10px", sm: "100px" }}
      >
        <Center mb='10px'>
          <SearchBar text={searchBarText} />
        </Center>
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
                    Order_ID={orderlist[i].Order_ID}
                    Varient_ID= {orderlist[i].Varient_ID}
                    imageUrl={orderlist[i].image}
                    item_name= {orderlist[i].item_name}
                    payment= {orderlist[i].payment}
                    Date_paid={orderlist[i].Date_paid}
                    Quantity={orderlist[i].Quantity}
                    F_name= {orderlist[i].F_name}
                    L_name= {orderlist[i].L_name}
                    
                  />
                ))}
           
          </GridItem>
          
        </Grid>
      </Box>
    );
  }
  
  export default AwaitingShipment;