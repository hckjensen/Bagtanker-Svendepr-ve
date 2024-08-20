import { useParams } from 'react-router-dom'
import styles from './Products.module.scss'

const ProductList = () => {

    const { home, category, produkter } = useParams()

    return (
        <section className={styles.container}>
            <p>Du er her: {home} / {produkter} / {category}</p>
            <h3>{category}</h3>
            <div className={styles.productGrid}>

            </div>

        </section>
    )
}
export default ProductList