import styles from './index.module.css'

export default function BasketPreview() {
    return (
        <div className={styles.container}>
            <span className={styles.wrapper}>
                ₺   25.50
            </span>
        </div>
    )
}
