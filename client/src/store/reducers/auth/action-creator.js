import {authSlice} from './AuthSlice';
import {checkAuth} from 'api/authAPI';

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