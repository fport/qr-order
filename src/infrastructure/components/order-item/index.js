import React, { useContext } from 'react'
import { BiCoffeeTogo } from 'react-icons/bi'
import styles from './index.module.css'

const OrderItem = ({ name, products, orderStatus }) => {


    const handleClick = () => {
        if (btnTitle == 'EKLE') addProductToBasketHandle()
        if (btnTitle == 'CIKAR') removeProductToBasketHandle()
    }



    return (
        <>
            <div className={styles.container}>
                <div className={styles.titleWrapper}>
                    <BiCoffeeTogo className={styles.icon} />
                    <span>{name}</span>
                </div>
                <button className={styles.btn} >
                    {orderStatus}
                </button>
            </div>
            <div className={styles.orderDetailsContainer}>
                {products && products.map((p) => (
                    <div className={styles.detailsItem}>
                        <span>{p.name}</span>
                        <span>{p.price}</span>
                    </div>
                ))}
            </div>
        </>

    )
}

export default OrderItem