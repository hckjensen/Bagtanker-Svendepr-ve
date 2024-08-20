import { useParams } from 'react-router-dom';

const ProductDetail = () => {

    const { slug } = useParams();


    return (
        <div>
            <p>hello</p>
        </div>
    );
};

export default ProductDetail;