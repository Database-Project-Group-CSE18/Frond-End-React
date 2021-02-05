import {
    Box,
    Grid,
    GridItem,
    Accordion,AccordionButton,
    AccordionItem,
    AccordionIcon,
    AccordionPanel,
  } from "@chakra-ui/react";

import React, { useState } from "react";
import CustomerDashSideBar from "../components/CustomerDashSideBar";


const ChangePersonalDet = () => { 
    const [personaldet,setPersonaldet] = useState(
        {
            id:1,
            name:'pasan madushan',
            tp:'07704543436',
            street:'1234',
            city:'abc',
            state:'def',
            zip:'12121'   
                       
        },)



        return (
            <Box
            
            pt="200px"
            pl={{ base: "10px", sm: "100px" }}
            pr={{ base: "10px", sm: "100px" }} >
                
                <Grid
                
                    templateColumns="repeat(5, 1fr)"
                    templateRows="repeat(1, 1fr)"
                    gap={4}
                >        
                    <GridItem  colSpan={1} rowSpan={2} >
                        <CustomerDashSideBar page="changedet" />
                    </GridItem>
                
                    <GridItem colSpan={4} >
                        
                    <Accordion allowToggle defaultIndex={[0]}>
                        <AccordionItem>
                            <AccordionButton _expanded={{ bg: "gray.600", color: "white" }}>
                                <Box flex="1" textAlign="left">
                                    Change My Personal Details
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionButton  _expanded={{ bg: "gray.600", color: "white" }}>
                                <Box flex="1" textAlign="left">
                                    Change My Password
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
      
                            commodo consequat.
                            </AccordionPanel>
                            </AccordionItem>
                        </Accordion>                        

                    </GridItem>
    
                           
                   
                </Grid>
    
    
            </Box>
        )


}

export default ChangePersonalDet