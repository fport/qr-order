import Seo from '@comps/seo'
import styles from './basic.module.css'

export default function Basic({ children }) {
    return (
        <div className={styles.appContainer}>
            <Seo title="Home" />
            {children}
        </div>
    )
}
