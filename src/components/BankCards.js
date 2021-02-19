import BankCard from './BankCard';

const BankCards = ({bankcards,deleteBankCard}) => {
    return (
        <>
        {
            bankcards.map((bankcard)=>(
                <BankCard key={bankcard.Card_Number} bankcard={bankcard} deleteBankCard={deleteBankCard} />
            ))
        }
        </>
    )
}

export default BankCards


