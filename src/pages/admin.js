import axios from 'axios'
import { useEffect, useState } from 'react'
import Basic from '@layout/basic'
import OrderItem from '@comps/order-item'

const Admin = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getOrders()
    }, [])

    const getOrders = async () => {
        const orderList = await axios.get('/api/order', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setOrders(orderList.data)
    }

    return (
        <Basic>
            {
                orders && orders.map((order) => (
                    <OrderItem
                        name={order.name}
                        products={order.products}
                        orderStatus={order.orderStatus}
                    />
                ))
            }

        </Basic>
    )
}

export default Admin