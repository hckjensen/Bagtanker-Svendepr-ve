import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

const Layout = () => {

    return (

        <div className={styles.flexContainer}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )

}

export default Layout