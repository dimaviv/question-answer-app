import React, {useEffect} from 'react';
import styles from './OAuth.module.css';
import {useActions} from '../../hooks/UseActions';

const OAuthPage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const {signInWithOAuth} = useActions();

    useEffect(() => {
        if (token) {
            const handleGetToken = async (newToken) => {
                signInWithOAuth(newToken);
            };
            handleGetToken(token)
                .then(
                    () => {
                        window.close();
                    }
                )
                .catch(
                    error => console.error(error)
                );

        }
        // eslint-disable-next-line
    }, [token]);

    return (
        <div className={styles.oauthPage}>
            Authorization was successful!
        </div>
    );
};

export default OAuthPage;