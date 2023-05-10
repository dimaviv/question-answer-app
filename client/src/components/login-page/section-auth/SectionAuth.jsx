import React, {useEffect} from 'react';
import styles from './SectionAuth.module.css';
import {ROUTE_HOME, ROUTE_SIGNUP} from 'utils/consts';
import {useActions} from 'hooks/UseActions';
import {useNavigate} from 'react-router-dom';
import googleIcon from 'static/login-page/google-icon.svg';
// import appleIcon from 'static/login-page/apple-icon.svg';
import facebookIcon from 'static/login-page/facebook-icon.svg';
import LoginForm from './login-form/LoginForm';
import {API_USER} from '../../../utils/api-consts';

const SectionAuth = () => {
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
                    <button className={`${styles.loginAppsContainer__btn} ${styles.loginAppsContainer__googleAuthBtn}`}
                            onClick={redirectToGoogleSSO}
                    >
                        <img src={googleIcon}
                             alt={'Login with Google'}
                        />
                        <p className={styles.item__text}>
                            Sign in with Google
                        </p>
                    </button>
                    {/*<button className={`${styles.loginAppsContainer__btn} ${styles.loginAppsContainer__appleAuthBtn}`}>*/}
                    {/*    <img src={appleIcon}*/}
                    {/*         alt={'Login with Apple'}*/}
                    {/*    />*/}
                    {/*    <p className={styles.item__text}>*/}
                    {/*        Sign in with Apple*/}
                    {/*    </p>*/}
                    {/*</button>*/}
                    <button className={`${styles.loginAppsContainer__btn} ${styles.loginAppsContainer__facebookAuthBtn}`}
                            onClick={redirectToFacebookSSO}
                    >
                        <img src={facebookIcon}
                             alt={'Login with Facebook'}
                        />
                        <p className={styles.item__text}>
                            Sign in with Facebook
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
                    <LoginForm />
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