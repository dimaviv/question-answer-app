import React, {useEffect, useState} from 'react';
import styles from './SectionAuth.module.css';
import {ROUTE_HOME, ROUTE_SIGNUP} from 'utils/consts';
import {useActions} from 'hooks/UseActions';
import {useNavigate} from 'react-router-dom';
import {emailPattern, passwordPattern} from 'utils/patterns/auth-pattern';
import googleIcon from 'static/login-page/google-icon.svg';
import appleIcon from 'static/login-page/apple-icon.svg';
import facebookIcon from 'static/login-page/facebook-icon.svg';

const SectionAuth = () => {
        const navigate = useNavigate();
        const {logIn, setIsAuth} = useActions();

        const [emailValue, setEmailValue] = useState('');
        const [passwordValue, setPasswordValue] = useState('');

        const [emailErrorValue, setEmailErrorValue] = useState('');
        const [passwordErrorValue, setPasswordErrorValue] = useState('');

        const [isKeepLoggedIn, setIsKeepLoggedIn] = useState(true);

        const redirectToGoogleSSO = () => {
            const googleLoginURL = 'http://localhost:5000/api/user/login/google';
            const windowFeatures = {
                width: 500,
                height: 600,
                left: window.screen.width / 2 - 250,
                top: window.screen.height / 2 - 300,
                resizable: 0,
                toolbar: 0,
            };
            window.open(
                googleLoginURL,
                '_blank',
                Object.entries(windowFeatures).map(([key, value]) => `${key}=${value}`).join(',')
            );
        };

        const redirectToFacebookSSO = () => {
            const facebookLoginURL = 'http://localhost:5000/api/user/login/facebook';
            const windowFeatures = {
                width: 500,
                height: 600,
                left: window.screen.width / 2 - 250,
                top: window.screen.height / 2 - 300,
                resizable: 0,
                toolbar: 0,
            };
            window.open(
                facebookLoginURL,
                '_blank',
                Object.entries(windowFeatures).map(([key, value]) => `${key}=${value}`).join(',')
            );
        };

        const handleEmailChange = (e) => {
            const emailInput = e.target.value;
            let emailError = '';
            if (emailInput === '') {
                emailError = 'Email is empty';
            } else if (!emailPattern.test(emailInput)) {
                emailError = 'Incorrect email';
            }

            setEmailValue(emailInput);
            setTimeout(() => {
                setEmailErrorValue(emailError);
            }, 1000);
        };

        const handlePasswordChange = (e) => {
            const passwordInput = e.target.value;
            let passwordError = '';
            if (passwordInput === '') {
                passwordError = 'Password is empty';
            } else if (!passwordPattern.test(passwordInput)) {
                passwordError = 'Incorrect password';
            }

            setPasswordValue(passwordInput);
            setTimeout(() => {
                setPasswordErrorValue(passwordError);
            }, 1000);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            let emailError = '';
            let passwordError = '';
            if (emailValue === '') {
                emailError = 'Email is empty';
            } else if (!emailPattern.test(emailValue)) {
                emailError = 'Incorrect email';
            }
            if (passwordValue === '') {
                passwordError = 'Password is empty';
            } else if (!passwordPattern.test(passwordValue)) {
                passwordError = 'Incorrect password';
            }

            setEmailErrorValue(emailError);
            setPasswordErrorValue(passwordError);

            if (emailError === '' && passwordError === '') {
                try {
                    logIn(emailValue, JSON.stringify(passwordValue), isKeepLoggedIn);
                    navigate(ROUTE_HOME);
                } catch (error) {
                    console.error(error);
                }
            }
        };

        useEffect(() => {
            const handleStorageChange = (event) => {
                if (event.key === 'token') {
                    setIsAuth(true)
                    navigate(ROUTE_HOME)
                }
            };

            window.addEventListener('storage', handleStorageChange);

            return () => {
                window.removeEventListener('storage', handleStorageChange);
            };
            // eslint-disable-next-line
        }, []);

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
                        Welcome again
                    </h1>
                </div>
                <div className={styles.sectionAuth__loginAppsContainer}>
                    <button className={`${styles.loginAppsContainer__item} ${styles.loginAppsContainer__itemGoogle}`}
                            onClick={redirectToGoogleSSO}
                    >
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
                    <button className={`${styles.loginAppsContainer__item} ${styles.loginAppsContainer__itemFacebook}`}
                            onClick={redirectToFacebookSSO}
                    >
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
                    <form onSubmit={handleSubmit}
                          className={styles.loginUserContainer__form}
                    >
                        <input type="text"
                               placeholder="Nick or email"
                               value={emailValue}
                               onChange={handleEmailChange}
                               className={
                                   `${styles.form__inputItem} ${emailErrorValue !== '' && styles.form__inputItem_error}`
                               }
                        />
                        {emailErrorValue !== '' &&
                            <div className={styles.form__errorTextBox}>
                                <p className={styles.errorTextBox__text}>
                                    {emailErrorValue}
                                </p>
                            </div>
                        }
                        <input type="password"
                               placeholder="Password"
                               value={passwordValue}
                               onChange={handlePasswordChange}
                               className={
                                   `${styles.form__inputItem} ${passwordErrorValue !== '' && styles.form__inputItem_error}`
                               }
                        />
                        {passwordErrorValue !== '' &&
                            <div className={styles.form__errorTextBox}>
                                <p className={styles.errorTextBox__text}>
                                    {passwordErrorValue}
                                </p>
                            </div>
                        }
                        <button className={styles.form_btnLogin}>
                            Login
                        </button>
                        <div className={styles.form__loginOptions}>
                            <label className={styles.loginOptions__keepLogBox}>
                                <input type="checkbox"
                                       name="keepLoggedIn"
                                       value="true"
                                       defaultChecked={isKeepLoggedIn}
                                       onChange={e => setIsKeepLoggedIn(e.target.checked)}
                                />
                                Keep me logged in
                            </label>
                            <a href={ROUTE_HOME}
                               className={styles.loginOptions__forgotPassText}
                            >
                                Forgot password?
                            </a>
                        </div>
                    </form>
                </div>
                <div className={styles.sectionAuth__askSignUpContainer}>
                    <p className={styles.askSignUpContainer__text}>
                        Don't have an account? <span><a href={ROUTE_SIGNUP}>Sign up</a></span>
                    </p>
                </div>
            </div>
        );
    }
;

export default SectionAuth;