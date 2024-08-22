import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import ContactForm from "../components/Contact/ContactForm";
import Map from "../components/Contact/Map";
import styles from '../components/Contact/Contact.module.scss';

const ContactPage = () => {

    return (
        <ContentWrapper title="Kontakt os">
            <div className={styles.contactWrapper}>
                <ContactForm />
                <Map />
            </div>

        </ContentWrapper>
    )


}

export default ContactPage