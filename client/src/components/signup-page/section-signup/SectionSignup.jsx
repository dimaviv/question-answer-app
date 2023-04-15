import React from 'react';
import styles from './SectionSignup.module.css';
import {ROUTE_HOME, ROUTE_LOGIN} from 'utils/consts';
import googleIcon from 'static/login-page/google-icon.svg';
import appleIcon from 'static/login-page/apple-icon.svg';
import facebookIcon from 'static/login-page/facebook-icon.svg';
import SignupForm from './signup-form/SignupForm';

const SectionSignup = () => {

    return (
        <div className={styles.sectionSignUp}>
            <div className={styles.sectionSignUp__redirectContainer}>
                <a href={ROUTE_HOME}
                   className={styles.redirectContainer__text}
                >
                    No, thanks
                </a>
            </div>
            <div className={styles.sectionSignUp__titleContainer}>
                <h1 className={styles.titleContainer__text}>
                    Welcome
                </h1>
            </div>
            <div className={styles.sectionSignUp__loginAppsContainer}>
                <button className={`${styles.loginAppsContainer__item} ${styles.loginAppsContainer__itemGoogle}`}>
                    <img src={googleIcon}
                         alt={'Login with Google'}
                    />
                    <p className={styles.item__text}>
                        Sign up with Google
                    </p>
                </button>
                <button className={`${styles.loginAppsContainer__item} ${styles.loginAppsContainer__itemApple}`}>
                    <img src={appleIcon}
                         alt={'Login with Apple'}
                    />
                    <p className={styles.item__text}>
                        Sign up with Apple
                    </p>
                </button>
                <button className={`${styles.loginAppsContainer__item} ${styles.loginAppsContainer__itemFacebook}`}>
                    <img src={facebookIcon}
                         alt={'Login with Facebook'}
                    />
                    <p className={styles.item__text}>
                        Sign up with Facebook
                    </p>
                </button>
            </div>
            <div className={styles.sectionSignUp__decorTextContainer}>
                <div className={styles.decorTextContainer__decorTextBox}>
                    <h2 className={styles.decorTextBox__text}>
                        Or
                    </h2>
                </div>
            </div>
            <div className={styles.sectionSignUp__loginUserContainer}>
                <SignupForm />
            </div>
            <div className={styles.sectionSignUp__askSignUpContainer}>
                <p className={styles.askSignUpContainer__text}>
                    Do you have an account? <span><a href={ROUTE_LOGIN}>Sign in</a></span>
                </p>
            </div>
        </div>
    );
};

export default SectionSignup;