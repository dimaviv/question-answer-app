import React, {useState} from 'react';
import styles from './SectionSignup.module.css';
import {ROUTE_HOME, ROUTE_LOGIN} from 'utils/consts';
import {useActions} from 'hooks/UseActions';
import googleIcon from 'static/login-page/google-icon.svg';
import appleIcon from 'static/login-page/apple-icon.svg';
import facebookIcon from 'static/login-page/facebook-icon.svg';

const SectionSignup = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [emailErrorValue, setEmailErrorValue] = useState('');
    const [passwordErrorValue, setPasswordErrorValue] = useState('');
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    const passwordPattern = /^[a-zA-Z0-9]{8,}$/;

    const {signUp} = useActions();

    const handleEmailChange = (e) => {
        const emailInput = e.target.value;
        let emailError = '';
        if (emailInput === '') {
            emailError = 'Email is empty';
        } else if (!emailPattern.test(emailInput)) {
            emailError ='Incorrect email';
        }

        setEmailValue(emailInput);
        setTimeout(() => {
            setEmailErrorValue(emailError);
        }, 1000)
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
        }, 1000)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let emailError = '';
        let passwordError = '';
        if (emailValue === '') {
            emailError = 'Email is empty';
        } else if (!emailPattern.test(emailValue)) {
            emailError ='Incorrect email';
        }
        if (passwordValue === '') {
            passwordError = 'Password is empty';
        } else if (!passwordPattern.test(passwordValue)) {
            passwordError = 'Incorrect password';
        }

        setEmailErrorValue(emailError);
        setPasswordErrorValue(passwordError);

        if (emailError === '' && passwordError === '') {
            signUp(emailValue, JSON.stringify(passwordValue));
        }
    };

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
                        Sign Up
                    </button>
                </form>
            </div>
            <div className={styles.sectionSignUp__askSignUpContainer}>
                <p className={styles.askSignUpContainer__text}>
                    Do you have an account? <span><a href={ROUTE_LOGIN}>Log in</a></span>
                </p>
            </div>
        </div>
    );
};

export default SectionSignup;