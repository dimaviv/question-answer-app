import {authSlice} from './AuthSlice';
import jwt_decode from "jwt-decode"
import {login, registration} from 'http/authAPI';

export const AuthActionCreator = {
    setIsAuth: (boolean) => dispatch => {
        dispatch(authSlice.actions.setIsAuth(boolean));
    },

    signUp: (email, password) => dispatch => {
        try {
            registration(email, password)
                .then(() => {
                    console.log('Congrats with a registration!');
                })
                .catch(error => {
                        console.error(error);
                    }
                );
        } catch (error) {
            console.error(error);
        }
    },

    logIn: (email, password, isKeepLoggedIn) => dispatch => {
        try {
            login(email, password)
                .then(data => {
                    console.log('Congrats!');
                    const user = jwt_decode(data.token)
                    if (isKeepLoggedIn) {
                        localStorage.setItem('token', data.token)
                        localStorage.setItem('auth', 'true');
                        localStorage.setItem('currentUser', JSON.stringify(user));
                    } else {
                        sessionStorage.setItem('token', data.token)
                        sessionStorage.setItem('auth', 'true');
                        sessionStorage.setItem('currentUser', JSON.stringify(user));
                    }
                    dispatch(AuthActionCreator.setIsAuth(true));
                })
                .catch(error => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    },

    logInWithOAuth: (token) => dispatch => {
        try {
            console.log('Congrats!');
            const user = jwt_decode(token)
            localStorage.setItem('token', JSON.stringify(token));
            localStorage.setItem('auth', 'true');
            localStorage.setItem('currentUser', JSON.stringify(user));
        } catch (error) {
            console.error(error)
        }
    },

    logOut: () => dispatch => {
        try {
            if (localStorage.getItem('auth')) {
                localStorage.removeItem('token');
                localStorage.removeItem('auth');
                localStorage.removeItem('currentUser');
            }
            if (sessionStorage.getItem('auth')) {
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('auth');
                sessionStorage.removeItem('currentUser');
            }
            dispatch(AuthActionCreator.setIsAuth(false));
        } catch (error) {
            console.error(error);
        }
    }
};
