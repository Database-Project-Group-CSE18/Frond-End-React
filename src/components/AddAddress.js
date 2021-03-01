import { useState } from 'react';
import{
    FormControl,
    FormLabel,
    Input,
    useToast

} from "@chakra-ui/react";

const AddAddress = ({addAddress,trigger}) => {
    const [first_Name,setFirstName] = useState('')
    const [last_Name,setLastName] = useState('')
    const [street,setStreet] = useState('')
    const [city,setCity] = useState('')
    const [state,setState] = useState('')
    const [zip,setZip] = useState('')

    const toast = useToast()


    const onSubmit = (e)=>{
        e.preventDefault()

        if(!first_Name || !last_Name || !street || !city || !state || !zip){
            alert('Empty Field')
            return
        }
        
        addAddress({first_Name,last_Name,street,city,state,zip})

        setFirstName('')
        setLastName('')
        setStreet('')
        setCity('')
        setState('')
        setZip('')

        
    }

    return (
        <form  onSubmit={onSubmit} >
            <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input type="text" placeholder='Name' value={first_Name} onChange={(e)=>setFirstName(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input type="text" placeholder='Telephone' value={last_Name} onChange={(e)=>setLastName(e.target.value)}  />
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
