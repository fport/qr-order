import productList from '../../../mocks/products'
import styles from './index.module.css'
import ProductItem from '../product-item'

const Products = () => {
    return (
        <>
            <span className={styles.title}>Mevcut Ürünler</span>
            <div>
                {
                    productList?.map(product => (
                        <>
                            <ProductItem
                                name={product.name}
                                price={product.price}
                                btnTitle="EKLE"
                            />
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default Products