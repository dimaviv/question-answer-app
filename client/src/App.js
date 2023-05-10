import React, {useEffect} from 'react';
import Header from 'components/header/Header';
import Main from './components/main/Main';
import Footer from 'components/footer/Footer';
import {useActions} from 'hooks/UseActions';

const App = () => {
    const {setIsAuth, checkAuth} = useActions();

    useEffect(() => {
        if (localStorage.getItem('auth') || sessionStorage.getItem('auth')) {
            checkAuth();
            console.log('Success auth!');
        } else {
            console.log('You should auth!');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (localStorage.getItem('auth') || sessionStorage.getItem('auth')) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

export default App;