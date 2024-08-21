import { useParams } from 'react-router-dom';

const ProductDetail = () => {

    const { slug } = useParams();


    return (
        <div>
            <p>{slug}</p>
        </div>
    );
};

export default ProductDetail;