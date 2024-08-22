import styles from './Header.module.scss';

import CategoryNav from '../CategoryNav/CategoryNav';

const Header = () => {



    return (
        <header className={styles.header}>
            <section className={styles.banner}>
                <div className={styles.logo}>
                    <h1 className={styles.logoText}>Bagtanker</h1>
                    <div className={styles.logoEclipse}></div>
                </div>

            </section>
            <CategoryNav />
        </header>
    )

}

export default Header