import {useEffect} from 'react';

import {useActions} from 'hooks/UseActions';
import OAuth from 'components/screens/oauth/OAuth';

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
        <OAuth />
    );
};

export default OAuthPage;