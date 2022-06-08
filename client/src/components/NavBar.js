import React,{useContext} from 'react';
import {Context} from  "../index"
import {NavLink, useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {LOGIN_ROUTE, MAIN_ROUTE} from "../utils/consts"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/">Main</a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/login">Login <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/registration">Registration</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/profile">Profile</a>
                    </li>
                </ul>
                {user.isAuth ?
                <Button
                    onClick={() => logOut()}
                    variant={"outline-primary"}
                    className="ml-4">Log Out</Button>
                    :
                    <Button
                        onClick={() => history.push(LOGIN_ROUTE)}
                        variant={"outline-primary"}
                        className="ml-4">Log In</Button>
                }
            </div>
        </nav>
    );
});

export default NavBar;