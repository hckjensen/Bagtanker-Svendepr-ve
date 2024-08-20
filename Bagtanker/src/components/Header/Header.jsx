import styles from './Header.module.scss';
import Hamburger from '../Hamburger/Hamburger';
import CategoryNav from '../CategoryNav/CategoryNav';

const Header = () => {

    const navItems = [
        { path: "/home/produkter/rundstykker", name: 'RUNDSTYKKER' },
        { path: "/home/produkter/baguettes", name: 'BAGUETTES' },
        { path: "/home/produkter/franskbrød", name: 'FRANSKBRØD' },
        { path: "/home/produkter/kager", name: 'KAGER' },
        { path: "/home/produkter/rugbrød", name: 'RUGBRØD' }
    ];

    return (
        <header className={styles.header}>
            <section className={styles.banner}>
                <div className={styles.logo}>
                    <h1 className={styles.logoText}>Bagtanker</h1>
                    <div className={styles.logoEclipse}></div>
                </div>
                <div className={styles.hamburger}>
                    <Hamburger />
                </div>

            </section>
            <CategoryNav items={navItems} />
        </header>
    )

}

export default Header