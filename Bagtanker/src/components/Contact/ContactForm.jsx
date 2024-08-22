import styles from './Contact.module.scss';
import { SupabaseContext } from '../../providers/supabaseProvider';
import { useContext, useState, useEffect } from 'react';

const ContactForm = () => {

    const supabase = useContext(SupabaseContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = async (e) => {

        e.preventDefault();

        const { data, error } = await supabase.from('messages').insert([
            { name, email, message }
        ]);

        if (error) {
            console.log('error', error)
        } else {
            console.log('data', data)
        }

        setName('');
        setEmail('');
        setMessage('');

    }


    return (
        <div className={styles.contactForm}>


            <p>Udfyld og send formularen og vi vil hurtigst muligt besvare dine spørgsmål</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Indtast dit navn'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder='Indtast din email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder='Skriv en besked'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required

                />
                <div className={styles.buttonContainer}>
                    <button type="submit">Send</button>
                </div>

            </form>
        </div>
    )

}

export default ContactForm;