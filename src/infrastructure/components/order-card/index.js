import { useState, useContext } from 'react';
import styles from './index.module.css'
import axios from 'axios'
import { useRouter } from 'next/router';
import { BasketContext } from '../../../context/basket'

const OrderCard = () => {
    const router = useRouter()
    const [name, setName] = useState("")
    const { basket } = useContext(BasketContext);

    const sendOrder = () => {
        if (basket.length && name) {
            axios.post('/api/order', {
                name,
                products: basket,
                orderStatus: "bekliyor"
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            setName("")
            router.push("/order-succesfull")
        } else {
            router.push("/")
        }
    }

    return (
        <div className={styles.container}>
            <div>
                <input type="text" id="first_name" onChange={(event) => setName(event.target.value)} value={name} className={styles.inputText} placeholder="İsim Soyisim" required />
            </div>
            <button className={styles.btn} onClick={() => sendOrder()}>Sipariş Ver</button>
        </div>
    )
}

export default OrderCard