import SectionAuth from './section-login/SectionAuth';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <SectionAuth />
        </div>
    );
};

export default Login;