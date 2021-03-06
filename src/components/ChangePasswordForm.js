import {
    Box,
    Input,
    FormControl,
    FormLabel,
    Heading,
    useToast
  } from "@chakra-ui/react";
import Axios from "axios";

import { useState } from 'react';

const ChangePasswordForm = () => {

    const [oldpwd,setOldPwd] = useState('')
    const [newpwd,setNewPwd] = useState('')
    const [confnewpwd,setConfNewPwd] = useState('')

    const toast = useToast()

    const onSubmit = (e)=>{
        e.preventDefault();

        if(newpwd!==confnewpwd){
            alert("password doesn't match");
            return
        }
        else{
            Axios.put("http://localhost:5000/customer/userpwd",{newpwd:newpwd, oldpwd:oldpwd})
            .then((Response)=>{
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
            .catch((err)=>{
                console.log("error",err)
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
        <Box>
            <Heading size='lg' mb='5'>Change Password</Heading>
              <form onSubmit={onSubmit}>
                <FormControl id="oldpword" mb='5'>
                    <FormLabel>Old Password</FormLabel>        
                        <Input   
                            placeholder='Old Password'       
                            name='oldpword'
                            type='password'
                            onChange={(e) => setOldPwd(e.target.value)}
                            required
                            />
                </FormControl>

                <FormControl id="newpword" mb='5'>
                    <FormLabel>New Password</FormLabel>        
                        <Input   
                            placeholder='New Password'       
                            name='newpword'
                            type='password'
                            onChange={(e) => setNewPwd(e.target.value)}
                            required
                            />
                </FormControl>

                <FormControl id="confnewpword" mb='5'>
                    <FormLabel>Confirm New Password</FormLabel>        
                        <Input   
                            placeholder='Confirm New Password'       
                            name='confnewpword'
                            type='password'
                            onChange={(e) => setConfNewPwd(e.target.value)}
                            required
                            />
                </FormControl>

                <Input mt='2' mb='5'  type="submit" value='Update Password' className='btn btn-block' bg="teal.600" color='white' />
                
              </form>
        </Box>
    )
}

export default ChangePasswordForm
