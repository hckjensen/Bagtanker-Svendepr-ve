import styles from './Products.module.scss';
import userPlaceholder from '../../assets/Images/userPlaceholder.jpeg';
import { useContext, useState, useEffect } from 'react';
import { SupabaseContext } from '../../providers/supabaseProvider';
import PropTypes from 'prop-types';


const ProductComments = ({ productId }) => {

    console.log(productId);

    const supabase = useContext(SupabaseContext);
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {

        const { data, error } = await supabase
            .from('user_comments')
            .select('created_at, comment, user_id, title')
            .eq('product_id', productId)
            .order('created_at', { ascending: false });

        if (error) {
            console.log(error);
        } else {
            console.log(data);

            setComments(data);
        }
    }

    useEffect(() => { fetchComments() }, [productId])

    return (
        <section className={styles.comments}>
            <h3>Kommentarer</h3>
            <p>skriv kommentar</p>
            {comments.map((comment, index) => (
                <section className={styles.commentContainer} key={index}>
                    <div className={styles.userImage}>
                        <img src={userPlaceholder} alt="img" />
                    </div>
                    <div className={styles.comment}>
                        <p className={styles.userName}>{comment.title}</p>
                        <p>{comment.created_at}</p>
                        <p>{comment.comment}</p>
                    </div>

                </section>
            ))}

        </section>
    );

}

ProductComments.propTypes = { productId: PropTypes.string.isRequired }

export default ProductComments;