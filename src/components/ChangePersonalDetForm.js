import {
    Box,
    FormControl,
    FormLabel,
    Heading,
    Input,
    useToast
  } from "@chakra-ui/react";

import { useState,useEffect } from 'react';
import Axios from "axios";

const ChangePersonalDetForm = () => {
    const [UserID,setUserID] = useState('')
    const [firstname,setFirstName] = useState('')
    const [lastname,setLastName] = useState('')
    const [telephone,setTelephone] = useState('')
    const [Email,setEmail] = useState('')
   
    useEffect(() => {
        Axios.get("http://localhost:5000/customer/user")
        .then((Response)=>{
            console.log(Response.data);
            setFirstName(Response.data.user[0].First_name);
            setLastName(Response.data.user[0].Last_name);
            setTelephone(Response.data.user[0].Phone_No);
            setEmail(Response.data.user[0].Email);
            setUserID(Response.data.user[0].UserID);
            
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

    
    const toast = useToast()

    const onSubmit = (e)=>{
        e.preventDefault()

        if(telephone.length!==10){
            alert("Invalid Mobile Number")
            return
        }


        Axios.put('http://localhost:5000/customer/user',{UserID,firstname,lastname,telephone,Email})
        .then((Response)=>{
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

    console.log(firstname,lastname,telephone,Email)


    return (
        <Box>
            <Heading size='lg' mb='5'>Change Personal Details</Heading>
            <form onSubmit={onSubmit} >
                <FormControl id="firstname" mb='8'>
                    <FormLabel>First Name</FormLabel>
                                
                        <Input   
                            type='text'  
                            placeholder='First Name'       
                            defaultValue={firstname}
                            name='firstname'
                            onChange={(e)=>setFirstName(e.target.value)}
                            required
                        />
                </FormControl>

                <FormControl id="lastname" mb='8'>
                    <FormLabel>Last Name</FormLabel>
                                
                        <Input 
                            type='text'  
                            placeholder='Last Name'  
                            defaultValue={lastname} 
                            name='lastname'
                            onChange={(e)=>setLastName(e.target.value)}
                            required
                        />
                </FormControl>

                <FormControl id="email" mb='8'>
                    <FormLabel>Email</FormLabel>
                                
                        <Input   
                            type='email'
                            placeholder='Email'  
                            defaultValue={Email} 
                            name='Email'
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                        />
                </FormControl>

                <FormControl id="tel" mb='8'>
                    <FormLabel>Telephone Number</FormLabel>
                                
                        <Input   
                            type='number'
                            placeholder='Telephone Number'       
                            defaultValue={telephone}
                            name='telephone'
                            onChange={(e)=>setTelephone(e.target.value)}
                            required
                        />
                </FormControl>

                <Input mt='2' mb='2'  type="submit" value='Update Details' className='btn btn-block' bg="teal.600" color='white'  />
                            





            </form>
        </Box>
    )
}

export default ChangePersonalDetForm
