import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {ROUTE_HOME, ROUTE_LOGIN, ROUTE_SIGNUP} from 'utils/consts';
import {useActions} from 'hooks/UseActions';
import {StyledNavBar} from './StyledNavBar';

const NavBar = () => {
    const navigate = useNavigate();

    const {signOut} = useActions();
    const {isAuth} = useSelector(state => state.authReducer);

    const handleSignOut = () => {
        signOut();
        navigate(ROUTE_HOME);
    };

    return (
        <StyledNavBar>
            <div className={'nav__container'}>
                <div className={'container__leftBarContainer'}>
                    <div className={'leftBarContainer__logoBox'}>
                        <a href={ROUTE_HOME}
                           className={'logoBox__text'}
                        >
                            ExpertMint
                        </a>
                    </div>
                </div>
                <div className={'container__rightBarContainer'}>
                    <nav className={'rightBarContainer__menu'}>
                        {isAuth ? (
                            <ul className={'menu__list'}>
                                <li onClick={handleSignOut}
                                    className={'list__item'}
                                >
                                    <p className={'item__text'}>Log out</p>
                                </li>
                                <li className={'list__item list__itemDecor'}
                                    onClick={() => navigate(ROUTE_HOME)}
                                >
                                    <p className={'item__text'}>Ask your question</p>
                                </li>
                            </ul>
                        ) : (
                            <ul className={'menu__list'}>
                                <li onClick={() => navigate(ROUTE_LOGIN)}
                                    className={'list__item'}
                                >
                                    <p className={'item__text'}>Log in</p>
                                </li>
                                <li onClick={() => navigate(ROUTE_SIGNUP)}
                                    className={'list__item'}
                                >
                                    <p className={'item__text'}>Sign up</p>
                                </li>
                                <li className={'list__item list__itemDecor'}
                                    onClick={() => navigate(ROUTE_HOME)}
                                >
                                    <p className={'item__text'}>Ask your question</p>
                                </li>
                            </ul>
                        )}
                    </nav>
                </div>
            </div>
        </StyledNavBar>
    );
};

export default NavBar;