import { useEffect, useContext } from 'react'
import styles from './index.module.css'
import { BiBasket } from 'react-icons/bi'
import { useRouter } from 'next/router'
import { BasketContext } from "../../../context/basket";

export default function BasketPreview({ label, redirectTo }) {
    const router = useRouter()

    const { totalPrice, basket, calculateBasketTotalPrice } = useContext(BasketContext);
    useEffect(() => {
        calculateBasketTotalPrice()
    }, [basket])

    return (
        <div className={styles.container}>
            <span className={styles.wrapper}>
                <span className={styles.price}>₺ {totalPrice}</span>
                <button className={styles.btn} onClick={() => router.push(`/${redirectTo}`)}>
                    <BiBasket className={styles.icon} />
                    <span>{label}</span>
                </button>
            </span>

        </div>
    )
}
