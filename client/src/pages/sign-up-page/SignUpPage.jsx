import React from 'react';
import styles from './SignUpPage.module.css';
import SectionSignUp from '../../components/sign-up-page/section-sign-up/SectionSignUp';

const SignUpPage = () => {
    return (
        <div className={styles.signUpPage}>
            <SectionSignUp />
        </div>
    );
};

export default SignUpPage;