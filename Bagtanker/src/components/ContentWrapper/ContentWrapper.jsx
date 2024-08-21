import styles from './ContentWrapper.module.scss';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const ContentWrapper = ({ children, title }) => {
    document.title = title;
    return (

        <section className={styles.contentWrapper}>
            <Breadcrumb />
            <h1>
                {title}
            </h1>
            {children}

        </section>

    )

}



export default ContentWrapper;