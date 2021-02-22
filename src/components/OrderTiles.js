import OrderTile from './OrderTile';

const OrderTiles = ({orders,cancelOrder,confirmOrder}) => {
    return (
        <>
           {    
               orders.map((order)=>(
                   <OrderTile key={order.Order_ID} order={order} cancelOrder={cancelOrder} confirmOrder={confirmOrder}>  </OrderTile>
                   )
            )}
        </>
    )
}

export default OrderTiles
