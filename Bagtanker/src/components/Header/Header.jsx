import styles from './Header.module.scss';
import Hamburger from '../Hamburger/Hamburger';
import CategoryNav from '../CategoryNav/CategoryNav';

const Header = () => {

    const navItems = [
        { path: "/rundstykker", name: 'RUNDSTYKKER' },
        { path: "/baguettes", name: 'BAGUETTES' },
        { path: "/franskbrød", name: 'FRANSKBRØD' },
        { path: "/kager", name: 'KAGER' },
        { path: "/rugbrød", name: 'RUGBRØD' }
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