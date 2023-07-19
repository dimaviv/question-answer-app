import {useState} from 'react';

import styles from './SignupForm.module.css';
import {passwordPattern, emailPattern} from 'utils/patterns/auth';
import {registration} from 'api/authAPI';
import {useNavigate} from 'react-router-dom';
import {ROUTE_LOGIN} from 'utils/consts';

const SignupForm = () => {
    const navigate = useNavigate()
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [emailErrorValue, setEmailErrorValue] = useState('');
    const [passwordErrorValue, setPasswordErrorValue] = useState('');

    const cleanRegInputs = () => {
        setEmailValue('')
        setPasswordValue('')
    }

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
            registration(emailValue, passwordValue)
                .then(
                    () => {
                        console.log('Congrats with a registration!');
                        navigate(ROUTE_LOGIN)
                        cleanRegInputs()
                    }
                )
                .catch(e => console.error(e));
        }
    };

    return (
        <form onSubmit={handleSubmit}
              className={styles.signupUserContainer__form}
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
            <button className={styles.form_signupBtn}>
                Sign Up
            </button>
        </form>
    );
};

export default SignupForm;