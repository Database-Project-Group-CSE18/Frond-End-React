import BankCard from './BankCard';

const BankCards = ({bankcards,deleteBankCard}) => {
    return (
        <>
        {
            bankcards.map((bankcard)=>(
                <BankCard key={bankcard.card_id} bankcard={bankcard} deleteBankCard={deleteBankCard} />
            ))
        }
        </>
    )
}

export default BankCards


