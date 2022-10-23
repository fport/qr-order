import React, { useContext } from 'react'
import { BiCoffeeTogo } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
import { CiCircleRemove } from 'react-icons/ci'
import styles from './index.module.css'
import { BasketContext } from "../../../context/basket";
import { nanoid } from 'nanoid'

const ProductItem = ({ productId, name, price, btnTitle }) => {
    const { addProductToBasket, removeProductToBasket } = useContext(BasketContext);

    const addProductToBasketHandle = () => {
        const idx = nanoid();
        addProductToBasket({
            idx,
            name,
            price
        })
    }

    const removeProductToBasketHandle = () => {
        removeProductToBasket(productId)
    }

    const handleClick = () => {
        if (btnTitle == 'EKLE') addProductToBasketHandle()
        if (btnTitle == 'CIKAR') removeProductToBasketHandle()
    }

    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <BiCoffeeTogo className={styles.icon} />
                <span>{name}</span>
            </div>
            <span>{`${price} TL`}</span>
            <button className={styles.btn} onClick={() => handleClick()}>
                {
                    btnTitle == 'CIKAR' ? (
                        <CiCircleRemove className={styles.btnIcon} />
                    ) : (
                        <AiOutlinePlus className={styles.btnIcon} />
                    )
                }
                {btnTitle}
            </button>
        </div>
    )
}

export default ProductItem