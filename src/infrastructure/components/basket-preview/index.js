import styles from './index.module.css'
import { BiBasket } from 'react-icons/bi'
import { useRouter } from 'next/router'

export default function BasketPreview({ label }) {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <span className={styles.wrapper}>
                <span>₺ 25.50</span>
                <button className={styles.btn} onClick={() => router.push("/basket")}>
                    <BiBasket className={styles.icon} />
                    <span className='osman'>{label}</span>
                </button>
            </span>

        </div>
    )
}
