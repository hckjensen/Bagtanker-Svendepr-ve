import styles from './Footer.module.scss';
import { SupabaseContext } from '../../providers/supabaseProvider';
import { useContext, useState, useEffect } from 'react';

const Footer = () => {
    const supabase = useContext(SupabaseContext);
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [timeoutId, setTimeoutId] = useState(null);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        const { data, error } = await supabase
            .from('newsletter_emails') // Replace with your table name
            .insert([{ email }]);

        if (error) {
            setErrorMessage('Kunne ikke sende til databasen - prøv igen senere' + error.message);
        } else {
            setSuccessMessage('Tak for din tilmelding!'); // Show success message
            setEmail(''); // Clear the input field

            const id = setTimeout(() => {
                setSuccessMessage('');
            }, 5000); // Clear the success message after 5 seconds
            setTimeoutId(id);
        }
    };

    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

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
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Indtast din email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Tilmeld</button>
                </form>
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                {successMessage && <p className={styles.success}>{successMessage}</p>}
            </section>
        </footer>
    );
};

export default Footer;