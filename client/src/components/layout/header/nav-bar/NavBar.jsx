import {useSelector} from 'react-redux';
import {Link, NavLink, redirect} from 'react-router-dom';

import {ROUTE_HOME, ROUTE_LOGIN, ROUTE_SIGNUP} from 'utils/consts';
import {useActions} from 'hooks/useActions';
import {StyledNavBar} from './StyledNavBar';

const NavBar = () => {
    const {signOut} = useActions();
    const {isAuth} = useSelector(state => state.authReducer);

    const handleSignOut = async () => {
        await signOut();
        redirect(ROUTE_HOME);
    };

    return (
        <StyledNavBar>
            <div className={'nav__container'}>
                <div className={'container__leftBarContainer'}>
                    <div className={'leftBarContainer__logoBox'}>
                        <Link to={ROUTE_HOME}
                           className={'logoBox__text'}
                        >
                            ExpertMint
                        </Link>
                    </div>
                </div>
                <div className={'container__rightBarContainer'}>
                    <nav className={'rightBarContainer__menu'}>
                        {isAuth ? (
                            <ul className={'menu__list'}>
                                <li onClick={handleSignOut}
                                    className={'list__item'}
                                >
                                    <p className={'item__text'}>
                                        Log out
                                    </p>
                                </li>
                                <li className={'list__item list__itemDecor'}>
                                    <NavLink to={ROUTE_HOME}
                                             className={'item__text'}
                                    >
                                        Ask your question
                                    </NavLink>
                                </li>
                            </ul>
                        ) : (
                            <ul className={'menu__list'}>
                                <li className={'list__item'}>
                                    <NavLink to={ROUTE_LOGIN}
                                             className={'item__text'}
                                    >
                                        Log in
                                    </NavLink>
                                </li>
                                <li className={'list__item'}>
                                    <NavLink to={ROUTE_SIGNUP}
                                             className={'item__text'}
                                    >
                                        Sign up
                                    </NavLink>
                                </li>
                                <li className={'list__item list__itemDecor'}>
                                    <NavLink to={ROUTE_HOME}
                                             className={'item__text'}
                                    >
                                        Ask your question
                                    </NavLink>
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