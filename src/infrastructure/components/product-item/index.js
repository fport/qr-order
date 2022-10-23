import React, { useContext } from 'react'
import { BiCoffeeTogo } from 'react-icons/bi'
import styles from './index.module.css'
import { BasketContext } from "../../../context/basket";

const ProductItem = ({ name, price, btnTitle }) => {
    const { addProductToBasket } = useContext(BasketContext);

    const addProductToBasketHandle = () => {
        addProductToBasket({
            name,
            price
        })
    }

    return (
        <div className={styles.container}>
            <BiCoffeeTogo className={styles.icon} />
            <span>{name}</span>
            <span>{`${price} TL`}</span>
            <button className={styles.btn} onClick={() => addProductToBasketHandle()}>{btnTitle}</button>
        </div>
    )
}

export default ProductItem