import React from 'react';
import styles from './NavBar.module.css';
import {ROUTE_HOME, ROUTE_LOGIN} from '../../../utils/consts';
import {useNavigate} from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

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
                        <ul className={styles.menu__list}>
                            <li onClick={() => navigate(ROUTE_LOGIN)}
                                className={styles.list__item}
                            >
                                <p className={styles.item__text}>Log in</p>
                            </li>
                            <li onClick={() => navigate(ROUTE_LOGIN)}
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
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NavBar;