import { useState } from 'react';
import{
    FormControl,
    FormLabel,
    Input,
    useToast

} from "@chakra-ui/react";

const AddBankCard = ({addBankCard,trigger}) => {
    const [cardNumber,setCardNumber] = useState('')
    const [owner,setOwner] = useState('')
    const [cvv,setCvv] = useState('')
    const [expDate,setExpDate] = useState('')
    

    const toast = useToast()


    const onSubmit = (e)=>{
        e.preventDefault()

        if(!cardNumber || !owner || !cvv || !expDate){
            alert('Empty Field')
            return
        }
        
        addBankCard({cardNumber,owner,cvv,expDate})

        setCardNumber('')
        setOwner('')
        setCvv('')
        setExpDate('')
        
        toast({
            position: "bottom-right",    
            description: "New payment method added successfully",
            status: "success",
            duration: 5000,
            isClosable: true,
          })
    }

    return (
        <form  onSubmit={onSubmit} >
            <FormControl>
                <FormLabel>Card Number</FormLabel>
                <Input type="text" placeholder='Card Number' value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Owner</FormLabel>
                <Input type="text" placeholder='Owner' value={owner} onChange={(e)=>setOwner(e.target.value)}  />
            </FormControl>
            <FormControl>
                <FormLabel>CVV</FormLabel>
                <Input type="text" placeholder='CVV' value={cvv} onChange={(e)=>setCvv(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Exp Date</FormLabel>
                <Input type="text" placeholder='Exp Date' value={expDate} onChange={(e)=>setExpDate(e.target.value)} />
            </FormControl>
            <Input mt='5' mb='5'  type="submit" value='Save Card Details' className='btn btn-block' bg="teal.400" color='white' onClick={trigger} />
            
        </form>
    )
}

export default AddBankCard
