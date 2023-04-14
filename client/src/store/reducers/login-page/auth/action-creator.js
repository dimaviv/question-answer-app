import {authSlice} from './AuthSlice';
import {login, registration} from 'http/authAPI';

export const AuthActionCreator = {
    setIsAuth: (boolean) => dispatch => {
        dispatch(authSlice.actions.setIsAuth(boolean));
    },
    setCurrentUser: (user) => dispatch => {
        dispatch(authSlice.actions.setCurrentUser(user))
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
                    dispatch(AuthActionCreator.setIsAuth(true));
                    dispatch(AuthActionCreator.setCurrentUser(data))
                    if (isKeepLoggedIn) {
                        localStorage.setItem('auth', 'true');
                        localStorage.setItem('currentUser', JSON.stringify(data));
                    } else {
                        sessionStorage.setItem('auth', 'true');
                        sessionStorage.setItem('currentUser', JSON.stringify(data));
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    },

    logOut: () => dispatch => {
        try {
            localStorage.removeItem('token');
            if (localStorage.getItem('auth')) {
                localStorage.removeItem('auth');
                localStorage.removeItem('currentUser');
            }
            if (sessionStorage.getItem('auth')) {
                sessionStorage.removeItem('auth');
                sessionStorage.removeItem('currentUser');
            }
            dispatch(AuthActionCreator.setIsAuth(false));
            dispatch(AuthActionCreator.setCurrentUser({}));
        } catch (error) {
            console.error(error);
        }
    }
};
