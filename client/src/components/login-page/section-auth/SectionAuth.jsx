import React, {useState} from 'react';
import styles from './SectionAuth.module.css';
import {ROUTE_HOME} from '../../../utils/consts';
import googleIcon from './../../../static/login-page/google-icon.svg';
import appleIcon from './../../../static/login-page/apple-icon.svg';
import facebookIcon from './../../../static/login-page/facebook-icon.svg';

const SectionAuth = () => {
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles.sectionAuth}>
            <div className={styles.sectionAuth__redirectContainer}>
                <a href={ROUTE_HOME}
                   className={styles.redirectContainer__text}
                >
                    No, thanks
                </a>
            </div>
            <div className={styles.sectionAuth__titleContainer}>
                <h1 className={styles.titleContainer__text}>
                    Welcome
                </h1>
            </div>
            <div className={styles.sectionAuth__loginAppsContainer}>
                <button className={`${styles.loginAppsContainer__item} ${styles.loginAppsContainer__itemGoogle}`}>
                    <img src={googleIcon}
                         alt={'Login with Google'}
                    />
                    <p className={styles.item__text}>
                        Login with Google
                    </p>
                </button>
                <button className={`${styles.loginAppsContainer__item} ${styles.loginAppsContainer__itemApple}`}>
                    <img src={appleIcon}
                         alt={'Login with Apple'}
                    />
                    <p className={styles.item__text}>
                        Login with Apple
                    </p>
                </button>
                <button className={`${styles.loginAppsContainer__item} ${styles.loginAppsContainer__itemFacebook}`}>
                    <img src={facebookIcon}
                         alt={'Login with Facebook'}
                    />
                    <p className={styles.item__text}>
                        Login with Facebook
                    </p>
                </button>
            </div>
            <div className={styles.sectionAuth__decorTextContainer}>
                <div className={styles.decorTextContainer__decorTextBox}>
                    <h2 className={styles.decorTextBox__text}>
                        Or
                    </h2>
                </div>
            </div>
            <div className={styles.sectionAuth__loginUserContainer}>
                <form onSubmit={handleSubmit} className={styles.loginUserContainer__form}>
                    <input type="text"
                           placeholder='Nick or email'
                           value={loginValue}
                           onChange={e => setLoginValue(e.target.value)}
                           className={styles.form__inputItem}
                    />
                    <input type="password"
                           placeholder='Password'
                           value={passwordValue}
                           onChange={e => setPasswordValue(e.target.value)}
                           className={styles.form__inputItem}
                    />
                    <button className={styles.form_btnLogin}>
                        Login
                    </button>
                    <div className={styles.form__loginOptions}>
                        <label className={styles.loginOptions__keepLogBox}>
                            <input type="checkbox"
                                   name="keepLoggedIn"
                                   value="true"
                            />
                            Keep me logged in
                        </label>
                        <a href={ROUTE_HOME} className={styles.loginOptions__forgotPassText}>
                            Forgot password?
                        </a>
                    </div>
                </form>
            </div>
            <div className={styles.sectionAuth__askSignUpContainer}>
                <p className={styles.askSignUpContainer__text}>
                    Don't have an account? <span>Sign up</span>
                </p>
            </div>
        </div>
    );
};

export default SectionAuth;