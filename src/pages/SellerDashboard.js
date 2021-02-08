import {
    Box,
    Center,
    Grid,
    GridItem,
    Heading,
    VStack,
    Input,
    Stack,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, ArrowForwardIcon, StarIcon } from "@chakra-ui/icons";

import { Button, ButtonGroup } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react"
import React, { useState } from "react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react"
import SearchBar from "../components/SearchBar";

function SellerDashboard() {

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
                        <Avatar size="3xl" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" marginTop='40px' />
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
                        Account Settings
            </Heading>
                    <FormControl id="email" mt='30px'>
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" />
                        <FormLabel mt='10px'>User Name</FormLabel>
                        <Input type="string" />
                        <FormLabel mt='10px'>Password</FormLabel>
                        <Input type="password" />
                        <FormLabel mt='10px'>Re-Enter Password</FormLabel>
                        <Input type="password" />
                        <Stack direction="row" spacing={4} mt="20px">
                            <Button
                                loadingText="Submitting" type="submit" rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="outline">
                                Update
  </Button>
                        </Stack>
                    </FormControl>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default SellerDashboard;
