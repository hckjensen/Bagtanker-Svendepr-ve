import { useParams } from 'react-router-dom';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import Recipe from '../Recipe/Recipe';
import ProductComments from './ProductComments';
import { useContext, useState, useEffect } from 'react';
import { SupabaseContext } from '../../providers/supabaseProvider';
import styles from './Products.module.scss';

const ProductDetail = () => {

    const supabase = useContext(SupabaseContext);
    const { slug } = useParams();
    const [product, setProduct] = useState({});

    const fetchProduct = async () => {

        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('slug', slug);

        if (error) {
            console.log(error);
        } else {
            setProduct(data[0]);

        }

    }

    useEffect(() => {
        fetchProduct();
    }, [slug]);

    const [image, setImage] = useState('')

    const fetchProductImage = async () => {
        if (!product.image_id) return; // Add this check

        const { data, error } = await supabase
            .from('images')
            .select('filename')
            .eq('id', product.image_id);

        if (error) {
            console.log(error);
        } else {
            const filename = data[0].filename;
            setImage(filename);

        }

    };

    useEffect(() => { fetchProductImage() }, [product])



    return (
        <ContentWrapper title={product.title}>
            <section className={styles.productDetail}>
                <section className={styles.content}>
                    <img src={image} alt="placeholder" />
                    <p>{product.description}</p>
                </ section>
                <Recipe amount={product.amount} duration={product.duration} productId={product.id} />
            </section>
            <ProductComments productId={product.id} />
        </ContentWrapper>
    );
};

export default ProductDetail;