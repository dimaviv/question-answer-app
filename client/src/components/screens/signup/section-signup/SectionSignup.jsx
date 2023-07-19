import React from 'react';
import styles from './SectionSignup.module.css';
import {ROUTE_HOME, ROUTE_LOGIN} from 'utils/consts';
import googleIcon from 'static/pages/login/google-icon.svg';
// import appleIcon from 'static/login-page/apple-icon.svg';
import facebookIcon from 'static/pages/login/facebook-icon.svg';
import SignupForm from './signup-form/SignupForm';

const SectionSignup = () => {

    return (
        <div className={styles.sectionSignup}>
            <div className={styles.sectionSignup__redirectContainer}>
                <a href={ROUTE_HOME}
                   className={styles.redirectContainer__text}
                >
                    No, thanks
                </a>
            </div>
            <div className={styles.sectionSignup__titleContainer}>
                <h1 className={styles.titleContainer__text}>
                    Welcome
                </h1>
            </div>
            <div className={styles.sectionSignup__signupAppsContainer}>
                <button className={`${styles.signupAppsContainer__btn} ${styles.signupAppsContainer__googleAuthBtn}`}>
                    <img src={googleIcon}
                         alt={'Login with Google'}
                    />
                    <p className={styles.item__text}>
                        Sign up with Google
                    </p>
                </button>
                {/*<button className={`${styles.loginAppsContainer__btn} ${styles.loginAppsContainer__appleAuthBtn}`}>*/}
                {/*    <img src={appleIcon}*/}
                {/*         alt={'Login with Apple'}*/}
                {/*    />*/}
                {/*    <p className={styles.item__text}>*/}
                {/*        Sign up with Apple*/}
                {/*    </p>*/}
                {/*</button>*/}
                <button className={`${styles.signupAppsContainer__btn} ${styles.signupAppsContainer__facebookAuthBtn}`}>
                    <img src={facebookIcon}
                         alt={'Login with Facebook'}
                    />
                    <p className={styles.item__text}>
                        Sign up with Facebook
                    </p>
                </button>
            </div>
            <div className={styles.sectionSignup__decorTextContainer}>
                <div className={styles.decorTextContainer__decorTextBox}>
                    <h2 className={styles.decorTextBox__text}>
                        Or
                    </h2>
                </div>
            </div>
            <div className={styles.sectionSignup__loginUserContainer}>
                <SignupForm />
            </div>
            <div className={styles.sectionSignup__askSignupContainer}>
                <p className={styles.askSignupContainer__text}>
                    Do you have an account? <span><a href={ROUTE_LOGIN}>Sign in</a></span>
                </p>
            </div>
        </div>
    );
};

export default SectionSignup;