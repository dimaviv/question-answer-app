import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import styles from './LoginForm.module.css';
import {ROUTE_HOME} from 'utils/consts';
import {emailPattern, passwordPattern} from 'utils/patterns/auth';
import {useActions} from 'hooks/UseActions';
import {login} from 'api/authAPI';

const LoginForm = () => {
    const navigate = useNavigate();
    const {signIn, setIsAuth} = useActions();

    const setStorageItem = (key, value, storage) => {
        storage.setItem(key, value);
    };

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const [emailErrorValue, setEmailErrorValue] = useState('');
    const [passwordErrorValue, setPasswordErrorValue] = useState('');

    const [isKeepLoggedIn, setIsKeepLoggedIn] = useState(true);

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
            login(emailValue, passwordValue)
                .then(data => {
                    const storage = isKeepLoggedIn ? localStorage : sessionStorage;
                    setStorageItem('token', data.token, storage);
                    setStorageItem('auth', 'true', storage);
                    setIsAuth(true);
                    navigate(ROUTE_HOME);
                })
                .catch(e => {
                    console.error(e);
                });
        }
    };

    return (
        <form onSubmit={handleSubmit}
              className={styles.signinUserContainer__form}
        >
            <input type='text'
                   placeholder='E-mail'
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
            <input type='password'
                   placeholder='Password'
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
            <button className={styles.form_signinBtn}>
                Sign in
            </button>
            <div className={styles.form__signinOptions}>
                <label className={styles.signinOptions__keepLogBox}>
                    <input type='checkbox'
                           name='keepLoggedIn'
                           value='true'
                           defaultChecked={isKeepLoggedIn}
                           onChange={e => setIsKeepLoggedIn(e.target.checked)}
                    />
                    Keep me logged in
                </label>
                <a href={ROUTE_HOME}
                   className={styles.signinOptions__forgotPassText}
                >
                    Forgot password?
                </a>
            </div>
        </form>
    );
};

export default LoginForm;