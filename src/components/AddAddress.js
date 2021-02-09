import { useState } from 'react';
import{
    FormControl,
    FormLabel,
    Input,
    useToast

} from "@chakra-ui/react";

const AddAddress = ({addAddress,trigger}) => {
    const [name,setName] = useState('')
    const [tp,setTp] = useState('')
    const [street,setStreet] = useState('')
    const [city,setCity] = useState('')
    const [state,setState] = useState('')
    const [zip,setZip] = useState('')

    const toast = useToast()


    const onSubmit = (e)=>{
        e.preventDefault()

        if(!name || !tp || !street || !city || !state || !zip){
            alert('Empty Field')
            return
        }
        
        addAddress({name,tp,street,city,state,zip})

        setName('')
        setTp('')
        setStreet('')
        setCity('')
        setState('')
        setZip('')

        toast({
            position: "bottom-right",    
            description: "New shipping address added successfully",
            status: "success",
            duration: 5000,
            isClosable: true,
          })
    }

    return (
        <form  onSubmit={onSubmit} >
            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Telephone</FormLabel>
                <Input type="text" placeholder='Telephone' value={tp} onChange={(e)=>setTp(e.target.value)}  />
            </FormControl>
            <FormControl>
                <FormLabel>Street</FormLabel>
                <Input type="text" placeholder='Street' value={street} onChange={(e)=>setStreet(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>City</FormLabel>
                <Input type="text" placeholder='City' value={city} onChange={(e)=>setCity(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>State</FormLabel>
                <Input type="text" placeholder='State' value={state} onChange={(e)=>setState(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Zip</FormLabel>
                <Input type="text" placeholder='Zip' value={zip} onChange={(e)=>setZip(e.target.value)} />
            </FormControl>
            <Input mt='5' mb='5'  type="submit" value='Save Address' className='btn btn-block' bg="teal.400" color='white' onClick={trigger} />
            
        </form>
    )
}

export default AddAddress
