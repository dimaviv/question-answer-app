import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {ROUTE_HOME} from 'utils/consts';
import {emailPattern, passwordPattern} from 'utils/patterns/auth';
import {useActions} from 'hooks/useActions';
import {login} from 'api/authAPI';
import {StyledLoginForm} from './StyledLoginForm';
import shownPasswordImg from 'static/icons/eye-open.svg';
import hiddenPasswordImg from 'static/icons/eye-closed.svg';

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
    const [isHiddenPassword, setIsHiddenPassword] = useState(true);

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
        <StyledLoginForm onSubmit={handleSubmit}>
            <input type='text'
                   placeholder='E-mail'
                   value={emailValue}
                   onChange={handleEmailChange}
                   className={`form__inputItem ${emailErrorValue !== '' && 'form__inputItem_error'}`}
            />
            {emailErrorValue !== '' &&
                <div className={'form__errorTextBox'}>
                    <p className={'errorTextBox__text'}>
                        {emailErrorValue}
                    </p>
                </div>
            }
            <div className='inputPasswordBox'>
                <input type={isHiddenPassword ? 'password' : 'text'}
                       placeholder='Password'
                       value={passwordValue}
                       onChange={handlePasswordChange}
                       className={`form__inputItem ${passwordErrorValue !== '' && 'form__inputItem_error'}`}
                />
                <button className='passwordSecurityBtn'
                        type='button'
                        onClick={() => setIsHiddenPassword(!isHiddenPassword)}
                >
                    <img src={isHiddenPassword ? hiddenPasswordImg : shownPasswordImg}
                         alt={'Shown password'}
                         height={23}
                         width={23}
                    />
                </button>
            </div>
            {passwordErrorValue !== '' &&
                <div className={'form__errorTextBox'}>
                    <p className={'errorTextBox__text'}>
                        {passwordErrorValue}
                    </p>
                </div>
            }
            <button className={'form_signinBtn'}>
                Log in
            </button>
            <div className={'form__signinOptions'}>
                <label className={'signinOptions__keepLogBox'}>
                    <input type='checkbox'
                           name='keepLoggedIn'
                           value='true'
                           defaultChecked={isKeepLoggedIn}
                           onChange={e => setIsKeepLoggedIn(e.target.checked)}
                    />
                    Keep me logged in
                </label>
                <a href={ROUTE_HOME}
                   className={'signinOptions__forgotPassText'}
                >
                    Forgot password?
                </a>
            </div>
        </StyledLoginForm>
    );
};

export default LoginForm;