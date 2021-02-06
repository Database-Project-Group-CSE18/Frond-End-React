import {
    Box,
    Grid,
    GridItem, 
    Heading,
    Text,
    Divider,
    Link,
    Button,
    useColorMode
  } from "@chakra-ui/react";



const CustomerDashSideBar = ({page}) => {

    const { colorMode, toggleColorMode } = useColorMode();

    const sidebarButton = {
        width:'80%',   
        marginTop:'7px',
        marginBottom:'7px',
        marginLeft:'10%',
        marginRight:'10%'
    }

    return (
        <Box
            width="auto"
            height={window.innerHeight-100}
            overflow="hidden"
            bg={colorMode === "light" ? "cyan.50" : "cyan.900"}
            pt='5'    
                    
        >                   
                <Link href='/customerdashboard'> <Button colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} size="md" style={sidebarButton}>Dashboard </Button> </Link>     
          
                <Link href> <Button colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} size="md" style={sidebarButton}> My Orders  </Button> </Link>     
         
                <Link href='/carddetails'> <Button colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} size="md" style={sidebarButton}> Card & Bank Details  </Button></Link>     
            
                <Link href='/shippingaddress'><Button colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} size="md" style={sidebarButton}> Shipping Address </Button></Link>     
         
                <Link href='/changepersonaldet'><Button colorScheme="teal" bg={colorMode === "light" ? "cyan.900" : "cyan.50"} size="md" style={sidebarButton}>Change Account Details </Button></Link>     
           
        </Box>
    )
}

export default CustomerDashSideBar
