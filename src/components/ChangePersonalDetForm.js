import {
    Box,
    FormControl,
    FormLabel,
    Heading,
    Input,
    useToast
  } from "@chakra-ui/react";

import { useState } from 'react';

const ChangePersonalDetForm = ({data,updateDetails}) => {

    const [firstname,setFirstName] = useState(data.firstName)
    const [lastname,setLastName] = useState(data.lastName)
    const [telephone,setTelephone] = useState(data.tp)

    const toast = useToast()

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!firstname || !lastname || !telephone){
            alert('Empty Fields')
            return
        }

        if(firstname === data.firstName && lastname === data.lastName && telephone ===data.tp){
            alert("Non changes made")
            return
        }

        updateDetails({id:data.id,firstname,lastname,telephone})

        setFirstName(data.firstName)
        setLastName(data.lastName)
        setTelephone(data.telephone)

        toast({
            position: "bottom-right",    
            description: "Account details updated succesfully",
            status: "success",
            duration: 5000,
            isClosable: true,
          })
    }


    return (
        <Box>
            <Heading size='lg' mb='5'>Change Personal Details</Heading>
            <form onSubmit={onSubmit} >
                <FormControl id="firstname" mb='8'>
                    <FormLabel>First Name</FormLabel>
                                
                        <Input   
                            placeholder='First Name'       
                            defaultValue={data.firstName}
                            name='firstname'
                            onChange={(e)=>setFirstName(e.target.value)}
                        />
                </FormControl>

                <FormControl id="lastname" mb='8'>
                    <FormLabel>Last Name</FormLabel>
                                
                        <Input   
                            placeholder='Last Name'  
                            defaultValue={data.lastName} 
                            name='lastname'
                            onChange={(e)=>setLastName(e.target.value)}
                        />
                </FormControl>

                <FormControl id="tel" mb='8'>
                    <FormLabel>Telephone Number</FormLabel>
                                
                        <Input   
                            placeholder='Telephone Number'       
                            defaultValue={data.tp}
                            name='telephone'
                            onChange={(e)=>setTelephone(e.target.value)}
                        />
                </FormControl>

                <Input mt='2' mb='2'  type="submit" value='Update Details' className='btn btn-block' bg="teal.600" color='white'  />
                            





            </form>
        </Box>
    )
}

export default ChangePersonalDetForm
