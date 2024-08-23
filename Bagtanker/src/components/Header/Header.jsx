import styles from './Header.module.scss';

import CategoryNav from '../CategoryNav/CategoryNav';
import Logo from './Logo';

const Header = () => {



    return (
        <header className={styles.header}>
            <section className={styles.banner}>
                <Logo title="Bagtanker" />

            </section>
            <CategoryNav />
        </header>
    )

}

export default Header