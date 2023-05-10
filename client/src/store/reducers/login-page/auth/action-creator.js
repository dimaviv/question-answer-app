import {authSlice} from './AuthSlice';
import {checkAuth, login, registration} from 'http/authAPI';

// reusable error handling function
const handleError = error => {
    console.error(error);
};

// reusable function to set storage item
const setStorageItem = (key, value, storage) => {
    storage.setItem(key, value);
};

// reusable function to remove storage item
const removeStorageItem = (key, storage) => {
    if (storage.getItem(key)) {
        storage.removeItem(key);
    }
};

export const AuthActionCreator = {
    setIsAuth: boolean => dispatch => {
        dispatch(authSlice.actions.setIsAuth(boolean));
    },

    signUp: (email, password) => dispatch => {
        try {
            registration(email, password)
                .then(
                    () => {
                        console.log('Congrats with a registration!');
                    }
                )
                .catch(
                    error => handleError(error)
                );
        } catch (error) {
            handleError(error);
        }
    },

    signIn: (email, password, isKeepLoggedIn) => dispatch => {
        try {
            login(email, password)
                .then(
                    data => {
                        console.log('Congrats!');
                        const storage = isKeepLoggedIn ? localStorage : sessionStorage;
                        setStorageItem('token', data.token, storage);
                        setStorageItem('auth', 'true', storage);
                        dispatch(AuthActionCreator.setIsAuth(true));
                    }
                )
                .catch(
                    error => handleError(error)
                );
        } catch (error) {
            handleError(error);
        }
    },

    signInWithOAuth: token => dispatch => {
        try {
            console.log('Congrats!');
            setStorageItem('token', token, localStorage);
            setStorageItem('auth', 'true', localStorage);
        } catch (error) {
            handleError(error);
        }
    },

    signOut: () => dispatch => {
        try {
            const storages = [localStorage, sessionStorage];
            storages.forEach(storage => {
                removeStorageItem('token', storage);
                removeStorageItem('auth', storage);
            });
            dispatch(AuthActionCreator.setIsAuth(false));
        } catch (error) {
            handleError(error);
        }
    },

    checkAuth: () => dispatch => {
        try {
            checkAuth()
                .then(
                    data => {
                        console.log('Congrats!');
                        setStorageItem('token', data.token, localStorage);
                        setStorageItem('auth', 'true', localStorage);
                        dispatch(AuthActionCreator.setIsAuth(true));
                    }
                )
                .catch(
                    error => {
                        handleError(error);
                        dispatch(AuthActionCreator.signOut());
                    }
                );
        } catch (error) {
            handleError(error);
        }
    }
};