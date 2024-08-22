import styles from './SideNav.module.scss';
import { NavLink } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import { useState } from 'react';

const SideNav = ({ items }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSideNav = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>

            <nav className={`${styles.sideNav} ${isVisible ? styles.visible : ''}`}>
                <div onClick={toggleSideNav} className={styles.hamburger}>
                    <Hamburger className={styles.icon} />
                </div>

                <ul>

                    {items.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={item.link} activeClassName={styles.active} exact onClick={toggleSideNav}>
                                    <div className={styles.linkWrapper}>
                                        {item.name}
                                    </div>
                                </NavLink>
                            </li>
                        );
                    })}

                </ul>

            </nav>
        </>
    )
}

export default SideNav