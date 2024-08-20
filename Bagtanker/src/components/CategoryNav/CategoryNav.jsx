import styles from './CategoryNav.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CategoryNav = ({ items }) => {

    return (
        <nav className={styles.categoryNav}>
            <ul className={styles.list}>
                {items.map(item => (
                    <li className={styles.listItem} key={item.path}>
                        <NavLink to={item.path}>{item.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )

}

CategoryNav.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        })
    ).isRequired,
};


export default CategoryNav