import {useEffect} from 'react';
import {ROUTE_HOME, ROUTE_SIGNUP} from 'utils/consts';
import {useActions} from 'hooks/UseActions';
import {useNavigate} from 'react-router-dom';
import googleIcon from 'static/pages/login/google-icon.svg';
// import appleIcon from 'static/login-page/apple-icon.svg';
import facebookIcon from 'static/pages/login/facebook-icon.svg';
import LoginForm from './login-form/LoginForm';
import {API_USER} from 'utils/api-consts';
import {StyledSectionLogin} from './StyledSectionLogin';

const SectionLogin = () => {
        const navigate = useNavigate();
        const {setIsAuth} = useActions();

        const redirectToGoogleSSO = () => {
            const googleLoginURL = process.env.REACT_APP_API_URL + API_USER + '/login/google';
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
            const facebookLoginURL = process.env.REACT_APP_API_URL + API_USER + '/login/facebook';
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

        useEffect(() => {
            const handleStorageChange = (event) => {
                if (event.key === 'token') {
                    setIsAuth(true);
                    navigate(ROUTE_HOME);
                }
            };

            window.addEventListener('storage', handleStorageChange);

            return () => {
                window.removeEventListener('storage', handleStorageChange);
            };
            // eslint-disable-next-line
        }, []);

        return (
            <StyledSectionLogin>
                <div className={'sectionAuth__redirectContainer'}>
                    <a href={ROUTE_HOME}
                       className={'redirectContainer__text'}
                    >
                        No, thanks
                    </a>
                </div>
                <div className={'sectionAuth__titleContainer'}>
                    <h1>
                        Welcome again!
                    </h1>
                </div>
                <div className={'sectionAuth__loginAppsContainer'}>
                    <button className={'loginAppsContainer__btn loginAppsContainer__googleAuthBtn'}
                            onClick={redirectToGoogleSSO}
                    >
                        <img src={googleIcon}
                             alt={'Login with Google'}
                        />
                        <p className={'item__text'}>
                            Log in with Google
                        </p>
                    </button>
                    {/*<button className={'`${loginAppsContainer__btn'} ${loginAppsContainer__appleAuthBtn}`}>*/}
                    {/*    <img src={appleIcon}*/}
                    {/*         alt={'Login with Apple'}*/}
                    {/*    />*/}
                    {/*    <p className={'item__text'}>*/}
                    {/*        Sign in with Apple*/}
                    {/*    </p>*/}
                    {/*</button>*/}
                    <button className={'loginAppsContainer__btn loginAppsContainer__facebookAuthBtn'}
                            onClick={redirectToFacebookSSO}
                    >
                        <img src={facebookIcon}
                             alt={'Login with Facebook'}
                        />
                        <p className={'item__text'}>
                            Log in with Facebook
                        </p>
                    </button>
                </div>
                <div className={'sectionAuth__decorTextContainer'}>
                    <div className={'decorTextContainer__decorTextBox'}>
                        <h2 className={'decorTextBox__text'}>
                            Or
                        </h2>
                    </div>
                </div>
                <div className={'sectionAuth__loginUserContainer'}>
                    <LoginForm />
                </div>
                <div className={'sectionAuth__askSignUpContainer'}>
                    <p className={'askSignUpContainer__text'}>
                        Don't have an account? <span><a href={ROUTE_SIGNUP}>Sign up</a></span>
                    </p>
                </div>
            </StyledSectionLogin>
        );
    }
;

export default SectionLogin;