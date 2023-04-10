import React from 'react';
import styles from './SignupPage.module.css';
import SectionSignup from '../../components/signup-page/section-signup/SectionSignup';

const SignupPage = () => {
    return (
        <div className={styles.signUpPage}>
            <SectionSignup />
        </div>
    );
};

export default SignupPage;