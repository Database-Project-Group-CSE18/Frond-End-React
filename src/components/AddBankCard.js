import { useState } from 'react';
import{
    FormControl,
    FormLabel,
    Input,
    Select
} from "@chakra-ui/react";

const AddBankCard = ({addBankCard,trigger}) => {
    const [card_number,setCardNumber] = useState('')
    const [owner,setOwner] = useState('')
    const [cvv,setCvv] = useState('')
    const [exp_date,setExpDate] = useState('')
    const [bank_name,setBankName] = useState('')
    const [card_type,setType] = useState('')
    const onSubmit = (e)=>{
        e.preventDefault()

        console.log(card_type)

        if(!card_number || !owner || !cvv || !exp_date || !bank_name || !card_type){
            alert('Empty Field')
            return
        }

        if(card_number.toString().length!==16){
            alert('Invalid Card Number')
            return
        }
    
        var givenDate = new Date(exp_date);
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
       
        addBankCard({card_number,owner,cvv,exp_date,bank_name,card_type})

        setCardNumber('')
        setOwner('')
        setCvv('')
        setExpDate('')
        setBankName('')
        setType('')
        
        
    }

    return (
        <form  onSubmit={onSubmit} >
            <FormControl>
                <FormLabel>Bank Name</FormLabel>
                <Input type="text" placeholder='Bank Name' value={bank_name} onChange={(e)=>setBankName(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Card Number</FormLabel>
                <Input type="number" placeholder='Card Number' value={card_number} onChange={(e)=>setCardNumber(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Owner</FormLabel>
                <Input type="text" placeholder='Owner' value={owner} onChange={(e)=>setOwner(e.target.value)}  />
            </FormControl>
            <FormControl>
                <FormLabel>CVV</FormLabel>
                <Input type="number" placeholder='CVV' value={cvv} onChange={(e)=>setCvv(e.target.value)} />
            </FormControl>
            <FormControl>
                <FormLabel>Card Type</FormLabel>
                <Select placeholder="Select Card Type" onChange={(e)=>setType(e.target.value)}>
                    <option value='visa'>visa</option>
                    <option value='mastercard'>mastercard</option>
                    <option value='amex'>amex</option>
                 </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Exp Date</FormLabel>
                <Input type="date" placeholder='Exp Date' value={exp_date} onChange={(e)=>setExpDate(e.target.value)} />
            </FormControl>
            <Input mt='5' mb='5'  type="submit" value='Save Card Details' className='btn btn-block' bg="teal.400" color='white' onClick={trigger} />
            
        </form>
    )
}

export default AddBankCard
