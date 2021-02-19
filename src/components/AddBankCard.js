import { useState } from 'react';
import{
    FormControl,
    FormLabel,
    Input,
    useToast

} from "@chakra-ui/react";

const AddBankCard = ({addBankCard,trigger}) => {
    const [Card_Number,setCardNumber] = useState('')
    const [Owner,setOwner] = useState('')
    const [CVV,setCvv] = useState('')
    const [Exp_Date,setExpDate] = useState('')
    const [Bank_Name,setBankName] = useState('')
    const onSubmit = (e)=>{
        e.preventDefault()

        if(!Card_Number || !Owner || !CVV || !Exp_Date || !Bank_Name){
            alert('Empty Field')
            return
        }

        if(Card_Number.toString().length!==12){
            alert('Invalid Card Number')
            return
        }
    
        var givenDate = new Date(Exp_Date);
        var today = new Date();
        if (givenDate.getFullYear() < today.getFullYear()) {
            alert('card is expired')
            return
        }
        else if (givenDate.getFullYear() == today.getFullYear()){
            if(givenDate.getMonth() < today.getMonth()){
                alert('card is expired')
                return
            }
        }
    
        
        addBankCard({Card_Number,Owner,CVV,Exp_Date,Bank_Name})

        setCardNumber('')
        setOwner('')
        setCvv('')
        setExpDate('')
        setBankName('')
        
        
    }

    return (
        <form  onSubmit={onSubmit} >
            <FormControl>
                <FormLabel>Bank Number</FormLabel>
                <Input type="text" placeholder='Bank Name' value={Bank_Name} onChange={(e)=>setBankName(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Card Number</FormLabel>
                <Input type="number" placeholder='Card Number' value={Card_Number} onChange={(e)=>setCardNumber(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Owner</FormLabel>
                <Input type="text" placeholder='Owner' value={Owner} onChange={(e)=>setOwner(e.target.value)}  />
            </FormControl>
            <FormControl>
                <FormLabel>CVV</FormLabel>
                <Input type="number" placeholder='CVV' value={CVV} onChange={(e)=>setCvv(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Exp Date</FormLabel>
                <Input type="month" placeholder='Exp Date' value={Exp_Date} onChange={(e)=>setExpDate(e.target.value)} />
            </FormControl>
            <Input mt='5' mb='5'  type="submit" value='Save Card Details' className='btn btn-block' bg="teal.400" color='white' onClick={trigger} />
            
        </form>
    )
}

export default AddBankCard
