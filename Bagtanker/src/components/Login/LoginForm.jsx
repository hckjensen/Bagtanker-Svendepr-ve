import styles from './Login.module.scss';
import { SupabaseContext } from '../../providers/supabaseProvider';
import { useContext, useState, useEffect } from 'react';

const LoginForm = () => {
    const supabase = useContext(SupabaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [stayLoggedIn, setStayLoggedIn] = useState(false);

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                setIsLoggedIn(true);
            }
        };
        checkSession();
    }, [supabase]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
            options: {
                remember: stayLoggedIn
            }
        });

        if (error) {
            setError(error.message);
            console.log('error', error);
        } else {
            setIsLoggedIn(true);
            console.log('Logged in successfully:', data);
        }

        setEmail('');
        setPassword('');
    };

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            setError(error.message);
            console.log('error', error);
        } else {
            setIsLoggedIn(false);
            console.log('Logged out successfully');
        }
    };

    return (
        <div className={styles.loginForm}>
            {isLoggedIn ? (
                <div className={styles.logout}>
                    <p>Du er logget ind.</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <p>Indtast og send username og password for at logge ind</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Indtast din email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Indtast dit password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className={styles.checkboxContainer}>
                            <input
                                type="checkbox"
                                id="stayLoggedIn"
                                checked={stayLoggedIn}
                                onChange={(e) => setStayLoggedIn(e.target.checked)}
                            />
                            <label htmlFor="stayLoggedIn">Stay logged in</label>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    {error && <p className={styles.error}>{error}</p>}
                </div>
            )}
        </div>
    );
};

export default LoginForm;