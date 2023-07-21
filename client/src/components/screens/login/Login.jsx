import SectionLogin from './section-login/SectionLogin';
import styles from './Login.module.css';
import Layout from 'components/layout/Layout';

const Login = () => {
    return (
        <Layout title={'Log in'} description={'Page for log in your account'}>
            <div className={styles.loginPage}>
                <SectionLogin />
            </div>
        </Layout>
    );
};

export default Login;