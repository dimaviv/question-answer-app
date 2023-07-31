import {useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useMutation} from 'react-query';

import {ROUTE_HOME} from 'utils/consts';
import {emailPattern, passwordPattern} from 'utils/patterns/auth';
import {useActions} from 'hooks/useActions';
import {login} from 'api/auth';
import {StyledLoginForm} from './StyledLoginForm';
import shownPasswordImg from 'static/icons/eye-open.svg';
import hiddenPasswordImg from 'static/icons/eye-closed.svg';

const LoginForm = () => {
    const navigate = useNavigate();
    const formLoginRef = useRef(null);
    const {setIsAuth} = useActions();
    const mutation = useMutation(
        logUser => login(logUser),
        {
            onSuccess: (data) => {
                setErrors(prevState => ({...prevState, request: ''}));
                const storage = isKeepLoggedIn ? localStorage : sessionStorage;
                setStorageItem('token', data.token, storage);
                setStorageItem('auth', 'true', storage);
                setIsAuth(true);
                formLoginRef.current.reset();
                navigate(ROUTE_HOME);
            },
            onError: (e) => {
                setErrors(prevState => ({...prevState, request: e?.message || 'Something went wrong.'}));
            }
        }
    );
    const setStorageItem = (key, value, storage) => {
        storage.setItem(key, value);
    };
    const [isKeepLoggedIn, setIsKeepLoggedIn] = useState(true);
    const [isHiddenPassword, setIsHiddenPassword] = useState(true);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const requiredFields = ['email', 'password'];
        let isValid = true;
        let newErrors = {};

        for (const field of requiredFields) {
            if (!formData.get(field).trim()) {
                isValid = false;
                newErrors = {...newErrors, [field]: 'This field is required'};
            } else {
                newErrors = {...newErrors, [field]: ''};
            }
        }
        if (!newErrors.email && !emailPattern.test(formData.get('email'))) {
            isValid = false;
            newErrors = {
                ...newErrors,
                ['email']: 'Email is not valid. Please use a valid email address, e.g., example@example.com.'
            };
        }
        if (!newErrors.password && !passwordPattern.test(formData.get('password'))) {
            isValid = false;
            newErrors = {
                ...newErrors,
                ['password']: `Password is not valid. Please make sure it is 8 to 16 characters long.`
            };
        }

        setErrors(newErrors);

        if (isValid) {
            const fields = Object.fromEntries(formData);
            mutation.mutate(fields);
        }
    };

    return (
        <StyledLoginForm ref={formLoginRef}
                         onSubmit={handleSubmit}
        >
            <input id={'emailLogin'}
                   name={'email'}
                   type='text'
                   placeholder='E-mail'
                   className={`form__inputItem ${errors.email && 'form__inputItem_error'}`}
            />
            {errors.email &&
                <label htmlFor={'emailLogin'}
                       className={'errorTextBox__text'}
                >
                    {errors.email}
                </label>
            }
            <div className='inputPasswordBox'>
                <input id={'passwordLogin'}
                       name={'password'}
                       type={isHiddenPassword ? 'password' : 'text'}
                       placeholder='Password'
                       className={`form__inputItem ${errors.password && 'form__inputItem_error'}`}
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
            {errors.password &&
                <label htmlFor={'emailLogin'}
                       className={'errorTextBox__text'}
                >
                    {errors.password}
                </label>
            }
            <button type={'submit'}
                    className={'form_signinBtn'}
            >
                Log in
            </button>
            {errors.request &&
                <label htmlFor={'emailLogin'}
                       className={'errorTextBox__text'}
                >
                    {errors.request}
                </label>
            }
            <div className={'form__signinOptions'}>
                <label className={'signinOptions__keepLogBox'}>
                    <input type='checkbox'
                           value='true'
                           defaultChecked={isKeepLoggedIn}
                           onChange={e => setIsKeepLoggedIn(e.target.checked)}
                    />
                    Keep me logged in
                </label>
                <Link to={ROUTE_HOME}
                      className={'signinOptions__forgotPassText'}
                >
                    Forgot password?
                </Link>
            </div>
        </StyledLoginForm>
    );
};

export default LoginForm;