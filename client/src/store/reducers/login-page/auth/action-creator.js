import {authSlice} from './AuthSlice';
import {login, registration} from '../../../../http/userAPI';

export const AuthActionCreator = {
    setIsAuth: (boolean) => dispatch => {
        dispatch(authSlice.actions.setIsAuth(boolean));
    },

    signUp: (email, password) => dispatch => {
        try {
            registration(email, password)
                .then(() => {
                    console.log('Congrats with a registration!')
                })
                .catch(error => {
                        console.error(error);
                    }
                );
        } catch (error) {
            console.error(error)
        }
    },

    logIn: (email, password, isKeepLoggedIn) => dispatch => {
        try {
            login(email, password)
                .then(() => {
                    console.log('Congrats!')
                    dispatch(AuthActionCreator.setIsAuth(true));
                    if (isKeepLoggedIn) {
                        localStorage.setItem('auth', 'true');
                    } else {
                        sessionStorage.setItem('auth', 'true');
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
            }
            if (sessionStorage.getItem('auth')) {
                sessionStorage.removeItem('auth');
            }
            dispatch(AuthActionCreator.setIsAuth(false))
        } catch (error) {
            console.error(error);
        }
    }
};
