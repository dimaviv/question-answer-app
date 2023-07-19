import SectionSignup from './section-signup/SectionSignup';
import styles from './Signup.module.css';

const Signup = () => {
    return (
        <div className={styles.signUpPage}>
            <SectionSignup />
        </div>
    );
};

export default Signup;