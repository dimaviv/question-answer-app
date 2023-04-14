import React, {useEffect} from 'react';
import Header from 'components/header/Header';
import AppRouter from 'components/AppRouter';
import Footer from 'components/footer/Footer';
import {useLocation} from 'react-router-dom';
import {useActions} from 'hooks/UseActions';

const App = () => {
    const location = useLocation();
    const {pathname} = location;

    const {setIsAuth} = useActions()

    useEffect(() => {
        if(localStorage.getItem('auth') || sessionStorage.getItem('auth')) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                pathname !== '/login' &&
                pathname !== '/signup' &&
                <Header />
            }
            <main className="main">
                <AppRouter />
            </main>
            {
                pathname !== '/login' &&
                pathname !== '/signup' &&
                <Footer />
            }
        </>
    );
};

export default App;