import { useContext } from 'react'
import styles from './index.module.css'
import ProductItem from '../product-item'
import { BasketContext } from "../../../context/basket";
import OrderCard from '@comps/order-card';

const Basket = () => {
    const { basket } = useContext(BasketContext);

    return (
        <>
            <span className={styles.title}>Eklenen Ürünler</span>
            <div>
                {
                    basket?.map(product => (
                        <>
                            <ProductItem
                                productId={product.idx}
                                name={product.name}
                                price={product.price}
                                btnTitle="CIKAR"
                            />
                        </>
                    ))
                }
                <OrderCard />
            </div>
        </>
    )
}

export default Basket