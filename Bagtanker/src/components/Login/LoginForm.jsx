import styles from './Login.module.scss';

const LoginForm = () => {
    return (
        <div className={styles.loginForm}>
            <p>Indtast og send username og password for at logge ind</p>
            <form>
                <input type="text" placeholder="Indtast dit brugernavn" />
                <input type="password" placeholder="Indtast dit password" />
                <div className={styles.buttonContainer}>
                    <button type="submit">Login</button>
                </div>

            </form>
        </div>
    )
}

export default LoginForm;