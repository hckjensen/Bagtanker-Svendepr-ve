import styles from './SideNav.module.scss';
import { NavLink } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';
import { useState } from 'react';

const SideNav = () => {
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
                    <li>
                        <NavLink to="/" >Forside</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/produkter/rundstykker" >Produkter</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/nyheder" >Nyheder</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/kontakt" >Kontakt</NavLink>
                    </li>
                    <li>
                        <NavLink to="/home/login" >Login</NavLink>
                    </li>

                </ul>

            </nav>
        </>
    )
}

export default SideNav