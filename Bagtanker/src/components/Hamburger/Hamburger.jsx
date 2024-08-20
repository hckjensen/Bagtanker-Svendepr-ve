import { useState } from 'react';
import styles from './Hamburger.module.scss'; // Assuming you have a CSS module

const Hamburger = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`${styles.menuBtn5} ${isActive ? styles.active : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
        </div>
    );
};

export default Hamburger;