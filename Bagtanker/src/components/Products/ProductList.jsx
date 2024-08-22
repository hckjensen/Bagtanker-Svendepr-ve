import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import styles from './Products.module.scss'
import ProductCard from './ProductCard'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import { SupabaseContext } from '../../providers/supabaseProvider';

const ProductList = () => {
    const supabase = useContext(SupabaseContext)

    const [products, setProducts] = useState([])
    const { category } = useParams()


    const fetchProducts = async () => {
        if (category) {
            console.log("category:", category);
            // Fetch category UUID
            const { data: categoryData, error: categoryError } = await supabase
                .from('categories')
                .select('id')
                .eq('title', category);

            console.log("CategoryData:", categoryData);
            if (categoryError) {
                console.log(categoryError);
                return;
            }

            const categoryId = categoryData[0].id;
            console.log(categoryId);

            // Fetch products using the category UUID
            const { data: productsData, error: productsError } = await supabase
                .from('products')
                .select('*, category_product_rel!inner(*)')
                .eq('category_product_rel.category_id', categoryId);

            if (productsError) {
                console.log(productsError);
            } else {
                setProducts(productsData);
                console.log(products);
            }
        } else {
            // Fetch all products if no category is provided
            const { data: productsData, error: productsError } = await supabase
                .from('products')
                .select('*');

            if (productsError) {
                console.log(productsError);
            } else {
                setProducts(productsData);
                console.log(products);
            }
        }
    };

    useEffect(() => {
        fetchProducts()
    }, [category])

    return (
        <ContentWrapper title={category || 'Alle Produkter'}>
            <section className={styles.productGrid}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </section>
        </ContentWrapper>


    )
}
export default ProductList