import { useEffect, useState } from 'react';
import styles from './Hamburger.module.scss'; // Assuming you have a CSS module

const Hamburger = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 200) { // Adjust this value based on your layout
                document.documentElement.style.setProperty('--hamburger-bg-color', '#000'); // Dark color
            } else {
                document.documentElement.style.setProperty('--hamburger-bg-color', '#fff'); // Light color
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.menuBtn5} ${isActive ? styles.active : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
        </div>
    );
};

export default Hamburger;