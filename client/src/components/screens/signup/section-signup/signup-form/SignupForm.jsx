import {useState} from 'react';

import {passwordPattern, emailPattern} from 'utils/patterns/auth';
import {registration} from 'api/authAPI';
import {useNavigate} from 'react-router-dom';
import {ROUTE_LOGIN} from 'utils/consts';
import {StyledSignupForm} from './StyledSignupForm';
import hiddenPasswordImg from 'static/icons/eye-closed.svg';
import shownPasswordImg from 'static/icons/eye-open.svg';

const SignupForm = () => {
    const navigate = useNavigate()
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [emailErrorValue, setEmailErrorValue] = useState('');
    const [passwordErrorValue, setPasswordErrorValue] = useState('');

    const [isHiddenPassword, setIsHiddenPassword] = useState(true);

    const cleanRegInputs = () => {
        setEmailValue('');
        setPasswordValue('');
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
            registration(emailValue, passwordValue)
                .then(
                    () => {
                        console.log('Congrats with a registration!');
                        navigate(ROUTE_LOGIN);
                        cleanRegInputs();
                    }
                )
                .catch(e => console.error(e));
        }
    };

    return (
        <StyledSignupForm onSubmit={handleSubmit}>
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
            <button className={'form_signupBtn'}>
                Sign Up
            </button>
        </StyledSignupForm>
    );
};

export default SignupForm;