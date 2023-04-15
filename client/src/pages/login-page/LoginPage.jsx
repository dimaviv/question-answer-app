import React from 'react';
import styles from './LoginPage.module.css';
import SectionAuth from 'components/login-page/section-auth/SectionAuth';

const LoginPage = () => {
    return (
        <div className={styles.loginPage}>
            <SectionAuth />
        </div>
    );
};

export default LoginPage;