import { useState } from 'react';
import{
    FormControl,
    FormLabel,
    Input,
    useToast

} from "@chakra-ui/react";

const AddAddress = ({addAddress,trigger}) => {
    const [First_Name,setFirstName] = useState('')
    const [Last_Name,setLastName] = useState('')
    const [Street,setStreet] = useState('')
    const [City,setCity] = useState('')
    const [State,setState] = useState('')
    const [ZIP,setZip] = useState('')

    const toast = useToast()


    const onSubmit = (e)=>{
        e.preventDefault()

        if(!First_Name || !Last_Name || !Street || !City || !State || !ZIP){
            alert('Empty Field')
            return
        }
        
        addAddress({First_Name,Last_Name,Street,City,State,ZIP})

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
                <Input type="text" placeholder='Name' value={First_Name} onChange={(e)=>setFirstName(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input type="text" placeholder='Telephone' value={Last_Name} onChange={(e)=>setLastName(e.target.value)}  />
            </FormControl>
            <FormControl>
                <FormLabel>Street</FormLabel>
                <Input type="text" placeholder='Street' value={Street} onChange={(e)=>setStreet(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>City</FormLabel>
                <Input type="text" placeholder='City' value={City} onChange={(e)=>setCity(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>State</FormLabel>
                <Input type="text" placeholder='State' value={State} onChange={(e)=>setState(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Zip</FormLabel>
                <Input type="text" placeholder='Zip' value={ZIP} onChange={(e)=>setZip(e.target.value)} />
            </FormControl>
            <Input mt='5' mb='5'  type="submit" value='Save Address' className='btn btn-block' bg="teal.400" color='white' onClick={trigger} />
            
        </form>
    )
}

export default AddAddress
