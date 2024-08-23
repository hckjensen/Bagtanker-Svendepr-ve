import styles from './Header.module.scss';

const Logo = ({ title }) => {


    return (
        <div className={styles.logo}>
            <h1 className={styles.logoText}>{title}</h1>
            <div className={styles.logoEclipse}></div>
        </div>
    )
}

export default Logo