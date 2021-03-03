import {
    Box,
    Grid,
    GridItem,
    Heading,
    VStack,
    Input,
    Stack,
    useToast
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useState, useEffect } from 'react';
import Axios from "axios";
import { Button } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
} from "@chakra-ui/react"
import { Avatar } from "@chakra-ui/react"


function SellerDashboard() {
    const [user_id, setUserID] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [phone_number, setTelephone] = useState('')
    const [email, setEmail] = useState('')

    const [oldpwd, setOldPwd] = useState('')
    const [newpwd, setNewPwd] = useState('')
    const [confnewpwd, setConfNewPwd] = useState('')

    const toast = useToast()

/**################################################################
                          Get All Seller Details
 ################################################################# */

    useEffect(() => {
        Axios.get("http://localhost:5000/seller/changeSellerDetails")
            .then((Response) => {
                console.log(Response.data);
                setFirstName(Response.data.user[0].first_name);
                setLastName(Response.data.user[0].last_name);
                setTelephone(Response.data.user[0].phone_number);
                setEmail(Response.data.user[0].email);
                setUserID(Response.data.user[0].user_id);

            })
            .catch((err) => {
                toast({
                    position: "bottom-right",
                    description: "Error loading data",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                })
            });
    }, [])

/**################################################################
                Put new sellerdetails to the database
 ################################################################# */
 
    const onSubmitdetail = (e) => {
        e.preventDefault()

        if (phone_number.length !== 10) {
            alert("Invalid Mobile Number")
            return
        }

        Axios.put('http://localhost:5000/seller/changeSellerDetails', { user_id, first_name, last_name, phone_number, email })
            .then((Response) => {
                toast({
                    position: "bottom-right",
                    description: "Successfully Updated the Personal Data",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                })
            })
            .catch((err) => {
                toast({
                    position: "bottom-right",
                    description: "Internal Server Error. Try again later",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                })
            });
    }

/**################################################################
                    Put new password to the database
 ################################################################# */
 
    const onSubmitpassword = (e) => {
        e.preventDefault();

        if (newpwd !== confnewpwd) {
            alert("password doesn't match");
            return
        }
        else {
            Axios.put("http://localhost:5000/seller/changeSellerPassword", { newpwd: newpwd, oldpwd: oldpwd })
                .then((Response) => {
                    toast({
                        position: "bottom-right",
                        description: "Password update successful",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                    })
                    setOldPwd('')
                    setNewPwd('')
                    setConfNewPwd('')
                })
                .catch((err) => {
                    console.log("error", err)
                    toast({
                        position: "bottom-right",
                        description: "Wrong Password",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    })
                    setOldPwd('')
                    setNewPwd('')
                    setConfNewPwd('')
                })
        }

    }

    return (
        <Box
            pt="150px"
            align='center'
            pl={{ base: "10px", sm: "100px" }}
            pr={{ base: "10px", sm: "100px" }}
        >

            <Grid
                templateColumns="repeat(5, 1fr)"
                gap={0}
                textAlign='center'
                pb='200px'
                w='800px'
            >
                <GridItem rowSpan={1} colSpan={1} bg="gray.300" p="10px">
                    <Heading as="h3" size="lg" color="gray.600" mb="20px" w='300px'>
                        <Avatar size="3xl" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" marginTop='90px' />
                    </Heading>
                    <VStack>

                    </VStack>
                </GridItem>
                <GridItem
                    rowSpan={1}
                    colSpan={4}
                    borderWidth="1px"
                    borderColor="gray.300"
                    p="20px"
                >
                    <Heading as="h2" size="2xl" color="gray.600" mb="20px">
                        Update Seller Details
            </Heading>
                    <form onSubmit={onSubmitdetail} >
                        <FormControl id="details" mt='30px'>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email"
                                placeholder='Email Address'
                                defaultValue={email}
                                name='emailaddress'
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                            <FormLabel mt='10px'>First Name</FormLabel>
                            <Input type='text'
                                placeholder='First Name'
                                defaultValue={first_name}
                                name='firstname'
                                onChange={(e) => setFirstName(e.target.value)}
                                required />
                            <FormLabel mt='10px'>Last Name</FormLabel>
                            <Input type='text'
                                placeholder='Last Name'
                                defaultValue={last_name}
                                name='lastname'
                                onChange={(e) => setLastName(e.target.value)}
                                required />
                            <FormLabel>Phone Number</FormLabel>
                            <Input type="number"
                                placeholder='Phone Number'
                                defaultValue={phone_number}
                                name='emailaddress'
                                onChange={(e) => setTelephone(e.target.value)}
                                required />

                            <Stack direction="row" spacing={4} mt="20px">
                                <Button
                                    loadingText="Submitting" type="submit" rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="outline">
                                    Update
                                </Button>
                            </Stack>
                        </FormControl>
                    </form>
                    <form onSubmit={onSubmitpassword} >
                        <FormControl id="emailpassword" mt='30px'>


                            <FormLabel>Old Password</FormLabel>
                            <Input
                                placeholder='Old Password'
                                name='oldpword'
                                type='password'
                                onChange={(e) => setOldPwd(e.target.value)}
                                required />
                            <FormLabel>New Password</FormLabel>
                            <Input
                                placeholder='New Password'
                                name='newpword'
                                type='password'
                                onChange={(e) => setNewPwd(e.target.value)}
                                required
                            />
                            <FormLabel>Confirm New Password</FormLabel>
                            <Input
                                placeholder='Confirm New Password'
                                name='confnewpword'
                                type='password'
                                onChange={(e) => setConfNewPwd(e.target.value)}
                                required
                            />
                            <Stack direction="row" spacing={4} mt="20px">
                                <Button
                                    loadingText="Submitting" type="submit" rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="outline">
                                    Update
                                </Button>
                            </Stack>
                        </FormControl>
                    </form>
                </GridItem>
            </Grid>
        </Box>



    );
}

export default SellerDashboard;
