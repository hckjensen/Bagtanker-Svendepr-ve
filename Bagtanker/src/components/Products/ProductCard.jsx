import styles from './Products.module.scss';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

    return (
        <div className={styles.productCard}>
            <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </Link>
        </div>
    );


}

export default ProductCard;