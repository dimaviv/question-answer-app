import React from 'react';
import styles from './NavBar.module.css';
import {ROUTE_HOME, ROUTE_LOGIN, ROUTE_SIGNUP} from '../../../utils/consts';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useActions} from '../../../hooks/UseActions';

const NavBar = () => {
    const navigate = useNavigate();

    const {logOut} = useActions()
    const {isAuth} = useSelector(state => state.authReducer)

    return (
        <div className={styles.nav}>
            <div className={styles.nav__container}>
                <div className={styles.container__leftBarContainer}>
                    <div className={styles.leftBarContainer__logoBox}>
                        <a href={ROUTE_HOME}
                           className={styles.logoBox__text}
                        >
                            Logo
                        </a>
                    </div>
                </div>
                <div className={styles.container__rightBarContainer}>
                    <nav className={styles.rightBarContainer__menu}>
                        {isAuth
                            ?
                            <ul className={styles.menu__list}>
                                <li onClick={logOut}
                                    className={styles.list__item}
                                >
                                    <p className={styles.item__text}>Log out</p>
                                </li>
                                <li className={`${styles.list__item} ${styles.list__itemDecor}`}
                                    onClick={() => navigate(ROUTE_HOME)}
                                >
                                    <p className={styles.item__text}>Ask your question</p>
                                </li>
                            </ul>
                            :
                            <ul className={styles.menu__list}>
                                <li onClick={() => navigate(ROUTE_LOGIN)}
                                    className={styles.list__item}
                                >
                                    <p className={styles.item__text}>Log in</p>
                                </li>
                                <li onClick={() => navigate(ROUTE_SIGNUP)}
                                    className={styles.list__item}
                                >
                                    <p className={styles.item__text}>Sign up</p>
                                </li>
                                <li className={`${styles.list__item} ${styles.list__itemDecor}`}
                                    onClick={() => navigate(ROUTE_HOME)}
                                >
                                    <p className={styles.item__text}>Ask your question</p>
                                </li>
                            </ul>
                        }
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;