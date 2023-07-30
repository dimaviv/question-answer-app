import {useRef, useState} from 'react';

import {passwordPattern, emailPattern} from 'utils/patterns/auth';
import {registration} from 'api/authAPI';
import {useNavigate} from 'react-router-dom';
import {ROUTE_LOGIN} from 'utils/consts';
import {StyledSignupForm} from './StyledSignupForm';
import hiddenPasswordImg from 'static/icons/eye-closed.svg';
import shownPasswordImg from 'static/icons/eye-open.svg';
import {useMutation, useQueryClient} from 'react-query';

const SignupForm = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const formRegRef = useRef(null);
    const mutation = useMutation(
        newUser => registration(newUser),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['user-rating'])
                    .then(() => {
                        formRegRef.current.reset();
                        navigate(`/${ROUTE_LOGIN}`);
                    });
            },
            onError: (e) => {
                setErrors(prevState => ({...prevState, request: e?.message || 'Something went wrong.'}));
            }
        }
    );

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
        <StyledSignupForm ref={formRegRef}
                          onSubmit={handleSubmit}
        >
            <input id={'emailSignup'}
                   name={'email'}
                   type='text'
                   placeholder='E-mail'
                   className={`form__inputItem ${errors.email && 'form__inputItem_error'}`}
            />
            {errors.email &&
                <label htmlFor={'emailSignup'}
                       className={'errorTextBox__text'}
                >
                    {errors.email}
                </label>
            }
            <div className='inputPasswordBox'>
                <input id={'passwordSignup'}
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
                <label htmlFor={'emailSignup'}
                       className={'errorTextBox__text'}
                >
                    {errors.password}
                </label>
            }
            <button type={'submit'}
                    className={'form_signupBtn'}
            >
                Sign Up
            </button>
            {errors.request &&
                <label htmlFor={'emailLogin'}
                       className={'errorTextBox__text'}
                >
                    {errors.request}
                </label>
            }
        </StyledSignupForm>
    );
};

export default SignupForm;