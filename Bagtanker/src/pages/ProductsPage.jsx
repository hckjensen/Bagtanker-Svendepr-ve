import { useParams } from 'react-router-dom'

const ProductsPage = () => {

    const { category } = useParams()

    return (
        <>

            <h3>{category}</h3>
        </>
    )
}
export default ProductsPage