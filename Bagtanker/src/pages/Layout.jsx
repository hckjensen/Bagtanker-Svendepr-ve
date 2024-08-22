import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SideNav from '../components/SideNav/SideNav';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';


const Layout = () => {

    const navItems = [
        { name: 'Forside', link: '/' },
        { name: 'Produkter', link: '/home/produkter/rundstykker' },
        { name: 'Nyheder', link: '/home/nyheder' },
        { name: 'Kontakt', link: '/home/kontakt' },
        { name: 'Login', link: '/home/login' }
    ]

    return (


        <div className={styles.flexContainer}>
            <SideNav items={navItems} />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>

    )

}

export default Layout