import styles from './Header.module.scss';
import Hamburger from '../Hamburger/Hamburger';
import CategoryNav from '../CategoryNav/CategoryNav';

const Header = () => {



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
            <CategoryNav />
        </header>
    )

}

export default Header