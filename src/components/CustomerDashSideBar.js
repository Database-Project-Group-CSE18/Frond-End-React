import {
    Box,
    Grid,
    GridItem, 
    Heading,
    Text,
    Divider,
    Link
  } from "@chakra-ui/react";



const CustomerDashSideBar = ({page}) => {

    const activeColor = ()=>{

    }

    return (
        <Box
            width="auto"
            h="auto"
            borderWidth="2px"
            borderColor="gray.300"
            overflow="hidden"
            p="10px"
            pb="20px"
                        
        >
                        
            <Heading textAlign="center" as="h4" size="md" p="10px"> 
                Shortcuts
            </Heading>
            <Divider orientation="horizontal" />
                        
            <Box >     
                <Text fontSize="l" ml="3px" mt="7px" pl="8px" > <Link href='/customerdashboard'>Dashboard</Link>     
                </Text>
            </Box>
            <Box > 
                <Text fontSize="l" ml="3px" mt="7px" pl="8px">
                    My Orders
                </Text>
            </Box>
            <Box bg="red"> 
                <Text fontSize="l" ml="3px" mt="7px" pl="8px">
                    Card & Bank Details
                </Text>
            </Box>
            <Box bg="red"> 
                <Text fontSize="l" ml="3px" mt="5px" pl="8px">
                  <Link href='/shippingaddress'>  Shipping Address </Link>
                </Text>
            </Box>
            <Box bg="red"> 
                <Text fontSize="l" ml="3px" mt="7px" pl="8px">
                    <Link href='/changepersonaldet'> Change Personal Details </Link>
                </Text>
             </Box>
        </Box>
    )
}

export default CustomerDashSideBar
