import styles from './index.module.css'
import axios from 'axios'

const OrderCard = () => {
    const sendOrder = () => {
        // isim soyisim zorunlu
        // basket ürün olmak zorunda 
        axios.post('/api/order', { name: 'osman' }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <div className={styles.container}>
            <div>
                <input type="text" id="first_name" className={styles.inputText} placeholder="İsim Soyisim" required />
            </div>
            <button className={styles.btn} onClick={() => sendOrder()}>Sipariş Ver</button>
        </div>
    )
}

export default OrderCard