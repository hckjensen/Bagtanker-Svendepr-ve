import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import styles from './Products.module.scss'
import ProductCard from './ProductCard'
import { SupabaseContext } from '../../providers/supabaseProvider';

const ProductList = () => {
    const supabase = useContext(SupabaseContext)

    const [products, setProducts] = useState([])
    const { home, category, produkter } = useParams()

    const fetchProducts = async () => {
        console.log("category:", category)
        // Fetch category UUID
        const { data: categoryData, error: categoryError } = await supabase
            .from('categories')
            .select('id')
            .eq('title', category)

        console.log("CategoryData:", categoryData)
        if (categoryError) {
            console.log(categoryError)
            return
        }


        const categoryId = categoryData[0].id
        console.log(categoryId);


        // Fetch products using the category UUID
        const { data: productsData, error: productsError } = await supabase
            .from('products')
            .select('*, category_product_rel!inner(*)')
            .eq('category_product_rel.category_id', categoryId)

        if (productsError) {
            console.log(productsError)
        } else {
            setProducts(productsData)
            console.log(products);

        }
    }

    useEffect(() => {
        fetchProducts()
    }, [category])

    return (
        <section className={styles.container}>
            <p className={styles.breadcrumb}> <span>Du er her: </span> {home} / {produkter} / {category}</p>
            <h3>{category}</h3>
            <section className={styles.productGrid}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </section>

        </section>
    )
}
export default ProductList