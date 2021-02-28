import OrderTile from './OrderTile';

const OrderTiles = ({orders,cancelOrder,confirmOrder}) => {
    return (
        <>
           {    
               orders.map((order)=>(
                   <OrderTile key={order.order_id} order={order} cancelOrder={cancelOrder} confirmOrder={confirmOrder}>  </OrderTile>
                   )
            )}
        </>
    )
}

export default OrderTiles
