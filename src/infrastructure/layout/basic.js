import Seo from '@comps/seo'
import styles from './basic.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Basic({ children }) {
    const router = useRouter();

    return (
        <div className={styles.appContainer}>
            <Seo title="Home" />
            <Image src="/assets/img/olympos.png" alt="me" width="130" height="25" onClick={() => router.push("/")
            } />
            <div className={styles.appLayout}>
                {children}
            </div>
        </div>
    )
}