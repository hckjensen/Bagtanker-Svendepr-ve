import styles from './Products.module.scss';
import PropTypes from 'prop-types';
import { SupabaseContext } from '../../providers/supabaseProvider';
import { useContext, useState, useEffect } from 'react';

const ProductCard = ({ product }) => {

    const supabase = useContext(SupabaseContext)
    const [image, setImage] = useState('')

    const fetchProductImage = async () => {
        const imageKey = `product_image_${product.image_id}`;
        const cachedImage = localStorage.getItem(imageKey);

        if (cachedImage) {
            setImage(cachedImage);
        } else {
            const { data, error } = await supabase
                .from('images')
                .select('filename')
                .eq('id', product.image_id);

            if (error) {
                console.log(error);
            } else {
                const filename = data[0].filename;
                setImage(filename);
                localStorage.setItem(imageKey, filename);
            }
        }
    };

    useEffect(() => { fetchProductImage() }, [])

    return (
        <figure className={styles.productCard}>
            <picture>
                <img src={image} alt="placeholder" />
            </picture>
            <figcaption>
                <div className={styles.cardText}>
                    <h4>{product.title}</h4>
                    <p>{product.teaser}</p>
                </div>
                <div className={styles.bottomContainer}>
                    <button> Læs mere</button>
                    <div className={styles.likes}>
                        <p>antal </p>
                        <p>likes</p>
                    </div>
                </div>
            </figcaption>
        </figure>
    );


}

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductCard;