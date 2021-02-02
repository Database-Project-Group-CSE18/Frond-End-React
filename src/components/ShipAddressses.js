import ShipAddress from './ShipAddress';

const ShipAddressses = ({addresses,deleteAddress,updateAddress}) => {
    return (
        <>
           {    
               addresses.map((address)=>(
                   <ShipAddress key={address.id} address={address} deleteAddress={deleteAddress} updateAddress={updateAddress}> </ShipAddress>
                   )
            )}
        </>
    )
}

export default ShipAddressses
