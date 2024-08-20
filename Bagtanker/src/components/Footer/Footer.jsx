import styles from './Footer.module.scss';


const Footer = () => {

    return (
        <footer className={styles.footer}>
            <section className={styles.footerSection}>
                <h3 className={styles.footerLogo}>Bagtanker</h3>
                <div className={styles.text}>
                    <div className={styles.adress}>
                        <p>Øster Uttrupvej 1</p>
                        <p>9000 Aalborg</p>
                    </div>
                    <div className={styles.contactInfo}>
                        <p>Tlf: 12345678</p>
                        <p>Email: info@bagtanker.dk</p>
                    </div>
                </div>


            </section>
            <section className={styles.newsLetter}>
                <h3>Tilmeld dig Bagtankers nyhedsbrev</h3>
                <p>Få vores nyheder direkte i din indbakke</p>
                <form>
                    <input type="email" placeholder="Indtast din email" />
                    <button type="submit">Tilmeld</button>
                </form>

            </section>
        </footer>
    )

}

export default Footer