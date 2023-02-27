import React from 'react';
import classes from "./NavBar.module.css";
import {ROUTE_HOME, ROUTE_LOGIN} from "../../../utils/consts";
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()

    return (
        <div className={classes.navBar}>
            <div className={classes.contentContainer}>
                <div className={classes.logo}>
                    <a href={ROUTE_HOME} className={classes.logo__text}>Logo</a>
                </div>
                <nav>
                    <ul>
                        <li onClick={() => navigate(ROUTE_LOGIN)}><p className={classes.li__text}>Log in</p></li>
                        <li onClick={() => navigate(ROUTE_LOGIN)}><p className={classes.li__text}>Sign up</p></li>
                        <li className={classes.li__decor} onClick={() => navigate(ROUTE_HOME)}><p className={classes.li__text}>Ask your question</p></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;