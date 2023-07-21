import {ROUTE_HOME, ROUTE_LOGIN} from 'utils/consts';
import googleIcon from 'static/pages/login/google-icon.svg';
// import appleIcon from 'static/login-page/apple-icon.svg';
import facebookIcon from 'static/pages/login/facebook-icon.svg';
import SignupForm from './signup-form/SignupForm';
import {StyledSectionSignup} from './StyledSectionSignup';

const SectionSignup = () => {

    return (
        <StyledSectionSignup>
            <div className={'sectionSignup__redirectContainer'}>
                <a href={ROUTE_HOME}
                   className={'redirectContainer__text'}
                >
                    No, thanks
                </a>
            </div>
            <div className={'sectionSignup__titleContainer'}>
                <h1>
                    Welcome
                </h1>
            </div>
            <div className={'sectionSignup__signupAppsContainer'}>
                <button className={'signupAppsContainer__btn signupAppsContainer__googleAuthBtn'}>
                    <img src={googleIcon}
                         alt={'Login with Google'}
                    />
                    <p className={'item__text'}>
                        Sign up with Google
                    </p>
                </button>
                {/*<button className={'`${loginAppsContainer__btn'} ${loginAppsContainer__appleAuthBtn}`}>*/}
                {/*    <img src={appleIcon}*/}
                {/*         alt={'Login with Apple'}*/}
                {/*    />*/}
                {/*    <p className={'item__text'}>*/}
                {/*        Sign up with Apple*/}
                {/*    </p>*/}
                {/*</button>*/}
                <button className={'signupAppsContainer__btn signupAppsContainer__facebookAuthBtn'}>
                    <img src={facebookIcon}
                         alt={'Login with Facebook'}
                    />
                    <p className={'item__text'}>
                        Sign up with Facebook
                    </p>
                </button>
            </div>
            <div className={'sectionSignup__decorTextContainer'}>
                <div className={'decorTextContainer__decorTextBox'}>
                    <h2 className={'decorTextBox__text'}>
                        Or
                    </h2>
                </div>
            </div>
            <div className={'sectionSignup__loginUserContainer'}>
                <SignupForm />
            </div>
            <div className={'sectionSignup__askSignupContainer'}>
                <p className={'askSignupContainer__text'}>
                    Do you have an account? <span><a href={ROUTE_LOGIN}>Log in</a></span>
                </p>
            </div>
        </StyledSectionSignup>
    );
};

export default SectionSignup;