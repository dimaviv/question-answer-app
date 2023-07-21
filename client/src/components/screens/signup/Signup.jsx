import SectionSignup from './section-signup/SectionSignup';
import styles from './Signup.module.css';
import Layout from 'components/layout/Layout';

const Signup = () => {
    return (
        <Layout title={'Sign up'} description={'Page for sign up in our website'}>
            <div className={styles.signUpPage}>
                <SectionSignup />
            </div>
        </Layout>
    );
};

export default Signup;