import SectionLogin from './section-login/SectionLogin';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <SectionLogin />
        </div>
    );
};

export default Login;