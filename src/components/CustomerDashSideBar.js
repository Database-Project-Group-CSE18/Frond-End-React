import {
    Box,
    Grid,
    GridItem, 
    Heading,
    Text,
    Divider,
    Link,
    Button
  } from "@chakra-ui/react";



const CustomerDashSideBar = ({page}) => {

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
            bg='cyan.50'
            pt='5'    
                    
        >                   
                <Link href='/customerdashboard'> <Button colorScheme="teal" size="md" style={sidebarButton}>Dashboard </Button> </Link>     
          
                <Link href> <Button colorScheme="teal" size="md" style={sidebarButton}> My Orders  </Button> </Link>     
         
                <Link href=''> <Button colorScheme="teal" size="md" style={sidebarButton}> Card & Bank Details  </Button></Link>     
            
                <Link href='/shippingaddress'><Button colorScheme="teal" size="md" style={sidebarButton}> Shipping Address </Button></Link>     
         
                <Link href='/changepersonaldet'><Button colorScheme="teal" size="md" style={sidebarButton}>Change Personal Details </Button></Link>     
           
        </Box>
    )
}

export default CustomerDashSideBar
