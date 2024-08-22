import { useLocation, Link } from 'react-router-dom';
import styles from './Breadcrumb.module.scss';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <>

            <nav className={styles.breadcrumb}>
                <span className={styles.duErHer}>
                    Du er her:
                </span>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return (
                        <span key={to} className={styles.breadcrumbItem}>
                            {isLast ? (
                                <span>{decodeURIComponent(value)}</span>
                            ) : (
                                <Link to={to}>{decodeURIComponent(value)}</Link>
                            )}
                            {!isLast && <span className={styles.separator}> / </span>}
                        </span>
                    );
                })}
            </nav>
        </>
    );

};

export default Breadcrumb;