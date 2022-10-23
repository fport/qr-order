import axios from 'axios'
import { useEffect, useState } from 'react'
import Basic from '@layout/basic'

const admin = () => {
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
            <div>
                {
                    orders && orders.map(order => (
                        <span>{order.name}</span>
                    ))
                }
            </div>

        </Basic>
    )
}

export default admin